import 'dart:async';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_background_service/flutter_background_service.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:geolocator/geolocator.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../models/location_entry.dart';
import 'location_api_service.dart';

const String _notificationChannelId = 'delivery_tracker_foreground';
const int _notificationId = 888;

/// Initializes and configures the background service for location tracking.
Future<void> initializeBackgroundService() async {
  final service = FlutterBackgroundService();

  // Create notification channel for Android foreground service
  const AndroidNotificationChannel channel = AndroidNotificationChannel(
    _notificationChannelId,
    'Delivery Tracker Location Service',
    description: 'This notification keeps location tracking active.',
    importance: Importance.high,
    playSound: false,
    enableVibration: false,
    showBadge: true,
  );

  final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
      FlutterLocalNotificationsPlugin();

  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
          AndroidFlutterLocalNotificationsPlugin>()
      ?.createNotificationChannel(channel);

  await service.configure(
    androidConfiguration: AndroidConfiguration(
      onStart: onStart,
      autoStart: false,
      isForegroundMode: true,
      notificationChannelId: _notificationChannelId,
      initialNotificationTitle: 'Delivery Tracker',
      initialNotificationContent: 'Preparing location tracking...',
      foregroundServiceNotificationId: _notificationId,
      foregroundServiceTypes: [AndroidForegroundType.location],
    ),
    // iOS not needed for this Android-only app, but required by API
    iosConfiguration: IosConfiguration(
      autoStart: false,
      onForeground: onStart,
    ),
  );
}

/// Entry point for the background isolate.
/// This runs in a separate isolate from the main app.
@pragma('vm:entry-point')
void onStart(ServiceInstance service) async {
  // Ensure Flutter bindings are initialized in the background isolate
  DartPluginRegistrant.ensureInitialized();
  WidgetsFlutterBinding.ensureInitialized();

  final LocationApiService apiService = LocationApiService();
  Timer? locationTimer;
  StreamSubscription<Position>? positionStream;

  if (service is AndroidServiceInstance) {
    // Update foreground notification
    service.setForegroundNotificationInfo(
      title: 'Delivery Tracker',
      content: 'Tracking your delivery location...',
    );
  }

  // Listen for stop command from the UI
  service.on('stopService').listen((event) {
    positionStream?.cancel();
    locationTimer?.cancel();
    service.stopSelf();
  });

  // Listen for UI requesting current data
  service.on('requestUpdate').listen((event) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.reload();
  });

  // Configure location settings for high accuracy continuous tracking
  final LocationSettings locationSettings = AndroidSettings(
    accuracy: LocationAccuracy.high,
    distanceFilter: 5, // minimum 5 meters between updates
    intervalDuration: Duration(seconds: 10),
    foregroundNotificationConfig: ForegroundNotificationConfig(
      notificationTitle: 'Delivery Tracker',
      notificationText: 'Tracking location in background',
      notificationChannelName: 'Delivery Tracker Location Service',
      setOngoing: true,
      enableWakeLock: true,
    ),
  );

  // Start continuous position stream
  positionStream = Geolocator.getPositionStream(
    locationSettings: locationSettings,
  ).listen(
    (Position position) async {
      final locationData = {
        'latitude': position.latitude,
        'longitude': position.longitude,
        'accuracy': position.accuracy,
        'speed': position.speed,
        'timestamp': position.timestamp.toIso8601String(),
      };

      // Send location to the UI via the service communication channel
      service.invoke('locationUpdate', locationData);

      // Update foreground notification with latest location
      if (service is AndroidServiceInstance) {
        service.setForegroundNotificationInfo(
          title: 'Delivery Tracker - Active',
          content:
              'Lat: ${position.latitude.toStringAsFixed(5)}, '
              'Lng: ${position.longitude.toStringAsFixed(5)}',
        );
      }

      // Send to backend via Dio POST
      try {
        final entry = LocationEntry(
          latitude: position.latitude,
          longitude: position.longitude,
          accuracy: position.accuracy,
          speed: position.speed,
          timestamp: position.timestamp,
        );
        await apiService.sendLocation(entry);
        service.invoke('locationSent', {'timestamp': position.timestamp.toIso8601String()});
      } catch (e) {
        debugPrint('Background: Failed to send location: $e');
        service.invoke('locationSendFailed', {
          'timestamp': position.timestamp.toIso8601String(),
          'error': e.toString(),
        });
      }
    },
    onError: (error) {
      debugPrint('Background location stream error: $error');
      // Attempt to recover by restarting the stream after a delay
      Future.delayed(const Duration(seconds: 5), () {
        service.invoke('locationError', {'error': error.toString()});
      });
    },
  );

  // Periodic heartbeat to keep service alive and verify it's running.
  // Also serves as a fallback location fetch if the stream stalls.
  locationTimer = Timer.periodic(const Duration(seconds: 30), (timer) async {
    try {
      final position = await Geolocator.getCurrentPosition(
        locationSettings: const LocationSettings(
          accuracy: LocationAccuracy.high,
          timeLimit: Duration(seconds: 10),
        ),
      );

      final locationData = {
        'latitude': position.latitude,
        'longitude': position.longitude,
        'accuracy': position.accuracy,
        'speed': position.speed,
        'timestamp': position.timestamp.toIso8601String(),
        'source': 'heartbeat',
      };

      service.invoke('locationUpdate', locationData);

      if (service is AndroidServiceInstance) {
        service.setForegroundNotificationInfo(
          title: 'Delivery Tracker - Active',
          content:
              'Lat: ${position.latitude.toStringAsFixed(5)}, '
              'Lng: ${position.longitude.toStringAsFixed(5)}',
        );
      }
    } catch (e) {
      debugPrint('Heartbeat location fetch failed: $e');
    }
  });
}

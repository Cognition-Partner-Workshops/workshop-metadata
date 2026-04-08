import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:disable_battery_optimization/disable_battery_optimization.dart';

/// Handles all permission requests needed for uninterrupted background location tracking.
class PermissionService {
  /// Request all necessary permissions for background location tracking.
  /// Returns true if all critical permissions are granted.
  static Future<bool> requestAllPermissions(BuildContext context) async {
    // 1. Check if location services are enabled
    final bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      if (context.mounted) {
        await _showDialog(
          context,
          'Location Services Disabled',
          'Please enable location services to use delivery tracking.',
        );
      }
      await Geolocator.openLocationSettings();
      return false;
    }

    // 2. Request location permission (fine location)
    PermissionStatus locationStatus = await Permission.location.status;
    if (locationStatus.isDenied) {
      locationStatus = await Permission.location.request();
    }
    if (locationStatus.isPermanentlyDenied) {
      if (context.mounted) {
        await _showDialog(
          context,
          'Location Permission Required',
          'Location permission is permanently denied. '
              'Please enable it in app settings.',
        );
      }
      await openAppSettings();
      return false;
    }
    if (!locationStatus.isGranted) {
      return false;
    }

    // 3. Request background location permission (critical for delivery tracking)
    PermissionStatus bgLocationStatus =
        await Permission.locationAlways.status;
    if (bgLocationStatus.isDenied) {
      if (context.mounted) {
        await _showDialog(
          context,
          'Background Location Required',
          'For uninterrupted delivery tracking, please select '
              '"Allow all the time" on the next permission dialog.',
        );
      }
      bgLocationStatus = await Permission.locationAlways.request();
    }
    if (bgLocationStatus.isPermanentlyDenied) {
      if (context.mounted) {
        await _showDialog(
          context,
          'Background Location Required',
          'Background location is permanently denied. '
              'Please go to Settings > Apps > Delivery Tracker > Permissions > '
              'Location and select "Allow all the time".',
        );
      }
      await openAppSettings();
      return false;
    }
    if (!bgLocationStatus.isGranted) {
      return false;
    }

    // 4. Request notification permission (Android 13+)
    final notificationStatus = await Permission.notification.request();
    if (!notificationStatus.isGranted) {
      // Non-critical, but warn user the foreground notification won't show
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Notification permission denied. '
              'Service will still run but without a visible notification.',
            ),
          ),
        );
      }
    }

    // 5. Request battery optimization exemption
    if (context.mounted) {
      await _requestBatteryOptimizationExemption(context);
    }

    return true;
  }

  /// Request the system to disable battery optimization for this app.
  /// This is critical for long-running background location tracking.
  static Future<void> _requestBatteryOptimizationExemption(
    BuildContext context,
  ) async {
    try {
      final bool? isBatteryOptimizationDisabled =
          await DisableBatteryOptimization.isBatteryOptimizationDisabled;

      if (isBatteryOptimizationDisabled == false) {
        if (context.mounted) {
          await _showDialog(
            context,
            'Battery Optimization',
            'For reliable delivery tracking, please disable battery '
                'optimization for this app on the next screen. '
                'This ensures location tracking works even when your '
                'phone is idle or in power-saving mode.',
          );
        }
        await DisableBatteryOptimization
            .showDisableBatteryOptimizationSettings();
      }
    } catch (e) {
      debugPrint('Battery optimization check failed: $e');
    }
  }

  /// Check if all required permissions are currently granted.
  static Future<bool> hasAllPermissions() async {
    final locationEnabled = await Geolocator.isLocationServiceEnabled();
    if (!locationEnabled) return false;

    final locationStatus = await Permission.location.status;
    if (!locationStatus.isGranted) return false;

    final bgLocationStatus = await Permission.locationAlways.status;
    if (!bgLocationStatus.isGranted) return false;

    return true;
  }

  static Future<void> _showDialog(
    BuildContext context,
    String title,
    String message,
  ) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext ctx) {
        return AlertDialog(
          title: Text(title),
          content: Text(message),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(ctx).pop(),
              child: const Text('OK'),
            ),
          ],
        );
      },
    );
  }
}

import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_background_service/flutter_background_service.dart';
import 'package:intl/intl.dart';
import 'package:wakelock_plus/wakelock_plus.dart';

import '../models/location_entry.dart';
import '../services/permission_service.dart';

class TrackingScreen extends StatefulWidget {
  const TrackingScreen({super.key});

  @override
  State<TrackingScreen> createState() => _TrackingScreenState();
}

class _TrackingScreenState extends State<TrackingScreen>
    with WidgetsBindingObserver {
  bool _isTracking = false;
  final List<LocationEntry> _locationEntries = [];
  final ScrollController _scrollController = ScrollController();
  StreamSubscription<Map<String, dynamic>?>? _locationSubscription;
  StreamSubscription<Map<String, dynamic>?>? _sentSubscription;
  StreamSubscription<Map<String, dynamic>?>? _failedSubscription;

  final DateFormat _timeFormat = DateFormat('HH:mm:ss');
  final DateFormat _dateTimeFormat = DateFormat('yyyy-MM-dd HH:mm:ss');

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _checkIfAlreadyRunning();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _locationSubscription?.cancel();
    _sentSubscription?.cancel();
    _failedSubscription?.cancel();
    _scrollController.dispose();
    super.dispose();
  }

  /// When the app lifecycle changes, handle accordingly.
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
    if (state == AppLifecycleState.resumed && _isTracking) {
      // Re-listen to the service when app comes back to foreground
      _listenToService();
    }
  }

  /// Check if the background service is already running (e.g. after app restart).
  Future<void> _checkIfAlreadyRunning() async {
    final service = FlutterBackgroundService();
    final isRunning = await service.isRunning();
    if (isRunning) {
      setState(() => _isTracking = true);
      _listenToService();
    }
  }

  /// Start the background location tracking service.
  Future<void> _startTracking() async {
    // Request all permissions first
    if (!mounted) return;
    final hasPermissions = await PermissionService.requestAllPermissions(
      context,
    );
    if (!hasPermissions) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Required permissions not granted. '
              'Cannot start tracking.',
            ),
            backgroundColor: Colors.red,
          ),
        );
      }
      return;
    }

    // Enable wakelock to prevent screen timeout during active use
    await WakelockPlus.enable();

    // Start the background service
    final service = FlutterBackgroundService();
    await service.startService();

    setState(() {
      _isTracking = true;
      _locationEntries.clear();
    });

    _listenToService();

    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Location tracking started'),
          backgroundColor: Colors.green,
          duration: Duration(seconds: 2),
        ),
      );
    }
  }

  /// Stop the background location tracking service.
  Future<void> _stopTracking() async {
    final service = FlutterBackgroundService();
    service.invoke('stopService');

    // Disable wakelock
    await WakelockPlus.disable();

    _locationSubscription?.cancel();
    _sentSubscription?.cancel();
    _failedSubscription?.cancel();

    setState(() => _isTracking = false);

    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Location tracking stopped'),
          backgroundColor: Colors.orange,
          duration: Duration(seconds: 2),
        ),
      );
    }
  }

  /// Listen to location updates from the background service.
  void _listenToService() {
    final service = FlutterBackgroundService();

    // Cancel existing subscriptions before re-subscribing
    _locationSubscription?.cancel();
    _sentSubscription?.cancel();
    _failedSubscription?.cancel();

    _locationSubscription = service.on('locationUpdate').listen((data) {
      if (data == null) return;

      final entry = LocationEntry(
        latitude: (data['latitude'] as num).toDouble(),
        longitude: (data['longitude'] as num).toDouble(),
        accuracy: (data['accuracy'] as num).toDouble(),
        speed: (data['speed'] as num).toDouble(),
        timestamp: DateTime.parse(data['timestamp'] as String),
      );

      setState(() {
        // Avoid duplicate entries (heartbeat might duplicate stream entries)
        final isDuplicate = _locationEntries.any(
          (e) =>
              e.timestamp.difference(entry.timestamp).inSeconds.abs() < 3 &&
              (e.latitude - entry.latitude).abs() < 0.00001 &&
              (e.longitude - entry.longitude).abs() < 0.00001,
        );

        if (!isDuplicate) {
          _locationEntries.add(entry);
        }
      });

      // Auto-scroll to the latest entry
      _scrollToBottom();
    });

    _sentSubscription = service.on('locationSent').listen((data) {
      if (data == null) return;
      final timestamp = DateTime.parse(data['timestamp'] as String);

      setState(() {
        for (int i = _locationEntries.length - 1; i >= 0; i--) {
          if (_locationEntries[i].timestamp.difference(timestamp).inSeconds.abs() < 3) {
            _locationEntries[i] = _locationEntries[i].copyWith(sentToServer: true);
            break;
          }
        }
      });
    });

    _failedSubscription = service.on('locationSendFailed').listen((data) {
      // Location send failures are logged but don't interrupt tracking
      if (data != null) {
        debugPrint('Location send failed: ${data['error']}');
      }
    });
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Delivery Tracker'),
        centerTitle: true,
        backgroundColor: _isTracking ? Colors.green.shade700 : null,
        foregroundColor: _isTracking ? Colors.white : null,
        actions: [
          if (_isTracking)
            Padding(
              padding: const EdgeInsets.only(right: 12),
              child: Center(
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8,
                    vertical: 4,
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white24,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: const BoxDecoration(
                          color: Colors.redAccent,
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 6),
                      Text(
                        'LIVE',
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                          color: Colors.white.withValues(alpha: 0.9),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
      body: Column(
        children: [
          // Status card
          _buildStatusCard(),

          // Location list
          Expanded(
            child: _locationEntries.isEmpty
                ? _buildEmptyState()
                : _buildLocationList(),
          ),

          // Start/Stop button
          _buildControlButton(),
        ],
      ),
    );
  }

  Widget _buildStatusCard() {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.all(12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: _isTracking ? Colors.green.shade50 : Colors.grey.shade100,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: _isTracking ? Colors.green.shade200 : Colors.grey.shade300,
        ),
      ),
      child: Column(
        children: [
          Icon(
            _isTracking ? Icons.location_on : Icons.location_off,
            size: 32,
            color: _isTracking ? Colors.green.shade700 : Colors.grey,
          ),
          const SizedBox(height: 8),
          Text(
            _isTracking ? 'Tracking Active' : 'Tracking Stopped',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: _isTracking ? Colors.green.shade700 : Colors.grey.shade700,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            _isTracking
                ? '${_locationEntries.length} locations recorded'
                : 'Press START to begin delivery tracking',
            style: TextStyle(
              fontSize: 14,
              color: Colors.grey.shade600,
            ),
          ),
          if (_locationEntries.isNotEmpty) ...[
            const SizedBox(height: 8),
            Text(
              'Last update: ${_dateTimeFormat.format(_locationEntries.last.timestamp.toLocal())}',
              style: TextStyle(
                fontSize: 12,
                color: Colors.grey.shade500,
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.delivery_dining,
            size: 80,
            color: Colors.grey.shade300,
          ),
          const SizedBox(height: 16),
          Text(
            _isTracking
                ? 'Waiting for first location...'
                : 'No locations recorded yet',
            style: TextStyle(
              fontSize: 16,
              color: Colors.grey.shade500,
            ),
          ),
          if (_isTracking) ...[
            const SizedBox(height: 12),
            const SizedBox(
              width: 24,
              height: 24,
              child: CircularProgressIndicator(strokeWidth: 2),
            ),
          ],
        ],
      ),
    );
  }

  Widget _buildLocationList() {
    return ListView.builder(
      controller: _scrollController,
      padding: const EdgeInsets.symmetric(horizontal: 12),
      itemCount: _locationEntries.length,
      itemBuilder: (context, index) {
        final entry = _locationEntries[index];
        final isLatest = index == _locationEntries.length - 1;

        return Card(
          elevation: isLatest ? 3 : 1,
          margin: const EdgeInsets.only(bottom: 6),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
            side: isLatest
                ? BorderSide(color: Colors.green.shade300, width: 1.5)
                : BorderSide.none,
          ),
          child: ListTile(
            dense: true,
            leading: CircleAvatar(
              radius: 18,
              backgroundColor:
                  isLatest ? Colors.green.shade100 : Colors.blue.shade50,
              child: Text(
                '${index + 1}',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                  color:
                      isLatest ? Colors.green.shade700 : Colors.blue.shade700,
                ),
              ),
            ),
            title: Text(
              '${entry.latitude.toStringAsFixed(6)}, '
              '${entry.longitude.toStringAsFixed(6)}',
              style: const TextStyle(
                fontFamily: 'monospace',
                fontSize: 13,
                fontWeight: FontWeight.w600,
              ),
            ),
            subtitle: Text(
              '${_timeFormat.format(entry.timestamp.toLocal())}  '
              '| Accuracy: ${entry.accuracy.toStringAsFixed(1)}m  '
              '| Speed: ${(entry.speed * 3.6).toStringAsFixed(1)} km/h',
              style: TextStyle(
                fontSize: 11,
                color: Colors.grey.shade600,
              ),
            ),
            trailing: Icon(
              entry.sentToServer
                  ? Icons.cloud_done
                  : Icons.cloud_upload_outlined,
              size: 20,
              color: entry.sentToServer ? Colors.green : Colors.grey,
            ),
          ),
        );
      },
    );
  }

  Widget _buildControlButton() {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: SizedBox(
          width: double.infinity,
          height: 56,
          child: ElevatedButton(
            onPressed: _isTracking ? _stopTracking : _startTracking,
            style: ElevatedButton.styleFrom(
              backgroundColor:
                  _isTracking ? Colors.red.shade600 : Colors.green.shade600,
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
              ),
              elevation: 4,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(
                  _isTracking ? Icons.stop_circle : Icons.play_circle,
                  size: 28,
                ),
                const SizedBox(width: 12),
                Text(
                  _isTracking ? 'STOP TRACKING' : 'START TRACKING',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1.2,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

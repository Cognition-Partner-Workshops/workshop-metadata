import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import '../models/location_entry.dart';

/// Service to send location data to backend via Dio POST.
/// Configure [baseUrl] to point to your delivery backend.
class LocationApiService {
  static const String _defaultBaseUrl = 'https://your-api-server.com/api';
  static const String _locationEndpoint = '/location';

  late final Dio _dio;

  LocationApiService({String? baseUrl}) {
    _dio = Dio(
      BaseOptions(
        baseUrl: baseUrl ?? _defaultBaseUrl,
        connectTimeout: const Duration(seconds: 15),
        receiveTimeout: const Duration(seconds: 15),
        sendTimeout: const Duration(seconds: 15),
        headers: {
          'Content-Type': 'application/json',
        },
      ),
    );

    _dio.interceptors.add(
      InterceptorsWrapper(
        onError: (error, handler) {
          // Log errors but don't crash — location will be retried
          debugPrint('LocationApiService error: ${error.message}');
          handler.next(error);
        },
      ),
    );
  }

  /// Post a single location entry to the server.
  /// Returns true if sent successfully.
  Future<bool> sendLocation(LocationEntry entry) async {
    try {
      final response = await _dio.post(
        _locationEndpoint,
        data: entry.toJson(),
      );
      return response.statusCode == 200 || response.statusCode == 201;
    } on DioException catch (e) {
      debugPrint('Failed to send location: ${e.message}');
      return false;
    }
  }

  /// Post a batch of location entries to the server.
  /// Returns true if sent successfully.
  Future<bool> sendLocationBatch(List<LocationEntry> entries) async {
    if (entries.isEmpty) return true;
    try {
      final response = await _dio.post(
        '$_locationEndpoint/batch',
        data: {
          'locations': entries.map((e) => e.toJson()).toList(),
        },
      );
      return response.statusCode == 200 || response.statusCode == 201;
    } on DioException catch (e) {
      debugPrint('Failed to send location batch: ${e.message}');
      return false;
    }
  }
}

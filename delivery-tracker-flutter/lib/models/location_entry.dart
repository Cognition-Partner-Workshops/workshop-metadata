class LocationEntry {
  final double latitude;
  final double longitude;
  final double accuracy;
  final double speed;
  final DateTime timestamp;
  final bool sentToServer;

  LocationEntry({
    required this.latitude,
    required this.longitude,
    required this.accuracy,
    required this.speed,
    required this.timestamp,
    this.sentToServer = false,
  });

  LocationEntry copyWith({bool? sentToServer}) {
    return LocationEntry(
      latitude: latitude,
      longitude: longitude,
      accuracy: accuracy,
      speed: speed,
      timestamp: timestamp,
      sentToServer: sentToServer ?? this.sentToServer,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'latitude': latitude,
      'longitude': longitude,
      'accuracy': accuracy,
      'speed': speed,
      'timestamp': timestamp.toIso8601String(),
    };
  }

  factory LocationEntry.fromJson(Map<String, dynamic> json) {
    return LocationEntry(
      latitude: (json['latitude'] as num).toDouble(),
      longitude: (json['longitude'] as num).toDouble(),
      accuracy: (json['accuracy'] as num).toDouble(),
      speed: (json['speed'] as num).toDouble(),
      timestamp: DateTime.parse(json['timestamp'] as String),
      sentToServer: json['sentToServer'] as bool? ?? false,
    );
  }
}

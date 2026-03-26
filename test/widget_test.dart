import 'package:flutter_test/flutter_test.dart';

import 'package:delivery_tracker/main.dart';

void main() {
  testWidgets('App builds and shows tracking screen', (WidgetTester tester) async {
    await tester.pumpWidget(const DeliveryTrackerApp());
    await tester.pump();

    expect(find.text('Delivery Tracker'), findsOneWidget);
    expect(find.text('START TRACKING'), findsOneWidget);
  });
}

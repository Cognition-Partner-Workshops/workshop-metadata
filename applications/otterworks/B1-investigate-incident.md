# Lab: Investigate Production Incident

## Objective

Trigger a chaos scenario in the OtterWorks platform and investigate the resulting incident across three escalation levels: manual investigation with Grafana/Jaeger, one-click Devin session from the Incidents page, and fully automatic alert-driven Devin investigation.

> **Branch:** Participants should be on the `Harness` branch to access the incident response and event-driven investigation functionality.

## What's Wrong

OtterWorks has a chaos engineering framework that injects failures into production-like services. When chaos is active, services exhibit real failure modes: 500 errors on search suggestions, file upload rejections, notification processing failures, or document-service latency spikes. The admin dashboard has "Trigger Chaos" buttons for each scenario.

The available chaos scenarios are:
1. **Search Suggest 500** — MeiliSearch ranking score enrichment path triggers a KeyError
2. **File Upload Failure** — File-service rejects uploads with a 500
3. **Notification Processing Failure** — Strict JSON schema parser rejects messages with integer timestamps
4. **Document Service Slow Queries** — 3-5 second latency injected before every database query

## Three Investigation Flows

This lab supports three ways to investigate incidents, from fully manual to fully automatic. Try all three to see the progression.

### Flow 1: Manual Investigation (Current Workflow)

1. Trigger a chaos scenario via the admin dashboard's "Trigger Chaos" buttons
2. Open Grafana dashboards to see error rate spikes or latency increases
3. Use Jaeger traces (or read the service code) to pinpoint the root cause
4. Manually open a Devin session and paste an investigation prompt describing the symptoms
5. Watch Devin investigate, identify the root cause, and open a fix PR

This is the baseline workflow — you see the symptoms, interpret them, and ask Devin to investigate.

### Flow 2: One-Click from Incidents Page

1. Trigger a chaos scenario via the admin dashboard
2. Navigate to the **Incidents** page in the admin dashboard
3. Within 1-2 minutes, Grafana detects the metric anomaly and fires an alert rule
4. The alert routes via a webhook contact point to the admin-service `/api/v1/admin/alerts/ingest` endpoint, which auto-creates an incident
5. See the auto-created incident appear on the Incidents page with severity, affected service, and description
6. Click **"Investigate with Devin"** on the incident — this calls `DevinSessionService` to create a Devin API session automatically with full context (title, severity, affected service, architecture context)
7. Follow the session link to watch Devin work

This flow reduces human effort to a single click — the system detects the problem and creates the incident for you.

### Flow 3: Fully Automatic (No Human Needed)

When chaos is triggered, the entire pipeline runs without human intervention:

1. Chaos injection causes a service failure (errors, latency, etc.)
2. Prometheus scrapes the failing metrics
3. Grafana alert rules (`SearchSuggestHighErrorRate`, `FileUploadHighErrorRate`, `NotificationConsumerProcessingErrors`, `DocumentServiceHighLatency`) detect the anomaly
4. Grafana fires the alert and routes it via the webhook contact point to admin-service
5. The `/api/v1/admin/alerts/ingest` endpoint auto-creates an Incident record
6. `DevinSessionService` automatically creates a Devin API session with full incident context
7. Devin investigates the incident and opens a fix PR — zero human intervention after the initial chaos trigger

This is the "Devin as an always-on on-call engineer" pattern.

## Where to Look

- `frontend/admin-dashboard/` — Admin UI with chaos trigger buttons
- `frontend/admin-dashboard/src/app/pages/incidents/` — Incidents page with chaos triggers and "Investigate with Devin" button
- `services/admin-service/app/services/devin_session_service.rb` — Devin API integration service
- `services/admin-service/app/controllers/api/v1/admin/incidents_controller.rb` — Incidents API
- `services/admin-service/app/controllers/api/v1/admin/chaos_controller.rb` — Chaos trigger/reset API
- `services/admin-service/app/services/chaos_probe_service.rb` — Synthetic traffic for metrics
- `observability/grafana/provisioning/alerting/alert-rules.yml` — Grafana alert rules for chaos scenarios
- `observability/grafana/provisioning/alerting/contact-points.yml` — Webhook contact point configuration
- `observability/grafana/dashboards/chaos-scenarios.json` — Grafana dashboard for chaos metrics
- `observability/grafana/dashboards/incident-overview.json` — Cross-service incident overview
- `docs/runbooks/` — Skeleton runbooks for each scenario (investigation steps are incomplete)

## What Done Looks Like

- [ ] Triggered at least one chaos scenario via the admin dashboard
- [ ] Used Grafana dashboards to identify which service is affected and what the symptom is (error spike vs. latency spike)
- [ ] Used Jaeger traces (or asked Devin to read the service code) to identify the root cause
- [ ] Can explain the root cause: what code path fails, why, and how to fix it
- [ ] Optionally: fixed the root cause and verified the service recovers after chaos reset
- [ ] Observed Grafana alert fire automatically after triggering chaos (~1-2 min)
- [ ] Saw an incident auto-created on the Incidents page from the Grafana alert
- [ ] Used the "Investigate with Devin" button (or observed DevinSessionService auto-trigger) to create a Devin API session
- [ ] Watched Devin investigate the incident and open a fix PR
- [ ] Can explain the full event-driven pipeline: chaos → metrics → Grafana alert → webhook → incident → Devin session

## Hints (for facilitators — reveal progressively if participants are stuck)

### Hint 1 — Getting Started
Start by triggering the "Search Suggest 500" chaos scenario from the admin dashboard. Then check the Grafana "Chaos Scenarios" dashboard to see the error rate spike.

### Hint 2 — Specific Direction
Ask Devin to read `services/search-service/app/api/search.py` and find the code path that runs when `chaos:search-service:suggest_500` is active. The bug is a missing key access on MeiliSearch results.

### Hint 3 — Approach
Ask Devin: "Read the chaos-related code in `services/search-service/app/api/search.py`, specifically the `suggest()` function. What happens when the chaos flag is active? Identify the bug and fix it."

### Hint 4 — Event-Driven Flow
If you want to see the fully automatic flow, trigger chaos and then watch the Incidents page. Within 1-2 minutes, Grafana should fire an alert, the admin-service will auto-create an incident, and DevinSessionService will create a Devin API session. Check the admin-service logs to see the Devin API call.

## Time Budget
~45-60 minutes per chaos scenario investigation.

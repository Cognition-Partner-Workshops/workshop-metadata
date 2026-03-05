# E2 — Observability

## Challenge

Improve logging or observability capabilities of a system to make it easier to find root causes of performance degradation and service errors.

## Options

- **Repository:** Any repo in the org (participant's choice)
- **Recommended:**
  - [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) — Simple app, easy to add structured logging
  - [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) — Spring Boot with Actuator potential
  - [cal.com](https://github.com/Cognition-Partner-Workshops/cal.com) — Complex app with many observability opportunities

## Task

Improve logging or observability capabilities so it's easier to find root causes. Consider:
- Structured JSON logging (replace console.log/System.out with structured loggers)
- Health check endpoints
- Metrics endpoints (Prometheus format)
- Distributed tracing (OpenTelemetry)
- Error tracking integration (Sentry)
- Request/response logging middleware
- Performance monitoring

## Sample Prompt

> Add structured JSON logging to app_timesheet-client: replace all console.log statements with Winston logger, add request/response logging middleware with correlation IDs, add a /metrics endpoint with basic request count and latency histograms. Open a PR.

## What Participants Will Learn

- How Devin implements observability patterns across a codebase
- Structured logging best practices
- Metrics and tracing instrumentation

## Devin Features Exercised

- Cross-cutting concern implementation
- Library selection and configuration
- Multi-file refactoring
- PR creation

## Difficulty

Intermediate

## Estimated Time

45 minutes

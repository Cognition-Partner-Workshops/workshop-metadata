# C5 — Cloud Native Refactor

## Challenge

Refactor an application or its infrastructure to operate in a more cloud-native fashion (reliability, cost, performance).

## Options

- **Repository:** Any repo in the org (participant's choice)
- **Recommended:**
  - [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) — SQLite → managed DB, single container → orchestrated
  - [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) — Add health checks, graceful shutdown, config externalization
  - [fineract](https://github.com/Cognition-Partner-Workshops/fineract) — Large Java app, many cloud-native improvement opportunities

## Task

Refactor the application or infrastructure to operate in a more cloud-native fashion. Focus areas:
- **Reliability:** Health checks, circuit breakers, graceful shutdown, retry logic
- **Cost:** Right-sizing, auto-scaling configuration, spot instance compatibility
- **Performance:** Caching layers, connection pooling, async processing
- **Observability:** Structured logging, metrics endpoints, distributed tracing

## Sample Prompt

> Make [repo] more cloud-native: add a /health endpoint, externalize all configuration to environment variables, add structured JSON logging, create a Dockerfile with multi-stage build, and add a Kubernetes deployment manifest with resource limits and readiness probes. Open a PR.

## What Participants Will Learn

- How Devin applies cloud-native patterns (12-factor app principles)
- Infrastructure-as-code generation (Dockerfiles, K8s manifests)
- Configuration externalization patterns

## Devin Features Exercised

- Architecture assessment
- Infrastructure code generation
- Multi-file refactoring
- PR creation

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

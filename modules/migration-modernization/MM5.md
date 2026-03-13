# MM5

## Repositories

- [app_timesheet](#app_timesheet)
- [uc-framework-upgrade-monolith-to-microservices](#uc-framework-upgrade-monolith-to-microservices)

---

## Challenge

Refactor an application or its infrastructure to operate in a more cloud-native fashion. This covers reliability (health checks, graceful shutdown), cost (right-sizing, auto-scaling), performance (caching, connection pooling), and observability (structured logging, metrics, tracing).

## Target Outcomes

- Health check and readiness endpoints added
- Configuration externalized to environment variables
- Dockerfile with multi-stage build created
- Kubernetes deployment manifest with resource limits and probes
- PR with cloud-native improvements

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

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Node.js/Express application with SQLite — candidate for database externalization, container orchestration, and health check improvements.

### Step 1: Get Started Fast

> Make app_timesheet more cloud-native: add a /health endpoint, externalize all configuration to environment variables, add structured JSON logging with Winston, create a Dockerfile with multi-stage build, and add a Kubernetes deployment manifest with resource limits and readiness probes. Open a PR.

### Step 2: Level Up with AskDevin

- *"What 12-factor app violations exist in app_timesheet? Which ones are highest priority?"*
- *"What would it take to migrate from SQLite to a managed database (PostgreSQL) for production readiness?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the application's configuration and deployment model. Identify which hardcoded values need to be externalized for cloud deployment.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are all configuration values properly externalized? Is the Dockerfile optimized for layer caching?
- **Leave a comment** asking Devin to add a Helm chart or Kustomize overlay for the Kubernetes manifests

---

## <a id="uc-framework-upgrade-monolith-to-microservices"></a>uc-framework-upgrade-monolith-to-microservices

**Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)

Spring Boot monolith with Spring Boot Actuator potential — add health checks, graceful shutdown, config externalization, and container readiness.

### Step 1: Get Started Fast

> Make uc-framework-upgrade-monolith-to-microservices more cloud-native: enable Spring Boot Actuator with /health and /info endpoints, externalize database configuration to environment variables, add graceful shutdown configuration, create a Dockerfile with multi-stage build, and add a Kubernetes deployment manifest with liveness and readiness probes pointing to Actuator. Open a PR.

### Step 2: Level Up with AskDevin

- *"Which Spring Boot Actuator endpoints should be exposed for production monitoring? Which should be restricted?"*
- *"What's the best way to handle the SQLite database in a containerized environment — should we migrate to PostgreSQL?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the application's configuration and dependencies. Identify which components are not cloud-ready (e.g., file-based database, hardcoded paths).

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are Actuator endpoints properly secured? Is the K8s manifest production-appropriate?
- **Leave a comment** asking Devin to add circuit breaker patterns or retry logic for external service calls

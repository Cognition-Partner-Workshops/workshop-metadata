# Workshop: Platform-Conformant Microservice Decomposition

## Overview

| | |
|---|---|
| **Focus** | Monolith-to-microservices decomposition with IaC conformance on Kubernetes |
| **Duration** | 1.5-2 hours |
| **Audience** | DevOps, platform engineering, solution architects |
| **Key Modules** | [Platform-Conformant Microservice Decomposition](../../modules/cloud-infrastructure/platform-conformant-microservice-decomposition.md) |

## Workshop Narrative

Decomposing a monolith is not just about extracting code — the new service must be deployable, observable, and conformant with organizational platform standards. This workshop has Devin read four repositories simultaneously to decompose a bounded context while generating all the IaC artifacts.

## Labs

### Lab 1 — Decompose a Bounded Context into a Platform-Conformant Microservice

- **Module:** [Platform-Conformant Microservice Decomposition](../../modules/cloud-infrastructure/platform-conformant-microservice-decomposition.md)
- **Repositories:**
  - [app_dotnet-angular-monolith](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith) — .NET 8 + Angular 17 monolith (source)
  - [app_dotnet-angular-monolith-iac](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith-iac) — Helm chart, Dockerfile, ArgoCD patterns (context)
  - [platform-engineering-shared-services](https://github.com/Cognition-Partner-Workshops/platform-engineering-shared-services) — EKS cluster, namespaces, monitoring (context)
  - [app_dotnet-angular-microservices](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-microservices) — landing repo for decomposed services
- **Objective:** Extract the Inventory module into a standalone microservice conformant with an existing platform engineering standard
- **Duration:** 75 min

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

Replace `<participant>` with your name:

> Decompose the Inventory module from `app_dotnet-angular-monolith` into a standalone microservice. Work on branch `workshop-<participant>` in both repos. Use `platform-engineering-shared-services` and `app_dotnet-angular-monolith-iac` as context for platform patterns. Deliverables: (1) New .NET 8 Web API for inventory-service, (2) Angular 17 frontend components, (3) Dockerfile, (4) Helm chart with network policy, service monitor, HPA, (5) ArgoCD manifests for dev and staging, (6) GitHub Actions CI/CD pipeline, (7) Monolith refactoring to use HTTP client. Push to `app_dotnet-angular-microservices` and create PRs.

#### Step 2: Research with Ask Devin

- *"Analyze the domain boundaries in app_dotnet-angular-monolith. Which modules have clean boundaries?"*
- *"What Kubernetes resources does a new microservice need to conform to the platform standard?"*

#### Step 3 (Optional): Read the DeepWiki

Open each repo's DeepWiki page to understand the architecture. Try extracting a different bounded context, adding OpenTelemetry tracing, or creating Grafana dashboards.

#### Step 4 (Optional): Review & Give Feedback

Review both the monolith refactoring PR and the microservices PR. Ask Devin to add circuit breaker logic, PodDisruptionBudget, or integration tests.

**Target Outcomes:** New microservice with working build, platform-conformant IaC, CI/CD pipeline, monolith refactored to HTTP client

## Repos Required

- [ ] app_dotnet-angular-monolith
- [ ] app_dotnet-angular-monolith-iac
- [ ] platform-engineering-shared-services
- [ ] app_dotnet-angular-microservices

## Key Takeaways

- **"Code extraction + IaC generation in one session"** — Devin handles both the code and the infrastructure
- **"Platform conformance by reading existing patterns"** — Devin reads the platform standard repos and generates conformant artifacts
- **"Multi-repo coordination"** — Devin works across 4 repos simultaneously

# Workshop: Platform-Conformant Microservice Decomposition (Desktop + Cloud)

**Other variants:** [Cloud only](README.md)

## Overview

| | |
|---|---|
| **Focus** | Monolith-to-microservices decomposition with IaC conformance on Kubernetes |
| **Duration** | 1.5–2 hours (75 min lab + 15 min review/discussion) |
| **Audience** | DevOps, platform engineering, solution architects |
| **Delivery Surface** | Devin Desktop + Devin Cloud |
| **Key Modules** | [Platform-Conformant Microservice Decomposition](../../modules/cloud-infrastructure/platform-conformant-microservice-decomposition.md) |

## Platform Context

This workshop uses **Devin Desktop + Devin Cloud**. You will use Desktop as your primary interface — exploring code locally, delegating tasks to Cloud, and reviewing results without leaving the editor. Cloud sessions handle the heavy autonomous work (multi-repo decomposition, IaC generation) while you monitor progress from the Agent Command Center.

> **Tip:** If you prefer the browser-only experience, see the [Cloud only variant](README.md). The lab structure and content are identical — only the workflow steps differ.

## Workshop Narrative

Decomposing a monolith is not just about extracting code — the new service must be deployable, observable, and conformant with organizational platform standards. This workshop has Devin read four repositories simultaneously to decompose a bounded context while generating all the IaC artifacts.

**What makes this workshop unique:** The extracted service must conform to organizational platform standards — namespace placement, network policies, resource quotas, monitoring integration, and GitOps deployment. This mirrors real enterprise decomposition work where "it compiles" is not enough; the service must be deployable and observable within the platform.

## Desktop + Cloud Workflow

This variant replaces the browser-based "paste prompt into the web app" pattern with the Desktop workflow:

1. **Create a Space** in Devin Desktop for this workshop — group sessions, PRs, and files in one view
2. **Explore locally** with Cascade or Devin Local for code discovery and requirement refinement
3. **Delegate to Cloud** — send implementation tasks to Devin Cloud from Desktop with one click
4. **Monitor in the Agent Command Center** — track cloud sessions on the Kanban board by status (working, waiting for review, completed)
5. **Review PRs in-editor** — one-click checkout of Devin's PRs directly in the editor, no browser switching

## Getting the Most from This Workshop

> **Devin Cloud works asynchronously on its own VM.** Once you delegate a task from Desktop, the cloud agent runs independently. Continue local exploration, review other PRs, or start additional sessions — you'll see updates in the Agent Command Center.

A few tips to maximize your hands-on time:

- **Delegate early, review later.** Send the decomposition task to Cloud first, then use Cascade or Devin Local for requirement research while Cloud works.
- **Use Cascade to refine requirements.** Run Cascade locally in Desktop to analyze the monolith's domain boundaries before delegating the extraction to Cloud — better requirements produce better output.
- **Build up Devin's knowledge as you go.** When Devin suggests a Knowledge item, accept it — this is how teams build a shared context layer that compounds over time. Knowledge is shared across local and cloud agents.
- **Review PRs with one-click checkout.** When Devin Cloud opens a PR, click it in the Agent Command Center to check out the branch in your editor instantly — no manual `git fetch`.
- **Use the Agent Command Center for parallel work.** The Kanban board shows sessions by status. During Phase 4, you can launch multiple decomposition sessions and track them from a single view.
- **Mix agents for different tasks.** Use Devin Local for fast code exploration, delegate long-running implementations to Cloud. ACP allows multiple agents to run in Desktop simultaneously.

## Table of Contents

- [Structure](#structure)
- [Repos Required](#repos-required)
- [Lab Walkthrough](#lab-walkthrough)
  - [Phase 1 — Launch the Decomposition](#phase-1--launch-the-decomposition-5-min)
  - [Phase 2 — Explore While Devin Works](#phase-2--explore-while-devin-works-25-min)
  - [Phase 3 — Review PRs and Give Feedback](#phase-3--review-prs-and-give-feedback-25-min)
  - [Phase 4 — Bonus Challenges](#phase-4--bonus-challenges-15-min)
- [Key Takeaways](#key-takeaways)

---

## Structure

A single lab with four phases:

| Time | Phase | Activity |
|------|-------|----------|
| 0:00 | **Setup** | Create a Space in Desktop, verify repos, create participant branch |
| 0:05 | **Phase 1 — Launch** | Delegate decomposition to Cloud from Desktop |
| 0:10 | **Phase 2 — Explore** | Use Cascade/Devin Local and DeepWiki while Cloud works |
| 0:35 | **Phase 3 — Review** | Review PRs in-editor, leave feedback, watch Devin iterate |
| 0:60 | **Phase 4 — Extend** | Bonus challenges (extract another service, add tracing) |
| 1:15 | **Wrap-up** | Discussion, compare results across participants |

## Repos Required

All four repos must be added via **Settings > Machine configuration > Add repository** before the lab:

- [x] [ordermanager-monolith](https://github.com/Cognition-Partner-Workshops/ordermanager-monolith) — .NET 8 + Angular 17 monolith (source)
- [x] [ordermanager-iac](https://github.com/Cognition-Partner-Workshops/ordermanager-iac) — Helm chart, Dockerfile, ArgoCD patterns (context)
- [x] [platform-engineering-shared-services](https://github.com/Cognition-Partner-Workshops/platform-engineering-shared-services) — EKS cluster, namespaces, monitoring (context)
- [x] [ordermanager-microservices](https://github.com/Cognition-Partner-Workshops/ordermanager-microservices) — landing repo for decomposed services + service-level IaC

### Branch Convention

Each participant works on a dedicated branch: **`workshop-<participant>`** (e.g., `workshop-alice`, `workshop-bob`). This prevents conflicts when multiple participants run the lab simultaneously.

### Participant Requirements

- [ ] Devin account on partner-workshops.devinenterprise.com
- [ ] Devin Desktop installed ([desktop.devin.ai](https://desktop.devin.ai))
- [ ] GitHub access to `Cognition-Partner-Workshops` org (for PR review)

---

## Lab Walkthrough

### Setup — Create a Space (2 min)

1. Open Devin Desktop
2. Create a new **Space** for this workshop (e.g., "Microservice Decomposition")
3. The Space will collect sessions, PRs, and related files as you work through the lab

### Phase 1 — Launch the Decomposition (5 min)

From your Space in Devin Desktop, delegate the following task to **Devin Cloud**. Replace `<participant>` with your name (e.g., `workshop-alice`):

```
Decompose the Inventory module from ordermanager-monolith into a standalone microservice.

Work on branch workshop-<participant> in both repos.

Use these repos as context for platform patterns and IaC standards:
- platform-engineering-shared-services — defines the platform standard (namespaces, network policies, monitoring, ArgoCD)
- ordermanager-iac — contains the existing Helm chart, Dockerfile, and ArgoCD patterns to follow

Deliverables:
1. New .NET 8 Web API for the inventory-service with its own models, controllers, services, and EF Core DbContext
2. Angular 17 frontend components for inventory management
3. Dockerfile — multi-stage build following the pattern in ordermanager-iac/docker/Dockerfile
4. Helm chart — deployment, service, network policy, service monitor, HPA (follow ordermanager-iac/helm/)
5. ArgoCD application manifests for dev and staging (follow ordermanager-iac/argocd/)
6. GitHub Actions CI/CD pipeline — build, test, push to ECR, trigger ArgoCD sync
7. Monolith refactoring — replace in-process Inventory calls with an HTTP client that calls the new service

Push the new inventory-service code and all service-level IaC to ordermanager-microservices on branch workshop-<participant>. Create a PR.
Push the monolith refactoring changes to ordermanager-monolith on branch workshop-<participant>. Create a PR.
Build and test both services locally to verify they work together.
```

**How to delegate:** In Desktop, open a new session in your Space and paste the prompt. Select "Devin Cloud" as the execution target to send it to a cloud VM for autonomous execution.

**What to expect:** The cloud session appears in your Agent Command Center. Devin will read all four repos, analyze the domain boundaries, create a task plan, and begin extracting the Inventory module. This typically takes 10–15 minutes to produce initial PRs.

### Phase 2 — Explore While Devin Works (25 min)

While the cloud agent works autonomously, use Desktop's local capabilities to deepen your understanding:

#### Cascade / Devin Local (in Desktop)

Open a Cascade or Devin Local session in your Space and explore the codebase interactively:

- *"Analyze the domain boundaries in ordermanager-monolith. Which modules are tightly coupled and which have clean boundaries? What shared code exists between the Inventory module and other modules?"*
- *"Look at the Helm chart in ordermanager-iac and the namespace provisioning in platform-engineering-shared-services. What Kubernetes resources does a new microservice need to conform to the platform standard?"*
- *"What's the best HTTP client pattern in .NET 8 for service-to-service communication? Should we use IHttpClientFactory with typed clients or Refit?"*

> **Why local exploration?** Cascade and Devin Local run against your local files — responses are faster and more interactive than a cloud session. Use them for research and discovery; delegate implementation to Cloud.

#### DeepWiki

Open each repo's DeepWiki page to understand the architecture:

1. **ordermanager-monolith** — Understand the module structure, shared models, dependency graph between Orders/Products/Customers/Inventory. Identify what code belongs exclusively to Inventory vs. what is shared.
2. **platform-engineering-shared-services** — Understand the namespace provisioning pattern, network policy defaults, and monitoring setup. This defines what the new service must conform to.
3. **ordermanager-iac** — Understand the Helm chart structure, Dockerfile build stages, ArgoCD application configuration, and CI/CD pipeline. The new service's IaC should mirror these patterns.

#### Monitor Cloud Progress in the Agent Command Center

Check the Kanban board in Desktop to track your cloud session's progress. Key milestones:
- Devin reads all four repos and identifies the Inventory bounded context
- Devin creates the new .NET 8 Web API project structure
- Devin generates the Helm chart, Dockerfile, and ArgoCD manifests
- Devin refactors the monolith to use an HTTP client
- Devin runs tests and creates PRs

The session card moves from "Working" to "Waiting for Review" when PRs are ready.

### Phase 3 — Review PRs and Give Feedback (25 min)

When Devin's cloud session creates PRs, they appear in your Space and on the Agent Command Center. Use **one-click checkout** to review them directly in the editor.

#### One-Click Checkout

Click the PR in your Agent Command Center or Space → Desktop checks out the branch in your editor. No manual `git fetch`, no browser switching. You can browse the full diff, run tests locally, and leave inline comments — all from Desktop.

#### Review the Monolith PR

- Does the HTTP client correctly replace all in-process Inventory calls?
- Is the `InventoryServiceClient` properly registered in DI?
- Are there any leftover direct references to Inventory models or DbSets?

#### Review the Microservices PR

- Does the inventory-service follow the platform standard?
- Does the Helm chart include network policies, service monitors, and HPA?
- Does the ArgoCD manifest target the correct namespace (`decomposition-dev`, `decomposition-staging`)?
- Does the directory structure match the expected layout?

**Expected directory structure in ordermanager-microservices:**
```
ordermanager-microservices/
├── inventory-service/
│   ├── src/                          <- .NET 8 Web API + Angular frontend
│   ├── tests/                        <- Unit and integration tests
│   ├── docker/
│   │   └── Dockerfile                <- Multi-stage build
│   ├── helm/
│   │   └── inventory-service/        <- Helm chart (deployment, service, networkpolicy, servicemonitor, hpa)
│   ├── argocd/
│   │   ├── application-dev.yaml
│   │   └── application-staging.yaml
│   └── .github/
│       └── workflows/
│           └── build-push.yaml       <- CI/CD pipeline
└── README.md
```

#### Leave Feedback Comments

Leave a PR comment from Desktop and watch Devin respond:

- *"Add circuit breaker and retry logic to the InventoryServiceClient using Polly"*
- *"The Helm chart is missing a PodDisruptionBudget — add one with minAvailable: 1"*
- *"Add integration tests that verify the HTTP communication between the monolith and inventory-service"*

**What to expect:** Devin Cloud reads the comment, implements the change, and pushes a new commit. The session moves back to "Working" in the Agent Command Center, then returns to "Waiting for Review" when done. This feedback loop typically takes 3–5 minutes per comment.

### Phase 4 — Bonus Challenges (15 min)

If time permits, delegate additional tasks to Cloud from Desktop. Each task creates a new cloud session visible in the Agent Command Center — you can track them in parallel on the Kanban board:

- *"Extract the Customers module next, following the same pattern you used for Inventory. Add it to ordermanager-microservices on the same workshop branch with its own Helm chart and ArgoCD manifests."*
- *"Add OpenTelemetry distributed tracing to both the monolith and inventory-service so we can trace requests across the HTTP boundary."*
- *"Create a Grafana dashboard JSON that shows inventory-service request rate, error rate, and p95 latency using the ServiceMonitor metrics."*

> **Multiple agents in parallel:** Each bonus challenge can run as a separate cloud session. The Agent Command Center shows them side by side — no tab switching required. ACP enables Desktop to orchestrate multiple cloud agents concurrently.

---

## Duration Variants

| Duration | Phases | Notes |
|----------|--------|-------|
| **60 min** | Phases 1–3 only | Skip bonus challenges, shorten explore time to 15 min |
| **90 min** (default) | All four phases | Full experience with bonus challenges |
| **2 hours** | All four phases + extended review | More time for PR feedback loop and second decomposition |

---

## What Participants Will Learn

- How Devin analyzes multiple repos to understand platform standards and architectural patterns
- How Devin decomposes a monolith by extracting a bounded context into a standalone service
- How Devin generates production-grade IaC (Helm, ArgoCD, Dockerfile, CI/CD) that conforms to organizational standards
- Service communication patterns (HTTP client replacing in-process calls)
- How to use context repositories to guide Devin's architectural decisions
- The difference between platform-level infrastructure and service-level infrastructure
- **How to use Desktop as a control plane** — delegating to Cloud, monitoring sessions, and reviewing PRs without leaving the editor
- **How the Agent Command Center provides team-wide visibility** across multiple parallel cloud sessions

## Devin Features Exercised

| Feature | Where Used |
|---------|-----------|
| Devin Desktop Spaces | Setup — organize the workshop context |
| Cascade / Devin Local | Phase 2 — local code exploration and research |
| Delegate to Cloud | Phase 1 — send decomposition task to cloud agent |
| Agent Command Center | Phases 1–4 — Kanban view of session status |
| Multi-repo context awareness | Phase 1 — cloud agent reads 4 repos simultaneously |
| Architectural analysis | Phase 1 — domain boundary identification |
| Code extraction and refactoring | Phase 1 — .NET and Angular code |
| IaC generation | Phase 1 — Helm, Dockerfile, ArgoCD, GitHub Actions |
| One-click PR checkout | Phase 3 — review PRs in-editor |
| PR comment feedback loop | Phase 3 — iterate on Devin's output from Desktop |
| Parallel cloud sessions | Phase 4 — multiple agents tracked on Kanban board |
| ACP (Agent Client Protocol) | Throughout — multiple agents in a single Desktop |

---

## Key Concepts

### Platform-Level vs. Service-Level Infrastructure

| Layer | What It Contains | Where It Lives |
|-------|-----------------|----------------|
| **Platform-level** | EKS cluster, VPC, namespaces, monitoring stack, ArgoCD, ingress controller | `platform-engineering-shared-services` |
| **Service-level** | Dockerfile, Helm chart, ArgoCD app manifest, CI/CD pipeline | `ordermanager-microservices` (per-service directory) |

The platform team owns the platform-level infrastructure. Each service team owns their service-level infrastructure but must conform to the platform standard (namespace placement, network policies, resource quotas, monitoring labels).

### The Four Repos

| Repo | Role | Modified? |
|------|------|-----------|
| `ordermanager-monolith` | Source — extract the Inventory module from here | Yes — refactored to use HTTP client |
| `ordermanager-microservices` | Landing — new service code + service-level IaC goes here | Yes — new inventory-service directory |
| `platform-engineering-shared-services` | Context — defines what the platform expects | No — read-only reference |
| `ordermanager-iac` | Context — provides IaC patterns to follow | No — read-only reference |

### Desktop + Cloud Workflow Summary

```
┌─────────────────────────────────────────────────────────────────┐
│                    YOUR DESKTOP WORKFLOW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Create Space          2. Explore Locally                     │
│     (organize context)       (Cascade / Devin Local)             │
│                                                                  │
│  3. Delegate to Cloud     4. Monitor on Kanban                   │
│     (one click)              (Agent Command Center)              │
│                                                                  │
│  5. Review in Editor      6. Comment → Iterate                   │
│     (one-click checkout)     (Devin Cloud responds)              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Key Takeaways

- **"Code extraction + IaC generation in one session"** — Devin Cloud handles both the code and the infrastructure autonomously
- **"Platform conformance by reading existing patterns"** — Devin reads the platform standard repos and generates conformant artifacts
- **"Multi-repo coordination"** — Devin works across 4 repos simultaneously
- **"Desktop as your control plane"** — Delegate, monitor, and review without leaving the editor. The Agent Command Center gives team-wide visibility into parallel sessions
- **"Local + Cloud synergy"** — Use Cascade for fast exploration, delegate heavy implementation to Cloud. ACP enables mixing agents in a single environment

---

## Related Modules

| Module | Relationship |
|--------|-------------|
| [Platform-Conformant Microservice Decomposition](../../modules/cloud-infrastructure/platform-conformant-microservice-decomposition.md) | Core module for this lab |
| [Containerization & Microservice Extraction](../../modules/migration-modernization/containerization-microservice-extraction.md) | Similar pattern with Java/Spring Boot (simpler — no platform conformance) |
| [CI/CD Pipeline](../../modules/devops-cicd/cicd-pipeline.md) | Complementary — build pipelines for the extracted service |
| [Observability & Monitoring](../../modules/observability-sre/observability-monitoring.md) | Complementary — add dashboards and alerting for the new service |

# Workshop: Platform-Conformant Microservice Decomposition

## Event Details

| | |
|---|---|
| **Variant Name** | Platform-Conformant Microservice Decomposition |
| **Focus** | Monolith-to-microservices decomposition with IaC conformance on Kubernetes |
| **Duration** | ~90 minutes (75 min lab + 15 min review/discussion) |
| **Event Site** | https://partner-workshops.devinenterprise.com |
| **Audience** | DevOps / Platform Engineering / Solution Architects |

## Featured Labs

This event features a single deep-dive lab where Devin reads four repositories simultaneously to decompose a monolith into a platform-conformant microservice:

### Lab 1 — Decompose a Bounded Context into a Platform-Conformant Microservice (75 min)

- **Module:** [DA8 — Platform-Conformant Microservice Decomposition](../../modules/devops-automation/DA8.md)
- **Repositories:**
  - [app_dotnet-angular-monolith](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith) — .NET 8 + Angular 17 monolith (source)
  - [app_dotnet-angular-monolith-iac](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith-iac) — Helm chart, Dockerfile, ArgoCD patterns (context)
  - [platform-engineering-shared-services](https://github.com/Cognition-Partner-Workshops/platform-engineering-shared-services) — EKS cluster, namespaces, monitoring (context)
  - [app_dotnet-angular-microservices](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-microservices) — landing repo for decomposed services
- **Objective:** Extract the Inventory module from a .NET 8 + Angular 17 monolith into a standalone microservice that conforms to an existing platform engineering standard on Kubernetes

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

Replace `<participant>` with your name (e.g., `workshop-alice`):

> Decompose the Inventory module from `app_dotnet-angular-monolith` into a standalone microservice.
>
> Work on branch `workshop-<participant>` in both repos.
>
> Use these repos as context for platform patterns and IaC standards:
> - `platform-engineering-shared-services` — defines the platform standard (namespaces, network policies, monitoring, ArgoCD)
> - `app_dotnet-angular-monolith-iac` — contains the existing Helm chart, Dockerfile, and ArgoCD patterns to follow
>
> Deliverables:
> 1. **New .NET 8 Web API** for the inventory-service with its own models, controllers, services, and EF Core DbContext
> 2. **Angular 17 frontend components** for inventory management
> 3. **Dockerfile** — multi-stage build following the pattern in `app_dotnet-angular-monolith-iac/docker/Dockerfile`
> 4. **Helm chart** — deployment, service, network policy, service monitor, HPA (follow `app_dotnet-angular-monolith-iac/helm/`)
> 5. **ArgoCD application manifests** for dev and staging (follow `app_dotnet-angular-monolith-iac/argocd/`)
> 6. **GitHub Actions CI/CD pipeline** — build, test, push to ECR, trigger ArgoCD sync
> 7. **Monolith refactoring** — replace in-process Inventory calls with an HTTP client that calls the new service
>
> Push the new inventory-service code and all service-level IaC to `app_dotnet-angular-microservices` on branch `workshop-<participant>`. Create a PR.
> Push the monolith refactoring changes to `app_dotnet-angular-monolith` on branch `workshop-<participant>`. Create a PR.
> Build and test both services locally to verify they work together.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"Analyze the domain boundaries in app_dotnet-angular-monolith. Which modules are tightly coupled and which have clean boundaries? What shared code exists between the Inventory module and other modules?"*
- *"Look at the Helm chart in app_dotnet-angular-monolith-iac and the namespace provisioning in platform-engineering-shared-services. What Kubernetes resources does a new microservice need to conform to the platform standard?"*
- *"What's the best HTTP client pattern in .NET 8 for service-to-service communication? Should we use IHttpClientFactory with typed clients or Refit?"*
- Use the refined understanding to plan follow-up prompts or start a **second session** to extract a different bounded context

#### Step 3: Explore with DeepWiki

Open each repo's **DeepWiki** page to understand the architecture:
1. **app_dotnet-angular-monolith** — Understand the module structure, shared models, dependency graph between Orders/Products/Customers/Inventory. Identify what code belongs exclusively to Inventory vs. what is shared.
2. **platform-engineering-shared-services** — Understand the namespace provisioning pattern, network policy defaults, and monitoring setup. This defines what the new service must conform to.
3. **app_dotnet-angular-monolith-iac** — Understand the Helm chart structure, Dockerfile build stages, ArgoCD application configuration, and CI/CD pipeline.

Use what you learn to try something different:
- Extract a **different bounded context** (Customers, Orders, or Products) alongside Inventory
- Have Devin add **OpenTelemetry distributed tracing** to both the monolith and inventory-service
- Ask Devin to create a **Grafana dashboard JSON** showing inventory-service request rate, error rate, and p95 latency
- Run **parallel sessions** — one extracting Inventory, one extracting Customers

#### Step 4: Review the PR and Give Feedback

Once Devin creates PRs (one in each repo), practice the feedback loop:

**Review the Monolith PR:**
- Does the HTTP client correctly replace all in-process Inventory calls?
- Is the `InventoryServiceClient` properly registered in DI?
- Are there any leftover direct references to Inventory models or DbSets?

**Review the Microservices PR:**
- Does the inventory-service follow the platform standard?
- Does the Helm chart include network policies, service monitors, and HPA?
- Does the ArgoCD manifest target the correct namespace (`decomposition-dev`, `decomposition-staging`)?

**Leave a feedback comment** and watch Devin respond:
- *"Add circuit breaker and retry logic to the InventoryServiceClient using Polly"*
- *"The Helm chart is missing a PodDisruptionBudget — add one with minAvailable: 1"*
- *"Add integration tests that verify the HTTP communication between the monolith and inventory-service"*

See the full challenge details for [DA8 — Platform-Conformant Microservice Decomposition](../../modules/devops-automation/DA8.md) for more ideas.

**Expected directory structure in app_dotnet-angular-microservices:**
```
app_dotnet-angular-microservices/
├── inventory-service/
│   ├── src/                          <- .NET 8 Web API + Angular frontend
│   ├── tests/                        <- Unit and integration tests
│   ├── docker/
│   │   └── Dockerfile                <- Multi-stage build
│   ├── helm/
│   │   └── inventory-service/        <- Helm chart
│   ├── argocd/
│   │   ├── application-dev.yaml
│   │   └── application-staging.yaml
│   └── .github/
│       └── workflows/
│           └── build-push.yaml       <- CI/CD pipeline
└── README.md
```

- **Target Outcomes (any of these count):**
  - New .NET 8 Web API for inventory-service with working build
  - Monolith refactored to call inventory-service via HTTP client
  - Platform-conformant Helm chart, Dockerfile, and ArgoCD manifests
  - GitHub Actions CI/CD pipeline for the new service
  - PRs in both repos with review comments and Devin's responses

## Key Concepts

### Platform-Level vs. Service-Level Infrastructure

| Layer | What It Contains | Where It Lives |
|-------|-----------------|----------------|
| **Platform-level** | EKS cluster, VPC, namespaces, monitoring stack, ArgoCD, ingress controller | `platform-engineering-shared-services` |
| **Service-level** | Dockerfile, Helm chart, ArgoCD app manifest, CI/CD pipeline | `app_dotnet-angular-microservices` (per-service directory) |

The platform team owns the platform-level infrastructure. Each service team owns their service-level infrastructure but must conform to the platform standard (namespace placement, network policies, resource quotas, monitoring labels).

## Additional Challenges

Participants who finish early may extend the session:

| Challenge | Module | Relationship | Time |
|-----------|--------|-------------|------|
| Extract another bounded context | [DA8](../../modules/devops-automation/DA8.md) | Repeat with Customers or Orders | 60 min |
| Containerization & Microservice Extraction (Java) | [MM3](../../modules/migration-modernization/MM3.md) | Similar pattern, different stack | 60 min |
| CI/CD Pipeline | [DA1](../../modules/devops-automation/DA1.md) | Complementary | 45 min |
| Observability & Monitoring | [DA2](../../modules/devops-automation/DA2.md) | Add dashboards and alerting | 45 min |

## Repos Required on Devin's Machine

All four repos must be added via **Settings > Machine configuration > Add repository** before the lab:

- [x] [app_dotnet-angular-monolith](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith) — .NET 8 + Angular 17 monolith (source)
- [x] [app_dotnet-angular-monolith-iac](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith-iac) — Helm chart, Dockerfile, ArgoCD patterns (context)
- [x] [platform-engineering-shared-services](https://github.com/Cognition-Partner-Workshops/platform-engineering-shared-services) — EKS cluster, namespaces, monitoring (context)
- [x] [app_dotnet-angular-microservices](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-microservices) — landing repo for decomposed services

## Context

- **Tech Stack:** .NET 8, Angular 17, Kubernetes (EKS), Helm, ArgoCD, Terraform, GitHub Actions
- **Audience:** DevOps / Platform Engineering / Solution Architects
- **Key narrative:** Decomposing a monolith is not just about extracting code — the new service must be deployable, observable, and conformant with organizational platform standards. Devin handles both the code extraction and the IaC generation in a single session.

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session.

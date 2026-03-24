# GitOps & ArgoCD Setup

## Repositories

- [platform-engineering-shared-services](#platform-engineering-shared-services)
- [app_dotnet-angular-microservices](#app_dotnet-angular-microservices)

---

## Challenge

Configure GitOps deployment pipelines with ArgoCD application manifests. Set up automated sync policies, health checks, and rollback strategies for microservice deployments.

## Target Outcomes

- ArgoCD Application manifests for target services
- GitOps directory structure with environment-specific overlays
- Automated sync policies and health check configuration
- PR with ArgoCD manifests and deployment documentation

## What Participants Will Learn

- How Devin understands Kubernetes deployment patterns and translates them into ArgoCD configurations
- How Devin structures GitOps repositories with environment separation (dev/staging/prod)
- Devin's ability to configure sync policies, health checks, and rollback strategies
- How to evaluate GitOps configurations for production readiness

## Devin Features Exercised

- Kubernetes and ArgoCD understanding
- YAML authoring
- GitOps pattern implementation
- PR creation

## Difficulty

Advanced

## Estimated Time

75 minutes

---

## <a id="platform-engineering-shared-services"></a>platform-engineering-shared-services

**Repository:** [platform-engineering-shared-services](https://github.com/Cognition-Partner-Workshops/platform-engineering-shared-services)

Platform engineering repository with shared infrastructure services — the natural home for GitOps deployment configurations.

### Step 1: Paste into Devin

> Set up a GitOps deployment pipeline in platform-engineering-shared-services using ArgoCD. Create ArgoCD Application manifests for at least 2 services, using an app-of-apps pattern. Configure the directory structure with base manifests and environment-specific overlays (dev, staging, prod) using Kustomize. Set up automated sync policies with self-healing enabled, configure health checks for deployments, and define a rollback strategy. Open a PR with the ArgoCD manifests, Kustomize overlays, and a deployment guide documenting the GitOps workflow.

### Step 2: Research with Ask Devin

- *"What services are defined in platform-engineering-shared-services that need GitOps deployment? What Kubernetes resources already exist?"*
- *"Should we use the app-of-apps pattern or ApplicationSets for managing multiple services? What are the tradeoffs for this repo's scale?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the existing infrastructure and service definitions. Identify which services should be managed by ArgoCD and what their deployment dependencies are.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the sync policies appropriate? Check that automated sync is only enabled for non-production environments
- **Leave a comment** asking Devin to add a notification configuration that alerts on sync failures
- **Watch Devin respond** and push a follow-up commit

---

## <a id="app_dotnet-angular-microservices"></a>app_dotnet-angular-microservices

**Repository:** [app_dotnet-angular-microservices](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-microservices)

.NET and Angular microservices application — a multi-service deployment target for GitOps configuration.

### Step 1: Paste into Devin

> Create ArgoCD Application manifests for deploying app_dotnet-angular-microservices using GitOps. Set up a deployment directory with Kustomize bases for each microservice (frontend, backend API, database). Configure ArgoCD sync policies with automated sync for dev, manual sync for production, and sync waves to control deployment ordering. Add health checks and resource hooks for database migrations. Open a PR with the complete GitOps configuration and a README explaining the deployment workflow.

### Step 2: Research with Ask Devin

- *"What microservices make up app_dotnet-angular-microservices? What are the deployment dependencies between them?"*
- *"How should we handle database migrations in a GitOps workflow — sync waves, resource hooks, or a separate Job?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the service architecture and inter-service dependencies. This determines the correct sync wave ordering for ArgoCD.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — is the sync wave ordering correct? Check that database migrations run before application deployments
- **Leave a comment** asking Devin to add a canary deployment strategy for the frontend service
- **Watch Devin respond** and push a follow-up commit

# Runbook Generation

## Repositories

- [platform-engineering-shared-services](#platform-engineering-shared-services)
- [app_eventflow-infra](#app_eventflow-infra)

---

## Challenge

Generate operational runbooks from code, configuration files, and deployment manifests. Runbooks should cover common operational scenarios: deployment, rollback, scaling, incident response, and monitoring.

## Target Outcomes

- Operational runbook covering deployment, rollback, and scaling procedures
- Incident response playbook with troubleshooting decision tree
- Monitoring and alerting guide based on existing configuration
- All runbook documents placed in `docs/runbooks/`
- PR with runbook documents

## What Participants Will Learn

- How Devin extracts operational knowledge from infrastructure code and configuration
- How Devin structures runbooks with actionable steps and decision trees
- How Devin identifies monitoring, alerting, and scaling patterns from existing manifests
- The value of pointing Devin at specific config files and deployment manifests in prompts

## Devin Features Exercised

- Infrastructure code analysis (Terraform, Kubernetes, Docker)
- Operational knowledge extraction and synthesis
- Technical writing and document generation
- PR creation with documentation artifacts

## Difficulty

Intermediate

## Estimated Time

45 minutes

## Notes

- Runbooks should include actual commands and config references from the repo, not generic boilerplate
- Encourage participants to review runbooks for accuracy — Devin may infer procedures that need correction
- Good follow-up: have participants test a rollback procedure from the generated runbook

---

## <a id="platform-engineering-shared-services"></a>platform-engineering-shared-services

**Repository:** [platform-engineering-shared-services](https://github.com/Cognition-Partner-Workshops/platform-engineering-shared-services)

Platform engineering repository with shared infrastructure services, deployment configurations, and operational tooling.

### Step 1: Paste into Devin

> Analyze the infrastructure code and deployment configurations in platform-engineering-shared-services and generate operational runbooks. Create the following documents in `docs/runbooks/`: (1) `deployment-runbook.md` — step-by-step deployment procedure with pre/post checks, (2) `rollback-runbook.md` — rollback procedures for each service with decision criteria for when to rollback, (3) `incident-response.md` — troubleshooting decision tree for common failure scenarios, and (4) `monitoring-guide.md` — guide to existing monitoring and alerting with escalation procedures. Each runbook should reference actual files, commands, and configurations from the repo. Open a PR.

### Step 2: Research with Ask Devin

- *"What deployment tools and patterns are used in platform-engineering-shared-services? Are there Terraform modules, Kubernetes manifests, or Docker Compose files?"*
- *"What monitoring and alerting is configured? Are there Prometheus rules, Grafana dashboards, or CloudWatch alarms?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the infrastructure architecture and identify all deployment, monitoring, and configuration components that should be documented in the runbooks.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — do the runbooks reference actual commands and file paths from the repo, or are they generic?
- **Leave a comment** asking Devin to add a "common pitfalls" section to the deployment runbook based on patterns in the codebase
- **Watch Devin respond** and push a follow-up commit

---

## <a id="app_eventflow-infra"></a>app_eventflow-infra

**Repository:** [app_eventflow-infra](https://github.com/Cognition-Partner-Workshops/app_eventflow-infra)

Infrastructure-as-code repository for the EventFlow application platform with deployment manifests and environment configurations.

### Step 1: Paste into Devin

> Analyze the infrastructure code in app_eventflow-infra and generate operational runbooks. Create the following in `docs/runbooks/`: (1) `deployment-runbook.md` — step-by-step guide for deploying the EventFlow platform including dependency ordering, (2) `scaling-runbook.md` — procedures for scaling services up/down with capacity planning guidelines, (3) `incident-response.md` — troubleshooting guide with a decision tree covering service failures, network issues, and data problems, and (4) `environment-setup.md` — guide for provisioning a new environment from scratch. Reference actual IaC files, variable names, and commands from the repo. Open a PR.

### Step 2: Research with Ask Devin

- *"What infrastructure components are defined in app_eventflow-infra? What are the service dependencies and deployment ordering requirements?"*
- *"What environment variables and secrets are required for deployment? How are they currently managed?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the infrastructure architecture, service topology, and deployment pipeline. Identify all components that need runbook coverage.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the deployment runbook correctly capture service dependency ordering?
- **Leave a comment** asking Devin to add estimated time and resource requirements for each deployment step
- **Watch Devin respond** and push a follow-up commit

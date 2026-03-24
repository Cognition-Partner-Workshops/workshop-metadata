# Proposed New Modules — SDLC Coverage Gaps

This document scopes additional modules to expand coverage across SDLC tech domains and functions. These are proposals — not yet implemented.

---

## Data Engineering & Pipelines

| Proposed Module | Description | Potential Repos |
|----------------|-------------|-----------------|
| **ETL Pipeline Modernization** | Migrate legacy ETL (SAS, Informatica, SSIS) to modern orchestrators (Airflow, dbt) | uc-data-migration-airflow, ts-sas-legacy-codebase |
| **Data Quality & Validation** | Add data quality checks, schema validation, and data contracts to pipelines | uc-data-source-migration-legacy-to-modern |
| **SAS to Python/Snowflake** | Convert SAS analytics programs to Python + Snowflake SQL | ts-sas-legacy-codebase, uc-data-migration-sas-to-snowflake |

## Architecture & Design

| Proposed Module | Description | Potential Repos |
|----------------|-------------|-----------------|
| **Architecture Decision Records** | Generate ADRs from codebase analysis — document current architecture and propose changes | Any repo with complex architecture |
| **API Design Review** | Evaluate REST/GraphQL APIs against design standards (naming, versioning, error handling) | uc-framework-upgrade-monolith-to-microservices, app_timesheet |
| **Dependency Graph Analysis** | Map and analyze dependency graphs, identify circular deps, suggest decoupling | uc-framework-upgrade-monolith-to-microservices, cal.com |

## Testing & Quality (extensions)

| Proposed Module | Description | Potential Repos |
|----------------|-------------|-----------------|
| **Contract Testing** | Generate Pact/Spring Cloud Contract tests for service boundaries | app_petclinic-microservices, app_dotnet_angular_containerized_decomposition_microservices |
| **Mutation Testing** | Set up mutation testing (PIT/Stryker) and fix surviving mutants | uc-framework-upgrade-monolith-to-microservices, app_timesheet |
| **Load Testing & Benchmarking** | Create k6/Gatling load test suites and analyze results | app_timesheet, uc-framework-upgrade-monolith-to-microservices |
| **Visual Regression Testing** | Set up Playwright visual comparison tests for UI components | app_timesheet, cal.com |

## DevOps & Infrastructure (extensions)

| Proposed Module | Description | Potential Repos |
|----------------|-------------|-----------------|
| **GitOps & ArgoCD Setup** | Configure GitOps deployment pipelines with ArgoCD manifests | platform-engineering-shared-services, app_dotnet-angular-microservices |
| **Kubernetes Manifest Generation** | Generate K8s manifests (Deployment, Service, Ingress, HPA) from app analysis | app_petclinic-microservices, uc-framework-upgrade-monolith-to-microservices |
| **Terraform Module Extraction** | Refactor monolithic Terraform into reusable modules | hosting-client-timesheet-app, app_dotnet-angular-monolith-iac |
| **Cost Optimization Analysis** | Analyze cloud resource usage and recommend right-sizing | hosting-client-timesheet-app, cal.com-infra |

## Compliance & Governance

| Proposed Module | Description | Potential Repos |
|----------------|-------------|-----------------|
| **License Compliance Audit** | Scan dependencies for license conflicts and produce SBOM | Any repo |
| **GDPR/PII Detection** | Scan codebase for PII handling patterns and suggest data protection improvements | app_timesheet, Online-Banking-System-using-Java |
| **Regulatory Reporting** | Generate compliance reports from SAST/DAST/dependency scan outputs | uc-cve-remediation-regulatory-compliance |

## AI/ML Engineering

| Proposed Module | Description | Potential Repos |
|----------------|-------------|-----------------|
| **ML Pipeline Setup** | Create ML training/inference pipelines with proper versioning and reproducibility | New repo needed |
| **Model Evaluation & Testing** | Build evaluation harnesses for ML models with fairness and bias checks | New repo needed |
| **LLM Integration Patterns** | Add LLM-powered features (summarization, classification, search) to existing apps | app_timesheet, uc-document-review-automation |

## Documentation & Knowledge

| Proposed Module | Description | Potential Repos |
|----------------|-------------|-----------------|
| **Runbook Generation** | Generate operational runbooks from code, configs, and deployment manifests | platform-engineering-shared-services, app_eventflow-infra |
| **Onboarding Guide Generation** | Create developer onboarding guides from repo analysis | Any complex repo |
| **Changelog & Release Notes** | Generate structured changelogs from git history and PRs | Any repo with git history |

---

## Priority Recommendations

**High priority** (leverage existing repos, fill clear gaps):
1. ETL Pipeline Modernization — uses existing uc-data-migration-airflow
2. Contract Testing — natural extension of microservice decomposition workshops
3. GitOps & ArgoCD Setup — complements platform-engineering-shared-services
4. Architecture Decision Records — universally applicable, high enterprise value
5. License Compliance Audit — quick win, works with any repo

**Medium priority** (need some repo prep):
6. SAS to Python/Snowflake — uses existing ts-sas-legacy-codebase
7. Kubernetes Manifest Generation — extends containerization modules
8. Terraform Module Extraction — extends IaC translation module
9. GDPR/PII Detection — relevant for regulated industries

**Lower priority** (need new repos or significant prep):
10. ML Pipeline Setup — needs dedicated ML repo
11. Model Evaluation & Testing — needs dedicated ML repo
12. Visual Regression Testing — needs stable UI apps with known visual states

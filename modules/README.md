# Workshop Modules

All hands-on modules organized by SDLC domain. Each module is a self-contained challenge with:

1. **Paste into Devin** — a copy-pastable prompt to get started immediately
2. **Research with Ask Devin** — prompts to gather requirements and refine your approach
3. **Read the DeepWiki** *(optional)* — explore the repo's auto-generated architecture docs
4. **Review & Give Feedback** *(optional)* — leave PR comments and iterate with Devin

---

## Quick Navigation

| Category | Focus | Modules |
|----------|-------|---------|
| [Quality Engineering](quality-engineering/) | Testing, linting, documentation, refactoring, accessibility | 19 modules |
| [Security](security/) | Dependency upgrades, vulnerability remediation, SAST, secrets, compliance | 10 modules |
| [Migration & Modernization](migration-modernization/) | Language migration, framework upgrades, containerization, data migration | 23 modules |
| [Feature Development](feature-development/) | Requirements, TDD, bug fixing, new features, API docs, AI/ML | 11 modules |
| [DevOps & Automation](devops-automation/) | CI/CD, observability, PR review, incident response, platform engineering | 14 modules |
| [Devin Features](devin-features/) | Cross-cutting Devin platform activities checklist | 1 reference |

---

## All Modules at a Glance

### Quality Engineering

| Module | Difficulty | Time | Repos |
|--------|-----------|------|-------|
| [Linting & Static Analysis](quality-engineering/linting-static-analysis.md) | Beginner | 30 min | app_timesheet, hosting-client-timesheet-app |
| [Unit Testing](quality-engineering/unit-testing.md) | Beginner–Intermediate | 45 min | app_timesheet, ts-java-spring-boot-realworld-example-app, uc-framework-upgrade-monolith-to-microservices |
| [End-to-End Testing](quality-engineering/end-to-end-testing.md) | Intermediate | 60 min | app_timesheet, cal.com, ts-selenium-simple |
| [Inline Documentation](quality-engineering/inline-documentation.md) | Beginner | 30 min | app_timesheet, ts-java-spring-boot-realworld-example-app, uc-dw-migration-teradata-to-snowflake |
| [Code Refactoring & Tech Debt](quality-engineering/code-refactoring-tech-debt.md) | Intermediate | 45 min | app_timesheet, cal.com, ts-java-spring-boot-realworld-example-app |
| [Performance Testing & Optimization](quality-engineering/performance-testing.md) | Intermediate–Advanced | 60 min | app_timesheet, cal.com, uc-framework-upgrade-monolith-to-microservices |
| [Accessibility Compliance](quality-engineering/accessibility-compliance.md) | Intermediate | 45 min | app_timesheet, cal.com |
| [Document Review Automation](quality-engineering/document-review-automation.md) | Intermediate | 45 min | uc-document-review-automation |
| [BDD Test Generation](quality-engineering/bdd-test-generation.md) | Intermediate | 60 min | uc-bdd-test-generation-rest-api, ts-swagger-petstore |
| [Architecture Decision Records](quality-engineering/architecture-decision-records.md) | Intermediate | 45 min | Multiple repos |
| [API Design Review](quality-engineering/api-design-review.md) | Intermediate | 45 min | Multiple repos |
| [Dependency Graph Analysis](quality-engineering/dependency-graph-analysis.md) | Intermediate–Advanced | 60 min | Multiple repos |
| [Contract Testing](quality-engineering/contract-testing.md) | Intermediate–Advanced | 60 min | app_petclinic-microservices, app_dotnet_angular_containerized_decomposition_microservices |
| [Mutation Testing](quality-engineering/mutation-testing.md) | Intermediate–Advanced | 60 min | Multiple repos |
| [Load Testing & Benchmarking](quality-engineering/load-testing-benchmarking.md) | Intermediate–Advanced | 60 min | Multiple repos |
| [Visual Regression Testing](quality-engineering/visual-regression-testing.md) | Intermediate | 45 min | Multiple repos |
| [Runbook Generation](quality-engineering/runbook-generation.md) | Intermediate | 45 min | platform-engineering-shared-services, app_eventflow-infra |
| [Onboarding Guide Generation](quality-engineering/onboarding-guide-generation.md) | Intermediate | 45 min | Multiple repos |
| [Changelog & Release Notes](quality-engineering/changelog-release-notes.md) | Beginner–Intermediate | 30 min | Multiple repos |

### Security

| Module | Difficulty | Time | Repos |
|--------|-----------|------|-------|
| [Upgrade Dependencies](security/upgrade-dependencies.md) | Beginner–Intermediate | 45 min | app_timesheet, uc-cve-remediation-regulatory-compliance |
| [Remediate Vulnerabilities](security/remediate-vulnerabilities.md) | Intermediate | 60 min | app_timesheet, uc-cve-remediation-regulatory-compliance |
| [Shift Left Security](security/shift-left-security.md) | Intermediate–Advanced | 60 min | app_timesheet, uc-cve-remediation-regulatory-compliance |
| [Security Antipatterns](security/security-antipatterns.md) | Intermediate | 45 min | app_timesheet, uc-cve-remediation-regulatory-compliance, Online-Banking-System-using-Java |
| [Secrets Management & Detection](security/secrets-management-detection.md) | Intermediate | 45 min | app_timesheet, uc-cve-remediation-regulatory-compliance, uc-framework-upgrade-monolith-to-microservices |
| [Event-Driven SAST Remediation](security/event-driven-sast-remediation.md) | Advanced | 90 min | app_timesheet, uc-cve-remediation-regulatory-compliance |
| [Mass Security Backlog Remediation](security/mass-security-backlog-remediation.md) | Advanced | 90 min | app_timesheet, uc-cve-remediation-regulatory-compliance |
| [License Compliance Audit](security/license-compliance-audit.md) | Intermediate | 45 min | Multiple repos |
| [GDPR/PII Detection](security/gdpr-pii-detection.md) | Intermediate–Advanced | 60 min | Multiple repos |
| [Regulatory Reporting](security/regulatory-reporting.md) | Intermediate | 45 min | Multiple repos |

### Migration & Modernization

| Module | Difficulty | Time | Repos |
|--------|-----------|------|-------|
| [COBOL to Java](migration-modernization/cobol-to-java.md) | Intermediate–Advanced | 60 min | uc-legacy-modernization-cobol-to-java |
| [Framework Upgrade](migration-modernization/framework-upgrade.md) | Intermediate | 60 min | uc-framework-upgrade-monolith-to-microservices, app_petclinic-angular, ts-angular-realworld-example-app |
| [Containerization & Microservice Extraction](migration-modernization/containerization-microservice-extraction.md) | Intermediate–Advanced | 60 min | uc-framework-upgrade-monolith-to-microservices, app_petclinic-microservices |
| [API Consolidation](migration-modernization/api-consolidation.md) | Intermediate | 45 min | uc-framework-upgrade-monolith-to-microservices |
| [Cloud-Native Refactor](migration-modernization/cloud-native-refactor.md) | Intermediate–Advanced | 60 min | uc-framework-upgrade-monolith-to-microservices, app_timesheet |
| [IaC Translation](migration-modernization/iac-translation.md) | Intermediate | 45 min | hosting-client-timesheet-app, cal.com-infra |
| [DW Migration: Teradata to Snowflake](migration-modernization/dw-migration-teradata-to-snowflake.md) | Intermediate–Advanced | 60 min | uc-dw-migration-teradata-to-snowflake |
| [Data Source Migration](migration-modernization/data-source-migration.md) | Intermediate | 60 min | uc-data-source-migration-legacy-to-modern |
| [Repetitive Framework Upgrades](migration-modernization/repetitive-framework-upgrades.md) | Intermediate | 60 min | Multiple repos (parallel sessions) |
| [Legacy Modernization Combined](migration-modernization/legacy-modernization-combined.md) | Advanced | 60 min | Multiple repos |
| [One-Shot Tech Debt Remediation](migration-modernization/one-shot-tech-debt-remediation.md) | Advanced | 75 min | uc-framework-upgrade-monolith-to-microservices, uc-cve-remediation-regulatory-compliance |
| [COBOL System Understanding](migration-modernization/cobol-system-understanding.md) | Intermediate | 60 min | uc-legacy-modernization-cobol-to-java |
| [COBOL Migration Planning](migration-modernization/cobol-migration-planning.md) | Intermediate–Advanced | 60 min | uc-legacy-modernization-cobol-to-java |
| [Migration Test Harness](migration-modernization/migration-test-harness.md) | Intermediate–Advanced | 60 min | uc-legacy-modernization-cobol-to-java |
| [.NET Monolith Decomposition](migration-modernization/dotnet-monolith-decomposition.md) | Intermediate–Advanced | 75 min | app_dotnet_angular_containerized_decomposition_monolith, app_dotnet_angular_containerized_decomposition_microservices |
| [Cross-Service Integration Testing](migration-modernization/cross-service-integration-testing.md) | Intermediate | 45 min | app_dotnet_angular_containerized_decomposition_monolith, app_dotnet_angular_containerized_decomposition_microservices |
| [Cross-Service Bug Investigation](migration-modernization/cross-service-bug-investigation.md) | Intermediate | 45 min | app_dotnet_angular_containerized_decomposition_microservices |
| [Oracle Forms System Understanding](migration-modernization/oracle-forms-system-understanding.md) | Intermediate | 60 min | ts-plsql-oracle-forms-legacy-codebase |
| [Oracle Forms Migration Planning](migration-modernization/oracle-forms-migration-planning.md) | Intermediate–Advanced | 60 min | ts-plsql-oracle-forms-legacy-codebase, uc-legacy-modernization-oracle-forms-to-java |
| [Oracle Forms to Java](migration-modernization/oracle-forms-to-java.md) | Intermediate–Advanced | 60 min | ts-plsql-oracle-forms-legacy-codebase, uc-legacy-modernization-oracle-forms-to-java |
| [ETL Pipeline Modernization](migration-modernization/etl-pipeline-modernization.md) | Intermediate–Advanced | 60 min | uc-dw-migration-teradata-to-snowflake |
| [Data Quality & Validation](migration-modernization/data-quality-validation.md) | Intermediate | 45 min | uc-dw-migration-teradata-to-snowflake |
| [SAS to Python/Snowflake](migration-modernization/sas-to-python-snowflake.md) | Intermediate–Advanced | 60 min | Multiple repos |

### Feature Development

| Module | Difficulty | Time | Repos |
|--------|-----------|------|-------|
| [Gather Requirements](feature-development/gather-requirements.md) | Beginner | 30 min | app_timesheet, cal.com |
| [Test-Driven Development](feature-development/test-driven-development.md) | Intermediate | 60 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices |
| [Fix Runtime Bug](feature-development/fix-runtime-bug.md) | Intermediate | 45 min | app_timesheet, cal.com, app_eventflow-storefront |
| [Fix UI Bug](feature-development/fix-ui-bug.md) | Beginner–Intermediate | 30 min | app_timesheet |
| [Fix Data Bug](feature-development/fix-data-bug.md) | Intermediate | 45 min | app_timesheet |
| [New Feature Development](feature-development/new-feature-development.md) | Intermediate–Advanced | 60 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices, uc-data-source-migration-legacy-to-modern |
| [API Documentation](feature-development/api-documentation.md) | Intermediate | 45 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices, uc-data-source-migration-legacy-to-modern |
| [Database Schema Evolution](feature-development/database-schema-evolution.md) | Intermediate | 45 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices, uc-data-source-migration-legacy-to-modern |
| [ML Pipeline Setup](feature-development/ml-pipeline-setup.md) | Advanced | 75 min | Multiple repos |
| [Model Evaluation & Testing](feature-development/model-evaluation-testing.md) | Advanced | 60 min | Multiple repos |
| [LLM Integration Patterns](feature-development/llm-integration-patterns.md) | Intermediate–Advanced | 60 min | Multiple repos |

### DevOps & Automation

| Module | Difficulty | Time | Repos |
|--------|-----------|------|-------|
| [CI/CD Pipeline](devops-automation/cicd-pipeline.md) | Intermediate | 45 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices |
| [Observability & Monitoring](devops-automation/observability-monitoring.md) | Intermediate–Advanced | 60 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices |
| [PR Review Automation](devops-automation/pr-review-automation.md) | Beginner–Intermediate | 30 min | app_timesheet, ts-java-spring-boot-realworld-example-app, uc-framework-upgrade-monolith-to-microservices |
| [CI Failure Resolution](devops-automation/ci-failure-resolution.md) | Intermediate | 45 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices |
| [Release Management](devops-automation/release-management.md) | Intermediate | 45 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices, app_dotnet-angular-monolith |
| [Incident Response & Triage](devops-automation/incident-response-triage.md) | Intermediate | 45 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices, app_dotnet-angular-monolith, app_eventflow-storefront |
| [Configuration Mgmt & Feature Flags](devops-automation/configuration-management-feature-flags.md) | Intermediate | 45 min | app_timesheet, uc-framework-upgrade-monolith-to-microservices, platform-engineering-shared-services |
| [Platform-Conformant Microservice Decomposition](devops-automation/platform-conformant-microservice-decomposition.md) | Advanced | 75 min | app_dotnet-angular-monolith, app_dotnet-angular-microservices, platform-engineering-shared-services |
| [Pod Remediation After Credential Rotation](devops-automation/pod-remediation-credential-rotation.md) | Advanced | 60 min | uc-pod-remediation-credential-rotation |
| [Volume Anomaly Detection](devops-automation/volume-anomaly-detection.md) | Intermediate–Advanced | 60 min | uc-volume-anomaly-detection |
| [GitOps & ArgoCD Setup](devops-automation/gitops-argocd-setup.md) | Advanced | 75 min | Multiple repos |
| [Kubernetes Manifest Generation](devops-automation/kubernetes-manifest-generation.md) | Intermediate–Advanced | 60 min | Multiple repos |
| [Terraform Module Extraction](devops-automation/terraform-module-extraction.md) | Intermediate–Advanced | 60 min | hosting-client-timesheet-app |
| [Cost Optimization Analysis](devops-automation/cost-optimization-analysis.md) | Intermediate | 45 min | hosting-client-timesheet-app, cal.com-infra |

---

## Composing Workshops from Modules

Modules are the building blocks. Combine them into workshops:

| Workshop Theme | Recommended Modules | Duration |
|----------------|-------------------|----------|
| **COBOL Modernization** | COBOL System Understanding → COBOL Migration Planning → Migration Test Harness → COBOL to Java | 4 hours |
| **Security & Compliance** | Upgrade Dependencies + Remediate Vulnerabilities → Shift Left Security | 2 hours |
| **Enterprise Security at Scale** | Event-Driven SAST Remediation → Mass Security Backlog Remediation → One-Shot Tech Debt Remediation | 4 hours |
| **Framework Upgrades** | Framework Upgrade + Repetitive Framework Upgrades (parallel sessions) | 2 hours |
| **Platform Engineering** | Platform-Conformant Microservice Decomposition + CI/CD Pipeline + Release Management | 3 hours |
| **Quality Engineering** | Linting & Static Analysis → Unit Testing → End-to-End Testing → Code Refactoring | 3 hours |
| **Feature Development** | Gather Requirements → Test-Driven Development → New Feature Development | 3 hours |
| **Agentic AI** | Pod Remediation → Volume Anomaly Detection → Document Review Automation → BDD Test Generation | 4 hours |
| **.NET Cloud-Native** | .NET Monolith Decomposition → Cross-Service Integration Testing → Cross-Service Bug Investigation | 3 hours |

See [workshops/](../workshops/) for pre-built workshop templates and [events/](../events/) for event-specific instances.

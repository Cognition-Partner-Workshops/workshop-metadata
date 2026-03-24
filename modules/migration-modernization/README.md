# Migration & Modernization

Challenges focused on language migrations, framework upgrades, architectural refactoring, data warehouse migrations, and cloud-native modernization.

## Modules

| Module | Difficulty | Time |
|--------|-----------|------|
| [COBOL to Java](cobol-to-java.md) | Intermediate–Advanced | 60 min |
| [Framework Upgrade](framework-upgrade.md) | Intermediate | 60 min |
| [Containerization & Microservice Extraction](containerization-microservice-extraction.md) | Intermediate–Advanced | 60 min |
| [API Consolidation](api-consolidation.md) | Intermediate | 45 min |
| [Cloud-Native Refactor](cloud-native-refactor.md) | Intermediate–Advanced | 60 min |
| [IaC Translation](iac-translation.md) | Intermediate | 45 min |
| [DW Migration: Teradata to Snowflake](dw-migration-teradata-to-snowflake.md) | Intermediate–Advanced | 60 min |
| [Data Source Migration](data-source-migration.md) | Intermediate | 60 min |
| [Repetitive Framework Upgrades](repetitive-framework-upgrades.md) | Intermediate | 60 min |
| [Legacy Modernization Combined](legacy-modernization-combined.md) | Advanced | 60 min |
| [One-Shot Tech Debt Remediation](one-shot-tech-debt-remediation.md) | Advanced | 75 min |
| [COBOL System Understanding](cobol-system-understanding.md) | Intermediate | 60 min |
| [COBOL Migration Planning](cobol-migration-planning.md) | Intermediate–Advanced | 60 min |
| [Migration Test Harness](migration-test-harness.md) | Intermediate–Advanced | 60 min |
| [.NET Monolith Decomposition](dotnet-monolith-decomposition.md) | Intermediate–Advanced | 75 min |
| [Cross-Service Integration Testing](cross-service-integration-testing.md) | Intermediate | 45 min |
| [Cross-Service Bug Investigation](cross-service-bug-investigation.md) | Intermediate | 45 min |
| [Oracle Forms System Understanding](oracle-forms-system-understanding.md) | Intermediate | 60 min |
| [Oracle Forms Migration Planning](oracle-forms-migration-planning.md) | Intermediate–Advanced | 60 min |
| [Oracle Forms to Java](oracle-forms-to-java.md) | Intermediate–Advanced | 60 min |

## Repositories

| Repository | Compatible Modules |
|------------|--------------------|
| app_petclinic-angular | [Framework Upgrade](framework-upgrade.md), [Repetitive Framework Upgrades](repetitive-framework-upgrades.md) |
| app_petclinic-microservices | [Containerization & Microservice Extraction](containerization-microservice-extraction.md) |
| app_timesheet | [Cloud-Native Refactor](cloud-native-refactor.md) |
| app_dotnet-angular-monolith | [Platform-Conformant Microservice Decomposition](../devops-automation/platform-conformant-microservice-decomposition.md) (cross-category: DevOps) |
| app_dotnet_angular_containerized_decomposition_monolith | [.NET Monolith Decomposition](dotnet-monolith-decomposition.md), [Cross-Service Integration Testing](cross-service-integration-testing.md) |
| app_dotnet_angular_containerized_decomposition_microservices | [.NET Monolith Decomposition](dotnet-monolith-decomposition.md), [Cross-Service Integration Testing](cross-service-integration-testing.md), [Cross-Service Bug Investigation](cross-service-bug-investigation.md) |
| hosting-client-timesheet-app | [IaC Translation](iac-translation.md) |
| ts-angular-realworld-example-app | [Framework Upgrade](framework-upgrade.md), [Repetitive Framework Upgrades](repetitive-framework-upgrades.md) |
| uc-data-source-migration-legacy-to-modern | [Data Source Migration](data-source-migration.md), [Legacy Modernization Combined](legacy-modernization-combined.md) |
| uc-dw-migration-teradata-to-snowflake | [DW Migration: Teradata to Snowflake](dw-migration-teradata-to-snowflake.md) |
| uc-cve-remediation-regulatory-compliance | [One-Shot Tech Debt Remediation](one-shot-tech-debt-remediation.md) |
| uc-framework-upgrade-monolith-to-microservices | [Framework Upgrade](framework-upgrade.md), [Containerization & Microservice Extraction](containerization-microservice-extraction.md), [API Consolidation](api-consolidation.md), [Cloud-Native Refactor](cloud-native-refactor.md), [Repetitive Framework Upgrades](repetitive-framework-upgrades.md), [Legacy Modernization Combined](legacy-modernization-combined.md), [One-Shot Tech Debt Remediation](one-shot-tech-debt-remediation.md) |
| uc-legacy-modernization-cobol-to-java | [COBOL to Java](cobol-to-java.md), [Legacy Modernization Combined](legacy-modernization-combined.md), [COBOL System Understanding](cobol-system-understanding.md), [COBOL Migration Planning](cobol-migration-planning.md), [Migration Test Harness](migration-test-harness.md) |
| ts-plsql-oracle-forms-legacy-codebase | [Oracle Forms System Understanding](oracle-forms-system-understanding.md), [Oracle Forms Migration Planning](oracle-forms-migration-planning.md), [Oracle Forms to Java](oracle-forms-to-java.md) |
| uc-legacy-modernization-oracle-forms-to-java | [Oracle Forms to Java](oracle-forms-to-java.md), [Oracle Forms Migration Planning](oracle-forms-migration-planning.md), [Migration Test Harness](migration-test-harness.md) |

## When to Use This Category

- Migration-focused audiences (enterprise modernization teams, platform engineering)
- Workshops showing Devin's ability to handle complex, multi-file refactoring
- Full-day workshops where participants need substantial, meaty challenges
- The `uc-` prefixed repos were specifically curated for these challenges
- Repetitive Framework Upgrades is designed for repetitive upgrade scenarios across multiple services (parallel sessions)
- Legacy Modernization Combined merges COBOL-to-Java, Framework Upgrade/Containerization, and Data Source Migration into one end-to-end modernization narrative
- One-Shot Tech Debt Remediation is an **enterprise module** — one-shot tech debt remediation with long-term reasoning and provable deliverables
- COBOL System Understanding, Migration Planning, and Test Harness form a **COBOL modernization workshop**: understand, plan, safeguard, leading into COBOL to Java (execute)
- Oracle Forms System Understanding, Migration Planning, and Oracle Forms to Java form an **Oracle Forms modernization workshop**: understand, plan, safeguard, leading into Forms-to-Java (execute)
- .NET Monolith Decomposition, Cross-Service Integration Testing, and Cross-Service Bug Investigation form a **.NET cloud-native modernization workshop**: extract, validate, debug, using the QuickApp monolith
- See the [Enterprise Demo Track](../../events/enterprise-demo-track/README.md) for a lab sequence using Event-Driven SAST + Mass Security Backlog + One-Shot Tech Debt
- See the [COBOL Modernization Workshop](../../events/cobol-modernization-workshop/README.md) for COBOL System Understanding + Migration Planning + Test Harness + COBOL to Java
- See the [Oracle Forms Modernization Workshop](../../events/oracle-forms-modernization-workshop/README.md) for Oracle Forms System Understanding + Migration Planning + Test Harness + Oracle Forms to Java
- See the [.NET Cloud-Native Modernization Workshop](../../workshops/dotnet-cloud-native-modernization/README.md) for .NET Monolith Decomposition + Integration Testing + Bug Investigation
- See the [Legacy Modernization Workshop](../../workshops/legacy-modernization/README.md) for a unified workshop offering both COBOL (Track A) and Oracle Forms (Track B) tracks
- For monolith-to-microservices with **platform conformance and IaC**, see [Platform-Conformant Microservice Decomposition](../devops-automation/platform-conformant-microservice-decomposition.md) (DevOps category) — uses the .NET/Angular monolith with platform-engineering-shared-services as context

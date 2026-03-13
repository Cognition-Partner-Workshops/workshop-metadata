# Category C: Migration and Modernization

Challenges focused on language migrations, framework upgrades, architectural refactoring, data warehouse migrations, and cloud-native modernization.

## Modules

| ID | Challenge | Difficulty | Time |
|----|-----------|-----------|------|
| [MM1](MM1.md) | COBOL to Java | Intermediate to Advanced | 60 min |
| [MM2](MM2.md) | Framework Upgrade | Intermediate | 60 min |
| [MM3](MM3.md) | Containerization & Microservice Extraction | Intermediate to Advanced | 60 min |
| [MM4](MM4.md) | API Consolidation | Intermediate | 45 min |
| [MM5](MM5.md) | Cloud-Native Refactor | Intermediate to Advanced | 60 min |
| [MM6](MM6.md) | IaC Translation | Intermediate | 45 min |
| [MM7](MM7.md) | DW Migration: Teradata to Snowflake | Intermediate to Advanced | 60 min |
| [MM8](MM8.md) | Data Source Migration: Legacy to Modern | Intermediate | 60 min |
| [MM9](MM9.md) | Repetitive Framework Upgrades | Intermediate | 60 min |
| [MM10](MM10.md) | Legacy Modernization Combined | Advanced | 60 min |
| [MM11](MM11.md) | One-Shot Tech Debt Remediation | Advanced | 75 min |

## Repositories

| Repository | Compatible Modules |
|------------|--------------------|
| app_petclinic-angular | [MM2](MM2.md#app_petclinic-angular), [MM9](MM9.md#app_petclinic-angular) |
| app_petclinic-microservices | [MM3](MM3.md#app_petclinic-microservices) |
| app_timesheet | [MM5](MM5.md#app_timesheet) |
| app_dotnet-angular-monolith | [DA8](../devops-automation/DA8.md#app_dotnet-angular-monolith) (cross-category: DevOps) |
| hosting-client-timesheet-app | [MM6](MM6.md#hosting-client-timesheet-app) |
| ts-angular-realworld-example-app | [MM2](MM2.md#ts-angular-realworld-example-app), [MM9](MM9.md#ts-angular-realworld-example-app) |
| uc-data-source-migration-legacy-to-modern | [MM8](MM8.md#uc-data-source-migration-legacy-to-modern), [MM10](MM10.md#uc-data-source-migration-legacy-to-modern) |
| uc-dw-migration-teradata-to-snowflake | [MM7](MM7.md#uc-dw-migration-teradata-to-snowflake) |
| uc-cve-remediation-regulatory-compliance | [MM11](MM11.md#uc-cve-remediation-regulatory-compliance) |
| uc-framework-upgrade-monolith-to-microservices | [MM2](MM2.md#uc-framework-upgrade-monolith-to-microservices), [MM3](MM3.md#uc-framework-upgrade-monolith-to-microservices), [MM4](MM4.md#uc-framework-upgrade-monolith-to-microservices), [MM5](MM5.md#uc-framework-upgrade-monolith-to-microservices), [MM9](MM9.md#uc-framework-upgrade-monolith-to-microservices), [MM10](MM10.md#uc-framework-upgrade-monolith-to-microservices), [MM11](MM11.md#uc-framework-upgrade-monolith-to-microservices) |
| uc-legacy-modernization-cobol-to-java | [MM1](MM1.md#uc-legacy-modernization-cobol-to-java), [MM10](MM10.md#uc-legacy-modernization-cobol-to-java) |

## When to Use This Category

- Migration-focused audiences (enterprise modernization teams, platform engineering)
- Workshops demonstrating Devin's ability to handle complex, multi-file refactoring
- Full-day workshops where participants need substantial, meaty challenges
- The `uc-` prefixed repos were specifically curated for these challenges
- MM9 is designed for repetitive upgrade scenarios across multiple services (parallel sessions)
- MM10 combines MM1, MM2/MM3, and MM8 into one end-to-end modernization narrative
- MM11 is an **enterprise demo module** — one-shot tech debt remediation with long-term reasoning and provable deliverables
- See the [Enterprise Demo Track](../../events/enterprise-demo-track/README.md) for a lab sequence using SEC6 + SEC7 + MM11
- For monolith-to-microservices with **platform conformance and IaC**, see [DA8](../devops-automation/DA8.md) (DevOps category) — uses the .NET/Angular monolith with platform-engineering-shared-services as context

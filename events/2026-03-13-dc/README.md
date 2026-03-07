# Workshop: Hands-on Devin Workshop — Washington, DC

## Event Details

| | |
|---|---|
| **Date** | 2026-03-13 |
| **Location** | Washington, DC |
| **Host Organization** | *(customer)* |
| **Focus** | Technology modernization |
| **Duration** | ~4 hours (1 hour demo + 3 hours hands-on) |
| **Facilitator** | Brian Smitches, brian.smitches@cognition.ai |
| **Event Site** | https://partner-workshops.devinenterprise.com |
| **Audience** | Technology teams |

## Structure

This variant has two parts:

1. **Demo Session (1 hour)** — Facilitator-led demonstration of 3-4 use cases using Devin
2. **Hands-on Session (2-3 hours)** — Participants work through challenges independently

---

## Demo Use Cases (1 hour)

### UC1 — Legacy Modernization + Microservices + Data Source Migration

Demonstrate the full modernization journey: legacy code → modern tech stack, monolith → microservices, and old data warehouse → modern data source.

| | |
|---|---|
| **Module** | [C10 — Legacy Modernization Combined](../../modules/migration-modernization/mm-legacy-modernization-combined.md) |
| **Repositories** | [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java), [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices), [uc-data-source-migration-legacy-to-modern](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern) |
| **Demo Focus** | Show Devin rewriting legacy code to a new tech stack, breaking into microservices, and changing the data source from a legacy data warehouse (CDW-style, all-VARCHAR, denormalized) to a modern schema (normalized, proper types, FK constraints) based on documented data mappings |
| **Key Artifacts** | Java code replacing COBOL, extracted microservice with OpenAPI, modern JPA entities, migration documentation |
| **Testing Story** | Parity tests (COBOL output = Java output), API contract verification, golden-file comparison before/after data source migration |

### UC2 — Repetitive Framework Upgrades (Angular + Spring Boot)

Show how Devin handles the same upgrade pattern applied across multiple services — a common enterprise pain point.

| | |
|---|---|
| **Module** | [C9 — Repetitive Framework Upgrades](../../modules/migration-modernization/mm-repetitive-upgrades.md) |
| **Repositories** | [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) (Spring Boot 2→3), [ts-angular-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-angular-realworld-example-app) or [app_petclinic-angular](https://github.com/Cognition-Partner-Workshops/app_petclinic-angular) (Angular upgrade) |
| **Demo Focus** | Run parallel Devin sessions — one upgrading Spring Boot, one upgrading Angular — to show how repetitive tasks scale |
| **Key Artifacts** | Upgraded builds passing tests, documented breaking changes and resolutions |
| **Testing Story** | Build passes, all tests green, upgrade documentation in PR description |

### UC3 — Data Source Rewrite + App Reconnection

A focused demo on the data source migration workflow: take an existing app connected to a legacy data warehouse and rewire it to a modern data source using documented schema mappings.

| | |
|---|---|
| **Module** | [C8 — Data Source Migration](../../modules/migration-modernization/mm-data-source-migration.md) |
| **Repository** | [uc-data-source-migration-legacy-to-modern](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern) |
| **Also relevant** | [uc-dw-migration-teradata-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-dw-migration-teradata-to-snowflake) (for SQL translation portion) |
| **Demo Focus** | (1) Show Devin creating modern entities from the target schema, (2) writing a migration utility that transforms legacy data, (3) rewiring the application's service layer to point to the new data source |
| **Key Artifacts** | Modern JPA entities, data migration script, rewired service layer, validation results |
| **Testing Story** | API responses identical before and after migration (golden-file validation) |

### UC4 — New Feature Development (as time permits)

If time allows, demonstrate Devin building a new feature from a requirements prompt.

| | |
|---|---|
| **Module** | [D6 — New Feature Development](../../modules/feature-development/fd-new-feature.md) |
| **Repository** | [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) or [ts-java-spring-boot-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-java-spring-boot-realworld-example-app) |
| **Demo Focus** | Prompt engineering for CRUD feature development — show how specific requirements lead to better outputs |
| **Key Artifacts** | New feature with backend + frontend + tests, PR with clean description |
| **Testing Story** | Unit tests for new endpoints, feature works end-to-end |

---

## Hands-on Session Challenges

After the demo, participants can work on any of the following challenges. They may replicate what they saw in the demo or explore other modules:

### Recommended Starting Points

| Use Case | Challenge | Module | Repo | Difficulty | Time |
|----------|-----------|--------|------|-----------|------|
| Modernization | COBOL → Java | [C1](../../modules/migration-modernization/mm-cobol-to-java.md) | uc-legacy-modernization-cobol-to-java | Advanced | 60 min |
| Upgrades | Spring Boot 2→3 | [C9](../../modules/migration-modernization/mm-repetitive-upgrades.md) | uc-framework-upgrade-monolith-to-microservices | Intermediate | 60 min |
| Data Migration | Legacy → Modern Schema | [C8](../../modules/migration-modernization/mm-data-source-migration.md) | uc-data-source-migration-legacy-to-modern | Intermediate | 60 min |
| Feature Dev | New CRUD Feature | [D6](../../modules/feature-development/fd-new-feature.md) | app_timesheet-client | Intermediate | 60 min |
| Security | CVE Remediation | [B1-B4](../../modules/security/README.md) | uc-cve-remediation-regulatory-compliance | Intermediate | 60 min |
| Quality | Unit Testing | [A2](../../modules/quality-engineering/qe-unit-testing.md) | Any | Beginner | 30 min |

### Full Module Catalog

Participants may also attempt any challenge from the full [module catalog](../../modules/). See the [Devin Features Appendix](../../modules/devin-features/README.md) for additional activities to discover.

---

## Repos Required

### For Demo (facilitator must have these set up)
- [x] uc-legacy-modernization-cobol-to-java
- [x] uc-framework-upgrade-monolith-to-microservices
- [x] uc-data-source-migration-legacy-to-modern
- [x] ts-angular-realworld-example-app (or app_petclinic-angular)
- [x] app_timesheet-client (or ts-java-spring-boot-realworld-example-app)

### For Hands-on (all should be accessible)
- [x] All repos listed above
- [x] uc-cve-remediation-regulatory-compliance
- [x] uc-dw-migration-teradata-to-snowflake
- [x] Any additional repos from [catalog](../../catalog/repos.md)

## Repo Duplication Notes

- `uc-framework-upgrade-monolith-to-microservices` and `uc-cve-remediation-regulatory-compliance` both originate from `spring-boot-realworld-example-app` (Cluster C1 in [catalog](../../catalog/repos.md)). They are intentionally separate repos so each use case gets an isolated starting point.
- `uc-legacy-modernization-cobol-to-java` originates from `aws-mainframe-modernization-carddemo` (Cluster C2).

## Context

- **Industry:** Financial services
- **Key Pain Points Addressed:**
  - Legacy mainframe applications needing modernization
  - Repetitive framework upgrades across many microservices
  - Data warehouse migration from legacy (CDW-style) to modern platforms
  - New feature development with prompt engineering
- **Domain Data:** Loan management (borrowers, loan accounts, products, payments)
- **Atlassian Integration Note:** Devin can integrate with Bitbucket, JIRA, and Confluence via MCP — can be discussed during Q&A
- **Reverse Engineering Note:** Devin can analyze ETL logic, generate documentation and code explanations — demonstrable with any repo during hands-on

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session. Key activities for this variant:

- [ ] Run parallel Devin sessions (UC2 demo)
- [ ] Create Knowledge from a session (after completing a migration)
- [ ] Use AskDevin to gather requirements (UC4)
- [ ] Review a Devin PR via GitHub (after any challenge)
- [ ] Provide feedback to steer Devin's behavior mid-session
- [ ] Take control of Devin's machine to verify results
- [ ] Have Devin produce a report with migration findings

## Post-Event

- [ ] Collect participant feedback
- [ ] Archive any event-specific branches
- [ ] Update challenge modules if issues were discovered
- [ ] Share session recordings/artifacts with participants

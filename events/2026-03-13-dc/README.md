# Workshop: Hands-on Devin Workshop — Washington, DC

## Event Details

| | |
|---|---|
| **Date** | 2026-03-13 |
| **Location** | Washington, DC |
| **Event Site** | https://partner-workshops.devinenterprise.com |

## Featured Labs

This event features 3 structured labs using purpose-built repositories, focused on technology modernization:

### Lab 1 — Framework Upgrade & Microservice Extraction (60 min)
- **Module:** [MM2 — Framework Upgrade](../../modules/migration-modernization/MM2.md#uc-framework-upgrade-monolith-to-microservices) + [MM3 — Containerization](../../modules/migration-modernization/MM3.md#uc-framework-upgrade-monolith-to-microservices)
- **Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)
- **Objective:** Take an older Java monolith (Java 11 + Spring Boot 2.6.3) and modernize it — upgrade the framework, extract a microservice, or both

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Upgrade uc-framework-upgrade-monolith-to-microservices from Java 11 + Spring Boot 2.6.3 to Java 17 + Spring Boot 3.2. Handle the javax to jakarta namespace migration, update Gradle build configuration, fix any deprecations, and ensure all tests pass. Open a PR with the changes.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the domain boundaries in uc-framework-upgrade-monolith-to-microservices? Which bounded context would be easiest to extract as a microservice?"*
- *"What's the best order to tackle the javax to jakarta migration, the Gradle plugin updates, and the deprecated API removals?"*
- Use the refined understanding to start a **second session** — try extracting a microservice, or upgrade with a different strategy

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to browse the architecture, domain model, and dependency graph. Use what you learn to try something different:
- Extract a different bounded context (Articles, Users, or Comments) as a containerized microservice
- Have Devin produce an architecture decision record (ADR) for how the monolith should be decomposed
- Run parallel sessions — one upgrading the framework, one extracting a service
- Try the Angular upgrade on a different repo alongside the Spring Boot upgrade

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the upgrade look complete? Are there files Devin missed?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"This still uses javax.servlet — please update to jakarta.servlet"* or *"Can you also add a Dockerfile?"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- Try leaving both general comments and inline code comments to see how Devin handles each

See the full challenge details for [MM2 — Framework Upgrade](../../modules/migration-modernization/MM2.md) and [MM3 — Containerization](../../modules/migration-modernization/MM3.md) for more ideas.

- **Target Outcomes (any of these count):**
  - Application builds and tests on Java 17+ / Spring Boot 3.x
  - One extracted microservice with its own Dockerfile and REST API
  - Docker Compose to run the full stack locally
  - Architecture decision record or migration report
  - PR with review comments and Devin's responses

### Lab 2 — Data Source Migration: Legacy → Modern Schema (60 min)
- **Module:** [MM8 — Data Source Migration](../../modules/migration-modernization/MM8.md#uc-data-source-migration-legacy-to-modern)
- **Repository:** [uc-data-source-migration-legacy-to-modern](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern)
- **Objective:** Take an existing loan management app connected to a legacy data warehouse (all-VARCHAR, denormalized, cryptic column names) and rewire it to a modern normalized schema using documented data mappings

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Review the legacy CDW schema in uc-data-source-migration-legacy-to-modern. Create modern JPA entities matching the target schema in data/modern-schema/modern_tables.sql. Write a migration service that reads from legacy tables, transforms the data (parse dates, amounts, expand codes per data/mappings/column_mappings.md), and inserts into modern tables. Then update LoanService.java to read from modern repositories instead of legacy ones. Verify all API endpoints return the same data. Open a PR.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the data type mismatches between the legacy and modern schemas? Which transformations are most error-prone?"*
- *"How should we handle the code abbreviations (ACT, CLO, DFT, FRB) — enum mapping, lookup table, or inline conversion?"*
- Use the analysis to plan a more robust migration with error handling and validation

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to understand the loan service domain model and API contracts. Use what you learn to try different approaches:
- Have Devin add a **dual-read feature flag** that can switch between legacy and modern data sources at runtime
- Ask Devin to generate **validation queries** that compare row counts and field totals between legacy and modern tables
- Try having Devin produce a **complete data lineage map** showing which API endpoints read from which tables
- Ask Devin to add **error handling** for malformed legacy data (null values, bad dates, unparseable amounts)

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — are the data type conversions correct? Does the migration handle edge cases (null values, malformed dates)?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Can you add a dual-read feature flag that switches between legacy and modern data sources at runtime?"* or *"The date parsing doesn't handle two-digit years — please fix"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- Try leaving inline comments on specific data transformation code

See the full challenge details for [MM8 — Data Source Migration](../../modules/migration-modernization/MM8.md) for more ideas.

- **Target Outcomes (any of these count):**
  - Modern JPA entities with proper types and FK relationships
  - Data migration script that transforms and loads all records
  - Service layer rewired to modern repositories (no more string parsing)
  - Golden-file validation: API responses match pre-migration baseline
  - `DATA_SOURCE_MIGRATION_NOTES.md` documenting decisions
  - PR with review comments and Devin's responses

### Lab 3 — Legacy Modernization: COBOL → Java (60 min)
- **Module:** [MM1 — COBOL to Java](../../modules/migration-modernization/MM1.md#uc-legacy-modernization-cobol-to-java)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Explore a real COBOL mainframe application and use Devin to modernize part of it — you choose the scope, target, and approach

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Analyze the COBOL program CBACT01C.cbl in uc-legacy-modernization-cobol-to-java. Understand its business logic, data structures (copybooks), and I/O operations. Rewrite it as a Java 17+ application using modern idioms. Create JUnit tests that verify the Java version produces identical results to the COBOL version for a set of sample inputs. Open a PR with the Java code and tests.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the most complex COBOL programs in uc-legacy-modernization-cobol-to-java and what do they do?"*
- *"What would be the best Java architecture for migrating CBTRN01C.cbl? Consider Spring Boot, plain Java, or Kotlin."*
- Use the refined understanding to start a **second session** with a more targeted prompt

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to browse the auto-generated architecture diagrams and module explanations. Use what you learn to try something different:
- Pick a different COBOL program and compare how Devin handles it
- Try migrating to a different target (Kotlin, Python, Spring Boot service)
- Ask Devin to reverse-engineer business rules or generate a data dictionary
- Run parallel sessions migrating the same program to two different targets

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the Java code faithfully represent the COBOL business logic?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"The packed decimal conversion doesn't handle negative values"* or *"Can you also generate a data dictionary for the copybooks?"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- Try leaving both general comments and inline code comments to see how Devin handles each

See the [full challenge details](../../modules/migration-modernization/MM1.md) for more ideas — there is no single right answer.

- **Target Outcomes (any of these count):**
  - Java/Kotlin/Python source code + tests with a working build
  - Parity tests: modern output matches COBOL output for provided fixtures
  - `MIGRATION_NOTES.md` describing field mappings and decisions
  - Technical documentation, data dictionary, or migration plan for the repo
  - PR with review comments and Devin's responses

## Additional Challenges

Participants may also attempt any challenge from the full [module catalog](../../modules/) as creative inspiration. Recommended extras:

| Challenge | Module | Repo | Difficulty | Time |
|-----------|--------|------|-----------|------|
| CVE Remediation | [SEC1-SEC4](../../modules/security/README.md) | uc-cve-remediation-regulatory-compliance | Intermediate | 60 min |
| New CRUD Feature | [FD6](../../modules/feature-development/FD6.md) | app_timesheet | Intermediate | 60 min |
| DW Migration: Teradata → Snowflake | [MM7](../../modules/migration-modernization/MM7.md) | uc-dw-migration-teradata-to-snowflake | Intermediate | 60 min |
| Unit Testing | [QE2](../../modules/quality-engineering/QE2.md) | Any | Beginner | 30 min |

## Repos Required on Devin's Machine

- [x] uc-framework-upgrade-monolith-to-microservices
- [x] uc-data-source-migration-legacy-to-modern
- [x] uc-legacy-modernization-cobol-to-java
- [x] uc-cve-remediation-regulatory-compliance

## Repo Duplication Notes

- `uc-framework-upgrade-monolith-to-microservices` and `uc-cve-remediation-regulatory-compliance` both originate from `spring-boot-realworld-example-app` (Cluster C1 in [catalog](../../catalog/repos.md)). They are intentionally separate repos so each use case gets an isolated starting point.
- `uc-legacy-modernization-cobol-to-java` originates from `aws-mainframe-modernization-carddemo` (Cluster C2).

## Context

- **Audience:** Technology teams
- **Focus:** Technology modernization — framework upgrades, data source migration, and legacy COBOL modernization
- **Domain Data:** Loan management (borrowers, loan accounts, products, payments)

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session.

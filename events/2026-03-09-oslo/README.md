# Workshop: Hands-on Devin Workshop — Oslo

## Event Details

| | |
|---|---|
| **Date** | 2026-03-09 |
| **Location** | Oslo, Norway |
| **Host Organization** | *(customer)* |
| **Duration** | 14:00–15:30 CET (90 minutes) |
| **Facilitator** | Brian Smitches, brian.smitches@cognition.ai |
| **Event Site** | https://partner-workshops.devinenterprise.com |

## Featured Labs

This event features 4 structured labs using purpose-built repositories:

### Lab 1 — Legacy Modernization: COBOL → Java (60 min)
- **Module:** [mm-cobol-to-java](../../modules/migration-modernization/mm-cobol-to-java.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Explore a real COBOL mainframe application and use Devin to modernize part of it — you choose the scope, target, and approach

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Analyze the COBOL program CBACT01C.cbl in uc-legacy-modernization-cobol-to-java. Understand its business logic, data structures (copybooks), and I/O operations. Rewrite it as a Java 17+ application using modern idioms. Create JUnit tests that verify the Java version produces identical results to the COBOL version for a set of sample inputs. Open a PR with the Java code and tests.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and try:
- *"What are the most complex COBOL programs in uc-legacy-modernization-cobol-to-java and what do they do?"*
- *"What would be the best Java architecture for migrating CBTRN01C.cbl? Consider Spring Boot, plain Java, or Kotlin."*
- Use the refined understanding to start a **second session** with a more targeted prompt

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to browse the auto-generated architecture diagrams and module explanations. Use what you learn to try something different:
- Pick a different COBOL program and compare how Devin handles it
- Try migrating to a different target (Kotlin, Python, Spring Boot service)
- Ask Devin to reverse-engineer business rules or generate a data dictionary
- Run parallel sessions migrating the same program to two different targets

See the [full challenge details](../../modules/migration-modernization/mm-cobol-to-java.md) for more ideas — there is no single right answer.

- **Target Outcomes (any of these count):**
  - Java/Kotlin/Python source code + tests with a working build
  - Parity tests: modern output matches COBOL output for provided fixtures
  - `MIGRATION_NOTES.md` describing field mappings and decisions
  - Technical documentation, data dictionary, or migration plan for the repo

### Lab 2 — Framework Upgrade & Refactor: Monolith → Microservices (60 min)
- **Module:** [mm-framework-upgrade](../../modules/migration-modernization/mm-framework-upgrade.md) + [mm-containerization](../../modules/migration-modernization/mm-containerization.md)
- **Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)
- **Objective:** Start with an older Java monolith (Java 11 + Spring Boot 2.6.3). Upgrade the runtime and extract one bounded context into a microservice, while keeping the system working
- **Target Outcomes:**
  - Application builds and tests on Java 17+
  - Framework upgraded to Spring Boot 3.x
  - One extracted microservice with a stable API contract (OpenAPI)
  - Strangler integration: monolith routes calls to the new service
  - Docker Compose to run locally

### Lab 3 — CVE Remediations & Regulatory Code Standards (60 min)
- **Module:** [sec-upgrade-dependencies](../../modules/security/sec-upgrade-dependencies.md) + [sec-remediate-vulnerabilities](../../modules/security/sec-remediate-vulnerabilities.md) + [sec-shift-left](../../modules/security/sec-shift-left.md)
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Objective:** A service has accumulated vulnerable dependencies and inconsistent coding standards. Remediate high-priority vulnerabilities and add automated compliance checks aligned with regulatory expectations
- **Target Outcomes:**
  - SBOM generated (CycloneDX or SPDX) with dependency vulnerability scanning
  - High/critical vulnerabilities patched or upgraded
  - Secure coding checks added: format/lint + static analysis (SAST)
  - CI gating: builds fail on policy violations
  - `SECURITY_REMEDIATION.md` with before/after evidence

### Lab 4 — DW Migration: Teradata → Snowflake (60 min)
- **Module:** [mm-dw-migration-teradata](../../modules/migration-modernization/mm-dw-migration-teradata.md)
- **Repository:** [uc-dw-migration-teradata-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-dw-migration-teradata-to-snowflake)
- **Objective:** A Teradata-based data warehouse needs to be migrated to Snowflake. Use Devin to accelerate code conversion, build a migration runbook, and set up validation
- **Target Outcomes:**
  - Inventory of Teradata assets (tables, views, stored procedures, macros)
  - Converted Snowflake DDL/DML for a selected subset
  - `MIGRATION_RUNBOOK.md` with loading approach documented
  - Validation tests: row counts, checksums, business-level reconciliations
  - `SQL_TRANSLATION_NOTES.md` mapping Teradata→Snowflake differences

## Additional Challenges

Participants may also attempt any challenge from the full [module catalog](../../modules/) as creative inspiration. The labs above are the primary structured activities.

## Repos Required on Devin's Machine

- [x] uc-legacy-modernization-cobol-to-java
- [x] uc-framework-upgrade-monolith-to-microservices
- [x] uc-cve-remediation-regulatory-compliance
- [x] uc-dw-migration-teradata-to-snowflake

## Repo Duplication Notes

Labs 2 and 3 both originate from `spring-boot-realworld-example-app` (Cluster C1 in [catalog](../../catalog/repos.md)). They are intentionally separate repos so each lab gets an isolated starting point with no risk of cross-contamination during the workshop.

## Context

- **Audience:** Banking technology teams
- **Domain relevance:** Lab 4 uses Norwegian locale data (names, addresses, NOK currency) for relevance to the audience
- **Banking focus:** Labs 1 and 4 use financial/banking domain data (credit card processing, retail banking analytics)

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the day.

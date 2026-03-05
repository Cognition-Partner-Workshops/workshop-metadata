# Workshop: Hands-on Devin Workshop — Oslo

## Event Details

| | |
|---|---|
| **Date** | 2026-03-09 |
| **Location** | Oslo, Norway |
| **Host Organization** | *(customer)* |
| **Duration** | Full day |
| **Facilitator** | Brian Smitches, brian.smitches@cognition.ai |
| **Event Site** | https://partner-workshops.devinenterprise.com |

## Featured Labs

This event features 4 structured labs using purpose-built repositories:

### Lab 1 — Legacy Modernisation: COBOL to Java
- **Module:** [mm-cobol-to-java](../../modules/migration-modernization/mm-cobol-to-java.md)
- **Repository:** [uc-legacy-modernisation-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernisation-cobol-to-java)
- **Objective:** Migrate a COBOL batch program from the CardDemo application to Java 17+ with parity tests

### Lab 2 — Framework Upgrade and Refactor: Monolith to Microservices
- **Module:** [mm-framework-upgrade](../../modules/migration-modernization/mm-framework-upgrade.md) + [mm-containerization](../../modules/migration-modernization/mm-containerization.md)
- **Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)
- **Objective:** Upgrade Java 11 / Spring Boot 2.6.3 to Java 17+ / Spring Boot 3.x, extract a microservice

### Lab 3 — CVE Remediations and Regulatory Code Standards
- **Module:** [sec-upgrade-dependencies](../../modules/security/sec-upgrade-dependencies.md) + [sec-remediate-vulnerabilities](../../modules/security/sec-remediate-vulnerabilities.md) + [sec-shift-left](../../modules/security/sec-shift-left.md)
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Objective:** Remediate vulnerable dependencies, add SBOM/SAST/CI gating

### Lab 4 — DW Migration: Teradata to Snowflake
- **Module:** [mm-dw-migration-teradata](../../modules/migration-modernization/mm-dw-migration-teradata.md)
- **Repository:** [uc-dw-migration-teradata-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-dw-migration-teradata-to-snowflake)
- **Objective:** Convert Teradata DDL/DML to Snowflake, build migration runbook, implement validation

## Additional Challenges

Participants may also attempt any challenge from the full [module catalog](../../modules/) as creative inspiration. The labs above are the primary structured activities.

## Repos Required on Devin's Machine

- [x] uc-legacy-modernisation-cobol-to-java
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

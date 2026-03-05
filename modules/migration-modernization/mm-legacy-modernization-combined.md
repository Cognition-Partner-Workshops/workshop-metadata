# C10 — Legacy Modernization with Microservices and Data Source Migration

## Challenge

A combined modernization challenge that mirrors a real enterprise scenario: take a legacy application, rewrite it to a modern tech stack, break it into microservices, and migrate its data source from a legacy data warehouse to a modern schema — all while keeping the system functional.

This module combines three separate concerns into one end-to-end narrative:
1. **Legacy → Modern Tech Stack** (language/framework migration)
2. **Monolith → Microservices** (architectural decomposition)
3. **Legacy Data Source → Modern Data Source** (schema migration + app reconnection)

## Repositories

| Step | Repository | Purpose |
|------|-----------|---------|
| Legacy → Modern | [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java) | COBOL mainframe app → Java 17+ |
| Monolith → Microservices | [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) | Spring Boot monolith → extract microservice |
| Data Source Migration | [uc-data-source-migration-legacy-to-modern](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern) | Legacy CDW schema → modern normalized schema |

## Task

**Phase 1 — Tech Stack Migration (20 min):**
Select a COBOL program from `uc-legacy-modernization-cobol-to-java` and have Devin rewrite it to Java 17+. Focus on one batch program with clear inputs/outputs.

**Phase 2 — Microservice Extraction (20 min):**
Using `uc-framework-upgrade-monolith-to-microservices`, upgrade from Spring Boot 2.6.3 → 3.x and extract one bounded context (e.g., article management) into a standalone microservice with its own API contract.

**Phase 3 — Data Source Migration (20 min):**
Using `uc-data-source-migration-legacy-to-modern`, create modern JPA entities from the target schema, write a migration utility, and rewire the loan service to read from modern tables instead of legacy CDW tables.

## Target Outcomes

- Java source code replacing COBOL with parity tests
- Spring Boot 3.x microservice extracted from monolith with OpenAPI contract
- Modern database entities with proper types replacing all-VARCHAR legacy tables
- API endpoints returning identical data after migration
- Migration documentation covering all three phases

## Sample Prompt (Phase 3 — most commonly demoed)

> Review the legacy CDW schema in uc-data-source-migration-legacy-to-modern. The current app reads from denormalized tables where everything is VARCHAR. Create modern JPA entities matching data/modern-schema/modern_tables.sql with proper types (LocalDate, BigDecimal, Long). Write a migration service that transforms legacy data per data/mappings/column_mappings.md. Rewire LoanService.java to use modern repositories. Verify API responses match. Open a PR.

## What Participants Will Learn

- How Devin handles multi-phase modernization projects
- The pattern of "migrate → verify → proceed" applied across tech stack, architecture, and data
- How data source migration requires both schema work AND application rewiring
- Testing strategies: parity tests, golden-file comparison, API contract verification

## Devin Features Exercised

- Multi-language understanding (COBOL → Java)
- Large-scale refactoring (monolith → microservices)
- Schema comprehension and data transformation
- Parallel session execution (run all 3 phases simultaneously)
- PR creation with comprehensive migration documentation

## Difficulty

Advanced (combined); Individual phases are Intermediate

## Estimated Time

60 minutes (all 3 phases) or 20 minutes per phase individually

## Notes

- For a 1-hour demo, focus on Phase 3 (data source migration) as it's the most visually demonstrable
- Phases can be run as parallel Devin sessions to show the scale advantage
- Each phase can also be done standalone using the individual modules: [C1](mm-cobol-to-java.md), [C2/C3](mm-framework-upgrade.md), [C8](mm-data-source-migration.md)

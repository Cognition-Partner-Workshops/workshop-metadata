# C8 — Data Source Migration: Legacy to Modern

## Challenge

Migrate a running application's data source from a legacy data warehouse schema (denormalized, all-VARCHAR, cryptic column names) to a modern normalized schema with proper types, foreign keys, and clear naming — while keeping the API endpoints functioning identically.

## Repository

- **Primary:** [uc-data-source-migration-legacy-to-modern](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern)
- **Source:** Scaffolded from scratch — loan management domain
- **License:** MIT

## Repo Contents

| Directory | Contents |
|-----------|---------|
| `src/main/java/` | Spring Boot 3.2 / Java 17 loan service application |
| `src/main/resources/` | Legacy schema DDL, seed data, application config |
| `data/legacy-schema/` | Documentation of legacy CDW tables |
| `data/modern-schema/` | Target modern schema DDL |
| `data/mappings/` | Column-level mapping documentation (legacy → modern) |
| `docs/` | Migration task breakdown |

## Legacy Schema Characteristics

The app currently reads from legacy CDW-style tables that exhibit common data warehouse antipatterns:

- **All-VARCHAR typing** — dates as `MM/DD/YYYY` strings, amounts as `"285,000"` strings
- **Cryptic column names** — `BORR_FST_NM`, `LN_CURR_BAL`, `PMT_ESCROW_AMT`
- **Denormalized** — borrower fields duplicated inside loan account records
- **No foreign keys** — relationships implied but not enforced
- **Code abbreviations** — `ACT`, `CLO`, `DFT`, `FRB` for status values

## Task

1. **Review** the legacy schema and column mappings in `data/`
2. **Create** modern JPA entities with proper Java types (`LocalDate`, `BigDecimal`, `Long`)
3. **Write** a data migration utility that reads legacy → transforms → writes modern
4. **Rewire** the service layer to read from modern tables instead of legacy tables
5. **Validate** that API responses are identical before and after migration
6. **Document** migration decisions in `DATA_SOURCE_MIGRATION_NOTES.md`

## Target Outcomes

- Modern JPA entities with proper types and FK relationships
- Data migration script that transforms and loads all records
- Service layer rewired to modern repositories (no more string parsing)
- Golden-file validation: API responses match pre-migration baseline
- `DATA_SOURCE_MIGRATION_NOTES.md` documenting decisions

## Sample Prompt

> Review the legacy CDW schema in uc-data-source-migration-legacy-to-modern. Create modern JPA entities matching the target schema in data/modern-schema/modern_tables.sql. Write a migration service that reads from legacy tables, transforms the data (parse dates, amounts, expand codes per data/mappings/column_mappings.md), and inserts into modern tables. Then update LoanService.java to read from modern repositories instead of legacy ones. Verify all API endpoints return the same data. Open a PR.

## What Participants Will Learn

- How Devin understands and maps between legacy and modern schemas
- How Devin handles data type conversions (string → proper types)
- The importance of golden-file testing during data source migrations
- How to validate migration correctness at the API level

## Devin Features Exercised

- Schema comprehension and entity generation
- Data transformation logic
- Service layer refactoring
- Test generation for migration validation
- PR creation with migration documentation

## Difficulty

Intermediate

## Estimated Time

60 minutes

## Notes

- The app uses H2 in-memory database — both legacy and modern schemas can coexist in the same instance
- The column mapping doc in `data/mappings/column_mappings.md` provides the complete field-level reference
- Bonus: implement a feature flag for dual-read mode (switch between data sources at runtime)

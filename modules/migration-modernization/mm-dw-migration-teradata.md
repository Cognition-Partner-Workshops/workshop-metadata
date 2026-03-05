# C7 — Data Warehouse Migration: Teradata to Snowflake

## Challenge

Convert Teradata DDL/DML, stored procedures, and macros to Snowflake-compatible SQL. Build a migration runbook and implement validation tests.

## Repository

- **Primary:** [uc-dw-migration-teradata-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-dw-migration-teradata-to-snowflake)
- **Source:** Scaffolded from scratch — retail banking analytics domain (Norwegian locale)
- **License:** MIT

## Repo Contents

| Directory | Contents |
|-----------|---------|
| `ddl/tables/` | 7 Teradata DDL files (5 dimensions + 2 fact tables) |
| `ddl/views/` | 3 Teradata views (customer 360, regulatory, branch performance) |
| `dml/stored_procedures/` | 3 stored procedures (daily load, monthly snapshot, SCD Type 2) |
| `dml/macros/` | 3 macros (daily balance check, customer history, AML screening) |
| `dml/scripts/` | 2 BTEQ scripts (daily ETL orchestration, monthly report extraction) |
| `data/seed/` | 4 CSV seed files (customers, accounts, branches, products — Norwegian data) |
| `data/validation/` | Checksum queries and expected row counts |
| `schemas/` | ER diagram |
| `docs/` | Teradata features reference with Snowflake equivalents |

## Teradata-Specific Features to Migrate

The repo deliberately uses Teradata-specific SQL features that require translation:

| Feature | Snowflake Equivalent |
|---------|---------------------|
| `SET TABLE` / `MULTISET TABLE` | Standard `CREATE TABLE` |
| `PRIMARY INDEX (PI)` | `CLUSTER BY` (optional) |
| `PARTITION BY RANGE_N` | Micro-partitioning + `CLUSTER BY` |
| `COMPRESS` | Automatic compression |
| `NOT CASESPECIFIC` | `COLLATE 'en-ci'` or `UPPER()`/`LOWER()` |
| `FORMAT` on columns | `TO_CHAR()` in queries |
| `COLLECT STATISTICS` | Not needed (automatic) |
| `QUALIFY` | Supported natively |
| `ZEROIFNULL` / `NULLIFZERO` | Supported natively |
| `CSUM()` (cumulative sum) | `SUM() OVER (ORDER BY ...)` |
| `MAVG()` (moving average) | `AVG() OVER (ROWS BETWEEN ...)` |
| `HASHROW()` | `HASH()` |
| `SEL` (shorthand) | `SELECT` |
| `REPLACE MACRO` | Convert to stored procedure |
| `VOLATILE TABLE` | `CREATE TEMPORARY TABLE` |
| `ACTIVITY_COUNT` | `SQLROWCOUNT` |
| BTEQ `.LOGON`, `.EXPORT`, `.IF` | SnowSQL or stored procedures |

## Task

1. **Inventory** Teradata assets (tables, views, stored procedures, macros, BTEQ scripts)
2. **Convert** DDL/DML for a selected subset to Snowflake-compatible SQL
3. **Build** a `MIGRATION_RUNBOOK.md` with loading approach documented
4. **Validate** with row counts, checksums, and business-level reconciliations
5. **Document** translation decisions in `SQL_TRANSLATION_NOTES.md`

## Sample Prompt

> Analyze all Teradata DDL in uc-dw-migration-teradata-to-snowflake/ddl/. Convert every table and view to Snowflake-compatible SQL, handling all Teradata-specific features (SET/MULTISET, PI, PPI, COMPRESS, CASESPECIFIC, FORMAT, QUALIFY, CSUM, MAVG). Place converted files in a new snowflake/ directory mirroring the original structure. Create a MIGRATION_RUNBOOK.md documenting every translation decision. Open a PR.

## What Participants Will Learn

- How Devin understands Teradata-specific SQL dialects
- How Devin translates vendor-specific features to Snowflake equivalents
- Data warehouse migration methodology (inventory → convert → validate)
- The importance of validation queries in migration projects

## Devin Features Exercised

- SQL dialect comprehension
- Large-scale SQL translation
- Documentation generation
- PR creation with migration artifacts

## Difficulty

Intermediate to Advanced — requires some familiarity with data warehouse concepts.

## Estimated Time

90 minutes

## Notes

- Refer to `docs/teradata_features_reference.md` in the repo for a complete mapping table
- The `data/validation/checksum_queries.sql` file provides Teradata-side validation queries that need Snowflake equivalents
- The seed data uses Norwegian locale (names, addresses, currency NOK) for the Oslo workshop context

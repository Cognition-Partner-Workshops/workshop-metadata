# MM7

## Repositories

- [uc-dw-migration-teradata-to-snowflake](#uc-dw-migration-teradata-to-snowflake)

---

## Challenge

Convert Teradata DDL/DML, stored procedures, and macros to Snowflake-compatible SQL. Build a migration runbook and implement validation tests.

## Teradata-Specific Features to Migrate

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

## Target Outcomes

- Snowflake-compatible DDL/DML for all converted objects
- `MIGRATION_RUNBOOK.md` with loading approach documented
- Validation queries with row counts, checksums, and business-level reconciliations
- `SQL_TRANSLATION_NOTES.md` documenting every translation decision
- PR with all migration artifacts

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

Intermediate to Advanced

## Estimated Time

60 minutes

## Notes

- Refer to `docs/teradata_features_reference.md` in the repo for a complete mapping table
- The `data/validation/checksum_queries.sql` file provides Teradata-side validation queries that need Snowflake equivalents
- The seed data uses Norwegian locale (names, addresses, currency NOK)

---

## <a id="uc-dw-migration-teradata-to-snowflake"></a>uc-dw-migration-teradata-to-snowflake

**Repository:** [uc-dw-migration-teradata-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-dw-migration-teradata-to-snowflake)

Teradata-based retail banking analytics data warehouse. 7 DDL tables (5 dimensions + 2 fact tables), 3 views, 3 stored procedures, 3 macros, 2 BTEQ scripts, seed data, and validation queries.

### Step 1: Get Started Fast

> Analyze all Teradata DDL in uc-dw-migration-teradata-to-snowflake/ddl/. Convert every table and view to Snowflake-compatible SQL, handling all Teradata-specific features (SET/MULTISET, PI, PPI, COMPRESS, CASESPECIFIC, FORMAT, QUALIFY, CSUM, MAVG). Place converted files in a new snowflake/ directory mirroring the original structure. Create a MIGRATION_RUNBOOK.md documenting every translation decision. Open a PR.

### Step 2: Level Up with AskDevin

- *"What Teradata-specific features are used across the DDL and DML files? Which ones require the most complex translation?"*
- *"What's the best strategy for converting the BTEQ scripts — SnowSQL, stored procedures, or an orchestration tool like Airflow?"*
- Use the analysis to plan a more comprehensive migration that includes stored procedures and macros

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the data warehouse schema relationships and ETL flow. Use this to ensure the migration preserves data lineage and business semantics.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — do the Snowflake DDL files compile? Are Teradata-specific features correctly translated?
- **Leave a comment** asking Devin to also convert the stored procedures and macros
- **Watch Devin respond** and push a follow-up commit

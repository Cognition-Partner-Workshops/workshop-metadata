# Informatica PowerCenter to Snowflake Migration

## Repositories

- [ts-informatica-powercenter](#ts-informatica-powercenter)
- [uc-dw-migration-teradata-to-snowflake](#uc-dw-migration-teradata-to-snowflake) *(reference for Snowflake DDL patterns)*

---

## Challenge

Convert Informatica PowerCenter ETL mappings and Oracle-based data flows to a Snowflake-compatible architecture. Participants will extract transformation logic from PowerCenter XML exports and re-implement it as Snowflake SQL (stored procedures, tasks, streams) or dbt models, replacing the legacy Oracle source/target schemas with Snowflake equivalents.

## Informatica-to-Snowflake Translation Patterns

| PowerCenter Concept | Snowflake Equivalent |
|---------------------|---------------------|
| Source Qualifier (Oracle SQL) | Snowflake `SELECT` / external table |
| Expression Transformation | Snowflake SQL expressions / `CASE` / UDFs |
| Filter Transformation | `WHERE` clause |
| Lookup Transformation | `JOIN` or `MERGE` |
| Aggregator Transformation | `GROUP BY` with window functions |
| Joiner Transformation | `JOIN` (inner, outer, cross) |
| Sorter Transformation | `ORDER BY` / `CLUSTER BY` |
| Sequence Generator | `AUTOINCREMENT` / Snowflake sequence |
| Router Transformation | `CASE` with `INSERT` into multiple targets |
| Update Strategy | `MERGE INTO ... WHEN MATCHED / NOT MATCHED` |
| Session (scheduling) | Snowflake Task with CRON schedule |
| Workflow (orchestration) | Snowflake Task DAG or Airflow DAG |
| `pmcmd` (CLI invocation) | Snowflake Task API / SnowSQL |
| Flat-file Source (VSAM/CSV) | Snowflake Stage + `COPY INTO` / Snowpipe |
| Pre/Post-session SQL | Task predecessor/successor or stored procedure |

## Target Outcomes

- Snowflake DDL for all source and target tables currently defined in Oracle
- Snowflake stored procedures or dbt models implementing the transformation logic from each PowerCenter mapping
- Data loading strategy using Snowflake Stages and `COPY INTO` for flat-file sources
- Orchestration replacement: Snowflake Task DAG or Airflow DAG replacing `pmcmd` shell workflows
- `INFORMATICA_MIGRATION_RUNBOOK.md` documenting every translation decision, risk, and validation approach
- PR with all migration artifacts

## What Participants Will Learn

- How Devin extracts transformation logic from PowerCenter XML and translates it to SQL
- How Devin maps Informatica concepts (Sessions, Workflows, Mappings) to Snowflake-native equivalents (Tasks, Stored Procedures, Stages)
- How to handle Oracle-to-Snowflake SQL dialect differences during migration
- The importance of a migration runbook documenting every decision for auditability

## Devin Features Exercised

- Complex XML parsing and transformation logic extraction
- Cross-platform SQL translation (Oracle to Snowflake)
- ETL architecture redesign (batch PowerCenter to cloud-native Snowflake)
- Documentation generation (migration runbook)
- Multi-repo awareness (referencing Snowflake DDL patterns from companion repo)
- PR creation with migration artifacts

## Difficulty

Advanced

## Estimated Time

75 minutes

## Notes

- The PowerCenter estate uses Oracle as both source and target — the Snowflake migration involves both the ETL logic AND the database platform
- Reference `uc-dw-migration-teradata-to-snowflake` for established Snowflake DDL patterns and validation query approaches
- The flat-file sources (VSAM/CSV in the XML exports) are good candidates for Snowflake external stages and Snowpipe
- Pre/post-load SQL scripts (`ehrp2biis_preload`, `ehrp2biis_afterload.sql`) contain Oracle PL/SQL that must also be converted to Snowflake stored procedures

---

## <a id="ts-informatica-powercenter"></a>ts-informatica-powercenter

**Repository:** [ts-informatica-powercenter](https://github.com/Cognition-Partner-Workshops/ts-informatica-powercenter)

Informatica PowerCenter 9.6.1 XML exports for a government HR data integration system (EHRP-to-BIIS). Contains 11 mapping exports totaling 117K lines of XML with Oracle source/target definitions, Expression/Filter/Lookup/Aggregator transformations, sessions, and workflows. Also includes Oracle SQL pre/post-load scripts and shell-based `pmcmd` orchestration.

### Step 1: Paste into Devin

> Analyze the PowerCenter XML exports in ts-informatica-powercenter/XML/ — focus on the CPM mapping (the largest and most complex, 33K lines). Extract all SOURCE definitions and create equivalent Snowflake DDL (CREATE TABLE statements with appropriate Snowflake data types replacing Oracle types). Then extract the MAPPING transformation chain and re-implement the ETL logic as a Snowflake stored procedure. For flat-file sources (VSAM/CSV defined in the XML), create a Snowflake Stage and COPY INTO loading pattern. Convert the pre/post-load Oracle SQL (ehrp2biis_preload, ehrp2biis_afterload.sql) to Snowflake stored procedures. Create an INFORMATICA_MIGRATION_RUNBOOK.md documenting each translation. Open a PR.

### Step 2: Research with Ask Devin

- *"What Oracle-specific SQL features are used in the pre/post-load scripts (ehrp2biis_preload, ehrp2biis_afterload.sql)? Which ones need special handling for Snowflake (e.g., PL/SQL procedures, sequences, SPOOL commands)?"*
- *"What transformation types does the CPM mapping use, and what's the best Snowflake equivalent for each — inline SQL, stored procedure, or dbt model?"*
- Use the analysis to decide whether a stored-procedure or dbt approach is more appropriate for each mapping's complexity

### Step 3 (Optional): Read the DeepWiki

Open the DeepWiki page for both ts-informatica-powercenter and uc-dw-migration-teradata-to-snowflake. Use the Teradata-to-Snowflake migration as a reference for Snowflake DDL conventions and validation patterns, then apply them to the Informatica migration.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the Snowflake DDL correctly translate Oracle data types? Do the stored procedures preserve the transformation logic from the PowerCenter mappings?
- **Leave a comment** asking Devin to also convert the remaining mappings (CPM_AFPS, CPM_CDC, CPM_NIH, CPM_OIG) and add Snowflake Task definitions for orchestration
- **Watch Devin respond** and push a follow-up commit

---

## <a id="uc-dw-migration-teradata-to-snowflake"></a>uc-dw-migration-teradata-to-snowflake

**Repository:** [uc-dw-migration-teradata-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-dw-migration-teradata-to-snowflake)

Teradata-based retail banking analytics data warehouse with Snowflake migration artifacts. Used here as a **reference** for Snowflake DDL conventions, validation query patterns, and migration runbook structure — not as the primary challenge target.

### How to Use as Reference

> When working on the Informatica-to-Snowflake migration, review the Snowflake DDL and validation queries in uc-dw-migration-teradata-to-snowflake for established patterns. Apply the same conventions (naming, data types, clustering keys) and validation approach (row counts, checksums, business-level reconciliations) to the Informatica migration artifacts.

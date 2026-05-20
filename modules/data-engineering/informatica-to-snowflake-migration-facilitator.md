# Informatica PowerCenter to Snowflake Migration — Facilitator Notes

Companion to [informatica-to-snowflake-migration.md](informatica-to-snowflake-migration.md).

## Setup Notes

- The PowerCenter estate uses Oracle as both source and target — the Snowflake migration involves both the ETL logic AND the database platform
- Reference `uc-dw-migration-teradata-to-snowflake` for established Snowflake DDL patterns and validation query approaches
- The flat-file sources (VSAM/CSV in the XML exports) are good candidates for Snowflake external stages and Snowpipe
- Pre/post-load SQL scripts (`ehrp2biis_preload`, `ehrp2biis_afterload.sql`) contain Oracle PL/SQL that must also be converted to Snowflake stored procedures
- The CPM mapping is 33K lines of XML — the largest and most complex; suggest starting there for maximum learning value, or use a smaller mapping (Pseudossn, COMPTIME) for time-constrained sessions

## Recommended Exercise Flow

1. **Orientation (10 min):** Walk through the translation patterns table and explain the three migration layers (ETL logic, database platform, orchestration)
2. **Core exercise (50 min):** Run Step 1 — CPM mapping conversion with DDL, stored procedures, and loading patterns
3. **Extension (15 min):** Use Step 4 to have Devin convert additional mappings and add Snowflake Task orchestration

## Common Pitfalls

- Participants may try to run the generated Snowflake SQL — remind them this is a conversion exercise; no Snowflake account is needed
- Oracle PL/SQL in the pre/post-load scripts uses constructs (DBMS_OUTPUT, SPOOL, sequences) that need different handling in Snowflake
- The `pmcmd` shell orchestration pattern has no direct Snowflake equivalent — it requires architectural redesign to Snowflake Tasks or Airflow

## Prerequisite Checks

- Ensure both ts-informatica-powercenter and uc-dw-migration-teradata-to-snowflake repositories are connected in Devin's org settings
- DeepWiki indexing should be triggered for both repos before the session

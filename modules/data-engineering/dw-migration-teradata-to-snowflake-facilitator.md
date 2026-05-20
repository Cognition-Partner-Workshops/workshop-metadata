# DW Migration: Teradata to Snowflake — Facilitator Notes

Companion to [dw-migration-teradata-to-snowflake.md](dw-migration-teradata-to-snowflake.md).

## Setup Notes

- Refer to `docs/teradata_features_reference.md` in the repo for a complete mapping table
- The `data/validation/checksum_queries.sql` file provides Teradata-side validation queries that need Snowflake equivalents
- The seed data uses Norwegian locale (names, addresses, currency NOK)
- DDL is organized into `ddl/tables/` (7 files) and `ddl/views/` (3 files)
- DML is organized into `dml/stored_procedures/` (3 files) and `dml/macros/` (3 files)

## Recommended Exercise Flow

1. **Orientation (5 min):** Walk through the Teradata feature mapping table and repo structure
2. **Core exercise (40 min):** Run Step 1 — DDL conversion for tables and views
3. **Extension (15 min):** Use Step 4 to have Devin convert stored procedures and macros

## Common Pitfalls

- Participants may expect BTEQ scripts to have direct Snowflake equivalents — explain that BTEQ is an interactive tool and its logic needs restructuring for SnowSQL or stored procedures
- The `COMPRESS` keyword on Teradata columns can be safely removed — Snowflake handles compression automatically
- `NOT CASESPECIFIC` is a common Teradata default that participants may overlook — it affects string comparison behavior

## Prerequisite Checks

- Ensure the uc-dw-migration-teradata-to-snowflake repository is connected in Devin's org settings
- DeepWiki indexing should be triggered before the session

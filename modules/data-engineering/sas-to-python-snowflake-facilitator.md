# SAS to Python/Snowflake — Facilitator Notes

Companion to [sas-to-python-snowflake.md](sas-to-python-snowflake.md).

## Setup Notes

- The SAS macro library in ts-sas-legacy-analytics contains 90+ macros — only ~8 data transformation macros are the focus of this exercise
- Key transformation macros: `transpose.sas`, `subset_data.sas`, `compare.sas`, `dedup_string.sas`, `dedup_mstring.sas`
- Key export macros: `export_csv.sas`, `export_xlsx.sas`, `export_dbms.sas`
- Sample datasets in uc-data-migration-sas-to-snowflake are available in both SAS7BDAT and CSV formats — CSV files can be used for validation without a SAS installation
- Two migration scenarios (Scenario1, Scenario2) in `sample_data/` provide before/after snapshots for delta migration exercises
- The `lineage/SAS_lineage.json` file documents the expected data flow from SAS to Snowflake — use this as a validation reference

## Recommended Exercise Flow

1. **Orientation (5 min):** Walk through the SAS macro library structure and sample datasets
2. **Core exercise — Python conversion (30 min):** Run Step 1 for the ts-sas-legacy-analytics repo section
3. **Core exercise — Snowflake DDL (20 min):** Run Step 1 for the uc-data-migration-sas-to-snowflake repo section
4. **Research (5 min):** Use Ask Devin to explore SAS date handling and library strategy

## Common Pitfalls

- SAS missing values (`.`, `.A`–`.Z`) have different semantics than Python `None`/`NaN` — participants should verify missing value handling in the converted functions
- SAS7BDAT files encode dates as days since 1960-01-01 — this is a common source of conversion errors
- The export macros write to external files — Python equivalents need to handle file I/O differently than SAS's internal dataset model

## Prerequisite Checks

- Ensure both ts-sas-legacy-analytics and uc-data-migration-sas-to-snowflake repositories are connected in Devin's org settings
- DeepWiki indexing should be triggered for both repos before the session

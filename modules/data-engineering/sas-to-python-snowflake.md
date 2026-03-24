# SAS to Python/Snowflake

## Repositories

- [ts-sas-legacy-codebase](#ts-sas-legacy-codebase)
- [uc-data-migration-sas-to-snowflake](#uc-data-migration-sas-to-snowflake)

---

## Challenge

Convert SAS analytics programs and data transformations to Python and Snowflake SQL equivalents. This is a cross-language migration that tests Devin's ability to understand legacy SAS syntax (DATA steps, PROC operations, macro variables) and produce equivalent modern code with proper validation.

## Target Outcomes

- Python equivalents of SAS DATA step and PROC operations using pandas/polars
- Snowflake SQL translations of SAS data transformations for the sample datasets (CUST_ACCOUNTS, DAILY_BALANCE, MONTHLY_AMB)
- Validation tests comparing SAS and Python/SQL outputs for correctness
- PR with converted code, Snowflake DDL, and a SAS_MIGRATION_NOTES.md documenting translation decisions

## What Participants Will Learn

- How Devin reads and understands legacy SAS syntax including macros and PROC steps
- How Devin translates SAS data operations to equivalent Python (pandas) and SQL
- How Devin handles SAS-specific constructs (macro variables, formats, informats, BY-group processing)
- The importance of output validation when migrating between analytics platforms

## Devin Features Exercised

- Cross-language translation (SAS to Python/SQL)
- Legacy code understanding and SAS syntax comprehension
- Data transformation logic mapping across paradigms
- PR creation with migration documentation

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

---

## <a id="ts-sas-legacy-codebase"></a>ts-sas-legacy-codebase

**Repository:** [ts-sas-legacy-codebase](https://github.com/Cognition-Partner-Workshops/ts-sas-legacy-codebase)

Legacy SAS codebase with 90+ macros covering data export, transformation, deduplication, and formatting operations. The Macro/ directory contains production-style SAS macros that represent typical enterprise analytics workflows.

### Step 1: Paste into Devin

> Analyze the SAS macros in ts-sas-legacy-codebase/Macro/ — focus on the data transformation macros: transpose.sas, subset_data.sas, compare.sas, dedup_string.sas, dedup_mstring.sas, and the export family (export_csv.sas, export_xlsx.sas, export_dbms.sas). For each macro, translate the SAS logic into equivalent Python functions using pandas. Preserve the same function signatures (input dataset, parameters, output dataset). Create pytest tests that validate the Python functions produce the same results as the SAS originals for sample inputs. Document each translation decision in a SAS_TO_PYTHON_TRANSLATION.md. Open a PR.

### Step 2: Research with Ask Devin

- *"What SAS-specific features are used in the Macro/ directory of ts-sas-legacy-codebase? Which macros use SAS-only constructs like PROC TRANSPOSE, BY-group processing, or macro variable resolution that need special handling in Python?"*
- *"What's the best Python library strategy for converting these SAS macros — pandas for everything, or should some use polars or PySpark for better performance with large datasets?"*
- Use the analysis to prioritize which macros to convert first based on complexity and reusability

### Step 3 (Optional): Read the DeepWiki

Open the DeepWiki page for ts-sas-legacy-codebase to understand the macro library organization. Identify which macros are data transformation primitives (transpose, subset, dedup) vs I/O utilities (export, import) to plan the conversion in dependency order.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — do the Python functions handle the same edge cases as the SAS macros (missing values, empty datasets, special SAS missing value indicators)?
- **Leave a comment** asking Devin to add type hints and docstrings to all converted functions, following NumPy docstring conventions
- **Watch Devin respond** and push a follow-up commit

---

## <a id="uc-data-migration-sas-to-snowflake"></a>uc-data-migration-sas-to-snowflake

**Repository:** [uc-data-migration-sas-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-data-migration-sas-to-snowflake)

SAS-to-Snowflake migration toolkit with sample banking datasets (CUST_ACCOUNTS, DAILY_BALANCE, MONTHLY_AMB) in both SAS7BDAT and CSV formats, SAS lineage metadata, validation configurations, and a Streamlit migration app. Includes two migration scenarios with before/after data snapshots.

### Step 1: Paste into Devin

> Analyze the sample datasets in uc-data-migration-sas-to-snowflake/sample_data/ — examine the CSV files (CUST_ACCOUNTS.csv, DAILY_BALANCE.csv, MONTHLY_AMB.csv) and the two migration scenarios in Scenario1/ and Scenario2/. Create Snowflake-compatible DDL for each dataset with proper column types, constraints, and clustering keys. Then write Python scripts that: (1) read the SAS7BDAT files using the sas7bdat or pyreadstat library, (2) apply any necessary data type conversions (dates, decimals, string encoding), (3) generate Snowflake COPY INTO statements for bulk loading, and (4) create validation queries comparing row counts and checksums between source and target. Include a SAS_TO_SNOWFLAKE_MIGRATION.md documenting the schema mapping and loading strategy. Open a PR.

### Step 2: Research with Ask Devin

- *"What are the schema differences between Scenario1 and Scenario2 in uc-data-migration-sas-to-snowflake/sample_data/? What data changes do the scenarios represent (schema evolution, data corrections, incremental loads)?"*
- *"What SAS-specific data types and formats in the SAS7BDAT files need special handling when loading into Snowflake? How should SAS date values (days since 1960-01-01) be converted?"*
- Use the analysis to build a more robust migration pipeline that handles both scenarios

### Step 3 (Optional): Read the DeepWiki

Open the DeepWiki page for uc-data-migration-sas-to-snowflake to understand the lineage metadata structure and validation configuration. Examine how the existing `lineage/SAS_lineage.json` maps data flows from SAS to Snowflake and use this to validate your migration covers all documented data paths.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the Snowflake DDL types correct for the SAS source data? Do the COPY INTO statements handle CSV quoting and null values properly?
- **Leave a comment** asking Devin to add an incremental load strategy that handles Scenario1-to-Scenario2 as a delta migration instead of full reload
- **Watch Devin respond** and push a follow-up commit

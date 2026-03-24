# ETL Pipeline Modernization

## Repositories

- [uc-data-migration-airflow](#uc-data-migration-airflow)
- [ts-sas-legacy-codebase](#ts-sas-legacy-codebase)

---

## Challenge

Migrate legacy ETL processes built with SAS batch jobs and macro-driven workflows to a modern Apache Airflow orchestration pipeline. Participants will analyze existing data transformation logic and create equivalent Airflow DAGs with proper scheduling, error handling, and monitoring.

## Target Outcomes

- Modern Airflow DAG replacing legacy SAS-based ETL logic with equivalent data transformations
- Data validation checks comparing old vs new pipeline outputs for correctness
- Documentation of migration decisions including SAS-to-Python transformation mappings
- PR with new pipeline code, DAG definitions, and migration notes
- `ETL_MIGRATION_NOTES.md` documenting orchestration decisions and SAS construct mappings

## What Participants Will Learn

- How Devin analyzes legacy SAS programs and understands data transformation logic
- How Devin generates modern Airflow DAGs from legacy batch workflows
- How Devin handles cross-language translation (SAS macros to Python/Airflow operators)
- The importance of validation testing when migrating ETL pipelines

## Devin Features Exercised

- Codebase analysis across multiple repositories
- Cross-language translation (SAS to Python)
- Pipeline architecture understanding and DAG generation
- PR creation with migration documentation

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

---

## <a id="uc-data-migration-airflow"></a>uc-data-migration-airflow

**Repository:** [uc-data-migration-airflow](https://github.com/Cognition-Partner-Workshops/uc-data-migration-airflow)

Docker Compose-based Apache Airflow 2.0 environment with PostgreSQL backend, configured for local DAG development with LocalExecutor. The `dags/` directory is volume-mounted for live DAG authoring.

### Step 1: Paste into Devin

> Analyze the SAS macro library in ts-sas-legacy-codebase/Macro/ — focus on the data transformation macros (export_csv.sas, transpose.sas, subset_data.sas, compare.sas, dedup_string.sas). For each macro, understand the input/output data flow and transformation logic. Then create equivalent Airflow DAGs in uc-data-migration-airflow/dags/ that replicate the same data transformations using Python operators. Include a validation task in each DAG that compares input/output row counts and checksums. Create an ETL_MIGRATION_NOTES.md documenting each SAS-to-Airflow translation decision. Open a PR.

### Step 2: Research with Ask Devin

- *"What are the most complex SAS macros in ts-sas-legacy-codebase/Macro/ and what data transformations do they perform? Which ones have dependencies on other macros?"*
- *"What's the best Airflow DAG structure for orchestrating the SAS macro equivalents — one monolithic DAG or separate DAGs per transformation with cross-DAG dependencies?"*
- Use the analysis to plan a DAG dependency graph before starting the migration session

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page for both uc-data-migration-airflow and ts-sas-legacy-codebase. Understand the Airflow infrastructure setup (executor type, connections, volume mounts) and map out which SAS macros perform ETL-style operations vs utility functions.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — do the Airflow DAGs correctly replicate the SAS transformation logic? Are task dependencies properly defined?
- **Leave a comment** asking Devin to add error handling and retry logic to the DAG tasks, plus Slack/email alerting on failure
- **Watch Devin respond** and push a follow-up commit

---

## <a id="ts-sas-legacy-codebase"></a>ts-sas-legacy-codebase

**Repository:** [ts-sas-legacy-codebase](https://github.com/Cognition-Partner-Workshops/ts-sas-legacy-codebase)

Legacy SAS codebase containing 90+ macros in the Macro/ directory, Enterprise Guide projects, and batch processing programs. Represents a typical legacy analytics environment with macro-driven ETL workflows.

### Step 1: Paste into Devin

> Analyze the batch orchestration pattern in ts-sas-legacy-codebase — examine RunAll.sas and RunAll_ControlTable.sas in the Macro/ directory to understand how SAS orchestrates multi-step ETL workflows using control tables. Then create a modern Airflow DAG in uc-data-migration-airflow/dags/ that replicates this control-table-driven execution pattern using Airflow's task dependencies and XCom for inter-task data passing. Include Python equivalents of the key utility macros (loop.sas, loop_control.sas, execute_macro.sas). Open a PR with the DAG and a CONTROL_TABLE_MIGRATION.md explaining the translation.

### Step 2: Research with Ask Devin

- *"How does RunAll_ControlTable.sas in ts-sas-legacy-codebase/Macro/ manage execution ordering and dependencies between SAS macros? What's the control table schema?"*
- *"What SAS-specific features in the batch_submit.sas and stp_batch_submit.sas macros would need special handling when converting to Airflow task execution?"*
- Use these insights to design a more robust Airflow orchestration pattern

### Step 3 (Optional): Read the DeepWiki

Open the DeepWiki page for ts-sas-legacy-codebase to understand the full macro dependency graph. Identify which macros are orchestration-level (RunAll, loop, batch_submit) vs data transformation (transpose, subset_data, export) to prioritize the migration scope.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the Airflow DAG handle the same execution ordering as the SAS control table pattern? Are edge cases (failed steps, retries) covered?
- **Leave a comment** asking Devin to add a dynamic DAG generator that reads a YAML control table instead of hardcoded task definitions
- **Watch Devin respond** and push a follow-up commit

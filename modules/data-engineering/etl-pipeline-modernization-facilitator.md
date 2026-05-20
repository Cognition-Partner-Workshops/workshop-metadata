# ETL Pipeline Modernization — Facilitator Notes

Companion to [etl-pipeline-modernization.md](etl-pipeline-modernization.md).

## Setup Notes

- The Airflow repo uses Docker Compose — participants do not need to run Airflow locally for the DAG generation exercise, but having Docker available enables testing
- The `dags/` directory is referenced in the Docker Compose volume mount (`./dags:/opt/airflow/dags`) but may not exist yet — Devin will create it
- The SAS macro library contains 90+ macros, but only ~10 are data transformation macros relevant to the ETL exercise; the rest are utility functions
- Key orchestration macros: `RunAll.sas`, `RunAll_ControlTable.sas`, `loop.sas`, `loop_control.sas`, `execute_macro.sas`, `batch_submit.sas`
- Key transformation macros: `transpose.sas`, `subset_data.sas`, `compare.sas`, `dedup_string.sas`, `export_csv.sas`

## Recommended Exercise Flow

1. **Orientation (5 min):** Walk through the SAS macro library structure and identify transformation vs orchestration macros
2. **Core exercise (40 min):** Run Step 1 for the uc-data-migration-airflow repo section — transformation macro conversion
3. **Advanced (15 min):** Run Step 1 for the ts-sas-legacy-analytics repo section — control table orchestration pattern

## Common Pitfalls

- Participants may try to run the SAS macros locally — remind them this is a static analysis exercise; no SAS installation is needed
- The RunAll_ControlTable pattern is SAS-specific and has no direct Airflow equivalent — it requires architectural translation, not just code translation
- XCom data passing in Airflow has size limits — for large datasets, suggest file-based passing instead

## Prerequisite Checks

- Ensure both uc-data-migration-airflow and ts-sas-legacy-analytics repositories are connected in Devin's org settings
- DeepWiki indexing should be triggered for both repos before the session

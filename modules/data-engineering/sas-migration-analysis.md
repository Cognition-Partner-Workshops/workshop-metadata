# SAS Migration Analysis

## Repositories

- [ts-sas-legacy-codebase](#ts-sas-legacy-codebase)
- [uc-data-migration-sas-to-snowflake](#uc-data-migration-sas-to-snowflake)

---

## Challenge

Perform a comprehensive discovery and assessment of a legacy SAS estate to produce the migration-readiness artifacts needed before any code translation begins. This challenge tests Devin's ability to parse SAS source files (.sas, .egp, .spk), extract data lineage from static code analysis, build a dependency graph of macros, programs, and datasets, and generate an actionable migration assessment report — all without requiring modifications to the customer's running SAS environment.

## Customer Prerequisites — What to Request by Email

Unlike runtime trace-based tools (e.g., Alchemist Analyzer), Cognition's approach uses **static code analysis** — no changes to the customer's SAS environment configuration are needed. The table below compares the two approaches:

| Requirement | Alchemist Analyzer | Cognition (Devin) |
|---|---|---|
| **SAS source files** (.sas programs, macros, includes) | Required | **Required** |
| **Enterprise Guide projects** (.egp) | Required | **Required** (for project structure and execution flow) |
| **Deployment packages** (.spk) | Required | **Helpful** (for understanding promotion/deployment) |
| **SAS log files** (.log) | Required — and new logging configs must be created | **Helpful but not required** — existing logs are useful for execution patterns and data volumes; no new logging configuration needed |
| **XML logging configuration** for Workspace Server, Batch Server, SAS Thick Client | **Required** — must create new XML logging configs and update `-logconfigloc` | **Not needed** |
| **Audit loggers** (Audit.Data.Dataset.Open/Delete/Rename at Trace level) | **Required** — must enable Trace-level audit logging | **Not needed** |
| **Autoexec files** (autoexec.sas, project autoexecs) | Not explicitly listed | **Required** — for library assignments, system options, macro variable initialization |
| **LIBNAME configuration** (how libraries map to physical/database locations) | Derived from runtime traces | **Required** — from autoexec files, config files, or a simple inventory document |
| **Macro autocall libraries** (full contents of autocall paths) | Not explicitly listed | **Required** — for resolving macro dependencies across programs |
| **Format catalogs** or PROC FORMAT definitions | Not explicitly listed | **Helpful** — for understanding custom data formatting and value decoding |
| **Scheduling metadata** (Platform Suite for SAS, cron, LSF, Control-M) | Not explicitly listed | **Helpful** — for understanding job dependencies and execution order |
| **Database connection configs** (SAS/ACCESS engine parameters for Oracle, DB2, Teradata, etc.) | Derived from runtime traces | **Helpful** — for mapping external data sources |
| **PROC CONTENTS output** or data dictionary exports | Not explicitly listed | **Helpful** — for understanding dataset schemas without running SAS |
| **Modifications to production SAS environment** | **Yes** — logging config changes, audit logger enablement | **No** — entirely non-invasive |

### Email Template for Artifact Collection

> To perform our SAS migration analysis, we need the following artifacts from your SAS environment. These can be provided via a file share or secure upload — no changes to your running SAS environment are required.
>
> **Required:**
> 1. All `.sas` source files — programs, macros, and include files
> 2. All `.egp` Enterprise Guide project files
> 3. `autoexec.sas` and any project-level autoexec files
> 4. Macro autocall library contents (all files from your autocall paths)
> 5. LIBNAME configuration — a document or extract showing how library names map to physical paths, databases, or schemas
>
> **Recommended (accelerates analysis):**
> 6. `.spk` deployment packages
> 7. Existing SAS log files (as-is — no new logging configuration needed)
> 8. Format catalogs or PROC FORMAT source code
> 9. Scheduling metadata (job schedules, dependencies, execution windows)
> 10. PROC CONTENTS output for key datasets (or data dictionary exports)
> 11. Database connection details for any external sources accessed via SAS/ACCESS engines
>
> **Not needed:** No XML logging configuration changes, no `-logconfigloc` updates, no audit logger enablement. Our analysis is entirely static — we read your source code, not runtime traces.

## SAS Artifact Types

| Artifact | Extension | Purpose | Analysis Value |
|----------|-----------|---------|----------------|
| SAS Program | `.sas` | DATA steps, PROC operations, macro definitions | Core analysis target — data transformations, business logic |
| Enterprise Guide Project | `.egp` | Visual project structure, execution flow, ordered tasks | Workflow dependencies, execution order |
| SAS Package | `.spk` | Deployment/promotion bundles | Understanding what gets deployed together |
| SAS Log | `.log` | Execution output, data volumes, errors | Performance baseline, data volume estimates |
| Autoexec | `autoexec.sas` | Library assignments, global options, macro variables | Foundation for understanding all library references |
| Format Catalog | `.sas7bcat` | Custom formats and informats | Data decoding rules for migration |
| SAS Dataset | `.sas7bdat` | Binary data files | Schema extraction, sample data for validation |

## Target Outcomes

- Complete inventory of all SAS artifacts: programs, macros, Enterprise Guide projects, datasets, and external data connections
- Data lineage documentation tracing dataset flows through DATA steps, PROC operations, and macro invocations
- Macro dependency graph showing which programs depend on which macros, and which macros call other macros
- Dataset usage matrix: which programs read, create, update, or delete each dataset
- Complexity assessment scoring each program/macro by number of DATA steps, PROC operations, macro calls, and external dependencies
- `SAS_MIGRATION_ASSESSMENT.md` documenting estate scope, complexity metrics, risk areas, and recommended migration sequence
- PR with all assessment artifacts

## What Participants Will Learn

- How Devin performs static analysis of SAS source code without requiring runtime instrumentation
- How Devin traces data lineage through SAS programs by following LIBNAME references, DATA step inputs/outputs, and PROC operations
- How Devin resolves macro dependencies across autocall libraries and nested macro calls
- How Devin generates migration assessment documentation comparable to commercial tools — using source code analysis rather than runtime tracing
- The difference between runtime trace-based analysis (Alchemist) and static code analysis (Cognition) for SAS migration planning

## Devin Features Exercised

- Legacy code understanding (SAS syntax, macros, PROC operations)
- Cross-file dependency analysis and graph construction
- Data lineage extraction from static analysis
- Assessment documentation generation
- Multi-repository analysis (legacy source + migration tooling)
- PR creation with structured assessment documentation

## Difficulty

Intermediate

## Estimated Time

45 minutes

## Notes

- This module focuses on the **discovery and assessment phase** — it precedes the actual code translation covered by [SAS to Python/Snowflake](sas-to-python-snowflake.md) and [ETL Pipeline Modernization](etl-pipeline-modernization.md)
- The `ts-sas-legacy-codebase` repo contains real SAS artifacts (.egp, .spk, .sas) making it suitable for demonstrating analysis of genuine SAS project structures
- For dbt on Databricks as the migration target, the assessment should include a target mapping section recommending how SAS libraries/datasets map to Databricks catalogs/schemas/dbt models
- The key differentiator vs Alchemist Analyzer: Cognition's approach requires **zero changes to the customer's SAS environment** — no XML logging configs, no audit loggers, no `-logconfigloc` updates

---

## <a id="ts-sas-legacy-codebase"></a>ts-sas-legacy-codebase

**Repository:** [ts-sas-legacy-codebase](https://github.com/Cognition-Partner-Workshops/ts-sas-legacy-codebase)

Legacy SAS codebase with 92 macros, Enterprise Guide projects (.egp), deployment packages (.spk), and batch programs. Represents a production-style SAS analytics environment with macro-driven workflows.

### Step 1: Paste into Devin

> Perform a migration assessment of the SAS estate in ts-sas-legacy-codebase. Analyze: (1) all 92 macros in Macro/ — for each, document its purpose, input/output datasets, parameters, and dependencies on other macros; (2) the Enterprise Guide project in EGProjects/ — extract the project structure and task execution flow; (3) the .spk deployment package in AMO/ — identify what components are packaged for deployment; (4) RunAll.sas and RunAll_ControlTable.sas — document the batch orchestration pattern. Produce a SAS_MIGRATION_ASSESSMENT.md with: an inventory table of all artifacts by type, a macro dependency graph (which macros call which), a dataset usage matrix (which macros read/write which datasets), a complexity score per macro (based on lines, DATA steps, PROC calls, external refs), and a recommended migration sequence (starting with leaf macros that have no dependencies). Open a PR.

### Step 2: Research with Ask Devin

- *"What are the macro dependency chains in ts-sas-legacy-codebase/Macro/? Which macros are called by other macros (e.g., via %macro_name or %include), and which are standalone utilities?"*
- *"Which macros in ts-sas-legacy-codebase access external data sources (databases, files, URLs) vs operating purely on in-memory SAS datasets? This affects migration complexity."*
- Use the analysis to identify the highest-risk macros for migration (most dependencies, external data access, complex SAS-specific constructs)

### Step 3 (Optional): Read the DeepWiki

Open the DeepWiki page for ts-sas-legacy-codebase. Examine the macro library structure — identify which macros are data transformation primitives (transpose, subset, dedup), I/O utilities (export, import), and infrastructure utilities (batch_submit, sendmail). This categorization drives the migration strategy: primitives map to pandas/dbt functions, I/O maps to Databricks connectors, infrastructure maps to orchestration tools.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the assessment capture all 92 macros? Is the dependency graph complete? Does the complexity scoring seem reasonable?
- **Leave a comment** asking Devin to add a target architecture recommendation section mapping each SAS component category to its dbt/Databricks equivalent (e.g., DATA steps → dbt models, PROC SQL → Snowflake/Databricks SQL, macro variables → dbt vars/env vars)
- **Watch Devin respond** and push a follow-up commit

---

## <a id="uc-data-migration-sas-to-snowflake"></a>uc-data-migration-sas-to-snowflake

**Repository:** [uc-data-migration-sas-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-data-migration-sas-to-snowflake)

SAS-to-Snowflake migration toolkit with lineage metadata (SAS_lineage.json), sample banking datasets in SAS7BDAT and CSV formats, a SAS DIS Lineage Generator script, and a Streamlit validation app.

### Step 1: Paste into Devin

> Analyze the lineage metadata in uc-data-migration-sas-to-snowflake/lineage/. Parse the SAS_lineage.json to extract all source-to-target data flows, transformation job names, and schema mappings. Then cross-reference with the SAS_DIS_Lineage_Generator.sas to understand how lineage was originally extracted from the SAS metadata server. Produce a LINEAGE_ANALYSIS.md that documents: (1) all data flows with source and target tables, (2) the transformation jobs connecting them, (3) a visual flow diagram in Mermaid syntax, and (4) a gap analysis identifying any datasets in sample_data/ that don't appear in the lineage JSON. Open a PR.

### Step 2: Research with Ask Devin

- *"What does the SAS_DIS_Lineage_Generator.sas in uc-data-migration-sas-to-snowflake/lineage/ do? How does it extract lineage from the SAS Metadata Server, and what metadata objects does it query?"*
- *"Compare the SAS_lineage.json and SF_lineage.json in uc-data-migration-sas-to-snowflake/lineage/ — what's the mapping between SAS source objects and Snowflake target objects? Are there any SAS objects without a Snowflake equivalent?"*
- Use the analysis to validate whether the existing lineage metadata is complete enough for a full migration

### Step 3 (Optional): Read the DeepWiki

Open the DeepWiki page for uc-data-migration-sas-to-snowflake. Understand the lineage JSON schema (Collibra-style nodes and edges), the validation configuration, and how the Streamlit app uses lineage data to drive migration validation checks.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — is the Mermaid diagram readable? Does the gap analysis correctly identify unmapped datasets?
- **Leave a comment** asking Devin to add a dbt model mapping section that translates each SAS lineage transformation into a proposed dbt model name and SQL pattern
- **Watch Devin respond** and push a follow-up commit

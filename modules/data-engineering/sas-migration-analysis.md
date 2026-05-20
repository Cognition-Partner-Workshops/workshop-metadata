# SAS Migration Analysis — Discovery & Assessment

## Repositories

- [ts-sas-legacy-analytics](#ts-sas-legacy-analytics)
- [uc-data-migration-sas-to-databricks](#uc-data-migration-sas-to-databricks)

---

## Challenge

Perform a comprehensive discovery and assessment of a legacy SAS estate to produce the migration-readiness artifacts needed before any code translation begins. This challenge tests Devin's ability to parse SAS source files (.sas, .egp, .spk), extract data lineage from static code analysis, build a dependency graph of macros, programs, and datasets, and generate an actionable migration assessment report — all without requiring modifications to the customer's running SAS environment.

The target migration path is **SAS → dbt on Databricks**, using the dbt project structure in `uc-data-migration-sas-to-databricks/dbt_project/` as the reference target architecture.

## Customer Prerequisites — Cognition vs Alchemist Analyzer

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
| Enterprise Guide Project | `.egp` | Visual process flows, execution order, parameter prompts | Execution dependency chain, project organization |
| Deployment Package | `.spk` | Promotion-ready bundles for SAS Management Console | Deployment topology, environment dependencies |
| SAS Log | `.log` | Execution output, row counts, timing, warnings/errors | Data volumes, performance bottlenecks, error patterns |
| Autoexec | `autoexec.sas` | Library assignments, macro variables, system options | Environment configuration, data source mapping |
| Format Catalog | `.sas7bcat` | Custom format definitions (PROC FORMAT output) | Value decoding rules (e.g., code-to-description) |
| PROC FORMAT Source | `.sas` | Human-readable format definitions | Migration to dbt macros or seed tables |

## Target Outcomes

- Complete inventory of all SAS artifacts (programs, macros, datasets, libraries)
- Data lineage diagram showing input→program→output flows
- Macro dependency graph (which programs call which macros)
- Dataset usage matrix (which datasets are read/written by which programs)
- Complexity scores per program (LOC, construct count, external dependencies)
- `SAS_MIGRATION_ASSESSMENT.md` documenting estate scope, complexity metrics, risk areas, and recommended migration sequence
- PR with all assessment artifacts

## What Participants Will Learn

- How Devin performs static analysis of SAS source code without requiring runtime instrumentation
- How Devin maps SAS constructs (DATA steps, PROC SQL, %MACRO, PROC FORMAT, RETAIN/BY-group, hash objects) to their dbt/Databricks equivalents
- The non-invasive approach: what Cognition can assess without changing the customer's SAS environment
- How to use the assessment output to scope a migration project (effort estimation, risk identification, sequencing)

## Devin Features Exercised

- Multi-file static code analysis across SAS programs, macros, and configuration files
- Cross-language construct mapping (SAS → SQL/dbt/Python)
- Dependency graph extraction from %INCLUDE chains, macro calls, and LIBNAME references
- Documentation generation (structured assessment report, migration mapping)
- PR creation with migration documentation

## Difficulty

Intermediate to Advanced

## Estimated Time

75 minutes

## Programmatic Context Loop — How Devin Builds Understanding

Migration analysis is not a single-pass operation. Devin uses programmatically accessed resources to build context iteratively — each tool's output feeds into the next step, creating a feedback loop that deepens understanding with every cycle.

### The Loop

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ① Index repos (DeepWiki)                                               │
│     ↓                                                                   │
│  ② Retrieve architectural context (DeepWiki auto-docs, Knowledge notes) │
│     ↓                                                                   │
│  ③ Analyze source code (Devin session — static analysis of .sas files)  │
│     ↓                                                                   │
│  ④ Cross-reference target architecture (dbt project via ref())          │
│     ↓                                                                   │
│  ⑤ Query external systems for additional context (MCP: Jira, Confluence)│
│     ↓                                                                   │
│  ⑥ Produce assessment artifacts (PR with migration docs)                │
│     ↓                                                                   │
│  ⑦ Human review → PR comments → Devin resumes and refines              │
│     ↓                                                                   │
│  ⑧ Loop back to ③ with enriched context ─────────────────────→ ③       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Resources Devin Accesses Programmatically at Each Stage

| Stage | Resource | What Devin Retrieves | How It Uses It |
|-------|----------|---------------------|----------------|
| **① Index** | **DeepWiki** | Auto-generated architecture docs for both repos | Understands SAS estate structure and dbt target patterns before reading a single file |
| **② Context** | **Knowledge notes** | Org-level conventions (naming, repo scope, construct mapping rules) | Applies migration standards consistently — e.g., knows PROC FORMAT → Jinja macro, not seed CSV |
| **③ Analyze** | **Git repo** (clone + shell) | Every `.sas`, `.egp`, `autoexec.sas`, macro library, format definition, log file | Parses SAS syntax, extracts LIBNAME refs, traces %INCLUDE chains, counts constructs |
| **④ Cross-ref** | **Git repo** (second repo) | `dbt_project/models/`, `macros/`, `docs/SAS_TO_DBT_MIGRATION_MAP.md` | Maps each SAS program to its dbt equivalent; identifies gaps (SAS programs with no dbt model yet) |
| **⑤ External** | **MCP servers** (Jira, Confluence, ADO) | Migration tickets, customer-provided data dictionaries, existing analysis docs | Enriches the assessment with business context — e.g., which programs are business-critical, which are candidates for retirement |
| **⑥ Produce** | **Git** (push + PR) | Opens PR with `SAS_MIGRATION_ASSESSMENT.md`, lineage diagrams, dependency graphs | Creates the review artifact that humans inspect |
| **⑦ Review** | **PR comments** (Devin monitors) | Human feedback: "You missed the Control-M dependency" or "Add effort estimates" | Devin resumes from hibernation, reads comments, addresses each one |
| **⑧ Refine** | **All of the above** | Re-reads source code with new understanding from review feedback | Produces improved assessment — each cycle adds accuracy |

### Prescriptive Setup for the Context Loop

Before starting the hands-on steps, ensure these resources are configured so Devin can access them programmatically:

**Required (must configure before the session):**

1. **Git connections** — Both repos (`ts-sas-legacy-analytics` and `uc-data-migration-sas-to-databricks`) must be connected in Devin's org settings so Devin can clone them without manual auth
2. **DeepWiki indexing** — Trigger indexing for both repos. DeepWiki takes 5–15 minutes to produce usable docs for a repo this size. Index before the session starts, not during it
3. **Knowledge notes** — Create org-level knowledge items for migration conventions:
   - *"When migrating SAS constructs to dbt"* → Document which SAS patterns map to which dbt patterns (reference `SAS_TO_DBT_MIGRATION_MAP.md`)
   - *"When analyzing SAS autoexec.sas"* → Document the LIBNAME-to-Unity-Catalog mapping for the customer's environment
   - *"When estimating migration effort"* → Document complexity scoring criteria (LOC thresholds, construct weights)

**Recommended (accelerates the loop):**

4. **MCP servers** — If the customer's migration project is tracked in Jira or ADO, connect the relevant MCP server so Devin can read ticket context (acceptance criteria, priority, business owner) during analysis
5. **Secrets** — If Devin needs to query a Databricks workspace (e.g., to check Unity Catalog schema), provision a scoped token as an org secret
6. **Environment blueprint** — Pre-install `dbt-core` and `dbt-databricks` in the VM blueprint so Devin can validate dbt syntax (`dbt parse`, `dbt compile`) without install delays during the session

### Why This Matters for Presales and Delivery

The context loop is the key differentiator when positioning against manual migration assessment:

- **Manual assessment**: Consultant reads SAS code, writes a document, sends it for review, gets feedback, revises. Each cycle takes days. Context is in the consultant's head — not transferable.
- **Devin assessment**: Devin reads the code programmatically, cross-references the target architecture, queries external systems for business context, produces a structured assessment, and iterates on feedback — all within the same session. Context is in the shared layer (Knowledge, DeepWiki, MCP) — every subsequent session starts with the full accumulated understanding.

**For scoping and pricing:** Run the estate discovery step (Step 1 below) during presales. The resulting `SAS_MIGRATION_ASSESSMENT.md` gives you program-level complexity scores and a recommended migration sequence — this is the input for effort estimation and project pricing. DeepWiki's architectural docs provide the "instant understanding" that replaces weeks of manual pre-analysis.

**For delivery:** The shared context layer means every Devin session working on the migration has access to the same knowledge, conventions, and target architecture. Spin up parallel sessions — one per SAS program — and each one inherits the org-level migration standards. The feedback loop scales horizontally.

---

## <a id="ts-sas-legacy-analytics"></a>ts-sas-legacy-analytics

**Repository:** [ts-sas-legacy-analytics](https://github.com/Cognition-Partner-Workshops/ts-sas-legacy-analytics)

Legacy SAS analytics environment with 7 banking/insurance business programs, 92 utility macros, Enterprise Guide projects (.egp), deployment packages (.spk), custom format definitions (PROC FORMAT), batch orchestrators with error handling, and sample production logs. The codebase exercises the full range of SAS constructs: DATA steps with business logic, PROC SQL with joins and subqueries, %MACRO with parameters, hash objects for lookups, RETAIN/BY-group processing, LIBNAME connections to Oracle and Teradata, and %INCLUDE-based batch orchestration with Control-M integration.

### Step 1: Paste into Devin — Estate Discovery

> Analyze the SAS codebase in ts-sas-legacy-analytics to produce a comprehensive migration assessment. Start with Config/autoexec.sas to understand the library assignments and database connections. Then analyze all programs in Programs/Banking/, Programs/Insurance/, and Programs/Reports/ — for each, document: (1) what data sources it reads from (LIBNAME.dataset), (2) what outputs it produces, (3) which macros from Macro/ it depends on, (4) which SAS constructs it uses (DATA step, PROC SQL, PROC MEANS, hash objects, RETAIN, etc.), and (5) a complexity rating. Also analyze the batch orchestrators in BatchJobs/ to understand the execution dependency chain. Examine Formats/ for custom format definitions that will need migration to dbt macros or seed tables. Use the log files in Logs/ to understand production data volumes and execution times. Produce a SAS_MIGRATION_ASSESSMENT.md with: artifact inventory, data lineage diagram, macro dependency graph, dataset usage matrix, complexity scores, risk areas, and a recommended migration sequence. Open a PR.

### Step 2: Paste into Devin — dbt Target Mapping

> Using the assessment from Step 1 and the reference dbt project in uc-data-migration-sas-to-databricks/dbt_project/, create a detailed migration plan mapping each SAS program to its dbt/Databricks equivalent. For each program, specify: (1) which dbt model layer it maps to (staging/intermediate/marts), (2) which SAS constructs need translation (use docs/SAS_TO_DBT_MIGRATION_MAP.md as the reference), (3) estimated effort and risk. Pay special attention to: PROC FORMAT → dbt macros (reference macros/ in the dbt project), RETAIN/BY-group → window functions, hash objects → broadcast joins, %INCLUDE chains → dbt ref() DAG, and Control-M scheduling → Databricks Workflows. Add the migration plan to the PR.

### Step 3: Research with Ask Devin

- *"What external database connections does the SAS estate use (from autoexec.sas), and what's the equivalent Unity Catalog configuration for Databricks?"*
- *"Which SAS programs have the highest migration risk — the ones using hash objects, complex macro nesting, or RETAIN with BY-group processing?"*
- *"How does the batch orchestration in run_daily_banking.sas translate to a Databricks Workflow? What about the error handling and restart logic?"*

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the assessment capture all library references from autoexec.sas? Are cross-program dataset dependencies correctly traced?
- **Leave a comment** asking Devin to add a "Migration Effort Estimate" section with hours per program based on complexity scores
- **Watch Devin respond** and push a follow-up commit

### Key Takeaways

- **Non-invasive analysis**: Devin can map an entire SAS estate from source code alone — no XML logging configs, no audit loggers, no `-logconfigloc` changes required
- **Construct-level mapping**: Every SAS pattern (DATA step, PROC SQL, PROC FORMAT, hash objects, RETAIN, %INCLUDE) has a documented dbt/Databricks equivalent
- **Migration sequencing**: The assessment identifies which programs to migrate first based on complexity and dependency order
- **Effort estimation**: Complexity scores drive realistic migration timelines

---

## <a id="uc-data-migration-sas-to-databricks"></a>uc-data-migration-sas-to-databricks

**Repository:** [uc-data-migration-sas-to-databricks](https://github.com/Cognition-Partner-Workshops/uc-data-migration-sas-to-databricks)

SAS-to-Databricks migration target with a complete dbt project (staging/intermediate/marts layers), dbt macros replacing PROC FORMAT definitions, a comprehensive SAS→dbt construct mapping document, and Databricks connection profiles. The dbt project maps 1:1 from the SAS programs in ts-sas-legacy-analytics.

### Step 1: Paste into Devin — Validate Target Architecture

> Review the dbt project in uc-data-migration-sas-to-databricks/dbt_project/ — verify that each dbt model correctly implements the SAS logic from ts-sas-legacy-analytics. Cross-reference the migration patterns in docs/SAS_TO_DBT_MIGRATION_MAP.md. For any gaps (SAS programs without corresponding dbt models), create stub dbt models following the established pattern. Open a PR.

### Step 2: Paste into Devin — Extend dbt Models

> The dbt_project/ in uc-data-migration-sas-to-databricks has models for customer accounts, transactions, and risk scoring. Add the missing dbt models for: (1) monthly_regulatory_reporting.sas → mart_regulatory_rwa.sql + mart_delinquency_aging.sql, (2) claims_processing.sas → stg_claims.sql + int_claims_adjudication.sql, (3) policy_valuation.sas → int_policy_valuation.sql + mart_loss_ratios.sql, (4) customer_profitability.sas → mart_customer_pnl.sql. Follow the patterns in the existing models and reference the SAS_TO_DBT_MIGRATION_MAP.md for construct translations. Add dbt tests for key business rules. Open a PR.

### Step 3 (Optional): Read the DeepWiki

Open the DeepWiki pages for both ts-sas-legacy-analytics and uc-data-migration-sas-to-databricks to understand the full migration pipeline from SAS source through assessment to dbt target.

### Key Takeaways

- **Source-to-target traceability**: Every SAS program in the source repo has a documented mapping to one or more dbt models in the target project
- **PROC FORMAT → dbt macros**: Custom SAS formats translate to reusable Jinja macros with CASE expressions
- **Lineage preservation**: The construct mapping document bridges the gap between SAS-side and Databricks-side data flows
- **Incremental migration**: dbt models can be developed and tested independently, enabling parallel workstreams

# Workshop: Legacy Modernization

## Overview

| | |
|---|---|
| **Focus** | Modernizing legacy applications (COBOL, mainframe) to modern tech stacks with comprehensive testing |
| **Duration** | 2-4 hours (configurable — see Duration Variants below) |
| **Audience** | Enterprise architects, modernization teams, application portfolio managers |
| **Key Modules** | [COBOL to Java](../../modules/migration-modernization/cobol-to-java.md), [Legacy Modernization Combined](../../modules/migration-modernization/legacy-modernization-combined.md), [COBOL System Understanding](../../modules/migration-modernization/cobol-system-understanding.md), [COBOL Migration Planning](../../modules/migration-modernization/cobol-migration-planning.md), [Migration Test Harness](../../modules/migration-modernization/migration-test-harness.md) |

## Workshop Narrative

This workshop follows a progressive modernization arc:

1. **Understand** — What does this legacy system do? (system inventory, dependencies, business rules)
2. **Plan** — How should we modernize it? (strategy options, domain decomposition, phased cutover)
3. **Safeguard** — How do we know the migration is correct? (test harness, golden files, reconciliation)
4. **Execute** — Translate legacy code to modern tech stack with test validation

Each phase's output feeds the next, mirroring how real enterprise modernization programs operate.

## Labs

### Lab 1 — System Understanding & Reverse Engineering

- **Module:** [COBOL System Understanding](../../modules/migration-modernization/cobol-system-understanding.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Produce a complete system inventory, data dictionary, dependency map, and hotspot report
- **Duration:** 60 min

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Analyze the entire COBOL codebase in uc-legacy-modernization-cobol-to-java. Produce: (1) `APPLICATION_INVENTORY.md` cataloging all 30+ programs, copybooks, JCL jobs, and BMS maps with classifications, (2) `DATA_DICTIONARY.md` extracting business entities from copybook PIC clauses into a business-friendly format, (3) `DEPENDENCY_MAP.md` with the call graph and data lineage showing which programs call which and which jobs read/write which files, (4) `HOTSPOT_REPORT.md` with the top 10 modules prioritized by complexity, risk, and business impact. Open a PR with all artifacts.

#### Step 2: Research with Ask Devin

- *"What are the most complex COBOL programs in uc-legacy-modernization-cobol-to-java? Which ones have the most copybook dependencies?"*
- *"What business domains does the CardDemo application cover — account management, transaction processing, customer management, or reporting?"*

#### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to see how Devin auto-generates architecture documentation for COBOL. Try having Devin generate visual dependency graphs, complexity analysis, or reverse-engineer business rules from specific programs.

#### Step 4 (Optional): Review & Give Feedback

- Review the inventory for completeness
- Ask Devin to add Mermaid diagrams or expand hotspot analysis for specific programs

**Target Outcomes:** Application inventory, data dictionary, dependency map, hotspot report

---

### Lab 2 — Migration Planning & Domain Decomposition

- **Module:** [COBOL Migration Planning](../../modules/migration-modernization/cobol-migration-planning.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Produce a modernization blueprint with strategy options, domain decomposition, phased cutover plan, and risk register
- **Duration:** 60 min

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Using the COBOL codebase in uc-legacy-modernization-cobol-to-java, produce a modernization blueprint. Create: (1) `MODERNIZATION_BLUEPRINT.md` evaluating strangler, replatform, refactor, and rewrite strategies for each functional area, (2) `DOMAIN_DECOMPOSITION.md` identifying bounded contexts with extraction seam analysis, (3) `CUTOVER_PLAN.md` with a phased migration sequence from lowest-risk to highest-risk, (4) `RISK_REGISTER.md` with top risks and mitigations. Open a PR.

#### Step 2: Research with Ask Devin

- *"What are the tightest coupling points between subsystems? Would a strangler pattern or a big-bang rewrite be safer?"*
- *"What tribal knowledge risks exist in this codebase?"*

#### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand domain structure and coupling patterns. Try having Devin produce bounded context maps or strategy comparison matrices.

#### Step 4 (Optional): Review & Give Feedback

- Review strategy recommendations for trade-off reasoning
- Ask Devin to add bounded context diagrams or rollback triggers

**Target Outcomes:** Modernization blueprint, domain decomposition, cutover plan, risk register

---

### Lab 3 — Migration Test Harness & Validation Strategy

- **Module:** [Migration Test Harness](../../modules/migration-modernization/migration-test-harness.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Design and implement a test harness — golden files, differential testing, batch reconciliation, and contract tests
- **Duration:** 60 min

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Build a migration test harness for uc-legacy-modernization-cobol-to-java. Create: (1) `TEST_STRATEGY.md` covering four testing dimensions (golden-file, differential, reconciliation, contract), (2) Parse ASCII data files using copybook layouts and produce structured JSON golden references in a `golden-files/` directory, (3) Build a `test-harness/` directory with parser utilities, comparison functions, and reconciliation checks, (4) `RECONCILIATION_CHECKS.md` with per-job validation specifications. Open a PR.

#### Step 2: Research with Ask Devin

- *"What are the most common data format differences between COBOL and Java — packed decimals, zoned decimals, EBCDIC?"*
- *"What reconciliation checks are most important for financial data migration?"*

#### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand data file layouts and batch processing patterns. Try having Devin build differential testing harnesses or property-based tests.

#### Step 4 (Optional): Review & Give Feedback

- Review golden files for completeness
- Ask Devin to add packed decimal handling or batch reconciliation checks

**Target Outcomes:** Test strategy, golden files, test harness code, reconciliation checks

---

### Lab 4 — Code Migration: COBOL → Java

- **Module:** [COBOL to Java](../../modules/migration-modernization/cobol-to-java.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Translate selected COBOL programs to Java 17+ with parity tests validating against golden files
- **Duration:** 60 min

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Analyze the COBOL program CBACT01C.cbl in uc-legacy-modernization-cobol-to-java. Understand its business logic, data structures (copybooks), and I/O operations. Rewrite it as a Java 17+ application using modern idioms. Create JUnit tests that verify the Java version produces identical results to the COBOL version for sample inputs. Produce a `MIGRATION_NOTES.md` documenting translation decisions. Open a PR.

#### Step 2: Research with Ask Devin

- *"What are the most complex COBOL programs and what do they do?"*
- *"What would be the best Java architecture for migrating CBTRN01C.cbl?"*

#### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page. Try migrating different programs, targeting different languages, or running parallel sessions.

#### Step 4 (Optional): Review & Give Feedback

- Review the Java code for faithful COBOL logic representation
- Ask Devin to fix decimal handling or add data dictionary generation

**Target Outcomes:** Java source code, JUnit parity tests, migration notes

## Duration Variants

| Duration | Recommended Format |
|----------|-------------------|
| 4+ hours | Full workshop: Lab 1 → Lab 2 → Lab 3 → Lab 4 |
| 3 hours | Labs 1, 3, 4 (skip planning, focus on understand → test → migrate) |
| 2 hours | Abbreviated Lab 1 (30 min) + Lab 4 (60 min) + discussion |
| 1 hour | Lab 4 only (code migration) or walkthrough with pre-built artifacts |

## Repos Required

- [ ] uc-legacy-modernization-cobol-to-java

### Optional (for extended challenges)

- [ ] uc-framework-upgrade-monolith-to-microservices
- [ ] uc-data-source-migration-legacy-to-modern

## Key Takeaways

- **"Time-to-understanding drops from months to hours"** — dependency maps and data dictionaries produced in one session
- **"Test before you migrate"** — building the safety net first is the single most important risk mitigation
- **"Informed migration, not blind translation"** — by Lab 4, participants have complete understanding, a strategy, and a test harness

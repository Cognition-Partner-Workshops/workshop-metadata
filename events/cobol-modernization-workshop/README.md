# Workshop: COBOL Modernization Workshop

## Event Details

| | |
|---|---|
| **Variant Name** | COBOL Modernization Workshop |
| **Focus** | End-to-end COBOL mainframe modernization — from system understanding through migration execution |
| **Duration** | ~4 hours (4 labs × 60 min + breaks) |
| **Event Site** | https://partner-workshops.devinenterprise.com |
| **Audience** | Enterprise architects, mainframe modernization teams, application portfolio managers, migration program leads |

## Featured Labs

This event features 4 labs that build on each other in a progressive workshop:

- Lab 1: **Understand** — What does this system do? What are the programs, data, dependencies, and risks?
- Lab 2: **Plan** — How should we modernize it? What are the domains, strategies, and phases?
- Lab 3: **Safeguard** — How do we know the migration is correct? What tests catch regressions?
- Lab 4: **Execute** — Translate COBOL to Java with the test harness validating correctness

Each lab's output feeds the next. The inventory (Lab 1) informs the blueprint (Lab 2). The blueprint prioritizes which programs to test first (Lab 3). The test harness validates the migration (Lab 4). This mirrors how a real enterprise migration program operates.

### Lab 1 — System Understanding & Reverse Engineering (60 min)

- **Module:** [MM12 — COBOL System Understanding & Reverse Engineering](../../modules/migration-modernization/MM12.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Produce a complete system inventory, data dictionary, dependency map, and hotspot report for a COBOL mainframe application

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Analyze the entire COBOL codebase in uc-legacy-modernization-cobol-to-java. Produce: (1) `APPLICATION_INVENTORY.md` cataloging all 30+ programs, copybooks, JCL jobs, and BMS maps with classifications, (2) `DATA_DICTIONARY.md` extracting business entities from copybook PIC clauses into a business-friendly format, (3) `DEPENDENCY_MAP.md` with the call graph and data lineage showing which programs call which and which jobs read/write which files, (4) `HOTSPOT_REPORT.md` with the top 10 modules prioritized by complexity, risk, and business impact. Open a PR with all artifacts.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the most complex COBOL programs in uc-legacy-modernization-cobol-to-java? Which ones have the most copybook dependencies?"*
- *"What business domains does the CardDemo application cover — account management, transaction processing, customer management, or reporting?"*
- Use the analysis to start a **second session** — try having Devin deep-dive into a specific subsystem or generate a more detailed data lineage for the transaction processing programs

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to see how Devin auto-generates architecture documentation for COBOL — a language most modern developers cannot read. Use what you learn to try different approaches:
- Have Devin generate a **visual dependency graph** (Mermaid or PlantUML) showing program-to-program and program-to-data relationships
- Ask Devin to produce a **complexity analysis** ranking programs by cyclomatic complexity, LOC, and copybook count
- Try having Devin reverse-engineer **business rules** from specific programs (e.g., interest calculation logic in CBTRN01C)
- Ask Devin to identify **dead code** — programs that are defined but never called from JCL or other programs

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — is the inventory complete? Does the data dictionary accurately represent the copybook layouts?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"The dependency map should include a Mermaid diagram"* or *"Add JCL job-to-program mapping to the inventory"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- Try asking Devin to add detail to a specific section (e.g., *"Expand the hotspot analysis for CBTRN01C with specific risk factors"*)

See the full challenge details for [MM12 — COBOL System Understanding](../../modules/migration-modernization/MM12.md) for more ideas.

- **Key Takeaways:**
  - **"Time-to-understanding drops from months to hours"** — dependency maps and data lineage that would take weeks of SME interviews are produced in one session
  - **"Queryable knowledge surface"** — DeepWiki + the generated artifacts let anyone ask questions about the legacy system without reading COBOL
  - **"Reduced key-person risk"** — captures legacy semantics before SMEs retire or rotate

- **Target Outcomes (any of these count):**
  - `APPLICATION_INVENTORY.md` with all programs, copybooks, JCL, BMS maps classified
  - `DATA_DICTIONARY.md` with business entities extracted from copybooks
  - `DEPENDENCY_MAP.md` with call graph and data lineage
  - `HOTSPOT_REPORT.md` with top 10 modernization priority modules
  - PR with review comments and Devin's responses

---

### Lab 2 — Migration Planning & Domain Decomposition (60 min)

- **Module:** [MM13 — COBOL Migration Planning & Domain Decomposition](../../modules/migration-modernization/MM13.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Produce a modernization blueprint with strategy options, domain decomposition, phased cutover plan, and risk register

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Using the COBOL codebase in uc-legacy-modernization-cobol-to-java (and any artifacts from previous analysis), produce a modernization blueprint. Create: (1) `MODERNIZATION_BLUEPRINT.md` evaluating strangler, replatform, refactor, and rewrite strategies for each functional area with trade-off reasoning, (2) `DOMAIN_DECOMPOSITION.md` identifying bounded contexts (account management, transaction processing, customer management, reporting, security) with extraction seam analysis, (3) `CUTOVER_PLAN.md` with a phased migration sequence from lowest-risk to highest-risk including rollback strategies, (4) `RISK_REGISTER.md` with top risks and mitigations. Open a PR.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the tightest coupling points between the account management and transaction processing subsystems? Would a strangler pattern or a big-bang rewrite be safer?"*
- *"What tribal knowledge risks exist in this codebase — are there programs with no comments, unusual naming conventions, or undocumented business rules?"*
- Use the analysis to start a **second session** — try having Devin produce a more detailed cutover plan for a specific phase, or compare two strategy options in depth

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to understand the domain structure and coupling patterns. Use what you learn to try different approaches:
- Have Devin produce a **bounded context map** in Mermaid showing domain boundaries and shared kernel areas
- Ask Devin to create a **strategy comparison matrix** evaluating each approach against criteria (risk, effort, timeline, reversibility)
- Try having Devin **simulate a strangler fig pattern** — what would the first extraction look like?
- Ask Devin to identify **shared copybooks** that would need to be refactored during domain extraction

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — do the strategy recommendations include trade-off reasoning, not just a blanket "rewrite everything"?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"The cutover plan should include rollback triggers and acceptance criteria for each phase"* or *"Add a bounded context diagram in Mermaid"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [MM13 — COBOL Migration Planning](../../modules/migration-modernization/MM13.md) for more ideas.

- **Key Takeaways:**
  - **"Options, not just 'rewrite it'"** — Devin evaluates multiple strategies per subsystem; different domains may warrant different approaches
  - **"Domain decomposition from code, not whiteboards"** — bounded contexts emerge from analyzing actual program dependencies and shared copybooks
  - **"Phased cutover de-risks the program"** — the plan sequences extractions from lowest-risk to highest-risk

- **Target Outcomes (any of these count):**
  - `MODERNIZATION_BLUEPRINT.md` with per-subsystem strategy recommendations
  - `DOMAIN_DECOMPOSITION.md` with bounded context map and extraction seam analysis
  - `CUTOVER_PLAN.md` with phased migration sequence
  - `RISK_REGISTER.md` with top risks and mitigations
  - PR with review comments and Devin's responses

---

### Lab 3 — Migration Test Harness & Validation Strategy (60 min)

- **Module:** [MM14 — Migration Test Harness & Validation Strategy](../../modules/migration-modernization/MM14.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Design and implement a test harness that validates migration correctness — golden files, differential testing, batch reconciliation, and contract tests

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Build a migration test harness for uc-legacy-modernization-cobol-to-java. Create: (1) `TEST_STRATEGY.md` covering four testing dimensions (golden-file, differential, reconciliation, contract), (2) Parse the ASCII data files in the repo using copybook layouts and produce structured JSON golden references in a `golden-files/` directory, (3) Build a `test-harness/` directory with parser utilities, comparison functions, and reconciliation checks that can validate migrated code against the golden files, (4) `RECONCILIATION_CHECKS.md` with per-job validation specifications (record counts, field totals, cross-reference integrity). Open a PR.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the most common data format differences between COBOL and Java — packed decimals, zoned decimals, EBCDIC, fixed-width records? How should the test harness handle these?"*
- *"What reconciliation checks are most important for financial data migration — balance totals, record counts, or cross-reference integrity?"*
- Use the analysis to plan which test dimensions are most critical and whether to focus on golden-file capture or reconciliation checks

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to understand the data file layouts and batch processing patterns. Use what you learn to try different approaches:
- Have Devin produce a **data format mapping** showing COBOL PIC clauses to Java types for every copybook field
- Ask Devin to generate **property-based tests** that verify conversion functions handle edge cases (max values, negative numbers, empty fields)
- Try having Devin build a **differential testing harness** that runs COBOL and Java side-by-side and diffs the outputs
- Ask Devin to add **batch reconciliation checks** for specific jobs with tolerance thresholds for floating-point comparisons

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — are the golden files complete? Do the parser utilities handle all COBOL data formats?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"The golden file parser doesn't handle packed decimal fields — add support for COMP-3"* or *"Add reconciliation checks for the daily transaction batch"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [MM14 — Migration Test Harness](../../modules/migration-modernization/MM14.md) for more ideas.

- **Key Takeaways:**
  - **"Test before you migrate"** — building the safety net first is the single most important risk mitigation in legacy modernization
  - **"Golden files capture behavior without understanding every rule"** — you don't need to reverse-engineer every business rule to verify correctness
  - **"Batch reconciliation provides business-level confidence"** — not just "tests pass" but "totals balance, records match, cross-references are intact"

- **Target Outcomes (any of these count):**
  - `TEST_STRATEGY.md` covering all four testing dimensions
  - `golden-files/` directory with structured reference outputs
  - `test-harness/` directory with parser, comparison, and reconciliation code
  - `RECONCILIATION_CHECKS.md` with per-job validation specifications
  - PR with review comments and Devin's responses

---

### Lab 4 — COBOL to Java Code Migration (60 min)

- **Module:** [MM1 — COBOL to Java](../../modules/migration-modernization/MM1.md)
- **Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Objective:** Translate selected COBOL programs to Java 17+ with parity tests that validate against the golden files and reconciliation checks from Lab 3

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Analyze the COBOL program CBACT01C.cbl in uc-legacy-modernization-cobol-to-java. Understand its business logic, data structures (copybooks), and I/O operations. Rewrite it as a Java 17+ application using modern idioms. Create JUnit tests that verify the Java version produces identical results to the COBOL version for a set of sample inputs. Produce a `MIGRATION_NOTES.md` documenting translation decisions, field mappings, and any semantic differences. Open a PR with the Java code, tests, and migration notes.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the most complex COBOL programs in uc-legacy-modernization-cobol-to-java and what do they do?"*
- *"What would be the best Java architecture for migrating CBTRN01C.cbl? Consider Spring Boot, plain Java, or Kotlin."*
- Use the refined understanding to start a **second session** with a more targeted prompt — try a different program or a different target language

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to browse the auto-generated architecture diagrams and module explanations. Use what you learn to try something different:
- Pick a **different COBOL program** and compare how Devin handles it
- Try migrating to a **different target** (Kotlin, Python, Spring Boot service)
- Ask Devin to reverse-engineer **business rules** or generate a **data dictionary**
- Run **parallel sessions** migrating the same program to two different targets and compare results

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the Java code faithfully represent the COBOL business logic?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"The packed decimal conversion doesn't handle negative values"* or *"Can you also generate a data dictionary for the copybooks?"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- If you have the test harness from Lab 3, try running it against the Java output

See the [full challenge details](../../modules/migration-modernization/MM1.md) for more ideas — there is no single right answer.

- **Key Takeaways:**
  - **"Informed migration, not blind translation"** — by Lab 4, participants have a complete understanding of the system, a strategy, and a test harness before writing a single line of Java
  - **"The test harness catches what code review misses"** — field-level comparison detects subtle differences (decimal precision, trailing spaces, date formats)
  - **"Composable labs"** — each lab's output feeds the next, just like a real migration program

- **Target Outcomes (any of these count):**
  - Java source code replacing selected COBOL program(s) with a working build
  - JUnit tests verifying functional equivalence
  - `MIGRATION_NOTES.md` describing field mappings and decisions
  - Technical documentation, data dictionary, or migration plan
  - PR with review comments and Devin's responses

## Accelerated Variant

For shorter workshops (2 hours), use [MM10 — Legacy Modernization Combined](../../modules/migration-modernization/MM10.md) which compresses the migration execution into a multi-phase hands-on alongside framework upgrade and data source migration. Pair with a 30-minute abbreviated version of Lab 1 (system understanding only) for context.

| Duration | Recommended Format |
|----------|-------------------|
| 4+ hours | Full workshop: Lab 1 → Lab 2 → Lab 3 → Lab 4 |
| 3 hours | Labs 1, 3, 4 (skip planning, focus on understand → test → migrate) |
| 2 hours | Abbreviated Lab 1 (30 min) + MM10 combined hands-on (60 min) + discussion |
| 1 hour | Walkthrough only: show pre-built artifacts from each lab phase |

## Additional Challenges

Participants who finish early or want to go deeper may attempt:

| Challenge | Module | Repo | Difficulty | Time |
|-----------|--------|------|-----------|------|
| Combined Modernization (COBOL + Framework + Data) | [MM10](../../modules/migration-modernization/MM10.md) | Multiple repos | Advanced | 60 min |
| Framework Upgrade (Java 11 → 17) | [MM2](../../modules/migration-modernization/MM2.md) | uc-framework-upgrade-monolith-to-microservices | Intermediate | 60 min |
| Data Source Migration | [MM8](../../modules/migration-modernization/MM8.md) | uc-data-source-migration-legacy-to-modern | Intermediate | 60 min |
| One-Shot Tech Debt Remediation | [MM11](../../modules/migration-modernization/MM11.md) | uc-framework-upgrade-monolith-to-microservices | Advanced | 75 min |

## Repos Required on Devin's Machine

- [ ] uc-legacy-modernization-cobol-to-java

### Optional (for extended challenges)

- [ ] uc-framework-upgrade-monolith-to-microservices
- [ ] uc-data-source-migration-legacy-to-modern

## Runtime Resources

- No external runtime needed — COBOL analysis is static (no mainframe required)
- Java SDK 17+ for Lab 4 (code migration target)
- Python 3.10+ as alternative for test harness (Lab 3) if participants prefer Python over Java

## Context

- **Audience:** Enterprise modernization teams with COBOL estates
- **Narrative:** Understand (Lab 1) → Plan (Lab 2) → Safeguard (Lab 3) → Execute (Lab 4)
- **Enterprise value:**
  - Lab 1: Devin compresses months of discovery into hours — dependency maps, data dictionaries, and hotspot analysis without SME interviews
  - Lab 2: Devin produces decision-ready modernization blueprints with multiple strategy options, not just "rewrite everything"
  - Lab 3: Devin builds the migration safety net (tests, reconciliation) before any code changes — reducing migration risk
  - Lab 4: Devin bridges the COBOL-to-Java language barrier that blocks most development teams

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session.

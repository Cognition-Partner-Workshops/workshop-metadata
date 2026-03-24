# Oracle Forms Migration Planning & Strategy

## Repositories

- [ts-plsql-oracle-forms-legacy-codebase](#ts-plsql-oracle-forms-legacy-codebase)
- [uc-legacy-modernization-oracle-forms-to-java](#uc-legacy-modernization-oracle-forms-to-java)

---

## Challenge

Use Devin to produce a comprehensive migration plan for moving an Oracle Forms 11g/12c HRMS application to Java Spring Boot. Evaluate migration strategies (strangler fig, big-bang rewrite, re-platform to APEX), define module migration ordering, create a component mapping (Forms → React, PL/SQL → Spring Boot services), and build a risk register capturing the real hazards of Forms modernization.

Oracle Forms migrations are uniquely challenging because business logic is scattered across three layers: Forms triggers (client-side), PLL libraries (shared client-side), and PL/SQL packages (server-side). The migration must untangle this three-layer architecture into a clean API-backed web application — and participants will see how Devin handles this complexity.

## Target Outcomes

- `MIGRATION_STRATEGY.md` — evaluation of strangler fig, big-bang rewrite, and re-platform (APEX) approaches with pros/cons for each functional area
- `COMPONENT_MAPPING.md` — detailed mapping of Forms UI elements → React components, PL/SQL procedures → Java service methods, Forms triggers → Spring validation/events, database features → JPA equivalents
- `MODULE_ORDERING.md` — recommended migration sequence with dependency analysis (which modules must migrate first)
- `RISK_REGISTER.md` — top migration risks with likelihood, impact, and mitigation strategies
- PR with all planning artifacts

## What Participants Will Learn

- How Devin evaluates multiple migration strategies with trade-off reasoning, not just "rewrite everything"
- How Forms-specific constructs (triggers, LOVs, canvases, PLL libraries) map to modern web equivalents
- How dependency analysis determines safe migration ordering
- How to identify the hidden risks in Forms modernization (validation drift, shared PLL state, DBMS_SCHEDULER jobs)

## Devin Features Exercised

- DeepWiki for understanding codebase architecture
- AskDevin for targeted strategy questions
- Multi-file analysis across Forms XML, PL/SQL, and schema layers
- Documentation generation with trade-off matrices and dependency diagrams
- Architecture decision reasoning

## Difficulty

Intermediate–Advanced

## Estimated Time

60 minutes

## Notes

- This module builds on the analysis from [Oracle Forms System Understanding](oracle-forms-system-understanding.md) — participants can reference those artifacts or have Devin build context from scratch
- The migration use-case repo (uc-legacy-modernization-oracle-forms-to-java) contains reference planning artifacts in `migration-plan/` — participants should produce their own, but can compare against the reference
- Key Forms-specific migration challenges to highlight: client-side PLL library state management, Forms menu security (PKG_SECURITY.has_permission), LOV-to-API-backed-autocomplete mapping, tab canvas → React tabs
- Encourage comparison of migration strategies across participants — did everyone recommend the same approach?

---

## <a id="ts-plsql-oracle-forms-legacy-codebase"></a>ts-plsql-oracle-forms-legacy-codebase

**Repository:** [ts-plsql-oracle-forms-legacy-codebase](https://github.com/Cognition-Partner-Workshops/ts-plsql-oracle-forms-legacy-codebase)

Oracle Forms 11g/12c HRMS legacy application — the source system being migrated.

## <a id="uc-legacy-modernization-oracle-forms-to-java"></a>uc-legacy-modernization-oracle-forms-to-java

**Repository:** [uc-legacy-modernization-oracle-forms-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-oracle-forms-to-java)

Migration use-case repo with reference planning artifacts, target Java Spring Boot structure, and equivalence test harness.

### Step 1: Paste into Devin

> Analyze the Oracle Forms/PL/SQL HRMS application in ts-plsql-oracle-forms-legacy-codebase and produce a migration plan. Create:
>
> 1. **MIGRATION_STRATEGY.md** — Evaluate three approaches: (a) Strangler Fig (migrate module-by-module behind an API gateway), (b) Big-Bang Rewrite (build complete replacement in parallel), (c) Re-platform to Oracle APEX. For each approach, analyze pros, cons, risk level, timeline estimate, and suitability for each functional area (employee management, payroll, leave, performance reviews, security, reporting, integration). Recommend the best approach with reasoning.
> 2. **COMPONENT_MAPPING.md** — Map every Forms element to its Java/React equivalent: Forms canvases/tabs → React components, Forms triggers (WHEN-VALIDATE-ITEM, PRE-INSERT, POST-QUERY) → Spring validation/JPA callbacks/React hooks, PLL library functions → Java utility classes, PL/SQL package procedures → Spring service methods, Oracle Reports → reporting solution, UTL_FILE integration → Spring Integration.
> 3. **MODULE_ORDERING.md** — Analyze dependencies between PL/SQL packages and recommend a safe migration sequence. Identify which modules can be migrated independently and which have hard dependencies on other modules. Address the circular dependency between PKG_EMPLOYEE and PKG_PAYROLL.
> 4. **RISK_REGISTER.md** — Identify top 10 migration risks specific to Oracle Forms modernization. Include: validation drift between PLL and package layers, loss of Forms-specific UX patterns (LOVs, multi-record blocks), batch job migration (DBMS_SCHEDULER), data integrity during dual-running, and knowledge gaps.
>
> Open a PR with all documents.

### Step 2: Research with Ask Devin

- *"What are the biggest differences between Oracle Forms client-server architecture and a modern React+Spring Boot architecture? What will users miss most?"*
- *"How should the circular dependency between PKG_EMPLOYEE and PKG_PAYROLL be resolved in the Java migration?"*
- *"What are the risks of running Oracle Forms and the new Java app side-by-side during migration?"*

### Step 3 (Optional): Read the DeepWiki

Open both repos' DeepWiki pages. Compare the legacy architecture with the target architecture in the migration use-case repo. Look for gaps in the component mapping.

### Step 4 (Optional): Review & Give Feedback

- **Review the strategy** — is the trade-off analysis fair? Does the recommended approach account for the team's capability?
- **Review the component mapping** — are there Forms constructs that don't have clean modern equivalents?
- **Leave a comment** asking Devin to add an ADR (Architecture Decision Record) for a specific decision point
- **Leave a comment** asking Devin to estimate effort for each module migration

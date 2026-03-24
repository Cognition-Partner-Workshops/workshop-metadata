# COBOL Migration Planning & Domain Decomposition

## Repositories

- [uc-legacy-modernization-cobol-to-java](#uc-legacy-modernization-cobol-to-java)

---

## Challenge

Use Devin to produce a concrete modernization blueprint for a COBOL mainframe application. Starting from the system-understanding artifacts (or building them on the fly), Devin drafts a phased migration strategy with multiple options — strangler pattern, replatform, refactor, rewrite, or COTS/SaaS replacement — and identifies domain decomposition candidates with bounded context boundaries and safe extraction seams.

This is the planning phase that bridges understanding and execution. The output is a decision-ready document that an architecture review board could act on — not a vague "modernize everything" recommendation, but a specific, phased plan with risk analysis and sequencing.

## Target Outcomes

- `MODERNIZATION_BLUEPRINT.md` — strategy options for each major subsystem (strangler, replatform, refactor, rewrite) with trade-off analysis, recommended approach, and justification
- `DOMAIN_DECOMPOSITION.md` — bounded context map identifying candidate domains (e.g., account management, transaction processing, statement generation, user security), seams where extraction is safest, and shared data dependencies that create coupling
- `CUTOVER_PLAN.md` — phased migration sequence with: phase ordering, dependencies between phases, parallel vs. sequential constraints, rollback strategy per phase, and acceptance criteria for each phase gate
- `RISK_REGISTER.md` — top risks with likelihood, impact, mitigation strategy, and owner assignment placeholders
- PR with all planning artifacts

## What Participants Will Learn

- How Devin reasons about architectural trade-offs (not just "rewrite it")
- How domain-driven design principles apply to COBOL estate decomposition
- How a strangler pattern works in practice — wrapping legacy programs, exposing APIs, incremental replacement
- How phased cutover planning manages risk in large-scale migrations
- The difference between a vague modernization proposal and an actionable blueprint

## Devin Features Exercised

- AskDevin for architecture strategy and trade-off analysis
- Long-form reasoning about complex systems
- Architecture documentation generation
- Domain modeling from code analysis
- DeepWiki for understanding program relationships and data flows

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

## Notes

- This module works best after [COBOL System Understanding](cobol-system-understanding.md) (system understanding) — the inventory and dependency map inform the planning
- If running standalone (without MM12 first), Devin will need to perform discovery as part of the planning session, which may reduce depth
- The CardDemo app has natural domain boundaries: account management (CBACT*), transaction processing (CBTRN*, COTRN*), customer management (CBCUS*), statement/reporting (CBSTM*, CORPT*), user security (COUSR*), card management (COCRD*) — participants should discover these through the exercise
- There is no single "right" blueprint — different participants will recommend different strategies based on their assumptions about the target environment
- Encourage participants to compare blueprints and discuss trade-offs after the lab

---

## <a id="uc-legacy-modernization-cobol-to-java"></a>uc-legacy-modernization-cobol-to-java

**Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)

AWS Mainframe Modernization CardDemo (Apache 2.0). A credit card management system with account processing, transaction handling, customer management, statement generation, and user security — natural domain boundaries for decomposition analysis.

### Step 1: Paste into Devin

> Analyze the COBOL application in uc-legacy-modernization-cobol-to-java and produce a modernization plan. Create the following artifacts:
>
> 1. **MODERNIZATION_BLUEPRINT.md** — For each major functional area of the application, evaluate these modernization strategies: (a) Strangler pattern — wrap with APIs, incrementally replace, (b) Replatform — keep COBOL, move to cloud runtime, (c) Refactor — restructure COBOL for maintainability without rewriting, (d) Rewrite — translate to modern language (Java/Kotlin/Python). For each area, recommend the best strategy with justification, considering: business logic complexity, data coupling, team skill availability, and risk tolerance.
> 2. **DOMAIN_DECOMPOSITION.md** — Identify bounded contexts in the application by analyzing which programs share copybooks, which JCL jobs group together, and which data files are shared vs. isolated. Map each bounded context to a candidate microservice or module. Identify the extraction seams (points where domains interact) and rate each seam's extraction difficulty (easy/medium/hard) based on data coupling.
> 3. **CUTOVER_PLAN.md** — Sequence the migration into phases. Each phase should specify: which programs migrate, which data stores are affected, what integration points need temporary bridges, what the rollback plan is, and what the acceptance criteria are for moving to the next phase. The first phase should be the lowest-risk, highest-value extraction.
> 4. **RISK_REGISTER.md** — Document the top 10 migration risks: hidden business rules in tribal knowledge, environment gaps (mainframe-specific runtimes), data representativeness for testing, shared data coupling between domains, and any other risks identified during analysis. For each risk, provide: likelihood (high/medium/low), impact (high/medium/low), mitigation strategy, and early warning indicators.
>
> Open a PR with all four documents.

### Step 2: Research with Ask Devin

- *"What are the natural bounded contexts in the CardDemo application? Which programs and copybooks belong to each domain?"*
- *"If I wanted to extract transaction processing as the first microservice, what shared data dependencies would I need to handle? What would the strangler API look like?"*
- *"What are the riskiest parts of this codebase to migrate — where is the business logic most dense and least documented?"*
- Use the answers to refine your blueprint — add specific program names, data dependencies, and risk factors

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to visualize program relationships and data flows. Use this to:
- Validate the domain boundaries Devin identified — do the DeepWiki diagrams confirm the clustering?
- Identify shared copybooks that create cross-domain coupling
- Trace end-to-end flows that span multiple domains (these are the hardest to decompose)

### Step 4 (Optional): Review & Give Feedback

- **Review the blueprint** — are the strategy recommendations well-justified? Do the trade-offs make sense for each domain?
- **Review the decomposition** — are the bounded contexts reasonable? Did Devin miss any shared data dependencies?
- **Leave a comment** asking Devin to add a cost/effort estimate (T-shirt sizes) for each phase of the cutover plan
- **Leave a comment** asking Devin to identify which phases could run in parallel vs. which must be sequential

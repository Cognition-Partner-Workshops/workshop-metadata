# Workshop: Data Source Migration (Desktop + Cloud)

**Other variants:** [Cloud only](README.md)

## Overview

| | |
|---|---|
| **Focus** | Rewriting a legacy data source to a modern schema and reconnecting the application with comprehensive testing |
| **Duration** | 1-2 hours |
| **Audience** | Database engineers, backend developers, data migration teams |
| **Key Modules** | [Data Source Migration](../../modules/data-engineering/data-source-migration.md) |

## Platform Context

This workshop uses **Devin Desktop + Devin Cloud**. You will use Desktop as your primary interface — exploring code locally, delegating tasks to Cloud, and reviewing results without leaving the editor. Cloud sessions run autonomously on remote VMs while you continue working locally.

> **Tip:** If you prefer a browser-only workflow, see the [Cloud only variant](README.md) which uses the Devin web app exclusively.

## Workshop Narrative

Data source migration is not just schema work — the application must be rewired and the entire pipeline validated. This workshop covers both parts: (1) rewriting the legacy data source to a modern schema, and (2) updating the application to use the new data source, with testing at every step.

In this variant, you use Devin Desktop as your command center: explore code locally with Cascade or Devin Local, delegate implementation to Devin Cloud, and review the resulting PRs directly in your editor.

## Getting the Most from This Workshop

> **Devin Cloud works asynchronously on its own machine.** Once you delegate a task, Devin Cloud runs independently — you can continue local exploration, start another task, or review previous PRs. You'll see the session update in the Agent Command Center when it opens a PR.

A few tips to maximize your hands-on time:

- **Create a Space first.** Organize this workshop's sessions, PRs, and files in a dedicated Space so context carries across tasks.
- **Explore locally, delegate globally.** Use Cascade or Devin Local for quick code exploration and requirement refinement, then delegate implementation to Cloud.
- **Monitor from the Agent Command Center.** The Kanban board shows the status of each session — local and cloud — at a glance.
- **Review PRs in-editor.** When Devin Cloud opens a PR, use one-click checkout to review it directly in Desktop. No browser switching, no manual `git fetch`.
- **Build up Devin's knowledge as you go.** When Devin suggests a Knowledge item, accept it — this is how teams build a shared context layer that compounds over time.
- **Leave PR comments to steer Devin.** After Devin opens a PR, leave comments and Devin Cloud will wake up and address them — this is the core feedback loop.

## Table of Contents

- [Lab 1 — Data Source Rewrite + App Reconnection + Testing](#lab-1--data-source-rewrite--app-reconnection--testing)
- [Repos Required](#repos-required)
- [Key Takeaways](#key-takeaways)

---

## Labs

### Lab 1 — Data Source Rewrite + App Reconnection + Testing

- **Module:** [Data Source Migration](../../modules/data-engineering/data-source-migration.md)
- **Repository:** [uc-data-source-migration-jdbc-normalization](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-jdbc-normalization)
- **Objective:** Transform a legacy data warehouse (all-VARCHAR, denormalized) to a modern normalized schema, rewire the app, and validate with comprehensive tests
- **Duration:** 60 min

#### Step 1: Create a Space in Desktop

Open Devin Desktop and create a new Space for this workshop (e.g., "Data Source Migration"). This groups your sessions, PRs, and files in one place so context carries across tasks.

#### Step 2: Explore the legacy schema with Cascade or Devin Local

Use Cascade or Devin Local in Desktop to explore the codebase before delegating implementation. Ask questions like:

- *"What are the riskiest data type conversions — VARCHAR dates to LocalDate, amounts to BigDecimal? What edge cases could cause data loss?"*
- *"How should we validate that no records were lost or corrupted? What reconciliation checks should we run?"*
- *"What's the best way to implement a dual-read feature flag for safe rollout?"*

This local exploration helps you refine the requirements before sending them to Cloud. Devin Local runs in your terminal context with access to your local files, so iteration is fast.

> **ACP note:** Devin Local speaks the Agent Client Protocol (ACP), the same open standard that lets third-party agents (Codex CLI, Claude Agent, Gemini CLI, and others) plug into Desktop. You can use whichever agent fits your workflow.

#### Step 3: Delegate to Devin Cloud from Desktop

Once you've refined your understanding, delegate the implementation to Devin Cloud. From Desktop, create a new Cloud session in your Space with this prompt:

```
Review the legacy CDW schema in uc-data-source-migration-jdbc-normalization.
This loan management app reads from denormalized tables where all
columns are VARCHAR.

Part 1 — Rewrite the data source: Create modern JPA entities matching
data/modern-schema/modern_tables.sql with proper types (LocalDate,
BigDecimal, Long, enums). Write a migration service that transforms
legacy data per data/mappings/column_mappings.md. Add data
reconciliation tests that verify record counts and field values.

Part 2 — Reconnect the app: Update LoanService.java to use modern
repositories. Add golden-file validation tests that capture API
responses before and assert they match after.

Create a `TESTING_REPORT.md` documenting what tests were added and
what they validate.
```

The Cloud session starts on a remote VM and works autonomously. You can continue working locally while it runs.

#### Step 4: Monitor progress in the Agent Command Center

Switch to the Agent Command Center in Desktop to see your Cloud session on the Kanban board. The board organizes sessions by status — you can see at a glance whether the session is running, waiting for review, or completed.

If you have multiple sessions running (from other labs or parallel tasks), they appear here too — giving you a single view of the full workload.

#### Step 5 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the domain model and API contracts. Try adding dual-read feature flags, data reconciliation dashboards, or complete data lineage maps.

#### Step 6: Review the PR with one-click checkout

When Devin Cloud opens a PR, it appears in your Space and in the Agent Command Center. Use one-click checkout to open the branch directly in your editor — no manual `git fetch` or browser switching required.

Focus your review on the testing story: data transformation correctness, reconciliation tests, golden-file validation, and app reconnection completeness.

Leave comments directly on the PR. Devin Cloud will wake up, read your feedback, and push follow-up commits. Iterate until you're satisfied, then merge.

**Target Outcomes:** Modern JPA entities, data migration service, rewired service layer, golden-file validation, reconciliation tests, testing report

## Repos Required

- [ ] uc-data-source-migration-jdbc-normalization

## Key Takeaways

- **"Rewrite + reconnect + test"** — data source migration requires schema work, app rewiring, and pipeline validation
- **"Testing proves the migration didn't break anything"** — golden-file validation, reconciliation checks, and type-conversion tests
- **"Feature flags enable safe rollout"** — dual-read mode lets you switch between data sources at runtime
- **"Desktop is the command center"** — explore locally, delegate to Cloud, review PRs in-editor, and track sessions on the Kanban board — without leaving Desktop
- **"The platform continuum"** — local exploration refines requirements, Cloud executes autonomously, and Desktop ties it together with Spaces, one-click checkout, and the Agent Command Center

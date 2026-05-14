# Linting & Static Analysis

## Repositories

- [timesheet-app](#timesheet-app)
- [timesheet-infra](#timesheet-infra)

---

## Challenge

Resolve linting issues in a codebase using Devin. This is a great entry-level challenge that demonstrates Devin's ability to read linting configurations, interpret errors, and iteratively fix them.

## Target Outcomes

- All linting errors resolved
- Linter runs cleanly with zero warnings/errors
- PR with fixes and evidence of clean lint run

## What Participants Will Learn

- How Devin reads and interprets linting configurations (ESLint, Prettier, terraform fmt)
- How Devin navigates GitHub Issues and resolves them
- Observing Devin's iterative approach: run linter → fix → re-run → verify

## Devin Features Exercised

- GitHub Issue resolution
- PR creation
- Iterative feedback loop (lint → fix → lint)

## Difficulty

Beginner

## Estimated Time

30 minutes

---

## <a id="timesheet-app"></a>timesheet-app

**Repository:** [timesheet-app](https://github.com/Cognition-Partner-Workshops/timesheet-app)

React 19 + Node.js/Express timesheet application with ESLint and Prettier configured.

### Step 1: Paste into Devin

> Resolve this GitHub Issue: https://github.com/Cognition-Partner-Workshops/timesheet-app/issues/3 — fix all ESLint linting errors in the codebase, run the linter to verify all issues are resolved, and open a PR with the fixes.

### Step 2: Research with Ask Devin

- *"What linting rules are configured in timesheet-app? Are there any disabled rules that should be re-enabled?"*
- *"Are there any inconsistencies between the ESLint config and the Prettier config?"*
- Use insights to start a second session with a more comprehensive lint cleanup approach

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the codebase structure and identify additional quality improvements beyond linting — dead code, unused imports, or style inconsistencies.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — did Devin fix all lint errors? Did it introduce any behavioral changes?
- **Leave a comment** asking Devin to also add a pre-commit hook that runs the linter automatically
- **Watch Devin respond** and push a follow-up commit

---

## <a id="timesheet-infra"></a>timesheet-infra

**Repository:** [timesheet-infra](https://github.com/Cognition-Partner-Workshops/timesheet-infra)

Terraform infrastructure code for hosting the timesheet application.

### Step 1: Paste into Devin

> Fix all Terraform formatting issues in timesheet-infra using `terraform fmt`. Run `terraform validate` to confirm the configuration is still valid after formatting. Open a PR with the fixes.

### Step 2: Research with Ask Devin

- *"Are there any Terraform best practice violations in timesheet-infra beyond formatting — such as missing descriptions on variables, hardcoded values, or missing tags?"*
- Use insights to start a second session addressing Terraform quality beyond just formatting

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the infrastructure topology and identify any misconfigurations or drift risks.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the formatting changes purely cosmetic? No logic changes?
- **Leave a comment** asking Devin to also add a CI check that runs `terraform fmt -check` on every PR
- **Watch Devin respond** and push a follow-up commit

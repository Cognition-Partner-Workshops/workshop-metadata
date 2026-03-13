# QE1

## Repositories

- [app_timesheet](#app_timesheet)
- [hosting-client-timesheet-app](#hosting-client-timesheet-app)

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

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

React 19 + Node.js/Express timesheet application with ESLint and Prettier configured.

### Step 1: Get Started Fast

> Resolve this GitHub Issue: https://github.com/Cognition-Partner-Workshops/app_timesheet/issues/3 — fix all ESLint linting errors in the codebase, run the linter to verify all issues are resolved, and open a PR with the fixes.

### Step 2: Level Up with AskDevin

- *"What linting rules are configured in app_timesheet? Are there any disabled rules that should be re-enabled?"*
- *"Are there any inconsistencies between the ESLint config and the Prettier config?"*
- Use insights to start a second session with a more comprehensive lint cleanup approach

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the codebase structure and identify additional quality improvements beyond linting — dead code, unused imports, or style inconsistencies.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — did Devin fix all lint errors? Did it introduce any behavioral changes?
- **Leave a comment** asking Devin to also add a pre-commit hook that runs the linter automatically
- **Watch Devin respond** and push a follow-up commit

---

## <a id="hosting-client-timesheet-app"></a>hosting-client-timesheet-app

**Repository:** [hosting-client-timesheet-app](https://github.com/Cognition-Partner-Workshops/hosting-client-timesheet-app)

Terraform infrastructure code for hosting the timesheet application.

### Step 1: Get Started Fast

> Fix all Terraform formatting issues in hosting-client-timesheet-app using `terraform fmt`. Run `terraform validate` to confirm the configuration is still valid after formatting. Open a PR with the fixes.

### Step 2: Level Up with AskDevin

- *"Are there any Terraform best practice violations in hosting-client-timesheet-app beyond formatting — such as missing descriptions on variables, hardcoded values, or missing tags?"*
- Use insights to start a second session addressing Terraform quality beyond just formatting

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the infrastructure topology and identify any misconfigurations or drift risks.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are the formatting changes purely cosmetic? No logic changes?
- **Leave a comment** asking Devin to also add a CI check that runs `terraform fmt -check` on every PR
- **Watch Devin respond** and push a follow-up commit

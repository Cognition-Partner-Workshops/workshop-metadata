# Test Framework Migration

## Repositories

- [app_petclinic-angular](#app_petclinic-angular)
- [ts-angular-realworld-example-app](#ts-angular-realworld-example-app)

---

## Challenge

Migrate a codebase from a deprecated or legacy test framework to a modern replacement. This covers converting test files, updating configuration, resolving API differences, and verifying all migrated tests pass. The repetitive, file-by-file nature of this work is where Devin excels — participants see how Devin applies consistent migration patterns across dozens of files while they focus on review.

## Target Outcomes

- Legacy test framework fully replaced (dependencies removed, config files updated)
- All existing test files converted to the new framework's API
- Migrated test suite passes with equivalent coverage
- Migration runbook documenting patterns, gotchas, and manual interventions
- PR with migrated tests and evidence of passing suite

## What Participants Will Learn

- How Devin learns migration patterns from the first few files and applies them consistently across the rest
- How parallel child sessions can fan out repetitive file-by-file conversions
- How to capture migration patterns as a Playbook for reuse across other repos
- The difference between automated pattern conversion and cases requiring human judgment
- How Devin's Knowledge layer accumulates migration context that improves subsequent conversions

## Devin Features Exercised

- Parallel child sessions (fan out across spec files)
- Long-running autonomous work
- Knowledge layer (learns patterns, applies consistently)
- Playbook creation (capture migration runbook for reuse)
- Multi-repo workspace (reference a modern repo as the target pattern)
- PR creation with migration evidence

## Difficulty

Intermediate

## Estimated Time

60 minutes

---

## <a id="app_petclinic-angular"></a>app_petclinic-angular

**Repository:** [app_petclinic-angular](https://github.com/Cognition-Partner-Workshops/app_petclinic-angular)

Angular frontend using Karma + Jasmine for unit tests and Protractor for E2E tests — both deprecated. Migrate to modern Angular testing with Jest/Vitest and Playwright.

### Step 1: Paste into Devin

> Analyze the test infrastructure in app_petclinic-angular. The project currently uses Karma + Jasmine for unit tests and Protractor for E2E tests — both are deprecated in the Angular ecosystem.
>
> Phase 1 — Unit test migration:
> Replace Karma + Jasmine with Jest (or Vitest). Update the test configuration, convert all `.spec.ts` files to use the new test runner's API, and ensure all unit tests pass. Remove the Karma dependencies and configuration files.
>
> Phase 2 — E2E test migration:
> Replace Protractor with Playwright. Convert any existing E2E tests (or create new ones if none exist) to use Playwright's API. Add a Playwright configuration file and ensure the E2E tests can run against the dev server.
>
> Create a `MIGRATION_RUNBOOK.md` documenting: which patterns were converted automatically, which required manual intervention, and common gotchas for teams doing similar migrations. Open a PR.

### Step 2: Research with Ask Devin

- *"What Karma/Jasmine patterns in app_petclinic-angular will be hardest to convert to Jest — are there any custom matchers, async test helpers, or TestBed configurations that need special handling?"*
- *"What is the recommended Jest or Vitest configuration for Angular 16? Are there specific Angular testing utilities that need to be updated?"*
- *"How does ts-angular-realworld-example-app structure its Vitest + Playwright setup? Can we use it as a reference for the migration target?"*
- Use the analysis to plan the migration before Devin starts — this is the **Ask Devin for requirement gathering** pattern

### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the test file structure and testing patterns. Key things to look for:
1. How many `.spec.ts` files exist and what patterns they use (TestBed, mocks, spies)
2. Whether tests use Karma-specific features (custom reporters, preprocessors)
3. Whether there are E2E tests in the `e2e/` directory using Protractor

Try different approaches:
- Run **parallel Devin sessions** — one for unit test migration (Phase 1) and one for E2E migration (Phase 2). Each session gets its own VM, so they don't interfere
- Have Devin use `ts-angular-realworld-example-app` as a **reference repo** — it already uses Vitest + Playwright, so Devin can learn the target patterns from a working example
- After the migration succeeds, ask Devin to **create a Playbook** capturing the migration steps so the same pattern can be applied to other Angular repos with one click

### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **Correctness:** Do the migrated tests still test the same behavior? Were any assertions lost in translation?
- **Completeness:** Are all `.spec.ts` files converted? Are there any leftover Karma/Protractor references?
- **Configuration:** Is the new test runner properly configured for Angular (TestBed, zone.js handling)?

**Leave a feedback comment** and watch Devin respond:
- *"This test still imports from @angular/core/testing with a Karma-specific setup — please update to the Jest/Vitest equivalent"*
- *"The Protractor-style element selectors need to be converted to Playwright locators"*
- *"Add the migration runbook to the PR description so reviewers can understand the conversion patterns"*

---

## <a id="ts-angular-realworld-example-app"></a>ts-angular-realworld-example-app

**Repository:** [ts-angular-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-angular-realworld-example-app)

Angular app that already uses Vitest + Playwright — use as a **reference target** for the migration, or as a second repo for parallel comparison.

### Step 1: Paste into Devin

> Review the test infrastructure in ts-angular-realworld-example-app. This repo already uses Vitest for unit tests and Playwright for E2E tests. Analyze the test configuration patterns, helper utilities, and test structure. Then apply what you learn to app_petclinic-angular — use this repo as the reference implementation for the migration target.
>
> Specifically:
> 1. Document the Vitest configuration pattern (vitest.config.ts, test setup files, Angular-specific configuration)
> 2. Document the Playwright configuration pattern (playwright.config.ts, test helpers, authentication fixtures)
> 3. Create a migration guide comparing the Karma/Jasmine patterns in app_petclinic-angular to the equivalent Vitest/Playwright patterns in this repo
>
> Open a PR with the migration guide.

### Step 2: Research with Ask Devin

- *"What are the key differences between the Karma+Jasmine configuration in app_petclinic-angular and the Vitest configuration in ts-angular-realworld-example-app?"*
- *"Are there any Angular-specific testing utilities that differ between the two setups?"*

### Step 3 (Optional): Read the DeepWiki

Compare both repos' DeepWiki pages side-by-side. Look for differences in test helpers, mock strategies, and component testing approaches.

### Step 4 (Optional): Review & Give Feedback

- **Review the migration guide** — is it detailed enough for a developer to follow without Devin's help?
- **Leave a comment** asking Devin to add before/after code examples for the most common conversion patterns

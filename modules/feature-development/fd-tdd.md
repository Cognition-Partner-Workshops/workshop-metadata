# D2 — Test-Driven Development

## Challenge

Define the functional behavior for a new feature, create the tests first, then have Devin implement the feature following TDD practices.

## Options

- **Repository:** Any repo in the org (participant's choice)
- **Recommended:**
  - [client-timesheet-app](https://github.com/Cognition-Partner-Workshops/client-timesheet-app) — Jest test infrastructure exists
  - [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) — JUnit test infrastructure exists

## Task

1. Define the functional behavior desired for a new feature or function
2. Create the tests and commit them to a branch
3. In a **new Devin Session**, pick up the unimplemented feature and have Devin follow TDD practices (make the failing tests pass)

## Sample Prompt (Step 1 — Write Tests)

> I want to add a "duplicate work entry" feature to client-timesheet-app. Write failing Jest tests for a new POST /api/work-entries/:id/duplicate endpoint that creates a copy of an existing work entry with today's date. Test: successful duplication, 404 for non-existent entry, 403 for entry owned by another user. Commit the tests to a new branch.

## Sample Prompt (Step 2 — New Session)

> The branch feature/duplicate-entry has failing tests for a new "duplicate work entry" feature. Implement the feature so all tests pass. Do not modify the test files. Open a PR.

## What Participants Will Learn

- How Devin interprets test expectations to understand requirements
- TDD workflow with Devin: red → green → refactor
- Multi-session workflow (one session writes tests, another implements)
- How Devin respects constraints ("do not modify test files")

## Devin Features Exercised

- Test interpretation
- Implementation from test specifications
- Multi-session workflow
- Branch-based collaboration

## Difficulty

Intermediate

## Estimated Time

60 minutes (30 min per session)

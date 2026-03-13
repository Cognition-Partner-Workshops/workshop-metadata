# QE3

## Repositories

- [app_timesheet](#app_timesheet)
- [cal.com](#calcom)

---

## Challenge

Experiment with Devin's capabilities for end-to-end testing against a locally hosted application. This challenge explores browser-based testing, Playwright/Cypress test authoring, and visual verification.

## Target Outcomes

- E2E test suite created or expanded (Playwright or Cypress)
- Tests run successfully against the running application
- Screen recording or screenshots as test evidence
- PR with test files and evidence

## What Participants Will Learn

- How Devin interacts with running applications via its browser
- Devin's screen recording capabilities for test evidence
- Writing and running Playwright/Cypress tests with Devin

## Devin Features Exercised

- Browser interaction
- Screen recording
- Test framework setup and execution
- Runtime application testing

## Difficulty

Intermediate

## Estimated Time

60 minutes

## Prerequisites

The application must be running locally on Devin's machine or hosted externally. See [runtime-resources.md](../../shared/runtime-resources.md) for hosted instance details.

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Simpler application — good for first-timers with E2E testing. Backend on port 3001, frontend on port 5173. Login with any email (no password required).

### Step 1: Get Started Fast

> Set up and run app_timesheet locally (backend on port 3001, frontend on port 5173). Write Playwright E2E tests for the work entries workflow: login, create a work entry, verify it appears in the list, edit it, and delete it. Run the tests and take a screen recording. Open a PR with the test files.

### Step 2: Level Up with AskDevin

- *"What are the main user workflows in app_timesheet that would benefit from E2E tests?"*
- *"Does the app already have any test infrastructure (Playwright config, test utilities) that I should build on?"*
- Use insights to write tests for additional workflows (client management, reporting)

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the frontend routes and components. Identify which pages have the most interactive elements that need E2E coverage.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are the tests robust or will they be flaky? Do they use proper selectors?
- **Leave a comment** asking Devin to add a test for an edge case (e.g., submitting a form with missing fields)
- **Watch Devin respond** and push a follow-up commit

---

## <a id="calcom"></a>cal.com

**Repository:** [cal.com](https://github.com/Cognition-Partner-Workshops/cal.com)

Rich scheduling application with existing Playwright configuration. `yarn dev` starts on port 3000.

### Step 1: Get Started Fast

> Start cal.com locally with `yarn dev`. Write Playwright E2E tests for the booking flow: navigate to a public booking page, select a time slot, fill in attendee details, and confirm the booking. Use the existing Playwright config in the repo. Run the tests and take a screen recording. Open a PR with the test files.

### Step 2: Level Up with AskDevin

- *"What Playwright tests already exist in cal.com? What workflows are untested?"*
- *"What are the most common user-reported issues in scheduling apps that E2E tests should catch?"*
- Use insights to target gaps in the existing test suite

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the booking engine architecture, event types, and user roles. Use this to write tests that cover different booking scenarios (round-robin, collective, recurring).

### Step 4: Review the PR and Give Feedback

- **Review the diff** — do the tests handle loading states and async operations properly?
- **Leave a comment** asking Devin to add a test for a specific booking edge case (e.g., timezone handling, conflicting bookings)
- **Watch Devin respond** and push a follow-up commit

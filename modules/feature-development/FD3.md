# FD3

## Repositories

- [app_timesheet](#app_timesheet)
- [cal.com](#calcom)

---

## Challenge

Experiment with a runtime application and have Devin fix a bug or unexpected behavior you encounter. This challenge is intentionally open-ended — find a bug and report it to Devin.

## Target Outcomes

- Bug identified and documented with reproduction steps
- Root cause analysis performed
- Fix implemented and verified (ideally with before/after screenshots or recordings)
- PR with fix and explanation

## What Participants Will Learn

- How Devin interprets bug reports (screenshots, descriptions, reproduction steps)
- How Devin uses its browser to reproduce and verify bugs
- Devin's debugging approach (logs, code analysis, bisect)
- The value of screen recordings as test evidence

## Devin Features Exercised

- Browser interaction for bug reproduction
- Screen recording for test evidence
- Debugging and root cause analysis
- PR creation with fix explanation

## Difficulty

Intermediate

## Estimated Time

45 minutes

## Prerequisites

The application must be running (locally or hosted). See [runtime-resources.md](../../shared/runtime-resources.md) for hosted instance details.

## Notes

- Encourage participants to use Devin's browser to interact with the running app
- The bug doesn't have to be a "real" bug — unexpected UX or edge cases count
- If no hosted instance is available, participants can ask Devin to run the app locally

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Backend on port 3001, frontend on port 5173. Login with any email (no password required).

### Step 1: Get Started Fast

> Start app_timesheet locally (backend: `cd backend && npm run dev`, frontend: `cd frontend && npm run dev`). Explore the application — create work entries, manage clients, try the reporting features. Find and document any bugs or unexpected behavior. Fix the most impactful bug you find. Take before/after screenshots. Open a PR.

### Step 2: Level Up with AskDevin

- *"What are the most common types of bugs in Express + React applications? What should I look for?"*
- *"Are there any edge cases in the work entry form that might cause unexpected behavior?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the data flow and identify components that might have bugs (complex state management, API error handling, date/time logic).

### Step 4: Review the PR and Give Feedback

- **Review the diff** — does the fix address the root cause or just the symptom?
- **Leave a comment** asking Devin to add a regression test for the bug

---

## <a id="calcom"></a>cal.com

**Repository:** [cal.com](https://github.com/Cognition-Partner-Workshops/cal.com)

Complex scheduling application. `yarn dev` starts on port 3000. See [runtime-resources.md](../../shared/runtime-resources.md) for sample credentials.

### Step 1: Get Started Fast

> Start cal.com locally with `yarn dev`. Explore the booking flow — create event types, test the public booking page, try different scheduling options. Find and document any bugs or unexpected behavior. Fix the most impactful bug you find. Take a screen recording of the bug and the fix. Open a PR.

### Step 2: Level Up with AskDevin

- *"What are the most complex user flows in cal.com that are likely to have edge case bugs?"*
- *"Are there known issues in the GitHub Issues tab that I could try to reproduce and fix?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the booking engine and timezone handling. These are common sources of bugs in scheduling applications.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — does the fix handle timezone edge cases correctly?
- **Leave a comment** asking Devin to add an E2E test that prevents this bug from regressing

# D3 — Fix a Runtime Bug

## Challenge

Experiment with a runtime application and have Devin fix a bug or unexpected behavior you encounter.

## Repository

- **Primary:** [cal.com](https://github.com/Cognition-Partner-Workshops/cal.com)
- **Alternative:** [client-timesheet-app](https://github.com/Cognition-Partner-Workshops/client-timesheet-app)

## Task

Experiment with the runtime application and have Devin fix a bug or unexpected behavior you encounter. This challenge is intentionally open-ended — find a bug and report it to Devin.

## Prerequisites

- **Runtime required:** The application must be running (locally or hosted)
- **cal.com:** `yarn dev` on port 3000
  - Sample credentials: See [runtime-resources.md](../../shared/runtime-resources.md)
- **client-timesheet-app:** Backend port 3001, frontend port 5173
  - Login with any email (no password required)

## Sample Prompt

> I found a bug in cal.com: when I [describe the bug]. Here's a screenshot [attach]. Please investigate the root cause and fix it. Open a PR with the fix and explain what was wrong.

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

Intermediate — Requires finding a bug first.

## Estimated Time

45 minutes

## Notes

- Encourage participants to use Devin's browser to interact with the running app
- The bug doesn't have to be a "real" bug — unexpected UX or edge cases count
- If no hosted instance is available, participants can ask Devin to run the app locally

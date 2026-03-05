# D4 — Fix a UI Bug

## Challenge

Fix a known visual bug in the client-timesheet-app.

## Repository

- **Primary:** [client-timesheet-app](https://github.com/Cognition-Partner-Workshops/client-timesheet-app)

## Task

The Client dropdown's label text has a strikethrough when you create an hour entry on the running app's `/work-entries` page.

## Bug Details

- **Page:** `/work-entries` (Work Entries page)
- **Component:** Client dropdown / select field
- **Symptom:** The label text appears with a strikethrough decoration
- **Expected:** Label text should appear normally without strikethrough

## Prerequisites

- **Runtime required:** Application must be running to see the bug visually
- Backend: `cd backend && npm run dev` (port 3001)
- Frontend: `cd frontend && npm run dev` (port 5173)
- Login with any email address

## Sample Prompt

> There's a UI bug in client-timesheet-app: on the /work-entries page, the Client dropdown label has a strikethrough. Investigate the CSS/styling causing this issue and fix it. Take a screenshot before and after the fix. Open a PR.

## What Participants Will Learn

- How Devin investigates CSS/styling issues
- How Devin uses its browser to visually verify fixes
- Screen recording / screenshot as proof of fix
- Material-UI component styling patterns

## Devin Features Exercised

- Browser interaction (visual inspection)
- CSS debugging
- Screenshot/recording for before/after comparison
- PR creation

## Difficulty

Beginner to Intermediate

## Estimated Time

30 minutes

## Notes

- This is a good "quick win" challenge — specific, verifiable, and satisfying to fix
- Pairs well with the data bug challenge (D5) for a "bug bash" session

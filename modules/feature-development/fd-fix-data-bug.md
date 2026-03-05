# D5 — Fix a Data Bug

## Challenge

Fix a known data persistence bug in the client-timesheet-app.

## Repository

- **Primary:** [client-timesheet-app](https://github.com/Cognition-Partner-Workshops/client-timesheet-app)

## Task

Clients do not persist when you log out and log back in with a different email. Clients are intended to be shared by all users of the application.

## Bug Details

- **Symptom:** User A creates clients. User B logs in and doesn't see User A's clients.
- **Expected:** Clients should be shared/visible to all users (they are meant to be organization-wide, not per-user).
- **Root Cause Area:** Likely in the database query filtering — clients are probably filtered by `user_email` when they shouldn't be, or the data model needs adjusting.

## Prerequisites

- **Runtime helpful but not required:** The bug can be found by code analysis alone
- Backend: `cd backend && npm run dev` (port 3001)
- Frontend: `cd frontend && npm run dev` (port 5173)

## Sample Prompt

> There's a data bug in client-timesheet-app: clients created by one user are not visible to other users after logging out and back in with a different email. Clients should be shared across all users. Investigate the database schema and queries, find the root cause, and fix it. Make sure work entries still belong to individual users. Open a PR.

## What Participants Will Learn

- How Devin investigates data flow (API → database → query → response)
- Understanding multi-tenancy boundaries (what's shared vs. user-scoped)
- Database schema and query analysis
- The importance of testing data bugs with multiple user scenarios

## Devin Features Exercised

- Database schema analysis
- Backend code investigation
- Data model reasoning
- PR creation with explanation

## Difficulty

Intermediate

## Estimated Time

45 minutes

## Notes

- This pairs well with the UI bug challenge (D4) for a "bug bash" session
- The fix requires careful thought about which data is shared vs. user-scoped:
  - Clients = shared (org-wide)
  - Work entries = per-user
- Participants should verify the fix doesn't break work entry isolation

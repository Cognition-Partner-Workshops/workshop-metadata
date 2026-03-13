# FD5

## Repositories

- [app_timesheet](#app_timesheet)

---

## Challenge

Fix a known data persistence bug in the application. This challenge requires investigating the data flow from API to database to understand multi-tenancy boundaries.

## Target Outcomes

- Root cause identified (data model / query filtering issue)
- Fix implemented preserving correct data isolation (work entries per-user, clients shared)
- Verification that the fix doesn't break work entry isolation
- PR with fix and explanation

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

## Prerequisites

Runtime helpful but not required — the bug can be found by code analysis alone. Backend: `cd backend && npm run dev` (port 3001). Frontend: `cd frontend && npm run dev` (port 5173).

## Notes

- This pairs well with the UI bug challenge (FD4) for a "bug bash" session
- The fix requires careful thought about which data is shared vs. user-scoped:
  - Clients = shared (org-wide)
  - Work entries = per-user
- Participants should verify the fix doesn't break work entry isolation

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

**Bug:** Clients do not persist when you log out and log back in with a different email. Clients are intended to be shared by all users of the application.

- **Symptom:** User A creates clients. User B logs in and doesn't see User A's clients.
- **Expected:** Clients should be shared/visible to all users (they are org-wide, not per-user).
- **Root Cause Area:** Likely in the database query filtering — clients are probably filtered by `user_email` when they shouldn't be, or the data model needs adjusting.

### Step 1: Get Started Fast

> There's a data bug in app_timesheet: clients created by one user are not visible to other users after logging out and back in with a different email. Clients should be shared across all users. Investigate the database schema and queries, find the root cause, and fix it. Make sure work entries still belong to individual users. Open a PR.

### Step 2: Level Up with AskDevin

- *"How is the client data model related to users in app_timesheet? Is there a user_email foreign key that shouldn't be there?"*
- *"What other data in the app should be shared vs. user-scoped?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the data model relationships. Map out which entities are user-scoped and which should be organization-wide.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — does the fix correctly scope clients as shared while keeping work entries per-user?
- **Leave a comment** asking Devin to add a test that verifies clients are visible across users

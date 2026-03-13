# FD4

## Repositories

- [app_timesheet](#app_timesheet)

---

## Challenge

Fix a known visual bug in the application. This is a specific, verifiable challenge that demonstrates Devin's ability to investigate CSS/styling issues and visually verify fixes.

## Target Outcomes

- Bug root cause identified (CSS/styling issue)
- Fix implemented and visually verified
- Before/after screenshots or screen recording as evidence
- PR with fix

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

## Prerequisites

Application must be running to see the bug visually. Backend: `cd backend && npm run dev` (port 3001). Frontend: `cd frontend && npm run dev` (port 5173). Login with any email address.

## Notes

- This is a good "quick win" challenge — specific, verifiable, and satisfying to fix
- Pairs well with the data bug challenge (FD5) for a "bug bash" session

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

**Bug:** The Client dropdown's label text has a strikethrough when you create an hour entry on the running app's `/work-entries` page.

- **Page:** `/work-entries` (Work Entries page)
- **Component:** Client dropdown / select field
- **Symptom:** The label text appears with a strikethrough decoration
- **Expected:** Label text should appear normally without strikethrough

### Step 1: Get Started Fast

> There's a UI bug in app_timesheet: on the /work-entries page, the Client dropdown label has a strikethrough. Investigate the CSS/styling causing this issue and fix it. Take a screenshot before and after the fix. Open a PR.

### Step 2: Level Up with AskDevin

- *"What CSS rules are applied to the Client dropdown label? Is it a Material-UI theme issue or a custom style override?"*
- *"Are there other form fields in the app with similar styling issues?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the component hierarchy and styling approach (Material-UI theme, CSS modules, styled-components, etc.).

### Step 4: Review the PR and Give Feedback

- **Review the diff** — is the fix scoped correctly? Does it affect other dropdowns unintentionally?
- **Leave a comment** asking Devin to check all other form fields for similar styling issues

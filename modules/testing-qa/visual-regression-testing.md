# Visual Regression Testing

## Repositories

- [app_timesheet](#app_timesheet)
- [cal.com](#calcom)

---

## Challenge

Set up Playwright visual comparison tests for UI components. Capture baseline screenshots and configure visual diff detection for key pages and components.

## Target Outcomes

- Playwright visual test suite with baseline screenshots
- Visual comparison tests for key pages and components
- CI configuration for visual regression checks
- PR with visual test setup and baseline images

## What Participants Will Learn

- How Devin identifies key UI surfaces for visual regression coverage
- How Devin configures Playwright's visual comparison API with appropriate thresholds
- Devin's ability to structure visual tests for maintainability across viewport sizes
- How to manage baseline screenshot updates as the UI evolves

## Devin Features Exercised

- Browser automation
- UI understanding
- Test framework setup
- PR creation

## Difficulty

Intermediate

## Estimated Time

45 minutes

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

React + Material-UI frontend with multiple pages (Dashboard, Clients, Work Entries, Reports) — suitable for visual regression testing.

### Step 1: Paste into Devin

> Set up Playwright visual regression tests for the app_timesheet frontend. Create visual comparison tests that capture baseline screenshots for: the login page, dashboard with stats cards, clients table, work entries form, and reports page with export buttons. Configure tests for both desktop (1280x720) and mobile (375x667) viewports. Set a pixel diff threshold of 0.2%. Open a PR with the Playwright config, visual test files, baseline screenshots, and a README explaining how to update baselines.

### Step 2: Research with Ask Devin

- *"What are the key pages and UI states in app_timesheet that should have visual regression coverage? Are there any dynamic elements that need to be masked or stabilized?"*
- *"How should we handle authentication in the visual tests — should we use a test fixture that pre-authenticates, or capture the login flow?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the frontend page structure and Material-UI component usage. Identify pages with the most visual complexity (e.g., the Reports page with charts and export buttons).

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the screenshots stable across runs? Check that dynamic content (dates, timestamps) is properly masked or frozen
- **Leave a comment** asking Devin to add visual tests for the dialog modals (add client, add work entry)
- **Watch Devin respond** and push a follow-up commit

---

## <a id="calcom"></a>cal.com

**Repository:** [cal.com](https://github.com/Cognition-Partner-Workshops/cal.com)

Full-featured scheduling platform with a complex UI — extensive visual surfaces including booking flows, event type configuration, and availability management.

### Step 1: Paste into Devin

> Set up Playwright visual regression tests for the cal.com web application. Create visual comparison tests covering: the public booking page (date picker and time slot selection), the event types listing page, the availability/schedule editor, and the settings page. Configure viewport testing for desktop and mobile. Use Playwright's toHaveScreenshot with a maxDiffPixelRatio threshold. Open a PR with the visual test suite, baseline screenshots, and documentation for updating baselines.

### Step 2: Research with Ask Devin

- *"What are the most visually complex pages in cal.com that would benefit from visual regression testing? Which components change most frequently?"*
- *"Does cal.com already have Playwright configured? How should we integrate visual tests with the existing E2E test setup?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the Booker component and booking flow UI. The public booking page with date picker, time slots, and form fields is the highest-value surface for visual regression coverage.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the baseline screenshots clean and representative? Check that timezone-dependent elements are stabilized
- **Leave a comment** asking Devin to add visual tests for the embed widget variants (inline, floating popup)
- **Watch Devin respond** and push a follow-up commit

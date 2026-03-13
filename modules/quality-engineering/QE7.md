# QE7

## Repositories

- [app_timesheet](#app_timesheet)
- [cal.com](#calcom)

---

## Challenge

Audit and improve the accessibility (a11y) compliance of a web application. This challenge covers WCAG 2.1 conformance, screen reader compatibility, keyboard navigation, color contrast, and ARIA attributes.

## Target Outcomes

- Accessibility audit report generated (axe-core, Lighthouse, or manual)
- Critical accessibility violations fixed (missing alt text, color contrast, keyboard traps)
- ARIA attributes added where needed
- PR with fixes and audit evidence

## What Participants Will Learn

- How Devin identifies accessibility violations using automated tools
- How Devin applies WCAG 2.1 guidelines to fix common issues
- The limitations of automated a11y testing vs. manual testing
- How to use Devin's browser to verify screen reader behavior

## Devin Features Exercised

- Browser interaction for visual inspection
- Automated tool execution (axe-core, Lighthouse)
- Frontend code modification (ARIA, semantic HTML)
- PR creation with audit evidence

## Difficulty

Intermediate

## Estimated Time

45 minutes

## Prerequisites

The application should be running locally for browser-based auditing.

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

React application with Material-UI components — good candidate for ARIA attribute improvements and keyboard navigation fixes.

### Step 1: Get Started Fast

> Run app_timesheet locally (frontend on port 5173). Run a Lighthouse accessibility audit on the main pages (/work-entries, /clients, /reports). Fix all critical and serious accessibility violations: missing form labels, insufficient color contrast, missing alt text, and keyboard navigation issues. Open a PR with the fixes and the audit scores before/after.

### Step 2: Level Up with AskDevin

- *"What WCAG 2.1 Level AA violations exist in app_timesheet's React components?"*
- *"Are the Material-UI components configured with proper ARIA attributes for screen readers?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the component hierarchy. Identify forms and interactive elements that need accessibility improvements.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are the ARIA attributes semantically correct? Are labels associated with the right inputs?
- **Leave a comment** asking Devin to also test keyboard-only navigation through the main workflow

---

## <a id="calcom"></a>cal.com

**Repository:** [cal.com](https://github.com/Cognition-Partner-Workshops/cal.com)

Complex scheduling application where accessibility is critical for public-facing booking pages.

### Step 1: Get Started Fast

> Start cal.com locally with `yarn dev`. Run a Lighthouse accessibility audit on the public booking page. Fix all critical accessibility issues: ensure the date/time picker is keyboard-navigable, all form fields have proper labels, and color contrast meets WCAG 2.1 AA. Open a PR with fixes and audit evidence.

### Step 2: Level Up with AskDevin

- *"Is the booking calendar widget keyboard-navigable? Can a screen reader user complete a booking?"*
- *"What ARIA live regions should exist to announce availability changes?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the booking flow components. Focus on the public-facing pages that external users interact with.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — do the changes improve real usability for assistive technology users?
- **Leave a comment** asking Devin to add skip navigation links and focus management for the booking flow

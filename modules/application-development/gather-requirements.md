# Gather Requirements

## Repositories

- [timesheet-app](#timesheet-app)
- [calcom](#calcom)

---

## Challenge

Ideate a feature enhancement or addition, and work with Devin to gather requirements and scope the feature while considering impacts. This challenge emphasizes Devin's planning and reasoning capabilities — no code changes required.

## Target Outcomes

- Feature requirements documented as a GitHub Issue with acceptance criteria
- Impact analysis: affected components, APIs, database changes
- Edge cases and constraints identified
- Technical design outline

## What Participants Will Learn

- How Devin asks clarifying questions to refine vague requirements
- Devin's ability to analyze existing code to identify impacts
- How Devin structures requirements (user stories, acceptance criteria, technical design)
- The value of using Devin for planning before coding

## Devin Features Exercised

- Interactive dialogue (follow-up questions)
- Codebase analysis for impact assessment
- Documentation generation
- AskDevin (if used for requirements gathering)

## Difficulty

Beginner

## Estimated Time

30 minutes

---

## <a id="timesheet-app"></a>timesheet-app

**Repository:** [timesheet-app](https://github.com/Cognition-Partner-Workshops/timesheet-app)

Simple domain (timesheets, clients, work entries) — easy to ideate features like invoice generation, project hierarchy, team views, or reporting dashboards.

### Step 1: Paste into Devin

> I want to add invoice generation to timesheet-app. Help me gather requirements: what data do we need, what's the UI flow, what APIs need to change, what new database tables are needed? Consider edge cases and constraints. Document the requirements as a GitHub Issue with acceptance criteria.

### Step 2: Research with Ask Devin

- *"What features are missing from timesheet-app that a typical timesheet application would have?"*
- *"If I wanted to add project/task hierarchy to group work entries, what would the data model look like?"*
- Use the gathered requirements as input for a coding session (see [New Feature Development](new-feature-development.md))

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the existing data model and API surface. Use this to identify extension points and constraints for new features.

### Step 4 (Optional): Review & Give Feedback

- **Review the GitHub Issue** — are the acceptance criteria specific and testable?
- **Leave a comment** asking Devin to add a technical design section with API contract sketches
- Use the requirements to start a coding session with clear, pre-gathered specs

---

## <a id="calcom"></a>calcom

**Repository:** [calcom](https://github.com/Cognition-Partner-Workshops/calcom)

Rich scheduling domain with many extension points — custom booking field types, webhook integrations, analytics dashboards, notification preferences.

### Step 1: Paste into Devin

> I want to add a booking analytics dashboard to calcom that shows: bookings per day/week/month, no-show rates, average booking lead time, and most popular time slots. Help me gather requirements: what data sources exist, what aggregations are needed, and what UI components should we use? Document the requirements as a GitHub Issue.

### Step 2: Research with Ask Devin

- *"What data is available in calcom's database that could power an analytics dashboard?"*
- *"What existing dashboard or reporting patterns does calcom use that we should follow?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the booking data model and existing analytics capabilities. Identify which database tables contain the data needed for the dashboard.

### Step 4 (Optional): Review & Give Feedback

- **Review the GitHub Issue** — are the requirements feasible given calcom's architecture?
- **Leave a comment** asking Devin to add wireframe descriptions or user flow diagrams

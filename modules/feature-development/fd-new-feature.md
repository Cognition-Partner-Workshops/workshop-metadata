# D6 — New Feature Development

## Challenge

Develop a new feature for an existing application — from requirements gathering through implementation, testing, and PR creation. This exercises Devin's ability to understand an existing codebase and add functionality that fits the existing architecture.

## Options

### Option 1: CRUD Feature Addition
- **Repository:** [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) or any app repo
- **Task:** Add a new CRUD feature to the existing application (e.g., a new entity type, a new management page, a new API endpoint with UI).

### Option 2: API Enhancement
- **Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) or [uc-data-source-migration-legacy-to-modern](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern)
- **Task:** Add new API endpoints, filtering, pagination, or reporting capabilities to an existing REST API.

### Option 3: UI Enhancement
- **Repository:** [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) or [coreui-free-react-admin-template](https://github.com/Cognition-Partner-Workshops/coreui-free-react-admin-template)
- **Task:** Add a new page, dashboard, or interactive feature to the frontend.

## Target Outcomes

- New feature implemented following existing code conventions and architecture
- Unit tests and/or integration tests for the new feature
- Database schema changes (if needed) with migration scripts
- PR with clear description of what was added and why

## Sample Prompt

> Add a "Projects" management feature to app_timesheet-client. Users should be able to create, view, edit, and delete projects. Each project has a name, description, client assignment, start date, and status (active/completed/on-hold). Add both the backend API endpoints and the frontend UI page. Follow the existing patterns in the codebase for the data model, API structure, and React components. Write tests for the backend endpoints. Open a PR.

## What Participants Will Learn

- How Devin analyzes existing code patterns before implementing new features
- How Devin handles full-stack changes (database + API + UI)
- The importance of clear, specific requirements in prompts
- How Devin creates tests for new functionality

## Devin Features Exercised

- Codebase analysis and pattern matching
- Full-stack implementation (backend + frontend)
- Test generation
- Database schema design
- PR creation with feature documentation

## Difficulty

Intermediate to Advanced (depends on feature complexity)

## Estimated Time

60 minutes

## Notes

- This challenge requires strong prompt engineering — the more specific the requirements, the better the output
- Encourage participants to use AskDevin first to gather requirements and scope the feature
- Good follow-up: have another participant review the PR using Devin's PR review capabilities

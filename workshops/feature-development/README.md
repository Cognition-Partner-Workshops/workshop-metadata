# Workshop: Feature Development

## Overview

| | |
|---|---|
| **Focus** | Building new features on existing applications — requirements through implementation and testing |
| **Duration** | 1-2 hours |
| **Audience** | Full-stack developers, product engineers, development teams |
| **Key Modules** | [Gather Requirements](../../modules/feature-development/gather-requirements.md), [Test-Driven Development](../../modules/feature-development/test-driven-development.md), [New Feature Development](../../modules/feature-development/new-feature-development.md), [API Documentation](../../modules/feature-development/api-documentation.md), [Database Schema Evolution](../../modules/feature-development/database-schema-evolution.md) |

## Workshop Narrative

Feature development is the most common daily activity for development teams. This workshop demonstrates how Devin analyzes existing code patterns, implements full-stack changes, and creates tests — all while following the codebase's established conventions.

## Labs

### Lab 1 — Full-Stack CRUD Feature

- **Module:** [New Feature Development](../../modules/feature-development/new-feature-development.md)
- **Repositories:**
  - [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) — React + Node.js full-stack application
  - [uc-data-source-migration-legacy-to-modern](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern) — Spring Boot loan service (alternative)
  - [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) — Spring Boot RealWorld app (alternative)
- **Objective:** Build a new feature from requirements through implementation and testing
- **Duration:** 60 min

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

Choose one:

**Option A — React + Node.js (app_timesheet):**
> Add a "Projects" management feature to app_timesheet. Users should be able to create, view, edit, and delete projects. Each project has a name, description, client assignment, start date, and status (active/completed/on-hold). Add backend API endpoints and frontend UI. Follow existing patterns. Write tests. Open a PR.

**Option B — Spring Boot API (loan service):**
> Add a loan payment history API to uc-data-source-migration-legacy-to-modern. Create GET /api/loans/:id/payments with pagination, date range filtering, and payment type filtering. Add error handling and JUnit tests. Open a PR.

**Option C — Spring Boot API (RealWorld app):**
> Add an "article statistics" feature to uc-framework-upgrade-monolith-to-microservices. Create GET /api/articles/:slug/stats (view count, favorite count, comment count, days since published) and GET /api/stats/trending (top 10 most-favorited in last 7 days). Write tests. Open a PR.

#### Step 2: Research with Ask Devin

- *"What patterns do the existing features follow? What conventions should a new feature match?"*
- *"What database migration approach does the app use?"*

#### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page. Try adding validation rules, frontend tests, audit logging, or API documentation.

#### Step 4 (Optional): Review & Give Feedback

- Review for code style consistency with existing patterns
- Ask Devin to add validation, error handling, or additional test cases

**Target Outcomes:** New feature following existing conventions, tests, database schema changes, PR with review

## Repos Required

Choose one or more:
- [ ] app_timesheet
- [ ] uc-data-source-migration-legacy-to-modern
- [ ] uc-framework-upgrade-monolith-to-microservices

## Key Takeaways

- **"Devin follows existing patterns"** — analyzes codebase conventions before implementing
- **"Clear requirements produce better results"** — specific prompts lead to better output
- **"Full-stack in one session"** — database, API, UI, and tests in a single session

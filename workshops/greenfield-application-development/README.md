# Workshop: Greenfield Application Development

## Overview

| | |
|---|---|
| **Focus** | Building complete web applications from specifications — full SDLC from requirements through working code |
| **Duration** | 2-3 hours (configurable — see Duration Variants below) |
| **Audience** | Software developers, full-stack engineers, engineering managers, technical leads |
| **Key Modules** | [Gather Requirements](../../modules/application-development/gather-requirements.md), [Greenfield Application Development](../../modules/application-development/greenfield-application-development.md), [Test-Driven Development](../../modules/application-development/test-driven-development.md) |

## Workshop Narrative

Most workshops start with an existing codebase. This one starts with nothing — just a specification. Participants experience Devin's ability to handle the entire software development lifecycle autonomously: interpreting requirements, making architecture decisions, scaffolding a project, implementing full-stack CRUD functionality, and producing clean, modular code ready for extension.

The progressive arc:

1. **Specify** — Define what the application should do (data model, API contract, UI requirements)
2. **Build** — Devin autonomously builds the complete application from the specification
3. **Validate** — Review the output, test edge cases, verify spec compliance
4. **Extend** — Add new features, tests, or quality improvements to the built application

This mirrors how teams increasingly work with AI: provide clear specifications, review the output, iterate.

---

## Lab 1 — Requirements & Architecture Design (30 min)

- **Module:** [Gather Requirements](../../modules/application-development/gather-requirements.md) (adapted for greenfield)
- **Objective:** Give Devin a high-level business need and have it produce detailed requirements, a data model, and an architecture plan

### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> I need a web-based Operations Dashboard for managing items (inventory, assets, or resources). Users should be able to create, view, update, and delete items. Each item has a name, category, quantity, unit price, and a status that auto-updates based on stock level. Before writing any code, produce: (1) `REQUIREMENTS.md` with detailed functional and non-functional requirements, (2) `DATA_MODEL.md` with entity definitions, field types, constraints, and status derivation rules, (3) `API_DESIGN.md` with REST endpoint contracts including request/response schemas and HTTP status codes, (4) `ARCHITECTURE.md` recommending a tech stack with justification, project structure, and separation of concerns. Open a PR with these planning artifacts.

### Step 2: Review & Give Feedback

- Review the data model — are the field types and constraints sensible?
- Review the API design — does it follow REST conventions?
- Ask Devin to add pagination, sorting, or filtering to the API design

**Target Outcomes:** Requirements document, data model, API contract, architecture recommendation

---

## Lab 2 — Full-Stack Application Build (60 min)

- **Module:** [Greenfield Application Development](../../modules/application-development/greenfield-application-development.md)
- **Objective:** Devin builds the complete CRUD application from the specification — frontend, backend, database, and REST API

### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Build a full-stack web application for an Operations Dashboard from scratch. The app manages items with CRUD operations.
>
> **Data Model:** Each item has: id (auto-generated), name (string, required, max 100 chars), category (string, required), quantity (integer >= 0), unitPrice (decimal >= 0), status (auto-derived: quantity > 10 = "In Stock", 1-10 = "Low Stock", 0 = "Out of Stock"), lastUpdated (auto-set timestamp).
>
> **API:** REST endpoints — POST /api/items (create), GET /api/items (list all), GET /api/items/:id (get one), PUT /api/items/:id (update), DELETE /api/items/:id (delete). Return proper HTTP status codes (201, 200, 404, 400).
>
> **Frontend:** Dashboard table view with all items, color-coded status indicators (green/yellow/red), an "Add Item" form with validation, edit capability, delete with confirmation. Responsive layout.
>
> **Requirements:** Clean separation of frontend and backend. Input validation on both client and server. No external database dependencies — use in-memory storage or SQLite. Include a README with setup instructions. Open a PR with the complete application.

### Step 2: Review & Give Feedback

- **Test the app** — run it locally, create items with quantities 0, 5, and 20. Verify status auto-derives correctly.
- **Review the code** — is there clean separation between frontend and backend? Is the code modular?
- **Leave a comment** asking Devin to improve the UI styling or add loading states

**Target Outcomes:** Working full-stack application with CRUD operations, REST API, database, frontend dashboard

---

## Lab 3 — Testing & Quality (45 min)

- **Module:** [Test-Driven Development](../../modules/application-development/test-driven-development.md) (adapted — adding tests to the built app)
- **Objective:** Devin adds comprehensive tests, input validation edge cases, and error handling to the application it built in Lab 2

### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Review the Operations Dashboard application you built. Add: (1) Unit tests for all API endpoints — test CRUD operations, validation errors (missing required fields, negative quantity, negative price), and 404 responses for non-existent items. (2) Test the status derivation logic with boundary values (quantity = 0, 1, 10, 11). (3) Add input sanitization — prevent XSS in item names and SQL injection if using a database. (4) Add proper error response format with consistent error messages. Open a PR with the tests and improvements.

### Step 2: Review & Give Feedback

- **Run the tests** — do they all pass? Are the assertions meaningful?
- **Try breaking things** — submit invalid data through the UI and API. Does the app handle it gracefully?
- **Leave a comment** asking Devin to add rate limiting or request logging

**Target Outcomes:** Unit tests for all endpoints, boundary value tests for status logic, input sanitization, consistent error handling

---

## Lab 4 — Feature Extension (45 min)

- **Module:** [New Feature Development](../../modules/application-development/new-feature-development.md) (adapted — extending the built app)
- **Objective:** Devin adds a significant new feature to the application, demonstrating how well the architecture supports extension

### Step 1: Paste into Devin (copy-paste this prompt into Devin)

Choose one:

**Option A — Dashboard Analytics:**
> Add a dashboard analytics section to the Operations Dashboard. Show: total item count, total inventory value (sum of quantity * unitPrice), count of items by status (In Stock / Low Stock / Out of Stock), and a bar chart showing items per category. The analytics should update in real-time as items are added, updated, or deleted. Open a PR.

**Option B — Search, Filter & Export:**
> Add search and filter capabilities to the Operations Dashboard. Users should be able to: search items by name (partial match), filter by category (dropdown), filter by status, and sort by any column. Also add a "Export to CSV" button that downloads all visible items as a CSV file. Open a PR.

**Option C — Categories Management:**
> Add a separate "Categories" management feature to the Operations Dashboard. Users should be able to create, edit, and delete categories. The item creation/edit form should use a dropdown populated from the categories list instead of free-text input. Include validation that prevents deleting a category that still has items assigned. Open a PR.

### Step 2: Review & Give Feedback

- **Review the diff** — did Devin follow the existing code patterns when adding the new feature?
- **Test the integration** — does the new feature work correctly with the existing CRUD operations?
- **Leave a comment** asking Devin to add tests for the new feature

**Target Outcomes:** New feature implemented following existing patterns, working integration with existing CRUD operations, tests for new functionality

---

## Duration Variants

| Duration | Recommended Format |
|----------|-------------------|
| 3 hours | All four labs: Requirements → Build → Test → Extend |
| 2 hours | Labs 2 + 3 (Build + Test) — skip planning, focus on build and quality |
| 1.5 hours | Lab 2 + Lab 4 (Build + Extend) — focus on Devin's development speed |
| 1 hour | Lab 2 only (Full-Stack Build) — the core hands-on experience |

## Repos Required

No pre-existing repos are required. Devin creates the application from scratch during Lab 2.

Optionally, facilitators can pre-create an empty repo per participant in the org for Devin to push to:
- [ ] (Optional) Empty repos for participants to push to

## Key Takeaways

- **"Zero to working app"** — Devin handles the full SDLC from specification to working application in a single session
- **"Specification quality matters"** — clearer, more detailed specs produce better applications
- **"Architecture by AI"** — Devin makes reasonable tech stack and project structure decisions autonomously
- **"Built for extension"** — applications Devin builds follow modular patterns that support adding new features

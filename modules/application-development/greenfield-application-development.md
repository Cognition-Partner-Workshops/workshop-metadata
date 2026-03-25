# Greenfield Application Development

## Repositories

*No starting repository required.* Devin builds the entire application from scratch based on the specification provided in the prompt. Participants can optionally create an empty repo in the org beforehand, or let Devin work locally and open a PR to a new repo.

---

## Challenge

Give Devin a complete application specification and have it autonomously build a production-ready full-stack CRUD web application from scratch — covering data model design, REST API implementation, frontend UI, input validation, and error handling. This exercises Devin's ability to handle the entire software development lifecycle without an existing codebase to reference.

## Target Outcomes

- Working full-stack web application with frontend and backend
- REST API with CRUD endpoints matching the specification
- Structured database schema with proper data types and constraints
- Frontend dashboard with forms, table views, and status indicators
- Input validation and basic error handling
- Clean, modular code with separation of concerns

## What Participants Will Learn

- How Devin interprets a specification and makes architecture decisions autonomously
- Devin's ability to build an entire application without reference code
- How specificity in requirements affects output quality
- The full lifecycle: data model → API → UI → validation → tests

## Devin Features Exercised

- Autonomous architecture decisions (tech stack selection, project structure)
- Full-stack code generation (backend + frontend + database)
- Specification interpretation and requirements mapping
- File scaffolding and project setup from scratch

## Difficulty

Intermediate

## Estimated Time

60 minutes

## Notes

- This module does NOT require a pre-existing repository. Devin creates the project from scratch.
- The specification below is domain-agnostic — facilitators can substitute any CRUD domain (inventory, HR, fleet management, etc.) by replacing entity names and fields.
- For best results, provide the specification in full rather than iterating piecemeal. Devin produces higher-quality output when it can see the complete picture upfront.
- This pairs well with [Test-Driven Development](test-driven-development.md) (add tests after the build) and [New Feature Development](new-feature-development.md) (extend the built app).

---

## Specification: Operations Dashboard

The specification below is a generalized CRUD dashboard application. The domain (operations/inventory/assets) can be swapped for any entity management scenario.

### Data Model

```
Entity: Item
- id (unique identifier, auto-generated)
- name (string, required, max 100 chars)
- category (string, required)
- quantity (integer, >= 0)
- unitPrice (decimal, >= 0)
- status (enum: "In Stock" / "Low Stock" / "Out of Stock", auto-derived from quantity)
- lastUpdated (timestamp, auto-set on create/update)

Status Rules:
- quantity > 10  → "In Stock"
- quantity 1-10  → "Low Stock"
- quantity == 0  → "Out of Stock"
```

### API Contract

```
POST   /api/items       → Create item (name, category, quantity, unitPrice)
GET    /api/items       → List all items (returns array)
GET    /api/items/:id   → Get single item by ID
PUT    /api/items/:id   → Update item (any subset of fields)
DELETE /api/items/:id   → Delete item (return 404 if not found)
```

### UI Requirements

- Dashboard table view showing all items with columns: Name, Category, Quantity, Unit Price, Status, Last Updated
- Visual indicator for status (color-coded: green = In Stock, yellow = Low Stock, red = Out of Stock)
- "Add Item" form with validation (all required fields, quantity >= 0, price >= 0)
- Inline edit or edit form for updating items
- Delete with confirmation dialog
- Responsive layout

---

## Step 1: Paste into Devin

> Build a full-stack web application for an Operations Dashboard from scratch. The app manages items with CRUD operations.
>
> **Data Model:** Each item has: id (auto-generated), name (string, required, max 100 chars), category (string, required), quantity (integer >= 0), unitPrice (decimal >= 0), status (auto-derived: quantity > 10 = "In Stock", 1-10 = "Low Stock", 0 = "Out of Stock"), lastUpdated (auto-set timestamp).
>
> **API:** REST endpoints — POST /api/items (create), GET /api/items (list all), GET /api/items/:id (get one), PUT /api/items/:id (update), DELETE /api/items/:id (delete). Return proper HTTP status codes (201, 200, 404, 400).
>
> **Frontend:** Dashboard table view with all items, color-coded status indicators (green/yellow/red), an "Add Item" form with validation, edit capability, delete with confirmation. Responsive layout.
>
> **Requirements:** Clean separation of frontend and backend. Input validation on both client and server. No external database dependencies — use in-memory storage or SQLite. Include a README with setup instructions. Open a PR with the complete application.

## Step 2: Review & Give Feedback

- **Review the PR** — does the data model match the spec? Are all CRUD endpoints working?
- **Test the status logic** — create items with quantity 0, 5, and 20 and verify the status auto-derives correctly
- **Leave a comment** asking Devin to add search/filter functionality, pagination, or CSV export
- **Try extending** — ask Devin to add a second entity type (e.g., Categories as a separate managed list) to test how well the architecture supports extension

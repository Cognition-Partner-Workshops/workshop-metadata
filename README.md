# Workshop Metadata

Central index for the **Cognition-Partner-Workshops** GitHub org. This repo contains:

- **Repo Catalog** — inventory of all repositories with cross-references to challenges they support
- **Modular Challenges** — self-contained workshop tasks organized by use case category
- **Event Templates** — composable event definitions that pull challenges into a workshop agenda
- **Shared Resources** — naming conventions, facilitator guides, runtime resource docs

## Information Architecture

This repo uses a **bridge approach** to support two discovery routes:

```
┌─────────────────────────────────────────────────────────────┐
│                    WORKSHOP DESIGNER                         │
│                                                              │
│   "I need to build a 4-hour workshop on security + migration"│
│                                                              │
│   Route 1: Browse by Use Case                                │
│   modules/ → pick category → pick challenges → see repos     │
│                                                              │
│   Route 2: Browse by Repo                                    │
│   catalog/repos.md → see what challenges each repo supports  │
│                                                              │
│   Compose: events/ → assemble selected challenges into agenda│
└─────────────────────────────────────────────────────────────┘
```

**Challenges are the reusable atoms.** Repos are the materials they reference. An event is a composition of challenges.

## Directory Structure

```
workshop-metadata/
├── README.md                              ← you are here
├── catalog/
│   └── repos.md                           ← master repo inventory + cross-refs
├── modules/                               ← challenge instructions by category
│   ├── quality-engineering/
│   │   ├── README.md                      ← category overview + repo navigation table
│   │   ├── A1.md                          ← Linting & Static Analysis
│   │   ├── A2.md                          ← Unit Testing
│   │   ├── A3.md                          ← End-to-End Testing
│   │   ├── A4.md                          ← Inline Documentation
│   │   ├── A5.md                          ← Code Review Automation
│   │   ├── A6.md                          ← Performance Testing
│   │   └── A7.md                          ← Accessibility Compliance
│   ├── security/
│   │   ├── README.md
│   │   ├── B1.md                          ← Upgrade Dependencies
│   │   ├── B2.md                          ← Remediate Vulnerabilities
│   │   ├── B3.md                          ← Shift Left Security
│   │   ├── B4.md                          ← Identify Antipatterns
│   │   └── B5.md                          ← Secrets Management & Detection
│   ├── migration-modernization/
│   │   ├── README.md
│   │   ├── C1.md                          ← COBOL to Java
│   │   ├── C2.md                          ← Framework Upgrade
│   │   ├── C3.md                          ← Containerization
│   │   ├── C4.md                          ← API Consolidation
│   │   ├── C5.md                          ← Cloud Native Transformation
│   │   ├── C6.md                          ← IaC Translation
│   │   ├── C7.md                          ← DW Migration: Teradata to Snowflake
│   │   ├── C8.md                          ← Data Source Migration
│   │   ├── C9.md                          ← Repetitive Framework Upgrades
│   │   └── C10.md                         ← Legacy Modernization Combined
│   ├── feature-development/
│   │   ├── README.md
│   │   ├── D1.md                          ← Gather Requirements
│   │   ├── D2.md                          ← Test-Driven Development
│   │   ├── D3.md                          ← Fix Runtime Bug
│   │   ├── D4.md                          ← Fix UI Bug
│   │   ├── D5.md                          ← Fix Data Bug
│   │   ├── D6.md                          ← New Feature Development
│   │   ├── D7.md                          ← API Documentation
│   │   └── D8.md                          ← Database Schema Evolution
│   ├── devops-automation/
│   │   ├── README.md
│   │   ├── E1.md                          ← CI/CD Pipeline
│   │   ├── E2.md                          ← Observability & Monitoring
│   │   ├── E3.md                          ← PR Review Automation
│   │   ├── E4.md                          ← CI Failure Resolution
│   │   ├── E5.md                          ← Release Management
│   │   ├── E6.md                          ← Incident Response & Triage
│   │   └── E7.md                          ← Configuration Management & Feature Flags
│   └── devin-features/
│       └── README.md                      ← Devin-specific activities checklist
├── events/
│   ├── README.md                          ← how to compose an event
│   ├── _template/
│   │   └── README.md                      ← blank event template
│   ├── 2026-03-09-oslo/
│   │   └── README.md                      ← Oslo workshop (example event)
│   ├── 2026-03-09-san-francisco/
│   │   └── README.md                      ← SF workshop: Framework Upgrade + CVE Remediation
│   ├── 2026-03-13-dc/
│   │   └── README.md                      ← DC event (4 UCs)
└── shared/
    ├── repo-naming-convention.md
    ├── runtime-resources.md
    └── facilitator-guide.md
```

## Quick Start for Facilitators

1. **Pick challenges** from `modules/` that match your audience and time budget
2. **Check repo requirements** in `catalog/repos.md` to see what needs to be set up
3. **Copy `events/_template/`** and fill in your event details, referencing challenge IDs
4. **Review `shared/facilitator-guide.md`** for runtime setup and logistics

## Contributing

To add a new challenge module:
1. Create a markdown file in the appropriate `modules/<category>/` directory
2. Follow the template structure (see any existing challenge for format)
3. Add cross-references in `catalog/repos.md` for any repos the challenge uses
4. Update the category `README.md` with the new challenge entry

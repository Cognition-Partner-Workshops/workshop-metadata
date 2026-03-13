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
│   │   ├── QE1.md                          ← Linting & Static Analysis
│   │   ├── QE2.md                          ← Unit Testing
│   │   ├── QE3.md                          ← End-to-End Testing
│   │   ├── QE4.md                          ← Inline Documentation
│   │   ├── QE5.md                          ← Code Review Automation
│   │   ├── QE6.md                          ← Performance Testing
│   │   └── QE7.md                          ← Accessibility Compliance
│   ├── security/
│   │   ├── README.md
│   │   ├── SEC1.md                          ← Upgrade Dependencies
│   │   ├── SEC2.md                          ← Remediate Vulnerabilities
│   │   ├── SEC3.md                          ← Shift Left Security
│   │   ├── SEC4.md                          ← Identify Antipatterns
│   │   ├── SEC5.md                          ← Secrets Management & Detection
│   │   ├── SEC6.md                          ← Event-Driven SAST Remediation
│   │   └── SEC7.md                          ← Mass Security Backlog Remediation
│   ├── migration-modernization/
│   │   ├── README.md
│   │   ├── MM1.md                          ← COBOL to Java
│   │   ├── MM2.md                          ← Framework Upgrade
│   │   ├── MM3.md                          ← Containerization
│   │   ├── MM4.md                          ← API Consolidation
│   │   ├── MM5.md                          ← Cloud Native Transformation
│   │   ├── MM6.md                          ← IaC Translation
│   │   ├── MM7.md                          ← DW Migration: Teradata to Snowflake
│   │   ├── MM8.md                          ← Data Source Migration
│   │   ├── MM9.md                          ← Repetitive Framework Upgrades
│   │   ├── MM10.md                         ← Legacy Modernization Combined
│   │   ├── MM11.md                         ← One-Shot Tech Debt Remediation
│   │   ├── MM12.md                         ← COBOL System Understanding & Reverse Engineering
│   │   ├── MM13.md                         ← COBOL Migration Planning & Domain Decomposition
│   │   └── MM14.md                         ← Migration Test Harness & Validation Strategy
│   ├── feature-development/
│   │   ├── README.md
│   │   ├── FD1.md                          ← Gather Requirements
│   │   ├── FD2.md                          ← Test-Driven Development
│   │   ├── FD3.md                          ← Fix Runtime Bug
│   │   ├── FD4.md                          ← Fix UI Bug
│   │   ├── FD5.md                          ← Fix Data Bug
│   │   ├── FD6.md                          ← New Feature Development
│   │   ├── FD7.md                          ← API Documentation
│   │   └── FD8.md                          ← Database Schema Evolution
│   ├── devops-automation/
│   │   ├── README.md
│   │   ├── DA1.md                          ← CI/CD Pipeline
│   │   ├── DA2.md                          ← Observability & Monitoring
│   │   ├── DA3.md                          ← PR Review Automation
│   │   ├── DA4.md                          ← CI Failure Resolution
│   │   ├── DA5.md                          ← Release Management
│   │   ├── DA6.md                          ← Incident Response & Triage
│   │   ├── DA7.md                          ← Configuration Management & Feature Flags
│   │   └── DA8.md                          ← Platform-Conformant Microservice Decomposition
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
│   ├── cobol-modernization-workshop/
│   │   └── README.md                      ← COBOL Modernization: Understand → Plan → Safeguard → Execute
│   ├── enterprise-demo-track/
│   │   └── README.md                      ← Enterprise demo: SAST + Orchestration + One-Shot
│   ├── platform-microservice-decomposition/
│   │   └── README.md                      ← Platform-Conformant Microservice Decomposition (DA8)
│   └── workshop-variant-2/
│       └── README.md                      ← QE + Security Vulnerability Remediation
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

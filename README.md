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
│   │   ├── README.md                      ← category overview
│   │   ├── qe-linting.md
│   │   ├── qe-unit-testing.md
│   │   ├── qe-e2e-testing.md
│   │   └── qe-documentation.md
│   ├── security/
│   │   ├── README.md
│   │   ├── sec-upgrade-dependencies.md
│   │   ├── sec-remediate-vulnerabilities.md
│   │   ├── sec-shift-left.md
│   │   └── sec-antipatterns.md
│   ├── migration-modernization/
│   │   ├── README.md
│   │   ├── mm-cobol-to-java.md
│   │   ├── mm-framework-upgrade.md
│   │   ├── mm-containerization.md
│   │   ├── mm-api-consolidation.md
│   │   ├── mm-cloud-native.md
│   │   ├── mm-iac-translation.md
│   │   ├── mm-dw-migration-teradata.md
│   │   ├── mm-data-source-migration.md
│   │   ├── mm-repetitive-upgrades.md
│   │   └── mm-legacy-modernization-combined.md
│   ├── feature-development/
│   │   ├── README.md
│   │   ├── fd-gather-requirements.md
│   │   ├── fd-tdd.md
│   │   ├── fd-fix-runtime-bug.md
│   │   ├── fd-fix-ui-bug.md
│   │   ├── fd-fix-data-bug.md
│   │   └── fd-new-feature.md
│   ├── devops-automation/
│   │   ├── README.md
│   │   ├── da-cicd.md
│   │   ├── da-observability.md
│   │   ├── da-pr-review.md
│   │   └── da-ci-failure-resolution.md
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

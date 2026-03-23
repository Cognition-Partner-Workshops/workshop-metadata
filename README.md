# Workshop Metadata

Central index for the **Cognition-Partner-Workshops** GitHub org. This repo contains:

- **Repo Catalog** — inventory of all repositories with cross-references to challenges they support
- **Modular Challenges** — self-contained workshop tasks organized by SDLC domain
- **Workshops** — reusable workshop templates that compose challenges into structured lab sequences
- **Events** — specific workshop instances with date, location, audience, and facilitator overrides
- **Shared Resources** — naming conventions, facilitator guides, runtime resource docs

## Information Architecture

This repo uses a **layered approach** with three discovery routes:

```
┌─────────────────────────────────────────────────────────────┐
│                    WORKSHOP DESIGNER                         │
│                                                              │
│   "I need to build a 4-hour workshop on security + migration"│
│                                                              │
│   Route 1: Browse by Workshop                                │
│   workshops/ → pick a workshop template → customize for event│
│                                                              │
│   Route 2: Browse by Module                                  │
│   modules/ → pick category → pick challenges → see repos     │
│                                                              │
│   Route 3: Browse by Repo                                    │
│   catalog/repos.md → see what challenges each repo supports  │
│                                                              │
│   Compose: events/ → instantiate a workshop for a specific   │
│            date, location, and audience                       │
└─────────────────────────────────────────────────────────────┘
```

**Modules are the reusable atoms.** Workshops compose modules into structured lab sequences. Events instantiate workshops for specific audiences. Repos are the materials they all reference.

## Directory Structure

```
workshop-metadata/
├── README.md                              ← you are here
├── catalog/
│   └── repos.md                           ← master repo inventory + cross-refs
├── modules/                               ← challenge instructions by category
│   ├── README.md                          ← navigation index for all 56 modules
│   ├── quality-engineering/
│   │   ├── README.md                      ← category overview
│   │   ├── linting-static-analysis.md
│   │   ├── unit-testing.md
│   │   ├── end-to-end-testing.md
│   │   ├── inline-documentation.md
│   │   ├── code-refactoring-tech-debt.md
│   │   ├── performance-testing.md
│   │   ├── accessibility-compliance.md
│   │   ├── document-review-automation.md
│   │   └── bdd-test-generation.md
│   ├── security/
│   │   ├── README.md
│   │   ├── upgrade-dependencies.md
│   │   ├── remediate-vulnerabilities.md
│   │   ├── shift-left-security.md
│   │   ├── security-antipatterns.md
│   │   ├── secrets-management-detection.md
│   │   ├── event-driven-sast-remediation.md
│   │   └── mass-security-backlog-remediation.md
│   ├── migration-modernization/
│   │   ├── README.md
│   │   ├── cobol-to-java.md
│   │   ├── framework-upgrade.md
│   │   ├── containerization-microservice-extraction.md
│   │   ├── api-consolidation.md
│   │   ├── cloud-native-refactor.md
│   │   ├── iac-translation.md
│   │   ├── dw-migration-teradata-to-snowflake.md
│   │   ├── data-source-migration.md
│   │   ├── repetitive-framework-upgrades.md
│   │   ├── legacy-modernization-combined.md
│   │   ├── one-shot-tech-debt-remediation.md
│   │   ├── cobol-system-understanding.md
│   │   ├── cobol-migration-planning.md
│   │   ├── migration-test-harness.md
│   │   ├── dotnet-monolith-decomposition.md
│   │   ├── cross-service-integration-testing.md
│   │   └── cross-service-bug-investigation.md
│   ├── feature-development/
│   │   ├── README.md
│   │   ├── gather-requirements.md
│   │   ├── test-driven-development.md
│   │   ├── fix-runtime-bug.md
│   │   ├── fix-ui-bug.md
│   │   ├── fix-data-bug.md
│   │   ├── new-feature-development.md
│   │   ├── api-documentation.md
│   │   └── database-schema-evolution.md
│   ├── devops-automation/
│   │   ├── README.md
│   │   ├── cicd-pipeline.md
│   │   ├── observability-monitoring.md
│   │   ├── pr-review-automation.md
│   │   ├── ci-failure-resolution.md
│   │   ├── release-management.md
│   │   ├── incident-response-triage.md
│   │   ├── configuration-management-feature-flags.md
│   │   ├── platform-conformant-microservice-decomposition.md
│   │   ├── pod-remediation-credential-rotation.md
│   │   └── volume-anomaly-detection.md
│   └── devin-features/
│       └── README.md                      ← Devin-specific activities checklist
├── workshops/                             ← reusable workshop templates
│   ├── README.md
│   ├── legacy-modernization/
│   ├── framework-upgrades/
│   ├── data-source-migration/
│   ├── security-compliance/
│   ├── platform-microservice-decomposition/
│   ├── dotnet-cloud-native-modernization/
│   ├── agentic-ai/
│   ├── feature-development/
│   └── quality-engineering/
├── events/                                ← specific workshop instances
│   ├── README.md
│   ├── _template/
│   ├── 2026-03-09-oslo/
│   ├── 2026-03-09-san-francisco/
│   ├── 2026-03-13-dc/
│   ├── 2026-03-17-zurich/
│   ├── 2026-03-25-remote-workshop/
│   ├── dc-2/
│   ├── cobol-modernization-workshop/
│   ├── enterprise-demo-track/
│   ├── platform-microservice-decomposition/
│   └── workshop-variant-2/
└── shared/
    ├── repo-naming-convention.md
    ├── runtime-resources.md
    └── facilitator-guide.md
```

## Module Categories (56 modules)

| Category | Count | Focus Areas |
|----------|-------|-------------|
| [Quality Engineering](modules/quality-engineering/) | 9 | Linting, testing, documentation, refactoring, performance, accessibility, BDD |
| [Security](modules/security/) | 7 | Dependency upgrades, vulnerability remediation, SAST, secrets management |
| [Migration & Modernization](modules/migration-modernization/) | 17 | COBOL, framework upgrades, containerization, data migration, .NET decomposition |
| [Feature Development](modules/feature-development/) | 8 | Requirements, TDD, bug fixing, new features, API docs, schema evolution |
| [DevOps & Automation](modules/devops-automation/) | 10 | CI/CD, observability, PR review, incident response, platform engineering |
| [Devin Features](modules/devin-features/) | 1 | Cross-cutting Devin platform activities checklist |

Browse all modules: [modules/README.md](modules/README.md)

## Quick Start for Facilitators

1. **Browse workshops** in `workshops/` to find a pre-built workshop that matches your audience
2. **Or pick modules** from `modules/` to build a custom workshop — see [modules/README.md](modules/README.md) for the full index
3. **Check repo requirements** in `catalog/repos.md` to see what needs to be set up
4. **Copy `events/_template/`** and fill in your event details, referencing the workshop(s)
5. **Review `shared/facilitator-guide.md`** for runtime setup and logistics

## Contributing

To add a new challenge module:
1. Create a markdown file in the appropriate `modules/<category>/` directory
2. Follow the 4-step format: Paste into Devin → Research with Ask Devin → Read the DeepWiki → Review & Give Feedback
3. Add cross-references in `catalog/repos.md` for any repos the challenge uses
4. Update the category `README.md` with the new challenge entry
5. Update `modules/README.md` navigation index

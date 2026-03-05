# E1 — CI/CD

## Challenge

Create or improve the CI/CD pipeline for an application or its infrastructure as code using GitHub Actions.

## Options

- **Repository:** Any repo in the org (participant's choice)
- **Recommended:**
  - [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) — Workflows were removed; needs CI from scratch
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — Workflows were removed; needs CI from scratch
  - [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) — Has existing CI; can be improved

## Task

Create or improve the CI/CD pipeline using GitHub Actions. Consider:
- Build and test on every PR
- Linting and code quality checks
- Security scanning
- Automated deployment (if infrastructure exists)
- Branch protection rules

## Sample Prompt

> Create a GitHub Actions CI pipeline for uc-framework-upgrade-monolith-to-microservices that: builds with Gradle, runs tests, generates a JaCoCo coverage report, and fails the PR if coverage drops below 70%. Also add a lint check step. Open a PR with the workflow file.

## What Participants Will Learn

- How Devin authors GitHub Actions workflows
- CI/CD best practices (test gates, coverage thresholds, caching)
- How Devin handles workflow YAML syntax and action versions

## Devin Features Exercised

- GitHub Actions authoring
- Build system understanding
- PR creation with CI configuration

## Difficulty

Intermediate

## Estimated Time

60 minutes

## Notes

- The `uc-` repos had their workflows removed (PAT lacked `workflow` scope during import). This makes them ideal for "create CI from scratch" exercises.
- Participants will need a PAT with `workflow` scope to push workflow files, or they can commit via the GitHub UI.

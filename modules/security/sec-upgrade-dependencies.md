# B1 — Upgrade Dependencies

## Challenge

Upgrade outdated and vulnerable dependencies in a project.

## Options

### Option 1: Node.js Dependencies
- **Repository:** [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client)
- **Task:** Resolve this GitHub Issue: https://github.com/Cognition-Partner-Workshops/app_timesheet-client/issues/2

### Option 2: Java/Gradle Dependencies
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Task:** Upgrade Spring Boot from 2.6.3 to the latest stable 2.7.x or 3.x, updating all transitive dependencies. Verify the build still passes.

## Sample Prompt

> Audit the dependencies in [repo] for known vulnerabilities. Upgrade all vulnerable dependencies to their latest secure versions. Ensure the build and tests still pass after upgrades. Open a PR with the changes.

## What Participants Will Learn

- How Devin interprets dependency vulnerability reports (npm audit, Gradle dependency check)
- How Devin handles breaking changes during major version upgrades
- Devin's approach to verifying compatibility after upgrades (build, test, run)

## Devin Features Exercised

- GitHub Issue resolution
- Dependency analysis
- Build verification
- PR creation

## Difficulty

Beginner to Intermediate

## Estimated Time

45 minutes

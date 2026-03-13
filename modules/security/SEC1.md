# SEC1

## Repositories

- [app_timesheet](#app_timesheet)
- [uc-cve-remediation-regulatory-compliance](#uc-cve-remediation-regulatory-compliance)

---

## Challenge

Upgrade outdated and vulnerable dependencies in a project. This is a foundational security task — audit the dependency tree, identify known vulnerabilities, upgrade to secure versions, and verify the build still passes.

## Target Outcomes

- Dependency audit report generated (npm audit, Gradle dependency check, etc.)
- All critical/high vulnerabilities resolved through upgrades
- Build and tests pass after upgrades
- PR with upgrade changes and audit evidence

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

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Node.js application with npm dependencies — use `npm audit` to identify and fix vulnerable packages.

### Step 1: Get Started Fast

> Resolve this GitHub Issue: https://github.com/Cognition-Partner-Workshops/app_timesheet/issues/2 — audit the npm dependencies for known vulnerabilities, upgrade all vulnerable packages to their latest secure versions, ensure the build and tests still pass, and open a PR.

### Step 2: Level Up with AskDevin

- *"Which dependencies in app_timesheet have the most severe known vulnerabilities?"*
- *"Are there any dependencies that are no longer maintained and should be replaced entirely?"*
- Use insights to start a second session that also replaces deprecated packages

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand which dependencies are critical to the application's core functionality — these need the most careful upgrade verification.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — did Devin handle breaking changes from major version upgrades?
- **Leave a comment** asking Devin to also add `npm audit` to the CI pipeline so vulnerabilities are caught on every PR
- **Watch Devin respond** and push a follow-up commit

---

## <a id="uc-cve-remediation-regulatory-compliance"></a>uc-cve-remediation-regulatory-compliance

**Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)

Spring Boot 2.6.3 application with known vulnerable dependencies and OWASP Dependency-Check pre-configured.

### Step 1: Get Started Fast

> Upgrade uc-cve-remediation-regulatory-compliance from Spring Boot 2.6.3 to the latest stable 2.7.x or 3.x, updating all transitive dependencies. Run `./gradlew dependencyCheckAnalyze` before and after to document which CVEs are resolved. Verify the build still passes. Open a PR with the upgrade and before/after scan evidence.

### Step 2: Level Up with AskDevin

- *"What's the safest upgrade path for Spring Boot 2.6.3 — should we go to 2.7.x first or jump straight to 3.x?"*
- *"Which transitive dependencies will be automatically resolved by upgrading Spring Boot, and which need manual attention?"*
- Use the analysis to plan a more comprehensive upgrade strategy

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the application's dependency tree. Identify which direct dependencies pull in the most vulnerable transitive dependencies.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — did Devin handle the javax → jakarta namespace change (if upgrading to 3.x)?
- **Leave a comment** asking Devin to also upgrade a specific transitive dependency that wasn't automatically resolved
- **Watch Devin respond** and push a follow-up commit

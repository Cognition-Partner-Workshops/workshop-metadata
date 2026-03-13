# SEC3

## Repositories

- [app_timesheet](#app_timesheet)
- [uc-cve-remediation-regulatory-compliance](#uc-cve-remediation-regulatory-compliance)

---

## Challenge

Define or enhance the CI process to improve security posture. Automate Devin's ability to check its own work for vulnerabilities — creating a feedback loop where security scanning happens on every PR.

## Target Outcomes

- Security scanning workflow added to CI (Trivy, Snyk, OWASP, or SonarQube)
- SBOM generation configured (CycloneDX or SPDX format)
- PRs fail on CRITICAL or HIGH severity findings
- PR with workflow configuration

## What Participants Will Learn

- How Devin creates CI/CD workflows from scratch
- How to create a feedback loop where Devin checks its own security posture
- The concept of "Devin fixing what Devin (or CI) finds"

## Devin Features Exercised

- CI/CD authoring (GitHub Actions)
- Security tool configuration
- Automated feedback loops

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Has existing `security-scan.yml` and `sonar-devin-fix.yml` workflows — good for studying and enhancing existing security CI.

### Step 1: Get Started Fast

> Review the existing security scanning workflows in app_timesheet (.github/workflows/). Enhance them by adding: SBOM generation in CycloneDX format, a dependency-review step on PRs, and a Trivy container scan if Dockerfiles exist. The workflow should fail the PR on CRITICAL severity findings. Open a PR with the enhanced workflows.

### Step 2: Level Up with AskDevin

- *"What security scanning is already configured in app_timesheet's CI? What gaps exist?"*
- *"How does the sonar-devin-fix.yml workflow trigger Devin to auto-fix issues? Can this pattern be extended to other tools?"*
- Study the existing automated remediation pattern to understand the Devin API integration

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the existing CI/CD setup and identify which security checks are missing.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are the workflow triggers correct (on PR, on push to main)?
- **Leave a comment** asking Devin to add a pre-commit hook for secrets detection (gitleaks)
- **Watch Devin respond** and push a follow-up commit

---

## <a id="uc-cve-remediation-regulatory-compliance"></a>uc-cve-remediation-regulatory-compliance

**Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)

No CI currently (workflows were removed) — but has OWASP Dependency-Check and SonarQube Gradle plugins pre-configured for local scanning. Ideal for building security CI from scratch.

### Step 1: Get Started Fast

> Create a GitHub Actions CI pipeline for uc-cve-remediation-regulatory-compliance that: builds with Gradle, runs `./gradlew dependencyCheckAnalyze`, fails the PR if any dependency has CVSS >= 7.0, generates an SBOM in CycloneDX format, and uploads the dependency check report as a build artifact. Open a PR with the workflow file.

### Step 2: Level Up with AskDevin

- *"What's the best way to integrate OWASP Dependency-Check into GitHub Actions for a Gradle project?"*
- *"Should the CI also run SonarQube analysis? What's the simplest way to set that up without a hosted SonarQube instance?"*
- Use the plan to create a comprehensive security CI pipeline

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the build configuration and identify which Gradle plugins are already configured for security scanning.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — does the workflow cache the NVD database to speed up subsequent runs?
- **Leave a comment** asking Devin to add dependency-review-action for PR-level dependency diff analysis
- **Watch Devin respond** and push a follow-up commit

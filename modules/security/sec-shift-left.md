# B3 — Shift Left

## Challenge

Define or enhance the CI process to improve security posture. Automate Devin's ability to check its own work for vulnerabilities.

## Options

- **Repository:** Any repo in the org (participant's choice)
- **Recommended:**
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — No CI currently (workflows removed)
  - [client-timesheet-app](https://github.com/Cognition-Partner-Workshops/client-timesheet-app) — Has existing security-scan.yml and sonar-devin-fix.yml workflows

## Task

Define or enhance the continuous integration process to improve security. How can you automate the way Devin checks its work to ensure it does not introduce new vulnerabilities?

## Suggested Approaches

1. **Add a security scanning workflow** — Trivy, Snyk, or SonarQube as a GitHub Actions step
2. **Add SBOM generation** — CycloneDX or SPDX format
3. **Add dependency review** — GitHub's dependency-review-action on PRs
4. **Add pre-commit hooks** — secrets detection (gitleaks), credential scanning
5. **Study client-timesheet-app's existing workflow** — `sonar-devin-fix.yml` triggers Devin to auto-fix vulnerabilities found by SonarQube

## Sample Prompt

> Add a GitHub Actions workflow to [repo] that runs Trivy vulnerability scanning on every PR. The workflow should fail the PR if any CRITICAL or HIGH severity vulnerabilities are found. Also add SBOM generation in CycloneDX format. Open a PR with the workflow.

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

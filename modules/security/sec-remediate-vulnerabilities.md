# B2 — Remediate Vulnerabilities

## Challenge

Use a SAST tool to identify and remediate the most critical preexisting vulnerabilities in a repository.

## Options

- **Repository:** Any repo in the org (participant's choice)
- **Recommended:**
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — Spring Boot 2.6.3 with known CVEs
  - [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) — Node.js with Trivy scanning already configured

## Task

Use a SAST tool to remediate the most critical preexisting vulnerabilities in a repository. If the project does not already have a configuration for SAST, you define what tool to use.

## Target Outcomes

- SBOM generated (CycloneDX or SPDX) with dependency vulnerability scanning
- High/critical vulnerabilities patched or upgraded
- Secure coding checks added: format/lint + static analysis (SAST)
- CI gating: builds fail on policy violations
- `SECURITY_REMEDIATION.md` with before/after evidence

## Sample Prompt

> Run a security scan on [repo] using [Trivy/Snyk/SonarQube/npm audit]. Identify the top 5 most critical vulnerabilities (CVSS >= 7.0). For each vulnerability, implement the recommended fix. Verify the build passes and open a PR with all remediations documented.

## What Participants Will Learn

- How Devin selects and configures SAST tools
- How Devin interprets CVE details (CVSS scores, affected versions, fix versions)
- The difference between dependency vulnerabilities and code-level vulnerabilities
- How to evaluate whether Devin's fixes are correct and complete

## Devin Features Exercised

- Tool installation and configuration
- Security analysis and interpretation
- Code remediation
- PR creation with detailed descriptions

## Difficulty

Intermediate

## Estimated Time

60 minutes

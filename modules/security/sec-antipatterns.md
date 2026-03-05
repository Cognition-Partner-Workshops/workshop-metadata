# B4 — Identify (and Optionally Fix) Antipatterns

## Challenge

Discover security flaws or design antipatterns preexisting in application source code with Devin's help. Optionally fix them.

## Options

- **Repository:** Any repo in the org (participant's choice)
- **Recommended:**
  - [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) — email-only auth (no password), potential SQL injection paths
  - [Online-Banking-System-using-Java](https://github.com/Cognition-Partner-Workshops/Online-Banking-System-using-Java) — likely has multiple security antipatterns
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — review for OWASP Top 10 issues

## Task

Discover a security flaw or design antipattern preexisting in your application source code with the help of Devin. Optionally fix these antipatterns.

## Suggested Approaches

- Ask Devin to review for OWASP Top 10 vulnerabilities
- Ask Devin to identify authentication/authorization weaknesses
- Ask Devin to find SQL injection, XSS, or CSRF vulnerabilities
- Ask Devin to review secrets handling and credential storage

## Sample Prompt

> Perform a security code review of [repo] against the OWASP Top 10. For each finding, explain the vulnerability, its severity, and provide a recommended fix. Implement fixes for the top 3 most critical findings and open a PR.

## What Participants Will Learn

- How Devin performs code-level security analysis (beyond dependency scanning)
- Devin's understanding of security design patterns
- How to validate AI-generated security assessments

## Devin Features Exercised

- Deep codebase analysis
- Security pattern recognition
- Report generation
- Optional: code remediation and PR creation

## Difficulty

Intermediate

## Estimated Time

45 minutes

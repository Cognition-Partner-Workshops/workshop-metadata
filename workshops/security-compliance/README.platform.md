# Workshop: Security & Compliance (Desktop + Cloud)

**Other variants:** [Cloud only](README.md)

## Overview

| | |
|---|---|
| **Focus** | CVE remediation, vulnerability scanning, SAST, shift-left security practices |
| **Duration** | 1-2 hours |
| **Audience** | Security engineers, DevSecOps teams, compliance-focused developers |
| **Delivery** | Devin Desktop + Devin Cloud |
| **Key Modules** | [Upgrade Dependencies](../../modules/security/upgrade-dependencies.md), [Remediate Vulnerabilities](../../modules/security/remediate-vulnerabilities.md), [Shift Left Security](../../modules/security/shift-left-security.md), [Security Antipatterns](../../modules/security/security-antipatterns.md), [Secrets Management & Detection](../../modules/security/secrets-management-detection.md), [Event-Driven SAST Remediation](../../modules/security/event-driven-sast-remediation.md), [Mass Security Backlog Remediation](../../modules/security/mass-security-backlog-remediation.md) |

## Platform Context

This workshop uses **Devin Desktop + Devin Cloud**. You will use Desktop as your primary interface — exploring code locally, delegating tasks to Cloud, and reviewing results without leaving the editor.

> **Tip:** If you prefer a browser-only workflow, see the [Cloud only](README.md) variant. You can also use **Devin CLI** (`cli.devin.ai`) in your terminal for quick local exploration alongside Desktop.

## Workshop Narrative

Security remediation is often a backlog item that never gets prioritized. This workshop demonstrates how Devin can scan, remediate, and add automated compliance checks — turning a security backlog into an afternoon of focused work. Using Devin Desktop, you stay in your editor the entire time: explore the codebase locally, delegate remediation tasks to Cloud, and review the resulting PRs with one-click checkout.

## Desktop Workflow

This workshop follows a five-step Desktop workflow instead of the paste-into-browser pattern:

1. **Create a Space** in Desktop for this workshop — group sessions, PRs, and files in one view
2. **Explore locally** with Cascade or Devin Local for code research (replaces Ask Devin steps)
3. **Delegate to Cloud** — send implementation tasks to Devin Cloud from Desktop
4. **Monitor in the Agent Command Center** — track session progress on the Kanban board
5. **Review PRs in-editor** — one-click checkout of Cloud PRs, no browser switching needed

## Getting the Most from This Workshop

A few tips to maximize your hands-on time:

- **Use Spaces to stay organized.** Create a Space for this workshop so that sessions, PRs, and context stay grouped together. New sessions in the Space inherit project context automatically.
- **Explore locally first.** Use Cascade or Devin Local to research the codebase before delegating to Cloud. Local exploration is faster for scoping the problem — then Cloud handles the heavy lifting.
- **Delegate, don't wait.** Once you've scoped a task locally, send it to Cloud and move on. Cloud agents work autonomously in the background while you continue exploring.
- **Build up Devin's knowledge as you go.** When Devin suggests a Knowledge item, accept it — this is how teams build a shared context layer that compounds over time.
- **Review without context-switching.** When a Cloud session opens a PR, use Desktop's one-click checkout to review it directly in the editor — no manual `git fetch` or branch switching.
- **Track everything from the Kanban board.** The Agent Command Center shows all your running agents (local and cloud) organized by status — what's in progress, what's blocked, and what's ready for review.

## Table of Contents

- [Lab 1 — CVE Remediation & Dependency Upgrades](#lab-1--cve-remediation--dependency-upgrades)
- [Lab 2 — Shift-Left Security & SAST](#lab-2--shift-left-security--sast)
- [Repos Required](#repos-required)
- [Key Takeaways](#key-takeaways)

---

## Labs

### Lab 1 — CVE Remediation & Dependency Upgrades

- **Modules:** [Upgrade Dependencies](../../modules/security/upgrade-dependencies.md) + [Remediate Vulnerabilities](../../modules/security/remediate-vulnerabilities.md)
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Objective:** Scan a Spring Boot app for dependency CVEs, remediate the critical findings, and verify the fixes
- **Duration:** 60 min

#### Step 1: Create a Space

Open Devin Desktop and create a new Space for this workshop. Name it something like "Security Remediation" — this groups your sessions, PRs, and files in one view.

#### Step 2: Explore with Cascade or Devin Local

Use Cascade or Devin Local in Desktop to research the codebase before delegating:

- *"What are the known CVEs in the dependencies of uc-cve-remediation-regulatory-compliance? Which ones are CRITICAL severity?"*
- *"What's the safest upgrade path for Spring Boot 2.6.3 — go to 2.7.x first or jump to 3.x?"*

This replaces the Ask Devin research step — local agents give you faster, interactive exploration directly in the editor.

#### Step 3: Delegate to Devin Cloud

From Desktop, delegate the remediation task to Devin Cloud. Send this as the task description:

```
Run `./gradlew dependencyCheckAnalyze` on
uc-cve-remediation-regulatory-compliance to identify dependency
CVEs. Remediate the top 5 most critical findings (CVSS >= 7.0) —
start with Spring Boot 2.6.3, SnakeYAML 1.29, and
sqlite-jdbc 3.36.0.3. Re-run the scan to verify the fixes.
Create a `SECURITY_REMEDIATION.md` documenting the before/after
results.
```

The Cloud agent works autonomously on its own VM. Continue exploring or start Lab 2 while it works.

#### Step 4: Monitor in the Agent Command Center

Open the Agent Command Center (Kanban view) to track your Cloud session's progress. You can see when the session moves from "In Progress" to "Ready for Review."

#### Step 5: Review the PR in Desktop

When the Cloud session opens a PR, use one-click checkout in Desktop to review the changes directly in your editor — no need to switch to a browser or run `git fetch`.

- Verify the right dependencies were upgraded
- Leave inline comments if adjustments are needed — Devin Cloud will wake up and address them

**Target Outcomes:** OWASP report with CVEs remediated, SBOM generated, CI gating workflow, remediation documentation

> **ACP note:** If you have other ACP-compatible agents configured (Codex CLI, Claude Agent, etc.), you can use them alongside Devin Local for the exploration step. The Agent Command Center shows all agents in one view.

---

### Lab 2 — Shift-Left Security & SAST

- **Modules:** [Shift Left Security](../../modules/security/shift-left-security.md) + [Event-Driven SAST Remediation](../../modules/security/event-driven-sast-remediation.md)
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Objective:** Add automated security scanning to the CI pipeline and remediate SAST findings
- **Duration:** 45 min

#### Step 1: Explore with Cascade or Devin Local

Use your local agent in Desktop to scope the work:

- *"What SAST tools are available for Spring Boot applications? Compare Trivy, Snyk, and OWASP Dependency-Check."*
- *"What pre-commit hooks should a security-focused repo have?"*

#### Step 2: Delegate to Devin Cloud

From Desktop, delegate the CI integration task to Cloud:

```
Add a GitHub Actions workflow to
uc-cve-remediation-regulatory-compliance that runs Trivy
vulnerability scanning on every PR. The workflow should fail the
build if any CRITICAL or HIGH severity CVEs are found. Also add
a pre-commit hook configuration for gitleaks secrets detection.
```

#### Step 3: Monitor and Review

Track progress in the Agent Command Center. When the PR is ready:

- Use one-click checkout to review the CI workflow configuration in your editor
- Verify the Trivy scanning workflow and gitleaks pre-commit hook are correctly configured
- Leave comments if you want Devin to add severity thresholds or exclusion lists for known false positives

#### Step 4 (Optional): Extend with DeepWiki

Open the repo's DeepWiki page from Desktop. Try asking Devin Cloud to add SonarQube scanning (the repo has a pre-configured `docker-compose.sonarqube.yml`), or implement secrets scanning with gitleaks.

**Target Outcomes:** CI security scanning workflow, pre-commit hooks, SAST integration

> **Desktop tip:** If you kicked off both Lab 1 and Lab 2 as Cloud sessions, the Agent Command Center shows both on the Kanban board — track them side by side.

## Repos Required

- [ ] uc-cve-remediation-regulatory-compliance

## Key Takeaways

- **"Security backlog → afternoon of work"** — Devin systematically remediates CVEs that would take weeks manually
- **"Shift left"** — automated scanning in CI catches new vulnerabilities before they reach production
- **"Evidence-based compliance"** — SBOM, scan reports, and remediation documentation provide audit trails
- **"Stay in your editor"** — Desktop lets you explore, delegate, and review without switching to a browser
- **"Full visibility"** — the Agent Command Center gives you a single Kanban view of all running agents across local and cloud

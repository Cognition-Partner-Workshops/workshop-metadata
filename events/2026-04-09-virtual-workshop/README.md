# Workshop: Security & QA — Virtual Workshop

## Event Details

| | |
|---|---|
| **Date** | 2026-04-09 |
| **Location** | Virtual |
| **Duration** | ~5 hours per track (5 labs + breaks) |
| **Event Site** | TBD |
| **Tracks** | Track A: Security Vulnerability / Track B: QA & Quality Engineering |

## Getting the Most from This Workshop

> **Devin works autonomously on its own machine.** Once you paste a prompt and kick off a session, Devin runs independently — you don't need to watch it. Move on to the next lab, explore Ask Devin, or grab coffee while it works. You'll get notified when it opens a PR.

A few tips to maximize your hands-on time:

- **Start sessions early, review later.** Each lab has a "Paste into Devin" step and a separate "Review & Give Feedback" step. Kick off the session first, then use the wait time for Ask Devin research or reading DeepWiki — Devin will keep working in the background.
- **Try parallel sessions.** Several labs suggest running multiple Devin sessions at once. This mirrors real enterprise usage where Devin handles repetitive work across many services.
- **Use Ask Devin to refine requirements before creating a session.** The better-defined a task is, the better Devin's output. Ask Devin helps you think through the problem first so Devin can execute with less back-and-forth.
- **Build up Devin's knowledge as you go.** When Devin suggests a Knowledge item during a session, accept it — this is how teams build a shared context layer that makes Devin smarter over time. You can also create Knowledge manually for project conventions and standards.
- **Leave PR comments to steer Devin.** After Devin opens a PR, the PR Review agent and CI checks provide automatic feedback loops. You can also leave comments directly on the PR and Devin will wake up and address them — this is the core workflow for iterating with Devin in production.

---

## Choose Your Track

This event offers two parallel tracks. Participants choose one track and follow its 5-lab progressive narrative. Both tracks run ~5 hours and use the same Devin platform features.

| | Track A: Security Vulnerability | Track B: QA & Quality Engineering |
|---|---|---|
| **Focus** | CVE scanning, SAST remediation, secrets detection, security CI pipelines | Test generation, browser automation, framework migration, continuous QA |
| **Tools** | OWASP Dependency-Check, SonarQube, gitleaks, Trivy, GitHub Advanced Security | Jest/Vitest, Playwright, Cucumber/Gherkin, coverage tools |
| **Primary Repos** | uc-cve-remediation-regulatory-compliance, app_timesheet | app_timesheet, app_petclinic-angular, uc-bdd-test-generation-rest-api |
| **Narrative** | Find vulnerabilities -> remediate -> prevent -> automate -> autonomous pipeline | Assess coverage -> automate E2E -> migrate frameworks -> generate BDD -> continuous QA |
| **Capstone** | Event-driven SAST remediation (Devin as autonomous security agent) | Continuous quality engineering (scheduled sessions + Playbooks + Knowledge) |

---

# Track A — Security Vulnerability

5 labs following a progressive security engineering narrative — from manual vulnerability scanning through autonomous remediation pipelines. All tools are free and run locally on Devin's VM (no Veracode or commercial licenses required).

- Lab A1: **Dependency Audit & Vulnerability Scanning** — Audit dependencies for known CVEs and upgrade vulnerable packages
- Lab A2: **Vulnerability Remediation with SAST** — Run OWASP Dependency-Check and SonarQube to find and fix security issues
- Lab A3: **Secrets Detection & Prevention** — Scan for hardcoded secrets, migrate to environment variables, add pre-commit hooks
- Lab A4: **Shift Left: Security CI Pipeline** — Build CI workflows that scan every PR and block on critical findings
- Lab A5: **Event-Driven SAST Remediation** — Build an autonomous scan -> triage -> fix -> verify pipeline with Devin API integration

---

### Lab A1 — Dependency Audit & Vulnerability Scanning (45 min)

- **Module:** [Upgrade Dependencies](../../modules/security/upgrade-dependencies.md)
- **Repositories:**
  - [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) — Node.js application with npm dependencies
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — Spring Boot 2.6.3 with 18+ known CVEs (alternative)
- **Objective:** Audit dependencies for known vulnerabilities, upgrade to secure versions, and verify the build still passes — demonstrating how Devin interprets vulnerability reports and handles breaking changes during upgrades

This is the entry-level lab. Participants get a quick win: paste a prompt, Devin scans for CVEs, upgrades dependencies, and opens a PR. This mirrors what Veracode's Software Composition Analysis (SCA) does — but using free tools (`npm audit`, OWASP Dependency-Check) that run locally on Devin's VM.

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

**Option A — npm Dependency Audit (app_timesheet):**
> Resolve this GitHub Issue: https://github.com/Cognition-Partner-Workshops/app_timesheet/issues/2 — audit the npm dependencies for known vulnerabilities, upgrade all vulnerable packages to their latest secure versions, ensure the build and tests still pass, and open a PR.

**Option B — Spring Boot CVE Remediation (uc-cve-remediation-regulatory-compliance):**
> Upgrade uc-cve-remediation-regulatory-compliance from Spring Boot 2.6.3 to the latest stable 2.7.x or 3.x, updating all transitive dependencies. Run `./gradlew dependencyCheckAnalyze` before and after to document which CVEs are resolved. Verify the build still passes. Open a PR with the upgrade and before/after scan evidence.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"Which dependencies in app_timesheet have the most severe known vulnerabilities?"*
- *"What are the known CVEs in uc-cve-remediation-regulatory-compliance's dependencies? Which ones are CRITICAL severity?"*
- *"What's the safest upgrade path for Spring Boot 2.6.3 — should we go to 2.7.x first or jump straight to 3.x?"*
- Use the analysis to start a **second session** — try targeting additional vulnerable packages or switching to the alternative repo

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the dependency tree and which packages are most critical to the application's security posture. Key things to look for:
1. Which dependencies are direct vs. transitive (transitive vulnerabilities may require upgrading the parent package)
2. Whether any vulnerable packages are no longer maintained and need full replacement
3. Which dependencies have breaking API changes in their secure versions

Try different approaches:
- Run **both repos in parallel sessions** — one npm-based, one Gradle-based — to compare how Devin handles different ecosystems
- Ask Devin to also generate an **SBOM (Software Bill of Materials)** in CycloneDX format
- Have Devin create a **Knowledge item** capturing the project's dependency upgrade patterns for future sessions

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **Upgrade correctness:** Did Devin handle breaking changes from major version upgrades?
- **Scan evidence:** Does the PR include before/after vulnerability counts?
- **Build health:** Do all tests still pass after the upgrades?

**Leave a feedback comment** and watch Devin respond:
- *"The SnakeYAML version still has CVE-2022-1471 — please upgrade to 2.x"*
- *"Also add `npm audit` to the CI pipeline so vulnerabilities are caught on every PR"*
- *"Generate a table showing CVE ID, affected dependency, old version, new version, and CVSS score"*

- **Key Takeaways:**
  - **"Free tools, same workflow"** — `npm audit` and OWASP Dependency-Check provide the same SCA capability as Veracode's dependency scanning, running locally with zero licensing cost
  - **"Devin interprets CVE databases"** — it reads vulnerability reports, understands CVSS scores, and knows which upgrades resolve which CVEs
  - **"Breaking changes are the hard part"** — the real value is Devin handling API changes, namespace migrations (javax -> jakarta), and test fixes that come with major version upgrades
  - **"Autonomous execution"** — paste the prompt, move on. Devin works through the dependency tree while you explore Ask Devin

- **Target Outcomes (any of these count):**
  - Dependency audit report with vulnerability inventory
  - All critical/high CVEs resolved through upgrades
  - Build and tests passing after upgrades
  - Before/after scan evidence documenting remediation
  - PR with review comments and Devin's responses

---

### Lab A2 — Vulnerability Remediation with SAST (60 min)

- **Module:** [Remediate Vulnerabilities](../../modules/security/remediate-vulnerabilities.md)
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — Spring Boot 2.6.3 with OWASP Dependency-Check and SonarQube pre-configured
- **Objective:** Use OWASP Dependency-Check for dependency CVEs and SonarQube for code-level vulnerabilities — demonstrating how Devin runs and interprets multiple SAST tools locally on its VM

This lab goes beyond dependency scanning. Devin sets up SonarQube locally via Docker, runs both dependency and code-level SAST scans, and remediates findings from both tools. This mirrors the comprehensive scanning that Veracode provides (SCA + SAST) using free alternatives.

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Run `./gradlew dependencyCheckAnalyze` on uc-cve-remediation-regulatory-compliance to identify dependency CVEs. Remediate the top 5 most critical findings (CVSS >= 7.0) — start with Spring Boot 2.6.3, SnakeYAML 1.29, and sqlite-jdbc 3.36.0.3.
>
> Then set up SonarQube locally using the included `docker-compose.sonarqube.yml` — run `docker compose -f docker-compose.sonarqube.yml up -d`, wait for SonarQube to be ready on port 9000, create a project and token, then run `./gradlew sonar -Dsonar.token=<TOKEN>`. Review the SonarQube dashboard for security hotspots and vulnerabilities.
>
> Re-run OWASP DC to verify the dependency fixes. Create a `SECURITY_REMEDIATION.md` documenting the before/after results from both tools and open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What are the known CVEs in uc-cve-remediation-regulatory-compliance's dependencies? Which ones are CRITICAL severity?"*
- *"Beyond dependency vulnerabilities, are there any code-level security issues (SQL injection, XSS, etc.) in this repo?"*
- *"What's the difference between what OWASP Dependency-Check finds (dependency CVEs) and what SonarQube finds (code-level issues)? How do they complement each other?"*
- Use the analysis to plan **targeted remediation** — focus on the highest-risk findings first

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the codebase architecture and known vulnerabilities:

| Tool | What It Scans | Gradle Command | Report Location |
|------|--------------|----------------|-----------------|
| [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) | Dependencies against the NVD for known CVEs | `./gradlew dependencyCheckAnalyze` | `build/reports/dependency-check-report.html` |
| [SonarQube Community Edition](https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/) | Source code for vulnerabilities, code smells, bugs | `./gradlew sonar -Dsonar.token=<TOKEN>` | http://localhost:9000 dashboard |

Try different approaches:
- **Watch Devin set up SonarQube** — open the Desktop tab to see Devin run Docker, configure the project, and navigate the SonarQube dashboard
- Ask Devin to remediate **code-level security hotspots** found by SonarQube (not just dependency CVEs)
- Have Devin generate a **security posture comparison** showing OWASP DC findings vs. SonarQube findings side by side
- Try creating a **Knowledge item** capturing the SAST tool configuration so future sessions can run scans without re-setup

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **CVE remediation:** Are the top 5 CRITICAL/HIGH CVEs actually resolved? Check the before/after OWASP DC reports
- **SonarQube findings:** Were any code-level security hotspots addressed?
- **Build integrity:** Does the application still compile and pass tests after all the upgrades?

**Leave a feedback comment** and watch Devin respond:
- *"The Spring Boot upgrade needs the javax -> jakarta namespace migration — several imports still reference javax.servlet"*
- *"Also address the SonarQube security hotspot about the exposed actuator endpoints"*
- *"Add the OWASP DC HTML report as a build artifact so reviewers can inspect it"*

- **Key Takeaways:**
  - **"OWASP DC + SonarQube = comprehensive SAST"** — dependency scanning (SCA) plus code-level analysis covers the same ground as commercial tools like Veracode, with zero licensing cost
  - **"Devin runs Docker on its VM"** — SonarQube runs locally as a Docker container. Devin manages the full lifecycle: start the container, configure the project, run the scan, interpret results
  - **"The scan -> fix -> re-scan pattern"** — Devin doesn't just find issues; it fixes them and verifies the fix by re-running the scan. This closed-loop is the foundation for automated remediation
  - **"VM lifecycle preserves state"** — SonarQube stays running between sessions. Follow-up sessions can re-scan to track improvement over time

- **Target Outcomes (any of these count):**
  - OWASP Dependency-Check report generated (before and after remediation)
  - SonarQube analysis completed with security hotspots reviewed
  - High/critical vulnerabilities patched or upgraded
  - `SECURITY_REMEDIATION.md` with before/after evidence from both tools
  - PR with review comments and Devin's responses

---

### Lab A3 — Secrets Detection & Prevention (45 min)

- **Module:** [Secrets Management & Detection](../../modules/security/secrets-management-detection.md)
- **Repositories:**
  - [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) — Node.js application with potential hardcoded secrets
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — Spring Boot application with secrets in application properties (alternative)
- **Objective:** Scan for hardcoded secrets, migrate to environment variables, and add detection guardrails (pre-commit hooks + CI) — demonstrating the secrets detection capability that GitHub Advanced Security provides, using free tools

This lab addresses the "secrets detection" pillar. GitHub Advanced Security provides secret scanning for GitHub-hosted repos; this lab replicates that capability locally with gitleaks and adds preventive controls.

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

**Option A — Node.js Secrets Scan (app_timesheet):**
> Install and run gitleaks on app_timesheet to scan for hardcoded secrets and credentials. Migrate any findings to environment variables using a `.env.example` file (without actual secret values). Add a pre-commit hook using husky that runs gitleaks on staged files. Add a GitHub Actions step that fails PRs introducing new secrets. Open a PR.

**Option B — Spring Boot Secrets Scan (uc-cve-remediation-regulatory-compliance):**
> Install and run gitleaks on uc-cve-remediation-regulatory-compliance to scan the full git history for leaked secrets. Also review `application.properties` and `application.yml` for hardcoded credentials. Migrate all sensitive configuration to environment variable placeholders (e.g., `${DB_PASSWORD}`). Add a GitHub Actions workflow step that runs gitleaks on every PR. Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"Are there any hardcoded secrets, API keys, or database connection strings in app_timesheet?"*
- *"What's the current approach to configuration management? Are environment variables used consistently?"*
- *"What's the difference between gitleaks (scans git history) and GitHub Advanced Security secret scanning (scans live pushes)? How do they complement each other?"*
- Use the analysis to plan **preventive controls** — pre-commit hooks catch secrets before they enter git history, CI catches them on PR

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the configuration and authentication setup. Key things to look for:
1. Where secrets are referenced (environment variables, config files, hardcoded strings)
2. Whether `.env` files are properly gitignored
3. Whether test fixtures contain realistic-looking credentials

Try different approaches:
- Ask Devin to scan the **full git history** — secrets removed from the current code may still exist in old commits
- Have Devin add a **`.gitleaks.toml`** configuration to tune detection rules for this project (reduce false positives)
- Try enabling **GitHub Advanced Security** features on the repo (secret scanning, code scanning with CodeQL) and compare results with gitleaks
- Create a **Knowledge item** capturing the project's secrets management conventions

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **Completeness:** Are all hardcoded secrets externalized? Is the `.env.example` complete?
- **Prevention:** Is the pre-commit hook properly configured? Does the CI step catch new secrets?
- **No real secrets committed:** Verify Devin didn't accidentally include actual secret values in the PR

**Leave a feedback comment** and watch Devin respond:
- *"Also add a `.gitignore` entry for `.env` files if missing"*
- *"The pre-commit hook should also check for common patterns like AWS access keys and JWT tokens"*
- *"Add documentation on how to configure the required environment variables for local development"*

- **Key Takeaways:**
  - **"Detection + prevention"** — finding existing secrets is only half the job. Pre-commit hooks and CI steps prevent new secrets from entering the codebase
  - **"Free alternatives to GitHub Advanced Security"** — gitleaks provides the same secret scanning capability, running locally on Devin's VM with zero cost
  - **"Git history matters"** — secrets removed from the current code may still exist in git history. A full history scan catches what a file-only scan misses
  - **"Devin sets up guardrails"** — pre-commit hooks, CI steps, and `.env.example` files are the preventive controls that keep the codebase clean going forward

- **Target Outcomes (any of these count):**
  - Secrets scan completed (gitleaks)
  - All hardcoded secrets migrated to environment variables
  - Pre-commit hook installed for secrets detection
  - CI step added to block PRs that introduce secrets
  - PR with remediation and tooling

---

### Lab A4 — Shift Left: Security CI Pipeline (60 min)

- **Module:** [Shift Left Security](../../modules/security/shift-left-security.md)
- **Repositories:**
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — Build security CI from scratch (no existing workflows)
  - [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) — Enhance existing security workflows (alternative)
- **Objective:** Build a comprehensive security CI pipeline that scans every PR for vulnerabilities and blocks merges on critical findings — demonstrating how Devin creates CI/CD workflows and establishes a feedback loop where security scanning happens automatically

This lab ties together the scanning tools from Labs A1-A3 into an automated CI pipeline. This is the "shift left" pattern — catching security issues at PR time rather than in production, which is exactly what Veracode's CI integration provides.

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

**Option A — Build from Scratch (uc-cve-remediation-regulatory-compliance):**
> Create a GitHub Actions CI pipeline for uc-cve-remediation-regulatory-compliance that: builds with Gradle, runs `./gradlew dependencyCheckAnalyze`, fails the PR if any dependency has CVSS >= 7.0, generates an SBOM in CycloneDX format, and uploads the dependency check report as a build artifact. Open a PR with the workflow file.

**Option B — Enhance Existing Workflows (app_timesheet):**
> Review the existing security scanning workflows in app_timesheet (.github/workflows/). Enhance them by adding: SBOM generation in CycloneDX format, a dependency-review step on PRs, and a Trivy container scan if Dockerfiles exist. The workflow should fail the PR on CRITICAL severity findings. Open a PR with the enhanced workflows.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What security scanning is already configured in app_timesheet's CI? What gaps exist?"*
- *"What's the best way to integrate OWASP Dependency-Check into GitHub Actions for a Gradle project?"*
- *"How does the sonar-devin-fix.yml workflow in app_timesheet trigger Devin to auto-fix issues? Can this pattern be extended to other tools?"*
- Study the existing automated remediation pattern — this is the foundation for Lab A5's event-driven pipeline

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the build configuration and identify which security scanning plugins are already configured. Try different approaches:
- Have Devin add **dependency-review-action** for PR-level dependency diff analysis (shows new vulnerabilities introduced by each PR)
- Ask Devin to add **Trivy** scanning alongside OWASP DC for container and filesystem scanning
- Try having Devin add **CodeQL analysis** (GitHub's free SAST tool) via GitHub Actions
- Create a **Playbook** for "Security CI Setup" that can be applied to other repos with one click

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **Workflow triggers:** Does the workflow run on PRs and pushes to main?
- **Fail conditions:** Does it correctly block merges on CRITICAL/HIGH findings?
- **Artifacts:** Are scan reports uploaded as build artifacts for review?

**Leave a feedback comment** and watch Devin respond:
- *"Add NVD database caching to speed up subsequent OWASP DC runs"*
- *"The workflow should also run gitleaks for secrets detection"*
- *"Add a PR comment step that summarizes the scan findings directly on the PR"*

See the full challenge details for [Shift Left Security](../../modules/security/shift-left-security.md) for more ideas.

- **Key Takeaways:**
  - **"CI is the enforcement layer"** — scanning tools from Labs A1-A3 run automatically on every PR, catching issues before they reach production
  - **"Devin creates CI workflows from scratch"** — GitHub Actions authoring is a well-defined task where Devin excels. The result is a reusable pipeline that protects the repo going forward
  - **"SBOM generation for compliance"** — CycloneDX/SPDX SBOMs are increasingly required for regulatory compliance. Devin adds this automatically as part of the CI pipeline
  - **"The Devin feedback loop"** — CI scans find issues -> Devin (or PR Review agent) flags them -> developer reviews -> issues are resolved before merge

- **Target Outcomes (any of these count):**
  - Security scanning workflow added to CI (OWASP DC, Trivy, or both)
  - SBOM generation configured (CycloneDX or SPDX format)
  - PRs fail on CRITICAL or HIGH severity findings
  - Scan reports uploaded as build artifacts
  - PR with workflow configuration and review comments

---

### Lab A5 — Event-Driven SAST Remediation (60 min)

- **Module:** [Event-Driven SAST Remediation](../../modules/security/event-driven-sast-remediation.md)
- **Repositories:**
  - [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) — Has existing `sonar-devin-fix.yml` workflow to study and extend
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — Build the entire pipeline from scratch (alternative)
- **Objective:** Build an autonomous security pipeline: CI scans for vulnerabilities -> triggers Devin via API -> Devin remediates findings and pushes a fix -> CI re-scans to verify — demonstrating Devin operating as a background security agent triggered by CI events

This is the capstone lab. Participants build the "closed-loop" pattern where Devin acts as an autonomous security remediation agent — scan finds issues, Devin fixes them, re-scan verifies the fix. This is the enterprise pattern: Devin as a team member that handles security findings autonomously while humans focus on architecture and policy decisions.

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

**Option A — Extend Existing Pattern (app_timesheet):**
> Analyze the existing `.github/workflows/sonar-devin-fix.yml` in app_timesheet. This workflow already triggers Devin to fix SonarQube findings. Extend this pattern to create a new workflow called `sast-auto-remediate.yml` that: (1) triggers on PRs opened by users other than `devin-ai-integration[bot]`, (2) runs `npm audit --json` and Trivy container scan, (3) if HIGH or CRITICAL findings are found, posts a PR comment summarizing the findings and triggers a Devin session via the Devin API to remediate them on the same branch, (4) includes a re-scan step that verifies the fix. Document the architecture in an `ARCHITECTURE.md`. Open a PR.

**Option B — Build from Scratch (uc-cve-remediation-regulatory-compliance):**
> Create a complete event-driven security remediation pipeline for uc-cve-remediation-regulatory-compliance. Build a GitHub Actions workflow `sast-auto-remediate.yml` that: (1) triggers on pull_request events from non-bot authors, (2) runs `./gradlew dependencyCheckAnalyze` and captures the report, (3) parses the report for findings with CVSS >= 7.0, (4) if critical findings exist, calls the Devin API to create a session with the prompt "Remediate the CRITICAL and HIGH CVEs found in the dependency check report at [artifact URL]. Push fixes to branch [branch-ref]. Re-run ./gradlew dependencyCheckAnalyze to verify.", (5) includes a verification step that re-runs the scan after Devin's commit. Add author filtering to prevent bot loops. Document the full architecture in `EVENT_DRIVEN_SECURITY.md`. Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"How does the existing sonar-devin-fix.yml workflow in app_timesheet trigger Devin? What API endpoint does it use and what parameters does it pass?"*
- *"What's the best way to prevent an infinite loop where Devin's fix commit triggers another scan that triggers another Devin session?"*
- *"How should the Devin API session be configured to work on an existing branch rather than creating a new one?"*
- Use the analysis to design a robust event-driven pipeline with proper circuit breakers and escalation policies

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the existing CI/CD setup. Key architecture decisions:

```
Developer opens PR
        |
GitHub Actions triggers SAST scan (OWASP DC / Trivy / npm audit)
        |
Scan finds HIGH/CRITICAL findings?
    YES -> GitHub Actions calls Devin API with:
          - branch ref
          - scan report artifact URL
          - remediation instructions
        |
Devin creates a fix commit on the same branch
        |
CI re-runs scan automatically (push trigger)
        |
Findings resolved? -> PR is unblocked for merge
```

Try different approaches:
- Study the existing `sonar-devin-fix.yml` to understand the Devin API integration pattern
- Ask Devin to add an **escalation path**: if Devin's fix doesn't resolve all findings after 2 attempts, open a GitHub Issue and assign it to a human reviewer
- Have Devin add **Slack notification integration**: post a message when the scan finds issues, when Devin starts remediating, and when remediation is complete
- Create a **Playbook** for "Security Remediation" that encodes your team's fix-verify-report methodology

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **Author filtering:** Does the workflow correctly filter out PRs from `devin-ai-integration[bot]` to prevent infinite loops?
- **API integration:** Is the Devin API call properly configured with the right parameters?
- **Verification step:** Does the pipeline re-scan after Devin's fix to confirm the remediation worked?

**Leave a feedback comment** and watch Devin respond:
- *"Add an escalation path: if Devin's fix doesn't resolve all findings after 2 attempts, open a GitHub Issue"*
- *"The workflow should also post a summary comment on the PR listing what was found and what was fixed"*
- *"Add a circuit breaker: limit to 3 remediation attempts per PR to prevent runaway sessions"*

See the full challenge details for [Event-Driven SAST Remediation](../../modules/security/event-driven-sast-remediation.md) for more ideas.

- **Key Takeaways:**
  - **"Devin as a background security agent"** — this isn't a tool someone manually opens. Devin is triggered by CI events and remediates findings autonomously. The developer just reviews the fix PR
  - **"Closed-loop verification"** — scan -> fix -> re-scan. The pipeline doesn't just find issues; it fixes them and proves the fix worked. This is the autonomous version of what Veracode's "fix guidance" feature provides
  - **"Devin API for programmatic integration"** — Devin can be triggered programmatically from any CI/CD pipeline, webhook, or automation tool. This is how enterprise teams integrate Devin into existing workflows
  - **"Circuit breakers prevent runaway automation"** — author filtering and attempt limits ensure the pipeline is safe and bounded. This is production-grade engineering, not a workshop hack
  - **"Scheduled sessions extend this further"** — combine with Devin Scheduled Sessions to run weekly security scans across all repos, automatically remediating new findings as dependencies are updated upstream

- **Target Outcomes (any of these count):**
  - GitHub Actions workflow that runs SAST on every PR
  - Conditional step that calls the Devin API when findings exceed severity threshold
  - Author filtering to prevent infinite remediation loops
  - Re-scan verification step confirming the fix
  - `ARCHITECTURE.md` or `EVENT_DRIVEN_SECURITY.md` documenting the pipeline
  - PR with review comments and Devin's responses

---

# Track B — QA & Quality Engineering

5 labs following a progressive quality engineering narrative — from manual test generation through framework migration to continuous automated quality monitoring.

- Lab B1: **Test Coverage Audit & Unit Test Generation** — Assess coverage gaps and generate unit tests to close them
- Lab B2: **E2E Testing with Browser Automation** — Write Playwright end-to-end tests with Devin driving a real browser
- Lab B3: **Test Framework Migration** — Migrate a codebase from deprecated test frameworks to modern replacements
- Lab B4: **BDD Test Generation for REST APIs** — Generate Cucumber BDD test scenarios and build new API resources with matching tests
- Lab B5: **Continuous Quality Engineering** — Set up scheduled Devin sessions, Playbooks, and Knowledge for ongoing test quality automation

---

### Lab B1 — Test Coverage Audit & Unit Test Generation (45 min)

- **Module:** [Unit Testing](../../modules/testing-qa/unit-testing.md)
- **Repositories:**
  - [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) — React + Node.js full-stack application
  - [ts-java-spring-boot-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-java-spring-boot-realworld-example-app) — Spring Boot backend (alternative)
- **Objective:** Assess current test coverage, identify the weakest areas, and have Devin generate unit tests to close the gaps — demonstrating how Devin handles well-defined, autonomous test generation tasks

This is the entry-level lab. Participants get a quick win: paste a prompt, Devin analyzes coverage, writes tests, and opens a PR. While waiting, use Ask Devin to explore the codebase's testing patterns.

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

**Option A — Full-Stack Coverage Audit (app_timesheet):**
> Analyze the test coverage of app_timesheet. Run the existing test suites for both the backend (Node.js/Express) and frontend (React) and generate coverage reports. Identify the 5 modules or files with the lowest coverage.
>
> For each of the 3 worst-covered backend files, write unit tests that bring coverage above 80%. Follow the existing test patterns in the codebase (testing framework, assertion style, mock patterns). For the frontend, write React Testing Library tests for the 2 least-covered components.
>
> Create a `COVERAGE_REPORT.md` summarizing: current coverage baseline, files targeted, tests added, and new coverage numbers. Open a PR.

**Option B — Spring Boot Coverage Audit (ts-java-spring-boot-realworld-example-app):**
> Analyze the test coverage of ts-java-spring-boot-realworld-example-app. Run `./gradlew test jacocoTestReport` and identify classes with the lowest line coverage. Focus on the application service layer (ArticleCommandService, ArticleQueryService, UserService) and the API controllers.
>
> Write JUnit 5 tests for the 5 least-covered classes, following the existing test patterns (MockMvc for controllers, Mockito for services). Ensure each new test class covers happy path, error cases, and edge cases. Open a PR with the new tests and an updated coverage report.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What testing patterns does app_timesheet use — what assertion library, mocking framework, and test structure should new tests follow?"*
- *"Which parts of the app_timesheet backend have the most complex business logic but the least test coverage?"*
- *"What is the current JaCoCo coverage threshold for ts-java-spring-boot-realworld-example-app? Which packages are excluded from coverage?"*
- Use the analysis to plan a **second session** — try having Devin target a different set of uncovered files, or switch to the alternative repo

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the application architecture before reviewing Devin's tests. Key things to look for:
1. How the backend routes are structured (Express middleware chain for app_timesheet, Spring layers for the RealWorld app)
2. How existing tests mock external dependencies (database, HTTP clients)
3. Which test utilities and helpers already exist

Try different approaches:
- Ask Devin to generate **both unit and integration tests** for the same module to compare coverage approaches
- Have Devin create a **test quality checklist** based on what it learned about the codebase's testing conventions
- Try creating a **Knowledge item** capturing the project's testing standards so future sessions follow the same patterns

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **Test quality:** Do the tests verify meaningful behavior, or are they trivial assertions?
- **Coverage impact:** Did the coverage numbers actually improve for the targeted files?
- **Pattern consistency:** Do the new tests follow the same patterns as existing tests?

**Leave a feedback comment** and watch Devin respond:
- *"This test mocks too many dependencies — use the existing test database setup instead"*
- *"Add edge case tests for null/empty inputs on the date range validation"*
- *"The coverage report should include a before/after comparison table"*

- **Key Takeaways:**
  - **"Well-defined tasks get the best results"** — a clear prompt ("bring the 5 worst-covered files above 80%") produces focused, measurable output
  - **"Devin follows existing patterns"** — it analyzes the test framework, assertion style, and mock patterns before writing tests, producing code that fits the codebase
  - **"Autonomous execution"** — paste the prompt, move on to the next lab or explore Ask Devin. Devin works in the background and opens a PR when done
  - **"Coverage is a starting point, not the goal"** — use the PR review to push Devin toward tests that verify behavior, not just hit line-coverage numbers

- **Target Outcomes (any of these count):**
  - Coverage report showing baseline and improvement
  - Unit tests for the least-covered backend modules
  - Frontend component tests using React Testing Library
  - `COVERAGE_REPORT.md` documenting the audit findings
  - PR with review comments and Devin's responses

---

### Lab B2 — E2E Testing with Browser Automation (60 min)

- **Module:** [End-to-End Testing](../../modules/testing-qa/end-to-end-testing.md)
- **Repositories:**
  - [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) — React + Node.js full-stack application
- **Objective:** Have Devin start the application on its VM, open the browser, write Playwright E2E tests, run them, and produce screen recordings as test evidence — demonstrating Devin's ability to interact with running applications

This lab showcases a unique Devin capability: it has its own machine with a browser. Participants can watch Devin interact with the running app via the Desktop tab.

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Start the app_timesheet application locally (both backend and frontend). Once the app is running, write Playwright end-to-end tests for the core user workflows:
>
> 1. **Authentication flow:** Register a new user, log in, verify the dashboard loads
> 2. **Client management:** Create a new client, edit the client name, verify the update persists
> 3. **Time entry workflow:** Create a new work entry for a client, verify it appears in the list, verify the hours total is correct
> 4. **Report generation:** Navigate to reports, verify the data matches the entries created
>
> For each test, take a screenshot at key checkpoints as visual evidence. Run all tests and ensure they pass against the running application. Create a Playwright configuration file if one doesn't exist. Open a PR with the test files, configuration, and screenshots.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What is the app_timesheet login flow — is it email/password or OAuth? What test data do I need to set up?"*
- *"What are the most critical user journeys in app_timesheet that should have E2E coverage?"*
- *"How should Playwright tests handle the app_timesheet authentication — should tests share a logged-in state or log in fresh each time?"*
- Use the analysis to plan **additional E2E scenarios** — have Devin add error path tests (invalid login, missing required fields) in a follow-up session

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the app's UI structure and API contracts. Try different approaches:
- **Watch Devin work** — open the Desktop tab to see Devin navigate the application in real time as it writes and runs tests
- Ask Devin to add **visual regression tests** — screenshot comparison for key pages
- Have Devin generate a **test data setup script** that creates consistent test fixtures
- Ask Devin to produce a **test execution video** by recording the Playwright test run

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **Test stability:** Are the tests resilient to timing issues? Do they use proper Playwright locators (not fragile CSS selectors)?
- **Coverage of user journeys:** Do the tests cover the critical paths through the application?
- **Screenshot evidence:** Do the screenshots at checkpoints show the expected UI state?

**Leave a feedback comment** and watch Devin respond:
- *"The login test should wait for the dashboard to fully load before asserting — use waitForSelector instead of a fixed timeout"*
- *"Add a test for the error case when creating a work entry with 0 hours"*
- *"The Playwright config should run tests in headless mode for CI and headed mode for local development"*

See the full challenge details for [End-to-End Testing](../../modules/testing-qa/end-to-end-testing.md) for more ideas.

- **Key Takeaways:**
  - **"Devin has its own machine"** — it starts the app, opens the browser, and interacts with the running UI just like a developer would. The Desktop tab lets you watch in real time
  - **"E2E tests as documentation"** — the Playwright tests double as executable specifications of the app's core workflows
  - **"Screenshots as evidence"** — visual checkpoints at each step provide reviewable proof that the tests exercised the right UI states
  - **"VM lifecycle enables iterative testing"** — the app stays running between sessions. A follow-up session can add more tests without restarting the environment

- **Target Outcomes (any of these count):**
  - Playwright test suite covering authentication, CRUD, and reporting workflows
  - Playwright configuration file for CI and local execution
  - Screenshots at key checkpoints as visual test evidence
  - All tests passing against the running application
  - PR with review comments and Devin's responses

---

### Lab B3 — Test Framework Migration (60 min)

- **Module:** [Test Framework Migration](../../modules/testing-qa/test-framework-migration.md)
- **Repositories:**
  - [app_petclinic-angular](https://github.com/Cognition-Partner-Workshops/app_petclinic-angular) — Angular frontend with deprecated Karma + Jasmine + Protractor
  - [ts-angular-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-angular-realworld-example-app) — Angular app already using Vitest + Playwright (reference)
- **Objective:** Migrate app_petclinic-angular from deprecated test frameworks (Karma + Jasmine + Protractor) to modern replacements (Jest/Vitest + Playwright) — demonstrating how Devin handles repetitive, file-by-file migration work at scale

This lab is where Devin's strengths really shine: the same conversion pattern applied across dozens of spec files, with the option to fan out into parallel child sessions.

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Analyze the test infrastructure in app_petclinic-angular. The project currently uses Karma + Jasmine for unit tests and Protractor for E2E tests — both are deprecated in the Angular ecosystem.
>
> Phase 1 — Unit test migration:
> Replace Karma + Jasmine with Jest (or Vitest). Update the test configuration, convert all `.spec.ts` files to use the new test runner's API, and ensure all unit tests pass. Remove the Karma dependencies and configuration files.
>
> Phase 2 — E2E test migration:
> Replace Protractor with Playwright. Convert any existing E2E tests (or create new ones if none exist) to use Playwright's API. Add a Playwright configuration file and ensure the E2E tests can run against the dev server.
>
> Create a `MIGRATION_RUNBOOK.md` documenting: which patterns were converted automatically, which required manual intervention, and common gotchas for teams doing similar migrations. Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What Karma/Jasmine patterns in app_petclinic-angular will be hardest to convert to Jest — are there any custom matchers, async test helpers, or TestBed configurations that need special handling?"*
- *"What is the recommended Jest or Vitest configuration for Angular 16? Are there specific Angular testing utilities that need to be updated?"*
- *"How does ts-angular-realworld-example-app structure its Vitest + Playwright setup? Can we use it as a reference for the migration target?"*
- Use the analysis to plan the migration before Devin starts — this is the **Ask Devin for requirement gathering** pattern

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the test file structure and testing patterns. Key things to look for:
1. How many `.spec.ts` files exist and what patterns they use (TestBed, mocks, spies)
2. Whether tests use Karma-specific features (custom reporters, preprocessors)
3. Whether there are E2E tests in the `e2e/` directory using Protractor

Try different approaches:
- Run **parallel Devin sessions** — one for unit test migration (Phase 1) and one for E2E migration (Phase 2). Each session gets its own VM, so they don't interfere
- Have Devin use `ts-angular-realworld-example-app` as a **reference repo** — it already uses Vitest + Playwright, so Devin can learn the target patterns from a working example
- After the migration succeeds, ask Devin to **create a Playbook** capturing the migration steps so the same pattern can be applied to other Angular repos with one click

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR, focus your review on:
- **Correctness:** Do the migrated tests still test the same behavior? Were any assertions lost in translation?
- **Completeness:** Are all `.spec.ts` files converted? Are there any leftover Karma/Protractor references?
- **Configuration:** Is the new test runner properly configured for Angular (TestBed, zone.js handling)?

**Leave a feedback comment** and watch Devin respond:
- *"This test still imports from @angular/core/testing with a Karma-specific setup — please update to the Jest/Vitest equivalent"*
- *"The Protractor-style element selectors need to be converted to Playwright locators"*
- *"Add the migration runbook to the PR description so reviewers can understand the conversion patterns"*

See the full challenge details for [Test Framework Migration](../../modules/testing-qa/test-framework-migration.md) for more ideas.

- **Key Takeaways:**
  - **"Repetitive work at scale"** — the same conversion pattern applied consistently across dozens of spec files. This is tedious for humans but ideal for Devin
  - **"Parallel sessions save calendar time"** — unit test migration and E2E migration can run simultaneously on separate VMs
  - **"Multi-repo workspace"** — Devin can reference a working example (ts-angular-realworld-example-app) while migrating another repo, learning target patterns from real code
  - **"Playbooks turn one-off work into repeatable processes"** — capture the migration runbook as a Playbook so future framework migrations across other repos are a one-click operation
  - **"Knowledge compounds"** — the migration patterns Devin learns from this repo carry forward to future sessions, making each subsequent migration faster

- **Target Outcomes (any of these count):**
  - Karma + Jasmine replaced with Jest/Vitest (all unit tests passing)
  - Protractor replaced with Playwright (E2E tests passing against dev server)
  - Legacy test framework dependencies and configuration removed
  - `MIGRATION_RUNBOOK.md` documenting conversion patterns and gotchas
  - PR with review comments and Devin's responses

---

### Lab B4 — BDD Test Generation for REST APIs (60 min)

- **Module:** [BDD Test Generation](../../modules/testing-qa/bdd-test-generation.md)
- **Repository:** [uc-bdd-test-generation-rest-api](https://github.com/Cognition-Partner-Workshops/uc-bdd-test-generation-rest-api)
- **Objective:** Give Devin a Spring Boot + Cucumber BDD framework and prompt it to generate new test scenarios, build a new API resource, and produce executable Cucumber tests — demonstrating how Devin reads existing framework patterns and generates consistent, meaningful BDD scenarios

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Review the uc-bdd-test-generation-rest-api codebase. This is a Spring Boot + Cucumber BDD framework (from RedFroggy, MIT license) with pre-built step definitions for REST API testing. Run `mvn test` to see the 16 existing scenarios pass.
>
> Then add new Gherkin feature files that test edge cases for the existing Users API:
> - `src/test/resources/features/users-edge-cases.feature` covering:
>   - Creating a user with missing required fields (expect 400)
>   - Creating a user with duplicate ID (expect 409 or appropriate error)
>   - Pagination and sorting of the users list
>   - Input validation (invalid age values, empty name fields)
>
> Also create a new `OrderController` in the test application with endpoints for managing orders (linked to users). Write corresponding Gherkin feature files that test the order lifecycle (create, read, update, delete) and cross-resource relationships (e.g., get orders for a specific user). Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What Cucumber best practices should be followed for REST API testing — should scenarios be independent or can they share state?"*
- *"How should authentication be handled in the BDD scenarios — per-scenario setup or shared background?"*
- *"How can WireMock be used to test failure modes — what happens when the third-party API returns 500, times out, or returns malformed JSON?"*
- Use the analysis to start a **second session** — have Devin generate tests from a Swagger/OpenAPI spec directly

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the existing Cucumber configuration, step definition patterns, and how the framework maps Gherkin steps to REST API calls. Use what you learn to give Devin more tasks:
- Have Devin generate **data-driven scenarios** using Cucumber Scenario Outlines with Examples tables
- Ask Devin to add **negative test scenarios** for authentication failures and rate limiting
- Try having Devin add **WireMock failure mode tests** — third-party API returns 500, times out, or returns malformed JSON
- Ask Devin to add a **test report generator** that produces HTML results

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — are the Gherkin scenarios readable by non-developers? Do they describe business behavior rather than implementation details?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add data-driven scenarios using Cucumber Scenario Outlines with Examples tables"* or *"The step definitions should use more descriptive method names"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [BDD Test Generation](../../modules/testing-qa/bdd-test-generation.md) for more ideas.

- **Key Takeaways:**
  - **"Test generation from patterns, not templates"** — Devin reads the existing test framework and API patterns to generate meaningful BDD scenarios, not boilerplate
  - **"New resources with matching tests"** — Devin builds the API resource and its Gherkin test suite together, keeping implementation and validation in sync
  - **"Framework-aware output"** — Devin produces executable, Maven-integrated Cucumber tests that fit the project's existing conventions
  - **"The PR feedback loop"** — leave a comment, Devin responds. This is the core workflow for iterating with Devin in production. The PR Review agent adds another feedback layer automatically

- **Target Outcomes (any of these count):**
  - Edge-case feature files for the Users API with validation and error scenarios
  - New OrderController with Gherkin feature files for order lifecycle
  - Data-driven scenarios using Scenario Outlines with Examples tables
  - WireMock failure mode tests
  - PR with review comments and Devin's responses

---

### Lab B5 — Continuous Quality Engineering (45 min)

- **Module:** [Continuous Quality Engineering](../../modules/testing-qa/continuous-quality-engineering.md)
- **Repositories:**
  - [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) — React + Node.js full-stack application
  - [uc-bdd-test-generation-rest-api](https://github.com/Cognition-Partner-Workshops/uc-bdd-test-generation-rest-api) — Spring Boot + Cucumber (alternative)
- **Objective:** Move from "Devin writes tests on demand" to "Devin maintains test quality continuously as a team member" — set up scheduled sessions, Playbooks, and Knowledge items for ongoing quality automation

This is the capstone lab. Participants tie together everything from Labs B1-B4 and set up Devin as an ongoing quality engineering team member.

#### Step 1: Start with Ask Devin (recommended)

Before creating a session, use **Ask Devin** to plan the QA strategy:
- *"What is the current test coverage of app_timesheet? Which areas have the weakest coverage and would benefit most from automated monitoring?"*
- *"What recurring QA tasks would benefit from weekly automation — coverage checks, dependency audits, lint enforcement, test smell detection?"*
- *"What test quality standards should we encode in a Playbook for this project? What coverage threshold, which test types are required for new code, what anti-patterns should be flagged?"*

Use the answers to craft a Playbook and Knowledge items before proceeding.

#### Step 2: Paste into Devin (copy-paste this prompt into Devin)

> Set up a continuous quality engineering practice for app_timesheet.
>
> Part 1 — Test coverage baseline:
> Run the existing test suite and generate a coverage report. Identify the 5 files/modules with the lowest coverage. Write tests to bring the worst offender above 80% coverage.
>
> Part 2 — Flaky test detection:
> Run the test suite 10 times in sequence. Log pass/fail results for each test across all runs. Identify any tests that produce inconsistent results. For each flaky test found, diagnose the root cause (timing dependency, shared state, environment sensitivity) and propose a fix.
>
> Part 3 — Test smell audit:
> Scan the test suite for common anti-patterns: tests that depend on execution order, tests with no assertions, tests that mock too many dependencies (>3 mocks), tests with hardcoded dates/timestamps, and tests that write to shared state. Document findings in a `TEST_QUALITY_REPORT.md`.
>
> Open a PR with coverage improvements, flaky test fixes, and the quality report.

#### Step 3: Create a Playbook

After reviewing Devin's output from Step 2, create a **Playbook** that encodes the QA methodology. Navigate to Devin Settings and create a new Playbook:

> **Playbook: Weekly QA Audit**
> 1. Run test suite and generate coverage report
> 2. Compare coverage against baseline (80% threshold per module)
> 3. If any module drops below threshold, generate tests to close the gap
> 4. Run flaky test detection (10 consecutive runs)
> 5. Report flaky tests with root cause analysis
> 6. Scan for test smells and anti-patterns
> 7. Open a PR with improvements and a summary report

This Playbook can be triggered by any team member or scheduled to run weekly.

#### Step 4: Set Up a Scheduled Session

Configure a **Devin Scheduled Session** that runs the Weekly QA Audit Playbook:
- **Frequency:** Weekly (e.g., every Monday at 6 AM)
- **Playbook:** Weekly QA Audit (from Step 3)
- **Repository:** app_timesheet
- **Expected outcome:** PR opened with any coverage improvements and a quality report

This demonstrates how teams use Devin for continuous code hygiene — the QA equivalent of automated dependency bumps.

#### Step 5 (Optional): Create Knowledge Items

Based on what you learned in Labs B1-B4, create **Knowledge items** that will automatically inform all future Devin sessions:
- **Testing standards:** "All API route tests must include both happy path and 400/404 error cases"
- **Framework conventions:** "Use React Testing Library's userEvent over fireEvent for user interaction tests"
- **Coverage policy:** "New code must have >80% line coverage. Untested code must include a TODO comment explaining why"

#### Step 6 (Optional): Review & Give Feedback

- **Review the quality report** — are the identified test smells real issues or false positives?
- **Leave a comment** asking Devin to prioritize fixing a specific anti-pattern
- **Try triggering the Playbook manually** to see the full cycle: Playbook -> Devin session -> autonomous analysis -> PR

See the full challenge details for [Continuous Quality Engineering](../../modules/testing-qa/continuous-quality-engineering.md) for more ideas.

- **Key Takeaways:**
  - **"Devin as a team member, not a tool"** — scheduled sessions, Knowledge, and Playbooks turn Devin into an ongoing quality engineering practice, not a one-shot test generator
  - **"Playbooks encode methodology"** — your team's QA standards become executable instructions that any team member can trigger, ensuring consistency across the organization
  - **"Knowledge compounds over time"** — every Knowledge item created in Labs B1-B4 makes future sessions better. Devin remembers your project's testing conventions, framework preferences, and quality standards
  - **"Scheduled sessions for continuous hygiene"** — weekly coverage monitoring, flaky test detection, and test smell audits run automatically. The team reviews PRs rather than running the analysis themselves
  - **"VM lifecycle persists state"** — coverage baselines, test run history, and quality trends persist between scheduled runs, enabling trend analysis over time

- **Target Outcomes (any of these count):**
  - Coverage baseline report with targeted improvements
  - Flaky test detection results with root cause analysis
  - Test smell audit documented in `TEST_QUALITY_REPORT.md`
  - Weekly QA Audit Playbook created and saved
  - Scheduled Devin session configured for recurring QA
  - Knowledge items capturing project-specific test standards
  - PR with quality improvements and Devin's responses

---

## Additional Challenges

Participants may also attempt any challenge from the full [module catalog](../../modules/) as creative inspiration. Recommended extras:

### Track A Extras (Security)

| Challenge | Module | Repo | Difficulty | Time |
|-----------|--------|------|-----------|------|
| Security Antipatterns | [Security Antipatterns](../../modules/security/security-antipatterns.md) | app_timesheet, Online-Banking-System-using-Java | Intermediate | 45 min |
| Mass Security Backlog Remediation | [Mass Security Backlog Remediation](../../modules/security/mass-security-backlog-remediation.md) | app_timesheet, uc-cve-remediation-regulatory-compliance | Advanced | 90 min |

### Track B Extras (QA)

| Challenge | Module | Repo | Difficulty | Time |
|-----------|--------|------|-----------|------|
| Linting & Static Analysis | [Linting & Static Analysis](../../modules/testing-qa/linting-static-analysis.md) | app_timesheet | Beginner | 30 min |
| Performance Testing | [Performance Testing](../../modules/testing-qa/performance-testing.md) | app_timesheet | Intermediate-Advanced | 60 min |
| Accessibility Compliance | [Accessibility Compliance](../../modules/testing-qa/accessibility-compliance.md) | app_timesheet, cal.com | Intermediate | 45 min |
| Visual Regression Testing | [Visual Regression Testing](../../modules/testing-qa/visual-regression-testing.md) | app_timesheet, cal.com | Intermediate | 45 min |
| Mutation Testing | [Mutation Testing](../../modules/testing-qa/mutation-testing.md) | app_timesheet | Intermediate-Advanced | 60 min |
| Contract Testing | [Contract Testing](../../modules/testing-qa/contract-testing.md) | app_petclinic-microservices | Intermediate-Advanced | 60 min |

## Repos Required on Devin's Machine

### Track A (Security)

- [ ] app_timesheet
- [ ] uc-cve-remediation-regulatory-compliance

#### Optional (for extended challenges)

- [ ] Online-Banking-System-using-Java
- [ ] uc-framework-upgrade-monolith-to-microservices

### Track B (QA)

- [ ] app_timesheet
- [ ] app_petclinic-angular
- [ ] ts-angular-realworld-example-app
- [ ] uc-bdd-test-generation-rest-api

#### Optional (for extended challenges)

- [ ] ts-java-spring-boot-realworld-example-app
- [ ] cal.com
- [ ] app_petclinic-microservices

## Repo Duplication Notes

- `app_timesheet` appears in both tracks — it's a versatile Node.js app used for both security scanning (Track A) and test generation (Track B). Participants in both tracks may work on the same repo, but each track's labs target different aspects (security posture vs. test coverage).
- `uc-cve-remediation-regulatory-compliance` is a Spring Boot 2.6.3 app with 18+ known CVEs, pre-configured with OWASP Dependency-Check and SonarQube Gradle plugins. It's the primary repo for Track A.
- `app_petclinic-angular` and `app_petclinic-microservices` are from the same Spring PetClinic ecosystem (Cluster C3 in [catalog](../../catalog/repos.md)) but serve different purposes: Angular uses the deprecated Karma/Protractor test stack (ideal for migration lab), while Microservices has contract testing opportunities.
- `ts-angular-realworld-example-app` already uses modern Vitest + Playwright — it serves as a reference target for the test framework migration, not a migration source.

## Context

- **Audience:** Security engineers, AppSec teams, QA engineers, SDETs, test automation engineers, quality assurance leads
- **Focus:** Two parallel tracks — security vulnerability remediation (Track A) and progressive quality engineering (Track B)
- **Security narrative (Track A):** Each lab builds on the last: scan for CVEs (Lab A1) -> remediate with SAST tools (Lab A2) -> detect and prevent secrets (Lab A3) -> automate in CI (Lab A4) -> full autonomous pipeline (Lab A5)
- **Testing narrative (Track B):** Each lab builds on the last: assess coverage (Lab B1) -> automate browser testing (Lab B2) -> modernize test infrastructure (Lab B3) -> generate BDD tests from specs (Lab B4) -> automate it all continuously (Lab B5)
- **Security tools (all free, all local):** OWASP Dependency-Check (NVD-backed CVE scanning), SonarQube Community Edition (code-level SAST), gitleaks (secrets detection), Trivy (container/filesystem scanning), GitHub Advanced Security (CodeQL, secret scanning — free on public repos)
- **Devin value themes woven throughout both tracks:**
  - Autonomous, off-machine execution — kick off sessions and move on
  - Browser interaction and screen recording (Track B E2E, Track A SonarQube dashboard)
  - Parallel sessions for scaling repetitive work across repos
  - Multi-repo workspace for referencing patterns across codebases
  - Ask Devin for requirement gathering and task scoping before sessions
  - Knowledge and Playbooks for building reusable team context
  - PR Review agent + CI checks as automatic feedback loops
  - Long-running task handling — Devin works while you're in meetings
  - Scheduled sessions for continuous security and quality hygiene
  - VM lifecycle for persistent state between sessions
  - Devin API for programmatic session triggering (Track A capstone)
  - Docker and local tool management on Devin's VM (SonarQube, Trivy)

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session.

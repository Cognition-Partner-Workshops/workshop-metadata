# Workshop: Quality Engineering & Security Vulnerability Remediation

## Event Details

| | |
|---|---|
| **Variant Name** | Quality Engineering & Security Workshop |
| **Focus** | Quality engineering (first half) + security vulnerability remediation (second half) |
| **Duration** | ~3 hours (flexible: 90 min per half + breaks) |
| **Event Site** | https://partner-workshops.devinenterprise.com |
| **Audience** | QA/QE engineers, AppSec/DevSecOps practitioners, engineering leads responsible for test coverage or security compliance |

## Featured Labs

This event features 4 labs in two halves:

**First Half — Quality Engineering (~90 min):** Labs 1 and 2 cover linting, unit testing, E2E testing, and documentation

**Second Half — Security Vulnerability Remediation (~90 min):** Labs 3 and 4 cover SAST scanning, CVE remediation, dependency upgrades, and shift-left CI

### Lab 1 — Linting & Unit Testing (45 min)
- **Modules:** [QE1 — Linting](../../modules/quality-engineering/QE1.md) + [QE2 — Unit Testing](../../modules/quality-engineering/QE2.md)
- **Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)
- **Objective:** Start by resolving linting issues (GitHub Issue #3), then improve unit test coverage and generate a coverage report

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Review app_timesheet and resolve all ESLint/Prettier violations referenced in GitHub Issue #3. Then analyze the existing test coverage and add unit tests to bring coverage above 80%. Generate a coverage report showing before and after metrics. Open a PR with the linting fixes and new tests.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the most under-tested modules in app_timesheet? Which functions have the highest complexity but no test coverage?"*
- *"What's the best testing strategy for the timesheet calculation logic — should we use parameterized tests, snapshot tests, or both?"*
- Use the analysis to start a **second session** — try adding tests for edge cases Devin might miss, or focus on a specific untested module

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to understand the codebase architecture and module dependencies. Use what you learn to try different approaches:
- Have Devin add **parameterized tests** for the timesheet calculation functions with edge cases (overtime, holidays, negative hours)
- Ask Devin to generate a **test coverage heatmap** showing which files need the most attention
- Try having Devin configure **stricter ESLint rules** (e.g., no-any, strict null checks) and fix the new violations
- Ask Devin to add **pre-commit hooks** that run linting and tests on every commit

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — are the linting fixes mechanical or did Devin make meaningful improvements? Are the new tests testing real behavior or just boosting coverage numbers?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add edge case tests for overtime calculations"* or *"The ESLint config should enable the no-any rule"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [QE1 — Linting](../../modules/quality-engineering/QE1.md) and [QE2 — Unit Testing](../../modules/quality-engineering/QE2.md) for more ideas.

- **Target Outcomes (any of these count):**
  - All ESLint/Prettier violations resolved
  - Unit test coverage increased (target: 80%+)
  - Coverage report generated
  - PR with review comments and Devin's responses

### Lab 2 — E2E Testing & Documentation (45 min)
- **Modules:** [QE3 — End-to-End Testing](../../modules/quality-engineering/QE3.md) + [QE4 — Inline Documentation](../../modules/quality-engineering/QE4.md)
- **Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)
- **Alternative E2E repo:** [cal.com](https://github.com/Cognition-Partner-Workshops/cal.com) (for participants wanting a more complex target)
- **Objective:** Write and run E2E tests against the locally running application, then improve inline documentation across the codebase

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Set up Playwright E2E tests for app_timesheet. Start the application locally (backend on port 3001, frontend on port 5173), then write E2E tests covering: login flow, creating a new timesheet entry, editing an existing entry, and deleting an entry. Run the tests and capture a screen recording as evidence. Also add JSDoc documentation to the key modules in the frontend. Open a PR with the tests and documentation.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the critical user flows in app_timesheet that should have E2E test coverage? Are there any flows that are especially fragile?"*
- *"Should the E2E tests use Page Object Model or a simpler flat structure for this size of application?"*
- Use the analysis to start a **second session** — try writing E2E tests for a different application (cal.com) or adding accessibility testing

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to understand the frontend component structure and API endpoints. Use what you learn to try different approaches:
- Have Devin add **visual regression tests** using Playwright's screenshot comparison
- Ask Devin to generate **API contract tests** that validate the backend responses against expected schemas
- Try having Devin write E2E tests for **error scenarios** (network failures, invalid inputs, session timeout)
- Ask Devin to produce a **comprehensive JSDoc** coverage report

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — are the E2E tests stable (no flaky selectors, proper waits)? Is the documentation useful or just boilerplate?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Use data-testid selectors instead of CSS classes for stability"* or *"Add a test for the edge case where the user submits an empty timesheet"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [QE3 — End-to-End Testing](../../modules/quality-engineering/QE3.md) and [QE4 — Inline Documentation](../../modules/quality-engineering/QE4.md) for more ideas.

- **Target Outcomes (any of these count):**
  - E2E test suite created (Playwright or Selenium)
  - Devin screen recording of test execution as evidence
  - JSDoc/inline documentation added to key modules
  - PR with review comments and Devin's responses

---

### Lab 3 — CVE Remediation with Local SAST Tools (60 min)
- **Modules:** [SEC1 — Upgrade Dependencies](../../modules/security/SEC1.md) + [SEC2 — Remediate Vulnerabilities](../../modules/security/SEC2.md)
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Objective:** Use pre-configured local SAST tools to scan for vulnerabilities, remediate the most critical findings, and upgrade outdated dependencies

#### Pre-configured SAST Tools (both local — no cloud costs)

| Tool | What It Scans | Command |
|------|--------------|---------|
| [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) | Dependencies against the NVD for known CVEs | `./gradlew dependencyCheckAnalyze` |
| [SonarQube Community Edition](https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/) | Source code for vulnerabilities, code smells, bugs | `docker compose -f docker-compose.sonarqube.yml up -d` then `./gradlew sonar` |

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Run `./gradlew dependencyCheckAnalyze` on uc-cve-remediation-regulatory-compliance to identify dependency CVEs. Remediate the top 5 most critical findings (CVSS >= 7.0) — start with Spring Boot 2.6.3, SnakeYAML 1.29, and sqlite-jdbc 3.36.0.3. Re-run the scan to verify the fixes. Create a `SECURITY_REMEDIATION.md` documenting the before/after results and open a PR.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the known CVEs in uc-cve-remediation-regulatory-compliance's dependencies? Which ones are CRITICAL severity?"*
- *"What's the safest upgrade path for Spring Boot 2.6.3 — should we go to 2.7.x first or jump straight to 3.x?"*
- Use the analysis to start a **second session** — try adding a GitHub Actions security scanning workflow, or upgrade Spring Boot to 3.x instead of just patching

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to understand the dependency graph and known vulnerabilities. Use what you learn to try different approaches:
- Have Devin add **SBOM generation** (CycloneDX) to the Gradle build
- Ask Devin to add a **GitHub Actions workflow** that runs Trivy or OWASP Dependency-Check on every PR
- Try starting **SonarQube** and having Devin remediate code-level security hotspots in addition to dependency CVEs
- Ask Devin to produce a **complete vulnerability inventory** with CVSS scores and remediation status

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — did Devin upgrade the right dependencies? Are there any CVEs it missed?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"The SnakeYAML version still has CVE-2022-1471 — please upgrade to 2.x"* or *"Can you also add a CI workflow that fails on CRITICAL CVEs?"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [SEC1 — Upgrade Dependencies](../../modules/security/SEC1.md) and [SEC2 — Remediate Vulnerabilities](../../modules/security/SEC2.md) for more ideas.

- **Target Outcomes (any of these count):**
  - OWASP Dependency-Check report generated (before and after remediation)
  - SonarQube analysis completed with security hotspots reviewed
  - High/critical vulnerabilities patched or upgraded
  - `SECURITY_REMEDIATION.md` with before/after evidence
  - PR with review comments and Devin's responses

### Lab 4 — Shift Left & Security Antipatterns (45 min)
- **Modules:** [SEC3 — Shift Left](../../modules/security/SEC3.md) + [SEC4 — Identify Antipatterns](../../modules/security/SEC4.md)
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) or [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)
- **Objective:** Add CI workflows that gate on security policy violations, then identify and fix security antipatterns in application code

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Add a GitHub Actions workflow to uc-cve-remediation-regulatory-compliance that runs OWASP Dependency-Check on every PR and fails the build if any HIGH or CRITICAL CVEs are found. Also generate an SBOM in CycloneDX format as a build artifact. Then scan the application code for OWASP Top 10 antipatterns and fix any issues found. Open a PR with the workflow, SBOM generation, and antipattern fixes.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What OWASP Top 10 vulnerabilities are most likely present in a Spring Boot application like uc-cve-remediation-regulatory-compliance?"*
- *"What's the best CI gating strategy — fail on any HIGH finding, or use a threshold of total findings?"*
- Use the analysis to start a **second session** — try adding Trivy as a second scanner or implementing secrets detection with gitleaks

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to understand the application's security posture. Use what you learn to try different approaches:
- Have Devin add **Trivy container scanning** to the CI pipeline alongside dependency checking
- Ask Devin to implement **secrets detection** using gitleaks as a pre-commit hook
- Try having Devin produce a **security posture report** summarizing all findings across scanners
- Ask Devin to add **SBOM attestation** using Cosign for supply chain security

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the CI workflow correctly gate on security findings? Are the antipattern fixes genuine improvements?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add a Trivy scan step alongside the OWASP check"* or *"The SBOM should be uploaded as a GitHub release artifact"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [SEC3 — Shift Left](../../modules/security/SEC3.md) and [SEC4 — Identify Antipatterns](../../modules/security/SEC4.md) for more ideas.

- **Target Outcomes (any of these count):**
  - GitHub Actions workflow with security scanning (Trivy, OWASP DC, or SonarQube)
  - CI fails on HIGH/CRITICAL findings
  - SBOM generated (CycloneDX or SPDX)
  - Security antipatterns identified and fixed (OWASP Top 10 review)
  - PR with review comments and Devin's responses

## Additional Challenges

Participants who finish early may attempt any challenge from the full [module catalog](../../modules/). Recommended extras:

| Challenge | Module | Repo | Difficulty | Time |
|-----------|--------|------|-----------|------|
| New Feature Development | [FD6](../../modules/feature-development/FD6.md) | app_timesheet | Intermediate | 60 min |
| Fix UI Bug | [FD4](../../modules/feature-development/FD4.md) | app_timesheet | Intermediate | 45 min |
| CI/CD Pipeline | [DA1](../../modules/devops-automation/DA1.md) | app_timesheet | Intermediate | 60 min |

## Repos Required on Devin's Machine

- [ ] app_timesheet
- [ ] uc-cve-remediation-regulatory-compliance
- [ ] cal.com (optional, for Lab 2 alternative)

## Runtime Resources

- **app_timesheet:** Backend on port 3001, frontend on port 5173 (needed for Lab 2 E2E testing)
- **SonarQube:** `docker compose -f docker-compose.sonarqube.yml up -d` on port 9000 (needed for Lab 3)

If hosted instances are available, refer to [runtime-resources.md](../../shared/runtime-resources.md) for URLs and credentials.

## Context

- **Audience:** QA/QE engineers, AppSec/DevSecOps practitioners, engineering leads
- **Flow:** The workshop progresses from quality foundations (linting, testing) to security remediation (SAST, CVE patching, shift-left CI) — showing how quality and security practices reinforce each other
- **Key narrative:** Devin handles the tedious work (running scanners, interpreting reports, generating tests) so engineers can focus on evaluating and verifying results
- **SAST tools are local:** All security scanning runs on the participant's machine via Gradle plugins and Docker — no cloud accounts or paid licenses required

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session.

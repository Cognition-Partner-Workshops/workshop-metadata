# B1 — Upgrade Dependencies

## Challenge

Upgrade outdated and vulnerable dependencies in a project. Use local SAST tools to identify vulnerabilities before upgrading and verify remediation afterward.

## Options

### Option 1: Node.js Dependencies
- **Repository:** [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client)
- **Task:** Resolve this GitHub Issue: https://github.com/Cognition-Partner-Workshops/app_timesheet-client/issues/2

### Option 2: Java/Gradle Dependencies with Local SAST Scanning
- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Task:** Use the pre-configured local SAST tools to scan the project, then upgrade dependencies to remediate the findings.
  1. **Run OWASP Dependency-Check** (`./gradlew dependencyCheckAnalyze`) to generate a CVE report for the current Spring Boot 2.6.3 dependencies. Review the HTML report at `build/reports/dependency-check-report.html`.
  2. **(Optional) Run SonarQube analysis** for code-level security findings. Start the local SonarQube Community Edition with `docker compose -f docker-compose.sonarqube.yml up -d`, create a project token at http://localhost:9000, then run `./gradlew sonar -Dsonar.token=<TOKEN>`.
  3. **Upgrade Spring Boot** from 2.6.3 to the latest stable 2.7.x or 3.x, updating all transitive dependencies.
  4. **Re-run the SAST scans** to verify that HIGH/CRITICAL CVEs are resolved and no new vulnerabilities were introduced.
  5. Verify the build and tests still pass. Open a PR with the changes and a summary of before/after scan results.

#### SAST Tools Used (both run locally — no cloud costs)
| Tool | Purpose | Command |
|------|---------|---------|
| [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) | Scans dependencies against the NVD for known CVEs | `./gradlew dependencyCheckAnalyze` |
| [SonarQube Community Edition](https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/) | Code-level static analysis (vulnerabilities, code smells, bugs) | `docker compose -f docker-compose.sonarqube.yml up -d` then `./gradlew sonar` |

## Target Outcomes

- OWASP Dependency-Check HTML report generated (before and after upgrades)
- HIGH/CRITICAL CVEs resolved by dependency upgrades
- Build and tests pass after upgrades
- (Optional) SonarQube dashboard showing code-level findings addressed
- PR with changes and before/after vulnerability summary

## Sample Prompt

**Option 1 (Node.js):**
> Audit the dependencies in [repo] for known vulnerabilities. Upgrade all vulnerable dependencies to their latest secure versions. Ensure the build and tests still pass after upgrades. Open a PR with the changes.

**Option 2 (Java/Gradle + SAST):**
> Run `./gradlew dependencyCheckAnalyze` on the uc-cve-remediation-regulatory-compliance repo and review the vulnerability report. Then upgrade Spring Boot from 2.6.3 to the latest stable version, updating all transitive dependencies. After upgrading, re-run the dependency check to confirm HIGH and CRITICAL CVEs are resolved. Ensure the build and tests still pass. Open a PR documenting the before/after scan results.

## What Participants Will Learn

- How Devin interprets dependency vulnerability reports (npm audit, OWASP Dependency-Check, Gradle dependency analysis)
- How Devin installs, configures, and runs local SAST tools
- How Devin handles breaking changes during major version upgrades
- Devin's approach to verifying compatibility after upgrades (build, test, run)
- The before/after pattern: scan, fix, re-scan to verify remediation

## Devin Features Exercised

- GitHub Issue resolution
- Local SAST tool execution and report interpretation
- Dependency analysis
- Build verification
- PR creation with security evidence

## Difficulty

Beginner to Intermediate

## Estimated Time

45–60 minutes

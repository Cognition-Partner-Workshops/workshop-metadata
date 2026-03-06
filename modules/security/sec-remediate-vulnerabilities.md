# B2 — Remediate Vulnerabilities

## Challenge

Use local SAST tools to identify and remediate the most critical preexisting vulnerabilities in a repository. Both dependency-level CVEs and code-level security issues are in scope.

## Options

- **Repository:** Any repo in the org (participant's choice)
- **Recommended:**
  - [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance) — Spring Boot 2.6.3 with known CVEs, **pre-configured with OWASP Dependency-Check and SonarQube Gradle plugins**
  - [app_timesheet-client](https://github.com/Cognition-Partner-Workshops/app_timesheet-client) — Node.js with Trivy scanning already configured

## Known CVEs in uc-cve-remediation-regulatory-compliance

The repo ships with Spring Boot 2.6.3 and several outdated dependencies. Here are the known high/critical CVEs participants will encounter when scanning:

### Critical (CVSS 9.0+)

| CVE | Dependency | Version | CVSS | Description |
|-----|-----------|---------|------|-------------|
| CVE-2022-22965 | Spring Framework | 5.3.15 | 9.8 | **Spring4Shell** — RCE via data binding on JDK 9+ (CISA KEV) |
| CVE-2022-1471 | SnakeYAML | 1.29 | 9.8 | Unsafe deserialization via `Constructor` class — arbitrary code execution |
| CVE-2022-22978 | Spring Security | 5.6.1 | 9.8 | Regex bypass in authorization rules — authentication bypass |
| CVE-2022-31692 | Spring Security | 5.6.1 | 9.8 | Forward/include dispatch bypass — authorization bypass |
| CVE-2023-32697 | sqlite-jdbc | 3.36.0.3 | 8.8 | RCE when JDBC URL is attacker-controlled |

### High (CVSS 7.0–8.9)

| CVE | Dependency | Version | CVSS | Description |
|-----|-----------|---------|------|-------------|
| CVE-2022-22968 | Spring Framework | 5.3.15 | 7.5 | Data binding pattern bypass |
| CVE-2022-25857 | SnakeYAML | 1.29 | 7.5 | DoS via crafted YAML input |
| CVE-2022-42003 | jackson-databind | 2.13.1 | 7.5 | Deserialization issue with UNWRAP_SINGLE_VALUE_ARRAYS |
| CVE-2022-42004 | jackson-databind | 2.13.1 | 7.5 | Deserialization issue in BeanDeserializer |
| CVE-2022-42252 | Tomcat Embed | 9.0.56 | 7.5 | HTTP request smuggling via invalid Content-Length |
| CVE-2023-24998 | Tomcat Embed | 9.0.56 | 7.5 | DoS via file upload (Apache Commons FileUpload) |
| CVE-2022-23181 | Tomcat Embed | 9.0.56 | 7.0 | TOCTOU race condition in FileStore session persistence |
| CVE-2023-6378 | Logback | 1.2.10 | 7.5 | DoS via crafted serialized data |

### Medium (CVSS 5.0–6.9)

| CVE | Dependency | Version | CVSS | Description |
|-----|-----------|---------|------|-------------|
| CVE-2022-22950 | Spring Framework | 5.3.15 | 6.5 | DoS via SpEL expressions |
| CVE-2022-38749 | SnakeYAML | 1.29 | 6.5 | Stack overflow DoS via crafted YAML |
| CVE-2022-38751 | SnakeYAML | 1.29 | 6.5 | Stack overflow DoS via crafted YAML |
| CVE-2022-38752 | SnakeYAML | 1.29 | 6.5 | Stack overflow DoS via crafted YAML |
| CVE-2022-38750 | SnakeYAML | 1.29 | 5.5 | Stack overflow DoS via crafted YAML |

> **Tip:** There are 18+ known CVEs in total. Focus on the CRITICAL and HIGH findings first — these are the ones that would fail a real compliance audit.

## Task

Run local SAST tools to scan a repository for vulnerabilities, then remediate the most critical findings. The `uc-cve-remediation-regulatory-compliance` repo has two tools pre-configured — both run entirely on the participant's machine with no cloud or SaaS costs.

### Step-by-step (using uc-cve-remediation-regulatory-compliance)

1. **Scan dependencies for known CVEs** — Run OWASP Dependency-Check to identify vulnerable dependencies:
   ```bash
   ./gradlew dependencyCheckAnalyze
   ```
   Review the HTML report at `build/reports/dependency-check-report.html`. The build fails if any dependency has a CVSS score >= 7.0.

2. **Scan source code for security issues** — Start the local SonarQube Community Edition and run a code-level analysis:
   ```bash
   docker compose -f docker-compose.sonarqube.yml up -d
   # Wait ~60 seconds, then open http://localhost:9000 (login: admin / admin)
   # Create a project token: My Account > Security > Generate Tokens
   ./gradlew sonar -Dsonar.token=<YOUR_TOKEN>
   ```
   Review findings in the SonarQube dashboard at http://localhost:9000 under the `uc-cve-remediation` project.

3. **Remediate findings** — Upgrade vulnerable dependencies, fix code-level issues flagged by SonarQube (e.g., hardcoded secrets, injection risks, insecure defaults).

4. **Re-scan to verify** — Re-run both tools after remediation to confirm HIGH/CRITICAL findings are resolved and no new issues were introduced.

5. **Document results** — Create `SECURITY_REMEDIATION.md` with before/after evidence. Open a PR.

### Pre-configured SAST Tools (both local — no cloud costs)

| Tool | What It Scans | Gradle Command | Report Location |
|------|--------------|----------------|-----------------|
| [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) | Dependencies against the NVD for known CVEs | `./gradlew dependencyCheckAnalyze` | `build/reports/dependency-check-report.html` |
| [SonarQube Community Edition](https://www.sonarsource.com/open-source-editions/sonarqube-community-edition/) | Source code for vulnerabilities, code smells, bugs | `./gradlew sonar -Dsonar.token=<TOKEN>` | http://localhost:9000 dashboard |

> **Note:** SonarQube Community Edition runs locally via Docker (`docker-compose.sonarqube.yml` is included in the repo). OWASP Dependency-Check downloads the NVD database locally on first run. Neither tool requires a paid license or cloud account.

## Target Outcomes

- OWASP Dependency-Check report generated (before and after remediation)
- SonarQube analysis completed with security hotspots reviewed
- High/critical vulnerabilities patched or upgraded
- Secure coding checks added: format/lint + static analysis (SAST)
- `SECURITY_REMEDIATION.md` with before/after evidence
- PR with all remediations documented

## Sample Prompt

> Run `./gradlew dependencyCheckAnalyze` on the uc-cve-remediation-regulatory-compliance repo to identify dependency CVEs. Then start SonarQube locally with `docker compose -f docker-compose.sonarqube.yml up -d` and run `./gradlew sonar` to find code-level security issues. Remediate the top 5 most critical findings (CVSS >= 7.0). Re-run both scans to verify the fixes. Create a `SECURITY_REMEDIATION.md` documenting the before/after results and open a PR.

## What Participants Will Learn

- How Devin runs and interprets local SAST tools (OWASP Dependency-Check, SonarQube)
- How Devin interprets CVE details (CVSS scores, affected versions, fix versions)
- The difference between dependency vulnerabilities and code-level vulnerabilities
- How to evaluate whether Devin's fixes are correct and complete
- The scan → fix → re-scan verification pattern

## Devin Features Exercised

- Local tool execution (Gradle plugins, Docker Compose)
- SAST report interpretation
- Security analysis and code remediation
- Build verification
- PR creation with security evidence

## Difficulty

Intermediate

## Estimated Time

60 minutes

# SEC4

## Repositories

- [app_timesheet](#app_timesheet)
- [Online-Banking-System-using-Java](#online-banking-system-using-java)
- [uc-cve-remediation-regulatory-compliance](#uc-cve-remediation-regulatory-compliance)

---

## Challenge

Discover security flaws or design antipatterns preexisting in application source code with Devin's help. This goes beyond dependency scanning to examine the code itself for OWASP Top 10 vulnerabilities, authentication weaknesses, and insecure patterns.

## Target Outcomes

- Security code review report with findings categorized by severity
- At least 3 critical findings identified with recommended fixes
- Optionally: fixes implemented for the most critical findings
- PR with findings report and optional fixes

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

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Node.js/Express application with email-only auth (no password) and potential SQL injection paths.

### Step 1: Get Started Fast

> Perform a security code review of app_timesheet against the OWASP Top 10. Focus on: authentication weaknesses (email-only, no password), SQL injection risks in the SQLite queries, XSS vulnerabilities in the React frontend, and CSRF protection. For each finding, explain the vulnerability, its severity, and provide a recommended fix. Implement fixes for the top 3 most critical findings. Open a PR.

### Step 2: Level Up with AskDevin

- *"What authentication mechanism does app_timesheet use? What are its security weaknesses?"*
- *"Are there any SQL queries that use string concatenation instead of parameterized queries?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the authentication flow and data access layer. Map out where user input flows through the system — these are the primary attack surfaces.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are the security fixes correct? Do they introduce any usability regressions?
- **Leave a comment** asking Devin to also add input validation middleware for all API endpoints

---

## <a id="online-banking-system-using-java"></a>Online-Banking-System-using-Java

**Repository:** [Online-Banking-System-using-Java](https://github.com/Cognition-Partner-Workshops/Online-Banking-System-using-Java)

Java banking application — likely has multiple security antipatterns given the domain sensitivity.

### Step 1: Get Started Fast

> Perform a security code review of Online-Banking-System-using-Java against the OWASP Top 10. A banking application should have strong security — identify all authentication bypass risks, injection vulnerabilities, hardcoded credentials, insecure session management, and missing encryption. Implement fixes for the top 3 most critical findings. Open a PR.

### Step 2: Level Up with AskDevin

- *"What authentication and authorization mechanisms does this banking app use? Are they appropriate for financial transactions?"*
- *"Are there any hardcoded secrets, API keys, or credentials in the source code?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the transaction flow and account management logic. Financial operations are the highest-risk code paths.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are the security fixes appropriate for a financial application?
- **Leave a comment** asking Devin to add audit logging for all financial transactions

---

## <a id="uc-cve-remediation-regulatory-compliance"></a>uc-cve-remediation-regulatory-compliance

**Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)

Spring Boot application — review for OWASP Top 10 issues in addition to dependency-level CVEs.

### Step 1: Get Started Fast

> Perform a security code review of uc-cve-remediation-regulatory-compliance beyond its dependency vulnerabilities. Look for: SQL injection via MyBatis dynamic SQL, insecure Spring Security configuration, missing CSRF protection, exposed actuator endpoints, and hardcoded secrets. For each finding, explain severity and recommended fix. Implement fixes for the top 3. Open a PR.

### Step 2: Level Up with AskDevin

- *"Is the Spring Security configuration in this app following best practices? Are there any overly permissive rules?"*
- *"Are there any MyBatis mappers using `${}` (string substitution) instead of `#{}` (parameterized)?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the security configuration and API endpoint permissions. Identify endpoints that should require authentication but don't.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — do the fixes follow Spring Security best practices?
- **Leave a comment** asking Devin to also add rate limiting to the authentication endpoints

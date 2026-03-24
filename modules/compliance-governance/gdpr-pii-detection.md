# GDPR/PII Detection

## Repositories

- [app_timesheet](#app_timesheet)
- [Online-Banking-System-using-Java](#Online-Banking-System-using-Java)

---

## Challenge

Scan the codebase for PII handling patterns — personal data storage, transmission, logging, and processing. Identify GDPR compliance gaps and suggest data protection improvements.

## Target Outcomes

- PII data flow map showing where personal data is stored, processed, and transmitted
- List of GDPR compliance gaps with severity ratings
- Recommended fixes for data protection (encryption, anonymization, consent)
- PR with PII handling improvements and compliance documentation

## What Participants Will Learn

- How Devin traces data flows to identify where personal information is stored, processed, and transmitted
- How Devin identifies GDPR compliance gaps in existing codebases
- How to evaluate PII exposure risk across different layers (API, database, logs)
- How Devin generates actionable compliance documentation from code analysis

## Devin Features Exercised

- Code pattern analysis for PII identification
- Security assessment and data flow tracing
- Cross-layer analysis (API, database, logging)
- Compliance documentation generation

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Node.js/Express timesheet application that handles user data including names, emails, and authentication credentials — a realistic target for PII analysis.

### Step 1: Paste into Devin

> Scan app_timesheet for GDPR and PII compliance issues. Analyze the entire codebase to identify where personal data (names, emails, passwords, user identifiers) is stored, processed, transmitted, and logged. Check for: unencrypted PII in the database, PII leaked in logs or error messages, missing data anonymization, lack of consent mechanisms, and insecure data transmission. Create a `PII_COMPLIANCE_REPORT.md` with a data flow map, a list of compliance gaps rated by severity (Critical/High/Medium/Low), and recommended fixes. Implement the highest-priority fixes (e.g., removing PII from logs, adding password hashing if missing). Open a PR with the fixes and compliance report.

### Step 2: Research with Ask Devin

- *"Where does app_timesheet store or log personal user data? Are there any places where PII could leak into logs or error responses?"*
- *"What GDPR-required mechanisms (consent, right to erasure, data portability) are missing from app_timesheet?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the authentication flow, database schema, and API endpoints. Focus on how user data flows through the Express middleware, database layer, and any external integrations.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — did Devin correctly identify PII in all layers (API, database, logs)? Are the severity ratings appropriate?
- **Leave a comment** asking Devin to also add a data retention policy implementation or a user data export endpoint (GDPR right to portability)
- **Watch Devin respond** and push a follow-up commit

---

## <a id="Online-Banking-System-using-Java"></a>Online-Banking-System-using-Java

**Repository:** [Online-Banking-System-using-Java](https://github.com/Cognition-Partner-Workshops/Online-Banking-System-using-Java)

Java banking application handling sensitive customer financial and personal data — a high-stakes PII environment where compliance gaps have real regulatory impact.

### Step 1: Paste into Devin

> Scan Online-Banking-System-using-Java for GDPR and PII compliance issues. This is a banking application handling highly sensitive customer data. Analyze the codebase to identify: where customer PII (names, addresses, account numbers, financial data) is stored and processed, whether sensitive data is encrypted at rest and in transit, if PII appears in log output or exception messages, and whether there are data access controls. Create a `PII_COMPLIANCE_REPORT.md` with a data flow map for customer information, a severity-rated list of compliance gaps, and recommended fixes. Implement critical fixes (e.g., masking PII in logs, adding input validation for sensitive fields). Open a PR with the fixes and compliance documentation.

### Step 2: Research with Ask Devin

- *"What customer PII does Online-Banking-System-using-Java handle? Is any of it stored in plaintext or logged without masking?"*
- *"What encryption or data protection mechanisms are currently in place for sensitive financial data in this application?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the data model and transaction flow. Banking applications typically handle account numbers, transaction details, and personal identification — these are all high-sensitivity PII categories under GDPR.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — did Devin identify financial data (account numbers, transaction amounts) as PII in addition to personal data?
- **Leave a comment** asking Devin to add data masking utilities that can be reused across the application for consistent PII handling
- **Watch Devin respond** and push a follow-up commit

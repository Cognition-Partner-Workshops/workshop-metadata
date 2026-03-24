# Regulatory Reporting

## Repositories

- [uc-cve-remediation-regulatory-compliance](#uc-cve-remediation-regulatory-compliance)

---

## Challenge

Generate comprehensive compliance reports from SAST, DAST, and dependency scan outputs. Aggregate findings into executive-ready reports with remediation timelines and risk assessments.

## Target Outcomes

- Aggregated compliance report from multiple scan sources
- Executive summary with risk dashboard
- Remediation plan with prioritized findings and timelines
- PR with reporting framework and generated reports

## What Participants Will Learn

- How Devin aggregates and correlates findings from multiple security scanning tools
- How Devin generates executive-ready reports from raw scan data
- How to evaluate risk prioritization and remediation timelines produced by Devin
- How Devin structures compliance documentation for regulatory audiences

## Devin Features Exercised

- Multi-source data aggregation and correlation
- Report generation with structured formatting
- Risk assessment and prioritization
- Technical writing for compliance documentation

## Difficulty

Intermediate

## Estimated Time

45 minutes

---

## <a id="uc-cve-remediation-regulatory-compliance"></a>uc-cve-remediation-regulatory-compliance

**Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)

Spring Boot application with pre-configured OWASP Dependency-Check and SonarQube Gradle plugins — provides real scan output to aggregate into compliance reports.

### Step 1: Paste into Devin

> Run `./gradlew dependencyCheckAnalyze` on uc-cve-remediation-regulatory-compliance to generate a dependency vulnerability report. Then analyze the results and produce a comprehensive regulatory compliance report with three sections: (1) an executive summary with a risk dashboard showing total findings by severity, top-risk components, and overall compliance posture; (2) a detailed findings section with each vulnerability, its CVSS score, affected component, and business impact; (3) a remediation plan with prioritized actions, estimated effort, and a timeline. Save the report as `REGULATORY_COMPLIANCE_REPORT.md`. Also create a `reports/` directory with the raw scan output and a `reporting-framework.md` that documents how to regenerate these reports. Open a PR with all artifacts.

### Step 2: Research with Ask Devin

- *"What regulatory frameworks (SOC 2, ISO 27001, PCI DSS) are relevant to the types of vulnerabilities found in uc-cve-remediation-regulatory-compliance?"*
- *"How should vulnerability findings be mapped to specific compliance control requirements for audit purposes?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the application architecture and dependency landscape. This context helps evaluate whether the compliance report accurately reflects the risk posture of the application.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the executive summary accurately reflect the scan findings? Is the remediation timeline realistic?
- **Leave a comment** asking Devin to add a compliance tracking spreadsheet (CSV) that maps each finding to a specific regulatory control (e.g., PCI DSS Requirement 6.2)
- **Watch Devin respond** and push a follow-up commit

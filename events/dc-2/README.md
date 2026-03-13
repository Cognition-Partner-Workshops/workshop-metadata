# Workshop: Agentic AI Hands-on Workshop — Washington, DC (Session 2)

## Event Details

| | |
|---|---|
| **Date** | 2026-03-13 |
| **Location** | Washington, DC |
| **Host Organization** | *(customer)* |
| **Focus** | Agentic AI use cases — observability, document processing, test automation, anomaly detection |
| **Duration** | ~4 hours (1 hour walkthrough + 3 hours hands-on) |
| **Event Site** | https://partner-workshops.devinenterprise.com |
| **Audience** | Technology teams — platform engineering, QA, observability, and operations |

## Structure

This variant focuses on four agentic AI use cases that demonstrate multi-agent coordination, approval-gated workflows, and intelligent automation:

1. **Walkthrough Session (1 hour)** — Facilitator-led walkthrough of the four agentic AI use cases
2. **Hands-on Session (2-3 hours)** — Participants work through challenges independently

---

## Walkthrough Use Cases (1 hour)

### UC1 — Automated Remediation of Pod Failures After Credential Rotations

Walk through how agentic AI automates the detection, approval, and remediation of pod failures caused by credential rotations, reducing MTTR and operational risk.

| | |
|---|---|
| **Module** | [DA9 — Pod Remediation After Credential Rotation](../../modules/devops-automation/DA9.md) |
| **Repository** | [uc-pod-remediation-credential-rotation](https://github.com/Cognition-Partner-Workshops/uc-pod-remediation-credential-rotation) |
| **Walkthrough Focus** | Show Devin implementing rotation monitoring, failure detection, ServiceNow approval integration, and remediation orchestration |
| **Key Artifacts** | Python agent implementations, Kubernetes RBAC manifests, ServiceNow client, unit tests |
| **Key Takeaways** | Multi-agent coordination, approval-gated remediation, Kubernetes API integration |

### UC2 — Automating Document Review for Loan Processing

Walk through how agentic AI automates document extraction, comparison, and decisioning for loan correction workflows, improving accuracy and reducing manual review time.

| | |
|---|---|
| **Module** | [QE8 — Document Review Automation](../../modules/quality-engineering/QE8.md) |
| **Repository** | [uc-document-review-automation](https://github.com/Cognition-Partner-Workshops/uc-document-review-automation) |
| **Walkthrough Focus** | Show Devin building extraction pipelines, fuzzy matching comparators, confidence-based decisioning, and compliance audit logging |
| **Key Artifacts** | Extraction agents, field comparators (exact, fuzzy, numeric), decision engine, audit trail |
| **Key Takeaways** | Multi-strategy comparison engines, confidence thresholds, compliance-oriented audit logging |

### UC3 — BDD Test Case Generation for REST APIs

Walk through how agentic AI generates BDD test cases from Swagger/OpenAPI definitions and produces executable Cucumber tests, improving test coverage and consistency.

| | |
|---|---|
| **Module** | [QE9 — BDD Test Generation](../../modules/quality-engineering/QE9.md) |
| **Repositories** | [uc-bdd-test-generation-rest-api](https://github.com/Cognition-Partner-Workshops/uc-bdd-test-generation-rest-api), [ts-swagger-petstore](https://github.com/Cognition-Partner-Workshops/ts-swagger-petstore) |
| **Walkthrough Focus** | Show Devin reading a Swagger spec, generating Gherkin feature files, and producing executable step definitions |
| **Key Artifacts** | Gherkin feature files, Cucumber step definitions, Maven test integration |
| **Key Takeaways** | API specification analysis, BDD scenario generation, test automation pipeline integration |

### UC4 — Volume-Based Anomaly Detection for Early Issue Identification

Walk through how agentic AI establishes transaction volume baselines, detects anomalies using statistical methods, correlates with service health, and recommends corrective actions.

| | |
|---|---|
| **Module** | [DA10 — Volume Anomaly Detection](../../modules/devops-automation/DA10.md) |
| **Repository** | [uc-volume-anomaly-detection](https://github.com/Cognition-Partner-Workshops/uc-volume-anomaly-detection) |
| **Walkthrough Focus** | Show Devin implementing z-score and seasonal detection algorithms, service health correlation, and runbook-based recommendations |
| **Key Artifacts** | Detection algorithms, service dependency mapping, recommendation engine, incident reports |
| **Key Takeaways** | Statistical anomaly detection, service health correlation, knowledge-based remediation suggestions |

---

## Hands-on Session Challenges

After the walkthrough, participants can work on any of the following challenges. They may replicate what they saw or explore other modules:

### Recommended Starting Points

| Use Case | Challenge | Module | Repo | Difficulty | Time |
|----------|-----------|--------|------|-----------|------|
| Pod Remediation | Credential rotation monitoring | [DA9](../../modules/devops-automation/DA9.md) | uc-pod-remediation-credential-rotation | Advanced | 60 min |
| Document Review | Fuzzy matching improvements | [QE8](../../modules/quality-engineering/QE8.md) | uc-document-review-automation | Intermediate | 45 min |
| BDD Test Generation | Swagger-to-Cucumber tests | [QE9](../../modules/quality-engineering/QE9.md) | uc-bdd-test-generation-rest-api | Intermediate | 60 min |
| Anomaly Detection | Seasonal detection enhancements | [DA10](../../modules/devops-automation/DA10.md) | uc-volume-anomaly-detection | Intermediate | 60 min |
| Unit Testing | Add test coverage | [QE2](../../modules/quality-engineering/QE2.md) | Any | Beginner | 30 min |
| Observability | Monitoring setup | [DA2](../../modules/devops-automation/DA2.md) | Any | Intermediate | 60 min |

### Full Module Catalog

Participants may also attempt any challenge from the full [module catalog](../../modules/). See the [Devin Features Appendix](../../modules/devin-features/README.md) for additional activities to discover.

---

## Repos Required

### For Walkthrough (facilitator must have these set up)
- [ ] uc-pod-remediation-credential-rotation
- [ ] uc-document-review-automation
- [ ] uc-bdd-test-generation-rest-api
- [ ] ts-swagger-petstore
- [ ] uc-volume-anomaly-detection

### For Hands-on (all should be accessible)
- [ ] All repos listed above
- [ ] Any additional repos from [catalog](../../catalog/repos.md)

## Context

- **Theme:** Agentic AI — multi-agent systems for observability, document processing, quality engineering, and anomaly detection
- **Key Pain Points Addressed:**
  - Manual remediation of pod failures after credential rotations
  - Time-intensive manual document review for loan corrections
  - Inconsistent and lagging BDD test case creation for REST APIs
  - Late detection of volume-related production issues
- **Agentic AI Patterns Demonstrated:**
  - Multi-agent coordination (rotation monitor → failure detector → approval → remediation)
  - Human-in-the-loop approval gates (ServiceNow integration)
  - Confidence-based auto-approval with exception routing
  - Statistical baseline building and deviation detection
  - Knowledge-based recommendation from runbooks

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session. Key activities for this variant:

- [ ] Use AskDevin to understand multi-agent architectures
- [ ] Review a Devin PR via GitHub (after any challenge)
- [ ] Provide feedback to steer Devin's behavior mid-session
- [ ] Take control of Devin's machine to verify results
- [ ] Have Devin produce a report with detection findings
- [ ] Create Knowledge from a session (after completing a challenge)
- [ ] Explore DeepWiki for repo understanding

## Post-Event

- [ ] Collect participant feedback
- [ ] Archive any event-specific branches
- [ ] Update challenge modules if issues were discovered
- [ ] Share session recordings/artifacts with participants

# Workshop: Pricing BTO Agentic AI Workshop — Washington, DC

## Event Details

| | |
|---|---|
| **Date** | 2026-04-02 |
| **Location** | Washington, DC |
| **Host Organization** | Pricing BTO |
| **Duration** | ~4 hours (4 labs + breaks) |
| **Event Site** | https://partner-workshops.devinenterprise.com |

## Featured Labs

This event features 4 structured labs showcasing Pricing BTO agentic AI use cases — automated remediation, document review automation, BDD test generation, and volume anomaly detection:

### Lab 1 — Automated Remediation of Pod Failures After Password Rotations (60 min)
- **Module:** [Pod Remediation After Credential Rotation](../../modules/devops-automation/pod-remediation-credential-rotation.md)
- **Repository:** [uc-pod-remediation-credential-rotation](https://github.com/Cognition-Partner-Workshops/uc-pod-remediation-credential-rotation)
- **Objective:** Explore a multi-agent Python system (4 agents: rotation monitor, failure detector, approval workflow, remediation orchestrator) that automates detection, approval, and remediation of pod failures caused by credential rotations — wire the agents into an end-to-end pipeline and add simulation mode

#### Step 1: Paste into Devin

> Review the uc-pod-remediation-credential-rotation codebase. This is a multi-agent system with four agents:
>
> 1. **Rotation Monitoring Agent** (`src/agents/rotation_monitor.py`) — tracks credential rotations by watching Kubernetes secrets
> 2. **Failure Detection Agent** (`src/agents/failure_detector.py`) — scans pods for CrashLoopBackOff/auth-failure patterns in logs
> 3. **Approval Workflow Agent** (`src/agents/approval_workflow.py`) — creates ServiceNow change requests before remediation
> 4. **Remediation Orchestrator** (`src/agents/remediation.py`) — executes rolling restarts or pod deletions upon approval
>
> Create a new `src/pipeline.py` that wires all four agents into a single end-to-end workflow:
> - Initialize the `RotationMonitorAgent` with the sample inventory (`data/sample_inventory.json`)
> - Call `check_for_rotations()` to detect rotated secrets
> - For each rotation, use `FailureDetectionAgent.scan_pods()` to find failing pods
> - Group failures by deployment and create `RemediationAction` objects
> - Submit each action for approval via `ApprovalWorkflowAgent.request_approval()`
> - Execute approved actions via `RemediationOrchestrator.execute()`
>
> Add a `--simulate` flag that uses mock clients returning realistic sample data, so the full agent chain can be demonstrated without live infrastructure. Add unit tests for the pipeline. Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What failure patterns beyond CrashLoopBackOff should the failure detector watch for after a credential rotation?"*
- *"How should the approval workflow handle timeouts — should it auto-escalate or auto-reject?"*
- *"What structured JSON logging and correlation ID strategy would let us trace the full remediation lifecycle end-to-end?"*
- Use the analysis to start a **second session** — try adding a new failure detection pattern or improving the ServiceNow integration

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the agent architecture and data flow between rotation monitoring, failure detection, approval, and remediation. Use what you learn to try different approaches:
- Have Devin add **retry logic with exponential backoff** to the remediation orchestrator
- Ask Devin to add **Prometheus metrics** for rotation detection latency and remediation success rate
- Try having Devin implement a **dry-run mode** that logs what would be remediated without taking action
- Ask Devin to add **structured JSON logging** with correlation IDs across all four agents

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the pipeline correctly chain all four agents? Does simulation mode produce realistic output?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add integration test scaffolding that mocks the Kubernetes API client"* or *"The simulation mode should also generate realistic ServiceNow change request IDs"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- Try leaving both general comments and inline code comments to see how Devin handles each

See the full challenge details for [Pod Remediation After Credential Rotation](../../modules/devops-automation/pod-remediation-credential-rotation.md) for more ideas.

- **Key Takeaways:**
  - Multi-agent orchestration with human-in-the-loop approval gates
  - Kubernetes API integration for credential/pod lifecycle management
  - ServiceNow ITSM integration for controlled change management
  - Correlation of infrastructure signals (secrets rotation to pod failures) for automated root cause identification

- **Target Outcomes (any of these count):**
  - End-to-end pipeline wiring all 4 agents with simulation mode
  - Emergency rotation detection method with unit tests
  - Retry logic or dry-run mode for the remediation orchestrator
  - Structured JSON logging with correlation IDs
  - PR with review comments and Devin's responses

### Lab 2 — Automating Document Review in PFDC Using Fred AI (45 min)
- **Module:** [Document Review Automation](../../modules/quality-engineering/document-review-automation.md)
- **Repository:** [uc-document-review-automation](https://github.com/Cognition-Partner-Workshops/uc-document-review-automation)
- **Objective:** Work with a multi-agent document review system (4 agents: extraction, comparison, decision, audit) — build an end-to-end review pipeline and add a new comparator strategy

#### Step 1: Paste into Devin

> Review the uc-document-review-automation codebase. This is a multi-agent system for loan document review:
>
> 1. **Document Extraction Agent** (`src/agents/document_extractor.py`) — extracts structured fields from PDFs, images, and forms using pluggable extractors
> 2. **Comparison Agent** (`src/agents/comparison_agent.py`) — validates extracted data against loan correction records using specialized comparators (exact, fuzzy, amount)
> 3. **Decision Agent** (`src/agents/decision_agent.py`) — determines auto-approval, manual review, or rejection based on confidence thresholds (0.95 default)
> 4. **Audit Agent** (`src/agents/audit_agent.py`) — logs every decision to JSONL for compliance traceability
>
> Create `src/pipeline.py` that wires all four agents into a single end-to-end review workflow:
> - Accept a document file path and a loan correction record
> - Run extraction, comparison, decision, and audit in sequence
> - Return the `ReviewResult` with the decision and confidence score
> - Log the complete audit trail
>
> Then implement a `DateComparator` in `src/comparators/date_comparator.py` that handles date format variations (e.g., "01/15/2026" vs "January 15, 2026" vs "2026-01-15"). Wire it into the `ComparisonAgent` for date fields like `maturity_date`. Add unit tests for both the pipeline and the new comparator. Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What document types are most likely to have extraction errors? How should the decision agent weight confidence differently by document type?"*
- *"Should the audit agent support structured query capabilities (e.g., find all reviews with confidence below 0.8)?"*
- *"How should we handle batch processing of multiple loan corrections from a JSON file — parallel or sequential?"*
- Use the analysis to start a **second session** — try adding a new document type extractor or improving the decision engine thresholds

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the extraction-comparison-decision pipeline and the field routing logic. Use what you learn to try different approaches:
- Have Devin add a **batch processing CLI** that reads a directory of documents and outputs a comparison report
- Ask Devin to implement **configurable confidence thresholds** per document type
- Try having Devin add **phonetic matching** (Soundex or Metaphone) as a third comparison strategy
- Ask Devin to generate a **compliance audit report** summarizing all decisions with confidence scores

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the DateComparator handle all common date formats? Does the pipeline correctly chain all four agents?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add a batch processing CLI that reads a directory of documents and outputs a comparison report"* or *"The DateComparator should handle two-digit years"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [Document Review Automation](../../modules/quality-engineering/document-review-automation.md) for more ideas.

- **Key Takeaways:**
  - Multi-step agentic reasoning across unstructured documents
  - Strategy pattern for field comparison with configurable confidence thresholds
  - Human-in-the-loop for low-confidence and mismatched cases
  - Immutable audit logging for regulatory compliance

- **Target Outcomes (any of these count):**
  - End-to-end review pipeline wiring all 4 agents
  - DateComparator with format normalization and unit tests
  - Batch processing CLI or additional comparison strategy
  - Configurable confidence thresholds per document type
  - PR with review comments and Devin's responses

### Lab 3 — BDD Test Case Generation for REST APIs (60 min)
- **Module:** [BDD Test Generation](../../modules/quality-engineering/bdd-test-generation.md)
- **Repository:** [uc-bdd-test-generation-rest-api](https://github.com/Cognition-Partner-Workshops/uc-bdd-test-generation-rest-api)
- **Objective:** Generate BDD test cases from a REST API and produce executable Cucumber tests — explore the existing framework, then extend it with new feature files, a new API resource, and data-driven tests

#### Step 1: Paste into Devin

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
- Use the analysis to start a **second session** — try generating tests from a Swagger/OpenAPI spec directly

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the existing Cucumber configuration, step definition patterns, and how the framework maps Gherkin steps to REST API calls. Use what you learn to try different approaches:
- Have Devin generate **data-driven scenarios** using Cucumber Scenario Outlines with Examples tables
- Ask Devin to add **negative test scenarios** for authentication failures and rate limiting
- Try having Devin add **WireMock failure mode tests** — third-party API returns 500, times out, or returns malformed JSON
- Ask Devin to add a **test report generator** that produces HTML results

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — are the Gherkin scenarios readable by non-developers? Do they describe business behavior rather than implementation details?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add data-driven scenarios using Cucumber Scenario Outlines with Examples tables"* or *"The step definitions should use more descriptive method names"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [BDD Test Generation](../../modules/quality-engineering/bdd-test-generation.md) for more ideas.

- **Key Takeaways:**
  - BDD bridges the gap between business requirements and executable tests
  - Gherkin provides a readable, maintainable test specification language
  - Pre-built step definitions eliminate boilerplate for REST API testing
  - WireMock enables isolated testing by stubbing external dependencies

- **Target Outcomes (any of these count):**
  - Edge-case feature files for the Users API with validation and error scenarios
  - New OrderController with Gherkin feature files for order lifecycle
  - Data-driven scenarios using Scenario Outlines with Examples tables
  - WireMock failure mode tests
  - PR with review comments and Devin's responses

### Lab 4 — Volume-Based Anomaly Detection for Early Issue Identification (60 min)
- **Module:** [Volume Anomaly Detection](../../modules/devops-automation/volume-anomaly-detection.md)
- **Repository:** [uc-volume-anomaly-detection](https://github.com/Cognition-Partner-Workshops/uc-volume-anomaly-detection)
- **Objective:** Work with a multi-agent anomaly detection framework (4 agents: anomaly detection, service health, recommendation engine, incident insight) — build an end-to-end detection pipeline and add a new detector

#### Step 1: Paste into Devin

> Review the uc-volume-anomaly-detection codebase. This is a multi-agent system for transaction volume anomaly detection:
>
> 1. **Anomaly Detection Agent** (`src/agents/anomaly_detector.py`) — loads historical transaction CSV data, builds seasonal baselines, and detects anomalies using Z-score and seasonal algorithms
> 2. **Service Health Agent** (`src/agents/service_health.py`) — correlates detected anomalies with upstream/downstream service health using a service dependency map
> 3. **Recommendation Engine** (`src/agents/recommendation_engine.py`) — maps anomaly patterns to corrective actions using a built-in runbook knowledge base
> 4. **Incident Insight Agent** (`src/agents/incident_insight.py`) — consolidates all findings into structured reports for support teams, with Slack/PagerDuty notification formatting
>
> Create `src/pipeline.py` that wires all four agents into an end-to-end detection pipeline:
> - Load historical data from `data/historical/` CSV files
> - Build seasonal baselines
> - Process a stream of new observations (simulating real-time ingestion)
> - For each anomaly detected, run service health correlation and recommendation generation
> - Produce an incident insight report and format it for notification
>
> Then implement a `RateOfChangeDetector` in `src/detectors/rate_of_change_detector.py` that detects sudden volume changes between consecutive time windows (e.g., >50% drop in 5 minutes). Wire it into the `AnomalyDetectionAgent.analyze()` method. Add unit tests for both the pipeline and the new detector. Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What additional detection strategies beyond z-score and seasonal would improve anomaly detection accuracy? Should we add EWMA or CUSUM?"*
- *"How should the recommendation engine prioritize actions when multiple anomalies are detected simultaneously?"*
- *"What runbook entries should be added for post-release anomaly patterns like canary deployment volume shifts or feature flag activation spikes?"*
- Use the analysis to start a **second session** — try adding an EWMA detector or improving the service health correlation logic

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the detection pipeline flow from raw transaction data through baseline building, anomaly detection, health correlation, and incident reporting. Use what you learn to try different approaches:
- Have Devin add a **CLI entrypoint** that processes the sample CSV data and prints detected anomalies
- Ask Devin to implement an **EWMA (Exponentially Weighted Moving Average)** detector as a third strategy
- Try having Devin add **visualization output** — generate a simple chart showing baseline vs. actual volumes with anomaly markers
- Ask Devin to add **configurable alerting thresholds** per service in the YAML rules

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the RateOfChangeDetector correctly compute percentage changes between consecutive windows? Does the pipeline produce a complete incident report?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add a CLI entrypoint that processes the sample CSV data and prints detected anomalies"* or *"The baseline calculation should handle missing data points gracefully"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [Volume Anomaly Detection](../../modules/devops-automation/volume-anomaly-detection.md) for more ideas.

- **Key Takeaways:**
  - Multi-algorithm anomaly detection (statistical Z-score + seasonal decomposition)
  - Service dependency correlation for root cause identification
  - Knowledge-based recommendations from runbooks and historical incidents
  - Advisory system design — recommendations are suggestions, not automated actions

- **Target Outcomes (any of these count):**
  - End-to-end detection pipeline wiring all 4 agents
  - RateOfChangeDetector with unit tests
  - CLI entrypoint or additional detection strategy (EWMA, CUSUM)
  - Visualization of baseline vs. actual volumes with anomaly markers
  - PR with review comments and Devin's responses

## Additional Challenges

Participants may also attempt any challenge from the full [module catalog](../../modules/) as creative inspiration. The labs above are the primary structured activities.

## Repos Required on Devin's Machine

- [ ] uc-pod-remediation-credential-rotation
- [ ] uc-document-review-automation
- [ ] uc-bdd-test-generation-rest-api
- [ ] uc-volume-anomaly-detection
- [ ] platform-engineering-shared-services (shared infra — optional, only if deploying live K8s for Lab 1)

## Context

- **Audience:** Pricing BTO technology teams — platform engineering, QA, observability, and operations
- **Focus:** Agentic AI patterns — multi-agent orchestration, document processing automation, BDD test generation, and statistical anomaly detection
- **Use Cases:** These 4 labs map directly to the Pricing BTO Agentic AI use case proposals (UC1-UC4)

## Code Adequacy

All 4 codebases are adequate for the workshop as-is. Each has full agent implementations, models, tests, and sample data. The intentional gaps (no orchestration pipeline in UC1/UC2/UC4) serve as hands-on workshop exercises for participants.

| UC | Repo | Tests | Status |
|----|------|-------|--------|
| UC1 | uc-pod-remediation-credential-rotation | 7 passing | Adequate — gap: no pipeline (workshop exercise) |
| UC2 | uc-document-review-automation | 57 passing | Adequate — gap: no pipeline (workshop exercise) |
| UC3 | uc-bdd-test-generation-rest-api | 16 passing | Adequate — mature framework, ready for extension |
| UC4 | uc-volume-anomaly-detection | 8 passing, 1 pre-existing failure | Adequate — gap: no pipeline (workshop exercise) |

## AWS Resources

No AWS deployment is needed for this workshop. All 4 use cases run locally with unit tests. If a live Kubernetes environment is desired for Lab 1, the CDK stack in `platform-engineering-shared-services` is ready to deploy (`cd cdk && cdk deploy`) with `RemovalPolicy.DESTROY` on all resources.

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session.

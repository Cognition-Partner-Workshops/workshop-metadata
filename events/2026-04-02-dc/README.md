# Workshop: Pricing BTO Agentic AI Workshop — Washington, DC

## Event Details

| | |
|---|---|
| **Date** | 2026-04-02 |
| **Location** | Washington, DC |
| **Host Organization** | Pricing BTO |
| **Duration** | ~4 hours (4 labs + breaks) |
| **Event Site** | https://partner-workshops.devinenterprise.com |

## How These Labs Work

Each lab gives participants a **real-world use case codebase** and a prompt to paste into Devin. **Devin is the agentic AI worker** — it reads the codebase, understands the domain, and autonomously builds the requested features, tests, and pipelines. Participants direct Devin with natural language, review its PRs, and give feedback. The repos contain starter code that Devin extends — participants are not writing agent code themselves.

## Featured Labs

This event features 4 structured labs where Devin tackles Pricing BTO use cases — automated remediation, document review, BDD test generation, and anomaly detection:

### Lab 1 — Automated Remediation of Pod Failures After Password Rotations (60 min)
- **Module:** [Pod Remediation After Credential Rotation](../../modules/observability-sre/pod-remediation-credential-rotation.md)
- **Repository:** [uc-pod-remediation-credential-rotation](https://github.com/Cognition-Partner-Workshops/uc-pod-remediation-credential-rotation)
- **Objective:** Give Devin a codebase with credential rotation monitoring, failure detection, approval workflow, and remediation components — then prompt Devin to wire them into an end-to-end automated pipeline with simulation mode

#### Step 1: Paste into Devin

> Review the uc-pod-remediation-credential-rotation codebase. This repo contains four components for automating pod remediation after credential rotations:
>
> 1. **Rotation Monitor** (`src/agents/rotation_monitor.py`) — tracks credential rotations by watching Kubernetes secrets
> 2. **Failure Detector** (`src/agents/failure_detector.py`) — scans pods for CrashLoopBackOff/auth-failure patterns in logs
> 3. **Approval Workflow** (`src/agents/approval_workflow.py`) — creates ServiceNow change requests before remediation
> 4. **Remediation Orchestrator** (`src/agents/remediation.py`) — executes rolling restarts or pod deletions upon approval
>
> Create a new `src/pipeline.py` that wires all four components into a single end-to-end workflow:
> - Initialize the `RotationMonitorAgent` with the sample inventory (`data/sample_inventory.json`)
> - Call `check_for_rotations()` to detect rotated secrets
> - For each rotation, use `FailureDetectionAgent.scan_pods()` to find failing pods
> - Group failures by deployment and create `RemediationAction` objects
> - Submit each action for approval via `ApprovalWorkflowAgent.request_approval()`
> - Execute approved actions via `RemediationOrchestrator.execute()`
>
> Add a `--simulate` flag that uses mock clients returning realistic sample data, so the full workflow can be demonstrated without live infrastructure. Add unit tests for the pipeline. Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What failure patterns beyond CrashLoopBackOff should the failure detector watch for after a credential rotation?"*
- *"How should the approval workflow handle timeouts — should it auto-escalate or auto-reject?"*
- *"What structured JSON logging and correlation ID strategy would let us trace the full remediation lifecycle end-to-end?"*
- Use the analysis to start a **second session** — have Devin add a new failure detection pattern or improve the ServiceNow integration

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the architecture and data flow. Use what you learn to give Devin more tasks:
- Have Devin add **retry logic with exponential backoff** to the remediation orchestrator
- Ask Devin to add **Prometheus metrics** for rotation detection latency and remediation success rate
- Try having Devin implement a **dry-run mode** that logs what would be remediated without taking action
- Ask Devin to add **structured JSON logging** with correlation IDs across all four components

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the pipeline correctly chain all four components? Does simulation mode produce realistic output?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add integration test scaffolding that mocks the Kubernetes API client"* or *"The simulation mode should also generate realistic ServiceNow change request IDs"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- Try leaving both general comments and inline code comments to see how Devin handles each

See the full challenge details for [Pod Remediation After Credential Rotation](../../modules/observability-sre/pod-remediation-credential-rotation.md) for more ideas.

- **Key Takeaways:**
  - Devin understands multi-component systems and can wire them into end-to-end workflows
  - Devin integrates with Kubernetes APIs and ITSM tools like ServiceNow
  - Devin adds simulation/dry-run modes so workflows can be tested without live infrastructure
  - Devin responds to PR feedback and iterates — just like a human engineer

- **Target Outcomes (any of these count):**
  - Devin builds an end-to-end pipeline wiring all 4 components with simulation mode
  - Devin adds emergency rotation detection with unit tests
  - Devin implements retry logic or dry-run mode for the remediation orchestrator
  - Devin adds structured JSON logging with correlation IDs
  - PR with review comments and Devin's responses

### Lab 2 — Automating Document Review for Loan Processing (45 min)
- **Module:** [Document Review Automation](../../modules/technical-documentation/document-review-automation.md)
- **Repository:** [uc-document-review-automation](https://github.com/Cognition-Partner-Workshops/uc-document-review-automation)
- **Objective:** Give Devin a codebase with document extraction, comparison, decisioning, and audit components — then prompt Devin to build a review pipeline and add a new comparison strategy

#### Step 1: Paste into Devin

> Review the uc-document-review-automation codebase. This repo contains four components for automating loan document review:
>
> 1. **Document Extractor** (`src/agents/document_extractor.py`) — extracts structured fields from PDFs, images, and forms using pluggable extractors
> 2. **Comparison Engine** (`src/agents/comparison_agent.py`) — validates extracted data against loan correction records using specialized comparators (exact, fuzzy, amount)
> 3. **Decision Engine** (`src/agents/decision_agent.py`) — determines auto-approval, manual review, or rejection based on confidence thresholds (0.95 default)
> 4. **Audit Logger** (`src/agents/audit_agent.py`) — logs every decision to JSONL for compliance traceability
>
> Create `src/pipeline.py` that wires all four components into a single end-to-end review workflow:
> - Accept a document file path and a loan correction record
> - Run extraction, comparison, decision, and audit in sequence
> - Return the `ReviewResult` with the decision and confidence score
> - Log the complete audit trail
>
> Then implement a `DateComparator` in `src/comparators/date_comparator.py` that handles date format variations (e.g., "01/15/2026" vs "January 15, 2026" vs "2026-01-15"). Wire it into the `ComparisonAgent` for date fields like `maturity_date`. Add unit tests for both the pipeline and the new comparator. Open a PR.

#### Step 2: Research with Ask Devin

While Devin works on step 1, open **Ask Devin** and explore:
- *"What document types are most likely to have extraction errors? How should the decision engine weight confidence differently by document type?"*
- *"Should the audit logger support structured query capabilities (e.g., find all reviews with confidence below 0.8)?"*
- *"How should we handle batch processing of multiple loan corrections from a JSON file — parallel or sequential?"*
- Use the analysis to start a **second session** — have Devin add a new document type extractor or improve the decision engine thresholds

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the extraction-comparison-decision pipeline and the field routing logic. Use what you learn to give Devin more tasks:
- Have Devin add a **batch processing CLI** that reads a directory of documents and outputs a comparison report
- Ask Devin to implement **configurable confidence thresholds** per document type
- Try having Devin add **phonetic matching** (Soundex or Metaphone) as a third comparison strategy
- Ask Devin to generate a **compliance audit report** summarizing all decisions with confidence scores

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the DateComparator handle all common date formats? Does the pipeline correctly chain all four components?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add a batch processing CLI that reads a directory of documents and outputs a comparison report"* or *"The DateComparator should handle two-digit years"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [Document Review Automation](../../modules/technical-documentation/document-review-automation.md) for more ideas.

- **Key Takeaways:**
  - Devin understands document processing pipelines and can wire extraction, comparison, and decisioning into a single workflow
  - Devin implements new comparison strategies (DateComparator) and integrates them into existing routing logic
  - Devin handles compliance requirements — audit logging, confidence thresholds, human-in-the-loop escalation
  - Devin writes comprehensive tests for comparison logic and pipeline integration

- **Target Outcomes (any of these count):**
  - Devin builds an end-to-end review pipeline wiring all 4 components
  - Devin implements DateComparator with format normalization and unit tests
  - Devin adds batch processing CLI or additional comparison strategy
  - Devin adds configurable confidence thresholds per document type
  - PR with review comments and Devin's responses

### Lab 3 — BDD Test Case Generation for REST APIs (60 min)
- **Module:** [BDD Test Generation](../../modules/testing-qa/bdd-test-generation.md)
- **Repository:** [uc-bdd-test-generation-rest-api](https://github.com/Cognition-Partner-Workshops/uc-bdd-test-generation-rest-api)
- **Objective:** Give Devin a Spring Boot + Cucumber BDD framework and prompt it to generate new test scenarios, build a new API resource, and produce executable Cucumber tests

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
  - Devin generates BDD test scenarios from existing API patterns — covering happy paths, edge cases, and error handling
  - Devin builds new API resources (controllers, models, endpoints) and writes matching Gherkin tests
  - Devin understands the Cucumber/Spring Boot test framework and produces executable, Maven-integrated tests
  - Devin uses WireMock to isolate tests from external dependencies

- **Target Outcomes (any of these count):**
  - Devin generates edge-case feature files for the Users API with validation and error scenarios
  - Devin builds a new OrderController with Gherkin feature files for order lifecycle
  - Devin creates data-driven scenarios using Scenario Outlines with Examples tables
  - Devin adds WireMock failure mode tests
  - PR with review comments and Devin's responses

### Lab 4 — Volume-Based Anomaly Detection for Early Issue Identification (60 min)
- **Module:** [Volume Anomaly Detection](../../modules/observability-sre/volume-anomaly-detection.md)
- **Repository:** [uc-volume-anomaly-detection](https://github.com/Cognition-Partner-Workshops/uc-volume-anomaly-detection)
- **Objective:** Give Devin a codebase with anomaly detection, service health correlation, recommendation engine, and incident reporting components — then prompt Devin to build an end-to-end detection pipeline and add a new detection algorithm

#### Step 1: Paste into Devin

> Review the uc-volume-anomaly-detection codebase. This repo contains four components for transaction volume anomaly detection:
>
> 1. **Anomaly Detector** (`src/agents/anomaly_detector.py`) — loads historical transaction CSV data, builds seasonal baselines, and detects anomalies using Z-score and seasonal algorithms
> 2. **Service Health Assessor** (`src/agents/service_health.py`) — correlates detected anomalies with upstream/downstream service health using a service dependency map
> 3. **Recommendation Engine** (`src/agents/recommendation_engine.py`) — maps anomaly patterns to corrective actions using a built-in runbook knowledge base
> 4. **Incident Reporter** (`src/agents/incident_insight.py`) — consolidates all findings into structured reports for support teams, with Slack/PagerDuty notification formatting
>
> Create `src/pipeline.py` that wires all four components into an end-to-end detection pipeline:
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
- Use the analysis to start a **second session** — have Devin add an EWMA detector or improve the service health correlation logic

#### Step 3 (Optional): Read the DeepWiki

Open the repo's **DeepWiki** page to understand the detection pipeline flow from raw transaction data through baseline building, anomaly detection, health correlation, and incident reporting. Use what you learn to give Devin more tasks:
- Have Devin add a **CLI entrypoint** that processes the sample CSV data and prints detected anomalies
- Ask Devin to implement an **EWMA (Exponentially Weighted Moving Average)** detector as a third strategy
- Try having Devin add **visualization output** — generate a simple chart showing baseline vs. actual volumes with anomaly markers
- Ask Devin to add **configurable alerting thresholds** per service in the YAML rules

#### Step 4 (Optional): Review & Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the RateOfChangeDetector correctly compute percentage changes between consecutive windows? Does the pipeline produce a complete incident report?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add a CLI entrypoint that processes the sample CSV data and prints detected anomalies"* or *"The baseline calculation should handle missing data points gracefully"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin

See the full challenge details for [Volume Anomaly Detection](../../modules/observability-sre/volume-anomaly-detection.md) for more ideas.

- **Key Takeaways:**
  - Devin implements statistical detection algorithms (Z-score, seasonal baselines, rate-of-change) and wires them into a pipeline
  - Devin correlates anomalies with service dependency maps to identify root causes
  - Devin generates knowledge-based recommendations from runbooks and formats incident reports
  - Devin writes comprehensive tests for detection algorithms and pipeline integration

- **Target Outcomes (any of these count):**
  - Devin builds an end-to-end detection pipeline wiring all 4 components
  - Devin implements RateOfChangeDetector with unit tests
  - Devin adds a CLI entrypoint or additional detection strategy (EWMA, CUSUM)
  - Devin adds visualization of baseline vs. actual volumes with anomaly markers
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
- **Focus:** Devin as an agentic AI worker — participants prompt Devin with real use cases and watch it autonomously build pipelines, implement algorithms, generate tests, and iterate on PR feedback
- **Use Cases:** These 4 labs map directly to the Pricing BTO Agentic AI use case proposals (UC1-UC4)

## Code Adequacy

All 4 codebases are adequate for the workshop as-is. Each has working components, models, tests, and sample data. The intentional gaps (no orchestration pipeline in UC1/UC2/UC4) are the work Devin performs during the workshop.

| UC | Repo | Tests | Status |
|----|------|-------|--------|
| UC1 | uc-pod-remediation-credential-rotation | 7 passing | Adequate — Devin builds the pipeline |
| UC2 | uc-document-review-automation | 57 passing | Adequate — Devin builds the pipeline |
| UC3 | uc-bdd-test-generation-rest-api | 16 passing | Adequate — Devin extends the framework |
| UC4 | uc-volume-anomaly-detection | 8 passing, 1 pre-existing failure | Adequate — Devin builds the pipeline |

## AWS Resources

No AWS deployment is needed for this workshop. All 4 use cases run locally with unit tests. If a live Kubernetes environment is desired for Lab 1, the CDK stack in `platform-engineering-shared-services` is ready to deploy (`cd cdk && cdk deploy`) with `RemovalPolicy.DESTROY` on all resources.

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session.

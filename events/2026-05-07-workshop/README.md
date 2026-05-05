# Workshop: Java/Spring Boot — Hands-On with Devin

## Event Details

| | |
|---|---|
| **Date** | 2026-05-07 |
| **Location** | Virtual |
| **Host Organization** | *(customer)* |
| **Duration** | 2 hours |
| **Audience** | Development teams experiencing Devin hands-on for the first time |
| **Tracks** | Single progressive track: Analyze → Generate → Integrate |
| **Event Site** | TBD |

## Workshop Overview

This is a hands-on workshop for teams getting their first experience with Devin. The three labs are structured as a progressive ramp — starting with low-risk analysis, building to code generation, and finishing with tool integration. By the end, participants will have used Devin to analyze a codebase, generate a microservice from an API spec, and detect data anomalies with Jira ticket creation.

The workshop uses Java/Spring Boot repositories throughout. Additional use cases (COBOL copybook config generation, security remediation, payment gap analysis) are provided as post-session exercises participants can try on their own.

> **Note:** This workshop runs against an external GitHub organization. All repos listed below must be forked or cloned into the target org before the event. Jira integration runs through Devin's Atlassian MCP and is independent of the GitHub org.

## Getting the Most from This Workshop

> **Devin works autonomously on its own machine.** Once you paste a prompt and kick off a session, Devin runs independently — you don't need to watch it. Move on to the next lab, explore Ask Devin, or grab coffee while it works. You'll get notified when it opens a PR.

A few tips to maximize your hands-on time:

- **Start sessions early, review later.** Each lab has a "Paste into Devin" step and a separate "Review & Give Feedback" step. Kick off the session first, then use the wait time for Ask Devin research — Devin will keep working in the background.
- **Overlap sessions.** Kick off Lab 2's Devin session while reviewing Lab 1's PR. Devin works in the background — there's no reason to wait. This is how teams use Devin in production.
- **Use Ask Devin to refine requirements.** The better-defined a task is, the better Devin's output. Ask Devin helps you think through the problem first so Devin can execute with less back-and-forth.
- **Leave PR comments to steer Devin.** After Devin opens a PR, you can leave comments directly and Devin will wake up and address them — this is the core workflow for iterating with Devin in production.

---

## Agenda

| Time | Activity | Lab |
|------|----------|-----|
| 0:00 | Welcome, Devin overview, platform walkthrough | — |
| 0:15 | **Lab 1:** Gap Analysis on Banking Microservices | Lab 1 |
| 0:45 | **Lab 2:** API-Spec-Driven Microservice Generation | Lab 2 |
| 1:15 | **Lab 3:** Data Anomaly Detection & Jira Ticket Creation | Lab 3 |
| 1:45 | Wrap-up, showcase results, Q&A | — |

> **Pacing tip for facilitators:** Each lab is designed so participants kick off the Devin session in the first 5 minutes, then use Ask Devin / DeepWiki while waiting. When transitioning to the next lab, participants should start the new session immediately — they can review earlier PRs during any downtime. By the wrap-up, participants will have 3 Devin sessions running or completed.

---

## Lab 1 — Gap Analysis on Banking Microservices (30 min)

**Value driver:** *Devin reads an entire codebase and produces structured technical documentation — the kind of assessment that normally takes a senior engineer a week.*

- **Repository:** [ts-java-spring-boot-internet-banking-microservices](https://github.com/Cognition-Partner-Workshops/ts-java-spring-boot-internet-banking-microservices)
- **Modules:** [API Design Review](../../modules/architecture-design/api-design-review.md), [Dependency Graph Analysis](../../modules/architecture-design/dependency-graph-analysis.md)

This is your first Devin session. The task is pure analysis — Devin reads code and produces documents, no risky code changes. This lets you focus on learning the platform workflow: paste a prompt, watch Devin plan and execute, review the PR.

The repo is a Java 21 / Spring Boot 3.2.4 banking application with 6 microservices: core-banking, fund-transfer, user-service, utility-payment, API gateway, and service registry. It uses Keycloak auth, RabbitMQ messaging, and Zipkin tracing.

### Paste into Devin

```
Perform a comprehensive technical assessment of ts-java-spring-boot-internet-banking-microservices. This is a Java 21 / Spring Boot 3.2.4 banking application with 6 microservices. Produce the following deliverables:

1. **Application Knowledge Base** (`docs/KNOWLEDGE_BASE.md`):
   - Architecture overview (services, communication patterns, infrastructure components)
   - Data model documentation (entities, relationships, key fields per service)
   - API surface map (all endpoints across all services with methods, request/response shapes)
   - Key business logic inventory (fund transfer rules, payment processing, user management)
   - Integration points (Keycloak, RabbitMQ, Zipkin, database connections)
   - Build and deployment pipeline summary (Docker Compose, Gradle)

2. **Engineering Standards Gap Analysis** (`docs/GAP_ANALYSIS.md`):
   Compare the codebase against these engineering best practices and document gaps:
   - **Code organization:** Consistent project structure across services, separation of concerns, shared library usage
   - **Error handling:** Centralized error handling, consistent error response format, proper HTTP status codes
   - **Testing:** Unit test coverage, integration tests, contract tests between services
   - **Security:** Input validation, authentication/authorization patterns, secrets management, dependency vulnerabilities
   - **API design:** RESTful conventions, pagination, filtering, versioning, OpenAPI documentation
   - **Observability:** Logging consistency, health checks, metrics endpoints, distributed tracing coverage
   - **Resilience:** Circuit breakers, retry policies, timeout configuration, fallback behavior

   For each gap, rate severity (Critical/High/Medium/Low) and estimate effort to remediate (Small/Medium/Large).

3. **Remediation Roadmap** (`docs/REMEDIATION_ROADMAP.md`):
   Prioritize the gaps into a phased plan: Phase 1 (quick wins), Phase 2 (important), Phase 3 (polish). Include sample Devin prompts for each remediation item.

Open a PR with all three documents.
```

### While Devin works: try Ask Devin

Open **Ask Devin** and explore the repo:
- *"What communication patterns do the banking microservices use? Are there any single points of failure?"*
- *"How does the fund-transfer service validate transactions? Are there any edge cases that could cause incorrect transfers?"*

### Review the PR

When Devin opens a PR:
- Does the knowledge base accurately describe the architecture?
- Are the gap analysis findings legitimate? Would your team agree with the severity ratings?
- **Leave a comment** asking Devin to add a specific gap you care about — watch Devin respond and push a follow-up commit

### Key Takeaways

- **"Instant technical knowledge base"** — Devin reads the entire codebase and produces structured documentation that would take days to write manually
- **"Standards-based gap analysis"** — Devin evaluates the codebase against engineering best practices and quantifies the gaps
- **"Actionable roadmap"** — the remediation plan includes effort estimates and ready-to-use Devin prompts, turning the analysis into immediate next steps

---

## Lab 2 — API-Spec-Driven Microservice Generation (30 min)

**Value driver:** *Give Devin an API specification, get back a complete production-ready Spring Boot microservice with controllers, services, validation, configuration, and 90% test coverage.*

- **Repository:** [ts-java-spring-petclinic-rest-api](https://github.com/Cognition-Partner-Workshops/ts-java-spring-petclinic-rest-api)
- **Modules:** [Containerization & Microservice Extraction](../../modules/migration-modernization/containerization-microservice-extraction.md)

Now you'll see Devin write real code. The PetClinic REST API repo ships a rich OpenAPI 3.0 specification (2,168 lines, 35 operations, 15 schemas, 8 domain areas). You'll give Devin this spec and have it generate a complete microservice from scratch.

### Paste into Devin

```
Using the OpenAPI specification at `src/main/resources/openapi.yml` in ts-java-spring-petclinic-rest-api as the source of truth, generate a brand new Spring Boot microservice that implements the "Vet" domain (veterinarians and specialties). The new service should be fully standalone — not a modification of the existing monolith.

Generate all components following Spring Boot conventions:
1. **Controller** with proper REST mappings matching the OpenAPI spec, request validation (@Valid), and error handling (@ControllerAdvice)
2. **Service layer** with business logic for vet CRUD, specialty assignment, and search/filtering
3. **DTOs and mappers** — separate request/response DTOs from the JPA entity, with manual mapping or MapStruct
4. **JPA Entities** with audit fields (createdAt, updatedAt) and proper relationship mapping (Vet ↔ Specialty many-to-many)
5. **Repository** with custom query methods for filtering by specialty and name search
6. **Configuration** — application.yml with profiles (dev/test/prod), Flyway migration scripts for the schema
7. **Exception handling** — global handler with RFC 7807 Problem Details responses
8. **JUnit tests** — aim for 90%+ line coverage. Include unit tests for service logic, integration tests for the controller layer (@WebMvcTest), and repository tests (@DataJpaTest)

Use an H2 in-memory database for dev/test. Structure the project in a new `vet-service/` directory. Open a PR.
```

### While Devin works: try Ask Devin

- *"How many domain areas does the PetClinic OpenAPI spec cover? Which domain would be the best candidate for extraction as a standalone microservice and why?"*
- *"What validation rules does the OpenAPI spec define for vet and specialty entities?"*

### Review the PR

When Devin opens a PR:
- Does the generated code follow Spring Boot conventions your team uses?
- Are the tests meaningful, or just boilerplate?
- **Leave a comment** asking Devin to add Swagger UI configuration and a Docker Compose file — watch Devin respond

### Key Takeaways

- **"Spec-to-service in one session"** — Devin generates a fully layered microservice from an API contract, complete with validation, error handling, and database migrations
- **"Test coverage is built in"** — generating tests alongside the code ensures quality from the start, not as an afterthought
- **"Iterative refinement via PR comments"** — the first pass isn't the final pass; PR comments let you steer Devin toward your team's conventions

---

## Lab 3 — Data Anomaly Detection & Jira Ticket Creation (30 min)

**Value driver:** *Devin doesn't just find problems — it creates actionable Jira tickets. This shows Devin integrated into your team's workflow tools, not just producing code.*

- **Repository:** [uc-data-source-migration-legacy-to-modern](https://github.com/Cognition-Partner-Workshops/uc-data-source-migration-legacy-to-modern)
- **Modules:** [Data Quality & Validation](../../modules/data-engineering/data-quality-validation.md), [Data Source Migration](../../modules/data-engineering/data-source-migration.md)

This lab layers on tool integration. The repo is a Spring Boot 3.2 / Java 17 loan management application that reads from legacy CDW (Corporate Data Warehouse) tables with known data quality issues: all-VARCHAR typing, cryptic column names, no foreign keys, code abbreviations. Devin will analyze the data for anomalies, document findings, and create Jira tickets for each issue found.

### Paste into Devin

```
Analyze the data layer in uc-data-source-migration-legacy-to-modern for data quality anomalies. This Spring Boot service reads from legacy CDW (Corporate Data Warehouse) tables with known quality issues.

1. **Anomaly Detection:** Examine the legacy seed data in `src/main/resources/data-legacy.sql` and the schema in `src/main/resources/schema-legacy.sql`. Identify anomalies: null values in required fields, date format inconsistencies, invalid status codes, orphaned records (foreign key violations), numeric values stored as strings with parsing risks, and duplicate or near-duplicate records.

2. **Issue Documentation:** For each anomaly found, create a structured entry in `docs/DATA_ANOMALY_REPORT.md` with: title, severity (Critical/High/Medium/Low), affected table and column, example bad records, business impact, and recommended fix.

3. **Root Cause Analysis:** For the top 3 most critical anomalies, trace through the code (LoanService.java, the repository layer, and the column mappings in `data/mappings/column_mappings.md`) to identify where the anomaly would cause a runtime failure or incorrect API response. Document the root cause.

4. **Jira Tickets:** For each anomaly found, create a Jira ticket in the project with:
   - Title: "[Data Anomaly] {short description}"
   - Description: The full anomaly details including affected table/column, example records, severity, business impact, and recommended fix
   - Priority: mapped from your severity rating (Critical→Highest, High→High, Medium→Medium, Low→Low)

5. **Fix:** Implement data validation in the service layer that catches these anomalies at ingestion time — add input validation, type coercion with error handling, and fallback defaults where appropriate. Add tests that verify the validation catches each anomaly type.

Open a PR with the anomaly report, root cause analysis, validation code, and tests.
```

> **Note:** For the Jira ticket creation to work, ensure the Devin session has access to the Atlassian MCP integration and the correct Jira project is configured. If Jira access is not available, Devin will still produce the anomaly report, RCA, and code fixes — the Jira step will be skipped gracefully.

### While Devin works: try Ask Devin

- *"What data quality issues are most common in CDW-to-modern migrations? What validation patterns should the service layer implement?"*
- *"How does the column mapping in uc-data-source-migration-legacy-to-modern translate legacy column names to modern field names?"*

### Review the PR

When Devin opens a PR:
- Are the anomalies it found legitimate? Check a few against the actual seed data
- Does the validation code handle edge cases (null values, empty strings, boundary values)?
- Check Jira — did the tickets get created with proper formatting and priority?

### Key Takeaways

- **"Detect, document, triage, fix"** — Devin follows the full data quality workflow, from finding anomalies to implementing validation that prevents them
- **"Jira integration"** — Devin creates structured, actionable tickets in your team's issue tracker, not just markdown files
- **"Data issues have code root causes"** — Devin traces data quality problems through the application layers to find where they originate

---

## Post-Session Exercises

Participants who want to keep exploring after the workshop can try these additional use cases on their own. Each is self-contained with a copy-pasteable prompt.

### Exercise A: COBOL Copybook to PySpark/JSON Config Generation

- **Repository:** [aws-mainframe-modernization-carddemo](https://github.com/Cognition-Partner-Workshops/aws-mainframe-modernization-carddemo)
- **Module:** [COBOL Copybook to PySpark/JSON](../../modules/data-engineering/cobol-copybook-to-pyspark-json.md)
- **Shows:** Devin reading legacy COBOL data definitions and generating modern data engineering artifacts

#### Paste into Devin

```
Analyze the COBOL copybook `app/cpy/CVACT01Y.cpy` in aws-mainframe-modernization-carddemo. This defines the ACCOUNT-RECORD layout (300 bytes) with fields like ACCT-ID (PIC 9(11)), ACCT-CURR-BAL (PIC S9(10)V99), dates (PIC X(10)), and FILLER.

Generate:
1. A PySpark script that reads `app/data/ASCII/acctdata.txt` as a fixed-width file using the copybook-derived schema
2. A JSON schema file describing each field's name, COBOL PIC clause, PySpark type, byte offset, and length
3. Validation output comparing parsed PySpark DataFrame row counts and sample values against the raw feed file

Then repeat for `CUSTREC.cpy` → `custdata.txt` and `CVACT02Y.cpy` → `carddata.txt`.

Open a PR with all generated artifacts and a `COPYBOOK_PARSING_NOTES.md` documenting your type-mapping decisions (e.g., COMP-3 → DecimalType, PIC X → StringType).
```

---

### Exercise B: Automated Security Remediation & Vulnerability Reporting

- **Repository:** [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Modules:** [Remediate Vulnerabilities](../../modules/security/remediate-vulnerabilities.md), [Shift Left Security](../../modules/security/shift-left-security.md)
- **Shows:** Devin running SAST/SCA analysis, producing an executive security report, and remediating critical findings

#### Paste into Devin

```
Perform a comprehensive security assessment of uc-cve-remediation-regulatory-compliance. Run three types of analysis:

1. **Dependency scanning (SCA):** Run `./gradlew dependencyCheckAnalyze` to identify known CVEs in third-party libraries. Categorize findings by CVSS severity.
2. **Static code analysis (SAST):** Review the source code for security antipatterns — hardcoded credentials, SQL injection risks, insecure deserialization, missing input validation, and unsafe cryptographic usage.
3. **Configuration review:** Check application.properties, build.gradle, and any CI/security configs for misconfigurations — debug mode settings, overly permissive CORS, missing security headers.

Produce a unified `SECURITY_POSTURE_REPORT.md` that includes:
- Executive summary with overall risk rating (Critical / High / Medium / Low)
- Findings table organized by category (SCA, SAST, Configuration) with severity, description, and recommended fix
- A prioritized remediation roadmap — what to fix first and why
- Fix the top 3 most critical findings and re-verify

Open a PR with the report and the fixes.
```

---

### Exercise C: Payment Payload Gap Analysis & Business Capability Decomposition

- **Repository:** [ts-java-spring-boot-internet-banking-microservices](https://github.com/Cognition-Partner-Workshops/ts-java-spring-boot-internet-banking-microservices)
- **Modules:** [API Design Review](../../modules/architecture-design/api-design-review.md), [Dependency Graph Analysis](../../modules/architecture-design/dependency-graph-analysis.md)
- **Shows:** Devin analyzing payment domain code against industry standards and recommending a service decomposition strategy

#### Paste into Devin

```
Analyze ts-java-spring-boot-internet-banking-microservices and produce a payment domain assessment. This banking application has 6 microservices including fund-transfer and utility-payment services.

Deliverables:

1. **Payment Payload Gap Analysis** (`docs/PAYMENT_GAP_ANALYSIS.md`):
   - Document the current payment payload structure (fund transfer request/response, utility payment request/response)
   - Compare against ISO 20022 payment message standards (pain.001, pain.002, pacs.008) — identify which standard fields are missing, which are present but named differently, and which are extra
   - Assess payment validation rules: are amount limits enforced? Currency handling? Duplicate detection? Idempotency?
   - Rate each gap by severity and business risk

2. **Business Capability Map** (`docs/BUSINESS_CAPABILITY_MAP.md`):
   - Map each microservice to business capabilities (e.g., Account Management, Fund Transfer, Payment Processing, User Administration, Service Discovery, API Routing)
   - Identify capability overlaps (same business logic in multiple services)
   - Identify capability gaps (business functions not covered by any service)
   - Assess service boundaries: are they aligned to business capabilities or to technical layers?

3. **Decomposition Recommendations** (`docs/DECOMPOSITION_RECOMMENDATIONS.md`):
   - Based on the capability map, recommend which services should be split, merged, or restructured
   - For each recommendation, explain the business justification and the technical approach
   - Include a dependency diagram (in text/markdown) showing current vs. proposed service interactions
   - Prioritize recommendations by impact and feasibility

Open a PR with all three documents.
```

---

## Prerequisites

### Repos Required (must be available in the target GitHub org)

**Core labs (required):**
- [ ] ts-java-spring-boot-internet-banking-microservices (Lab 1)
- [ ] ts-java-spring-petclinic-rest-api (Lab 2)
- [ ] uc-data-source-migration-legacy-to-modern (Lab 3)

**Post-session exercises (optional):**
- [ ] aws-mainframe-modernization-carddemo (Exercise A)
- [ ] uc-cve-remediation-regulatory-compliance (Exercise B)

### Integration Requirements

- [ ] Devin installed on the target GitHub org (GitHub App)
- [ ] Atlassian MCP configured with access to a Jira project (for Lab 3 Jira ticket creation)
- [ ] Participant Devin accounts provisioned

### Participant Requirements

- [ ] Devin account access
- [ ] GitHub access to the target org
- [ ] Browser (Chrome recommended)
- [ ] Access to the Jira project (to verify ticket creation in Lab 3)

## External GitHub Considerations

This workshop runs against an external GitHub organization (not Cognition-Partner-Workshops). Before the event:

1. **Fork or clone repos** — All repos listed above must be available in the target org. Use `git clone --bare` + `git push --mirror` to preserve full history, or fork if the target org has access to the source.
2. **Remove workflows** — If the target org's GitHub Actions runners differ, review `.github/workflows/` in each repo and adjust or remove as needed.
3. **Devin GitHub App** — Ensure the Devin GitHub App is installed on the target org with access to the relevant repos.
4. **Jira integration** — The Atlassian MCP connects to Jira independently of GitHub. Verify the MCP is configured with the correct Jira cloud instance and project key. Test with a simple Devin session that creates a test ticket before the event.
5. **Branch protection** — Ensure Devin can create branches and open PRs. If branch protection rules require reviews, configure Devin as an allowed bypass or ensure facilitators can approve quickly during labs.

## Notes

- **First-time audience:** Labs are ordered from lowest risk (analysis/documentation) to highest complexity (code generation, tool integration). This builds confidence before asking participants to evaluate generated code.
- **2-hour pacing:** The key to fitting 3 labs in 2 hours is overlapping sessions. Participants kick off Lab N+1 while reviewing Lab N. By the wrap-up, all 3 sessions should be running or completed. Facilitators should keep transitions tight — 2 minutes max between labs.
- **Ask Devin throughout:** Every lab includes Ask Devin prompts. Emphasize that Ask Devin is a research tool for scoping tasks before creating sessions — better prompts lead to better results.
- **Post-session exercises:** The three additional use cases (COBOL copybook, security remediation, payment gap analysis) are provided as self-service exercises. Share the workshop README with participants so they can try these on their own time.
- **Jira fallback:** If Jira integration is not available for Lab 3, the lab still works — Devin produces the anomaly report, RCA, and code fixes. The Jira step is additive, not required.

## Post-Event

- [ ] Collect participant feedback
- [ ] Archive any event-specific branches in the target org
- [ ] Share session recordings and PR links with participants
- [ ] Review Devin Knowledge items created during the workshop — these persist and help future sessions

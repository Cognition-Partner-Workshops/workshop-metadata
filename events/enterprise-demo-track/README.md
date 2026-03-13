# Enterprise Workshop: Security Automation & Tech Debt Remediation

## Event Details

| | |
|---|---|
| **Variant Name** | Enterprise Workshop |
| **Focus** | Event-driven security automation, agent orchestration, and long-term reasoning for tech debt remediation |
| **Duration** | ~4 hours (3 labs × 90 min + breaks) |
| **Event Site** | https://partner-workshops.devinenterprise.com |
| **Audience** | Engineering leadership, AppSec/DevSecOps, platform engineering, enterprise architecture |

## Featured Labs

This event features 3 labs that build on each other in a progressive workshop:

- Lab 1: Devin responds to *one finding on one repo* autonomously
- Lab 2: Devin coordinates *many findings across multiple repos* in parallel
- Lab 3: Devin executes *a complete upgrade in one shot* with proof of completion

### Lab 1 — Event-Driven SAST Remediation (90 min)

- **Module:** [SEC6 — Event-Driven SAST Remediation](../../modules/security/SEC6.md)
- **Repositories:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) and [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Objective:** Build a GitHub Actions workflow where SAST tools scan PRs from non-Devin authors and automatically trigger a Devin session to remediate findings

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Review the `sonar-devin-fix.yml` workflow in app_timesheet to understand the existing pattern for CI-triggered Devin remediation. Then create a new `sast-auto-remediate.yml` workflow on uc-cve-remediation-regulatory-compliance that scans PRs using OWASP Dependency-Check, and when findings exceed CVSS 7.0, calls the Devin API to automatically remediate them. Include author filtering to prevent Devin from triggering itself. Open a PR.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"How does the sonar-devin-fix.yml workflow in app_timesheet work? What triggers it and how does it call the Devin API?"*
- *"What's the best escalation policy when Devin can't fix a SAST finding — should it auto-create a Jira ticket, add a comment, or assign a reviewer?"*
- Use the analysis to start a **second session** — try building a different trigger (e.g., on schedule instead of on PR) or adding SonarQube as a second scanner

#### Step 3: Explore with DeepWiki

Open the repos' **DeepWiki** pages to understand the codebase architecture and existing CI patterns. Use what you learn to try different approaches:
- Have Devin add a **severity-based routing** system — CRITICAL findings go to Devin immediately, HIGH findings are batched nightly
- Ask Devin to add **Slack notifications** when the auto-remediation completes or fails
- Try having Devin create an **ARCHITECTURE.md** documenting the complete event-driven flow
- Ask Devin to add **metrics collection** — track mean time to remediation across all auto-fixed findings

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — does the workflow correctly filter Devin's own commits to prevent infinite loops?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"Add an escalation path for findings Devin can't fix — it should open a GitHub Issue with the finding details"* or *"The severity threshold should be configurable via a repository variable"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- **Trigger it live** — open a PR as a human user, watch the SAST scan run, and see Devin automatically start remediating

See the full challenge details for [SEC6 — Event-Driven SAST Remediation](../../modules/security/SEC6.md) for more ideas.

- **Key Takeaways:**
  - **"Devin as a background agent"** — Devin isn't a tool someone opens; it's an agent that responds to events
  - **"Closed-loop verification"** — the same CI that found the problem verifies the fix
  - **"Author filtering"** — preventing infinite loops where Devin triggers itself

- **Target Outcomes (any of these count):**
  - Working `sast-auto-remediate.yml` workflow with Devin API integration
  - Live trigger of the scan → fix → re-scan loop
  - `ARCHITECTURE.md` documenting the event-driven flow
  - PR with review comments and Devin's responses

---

### Lab 2 — Mass Security Backlog Remediation with Agent Orchestration (90 min)

- **Module:** [SEC7 — Mass Security Backlog Remediation](../../modules/security/SEC7.md)
- **Repositories:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet) and [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Objective:** One parent Devin session triages a consolidated SAST report and launches parallel child sessions to remediate 2 repos simultaneously

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Run SAST scans on both app_timesheet and uc-cve-remediation-regulatory-compliance. Consolidate all findings into a `SECURITY_BACKLOG.md` organized by severity and repo. Then create scoped remediation instructions for each repo and document the triage decisions. For each repo, list the specific findings to remediate, the priority order, and the expected fix approach. Open a PR with the backlog and triage documentation.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What's the best way to scope context for parallel Devin sessions — should each child session get the full backlog or only its repo's findings?"*
- *"How should we handle cross-repo dependencies during parallel remediation — e.g., if both repos share a vulnerable library version?"*
- Use the analysis to plan the parallel child sessions — start 2 parallel Devin sessions (one per repo) with scoped remediation instructions from the backlog

#### Step 3: Explore with DeepWiki

Open both repos' **DeepWiki** pages to understand their dependency profiles and shared libraries. Use what you learn to try different approaches:
- Launch **2 parallel Devin sessions** — one for each repo — with scoped remediation instructions
- Have Devin produce a **consolidated `REMEDIATION_SUMMARY.md`** after both sessions complete
- Ask Devin to generate a **dependency overlap analysis** showing which vulnerable libraries appear in both repos
- Try having Devin create a **compliance dashboard** summarizing remediation status across the portfolio

#### Step 4: Review the PR and Give Feedback

Once Devin opens PRs from the parallel sessions, practice the feedback loop:
- **Review both diffs** — did each child session scope its work correctly to only its assigned repo?
- **Leave a comment on a PR** asking Devin to fix something (e.g., *"The remediation report should include CVSS scores for each fixed vulnerability"* or *"Can you add evidence of parallel execution with overlapping timestamps?"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- Compare the two PRs to see how Devin handled different vulnerability profiles in each repo

See the full challenge details for [SEC7 — Mass Security Backlog Remediation](../../modules/security/SEC7.md) for more ideas.

- **Key Takeaways:**
  - **"Agent orchestration"** — a parent agent that plans and delegates to child agents
  - **"Scoped context"** — each child session gets only the information it needs
  - **"Parallel execution"** — 2 repos remediated simultaneously, not sequentially
  - **"Enterprise scale"** — this pattern scales to 10, 50, 100 repos with the Devin API

- **Target Outcomes (any of these count):**
  - Consolidated `SECURITY_BACKLOG.md` covering both repos
  - 2 parallel PRs (one per repo) with security fixes and per-repo `REMEDIATION_REPORT.md`
  - Evidence of parallel execution (overlapping session timestamps)
  - Consolidated `REMEDIATION_SUMMARY.md` from the parent session
  - PR with review comments and Devin's responses

---

### Lab 3 — One-Shot Tech Debt Remediation via Long-Term Reasoning (75 min)

- **Module:** [MM11 — One-Shot Tech Debt Remediation](../../modules/migration-modernization/MM11.md)
- **Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices) or [uc-cve-remediation-regulatory-compliance](https://github.com/Cognition-Partner-Workshops/uc-cve-remediation-regulatory-compliance)
- **Objective:** A single, well-engineered prompt achieves 80-90% completion of a major framework upgrade — with provable results and honest acknowledgement of testing gaps

#### Step 1: Get Started Fast (copy-paste this prompt into Devin)

> Upgrade uc-framework-upgrade-monolith-to-microservices from Java 11 + Spring Boot 2.6.3 to Java 17 + Spring Boot 3.2 in a single session. Execute in this order: (1) Update Gradle wrapper and build config, (2) Migrate javax to jakarta namespace, (3) Update deprecated Spring APIs, (4) Fix all compilation errors, (5) Run full test suite. Produce `MIGRATION_PROOF.md` with before/after metrics (Java version, Spring Boot version, CVE count, test pass/fail counts) and `TESTING_GAPS.md` documenting anything you could not verify. Open a PR.

#### Step 2: Level Up with AskDevin

While Devin works on step 1, open **AskDevin** and explore:
- *"What are the 5 elements of a well-structured one-shot prompt? How do scope, execution order, proof requirements, testing gap acknowledgement, and exit criteria work together?"*
- *"What testing gaps should we expect when upgrading from Spring Boot 2.x to 3.x — integration tests, Testcontainers, security config changes?"*
- Use the analysis to predict what Devin will encounter and prepare follow-up prompts

#### Step 3: Explore with DeepWiki

Open the repo's **DeepWiki** page to understand the codebase architecture and dependency graph. Use what you learn to try different approaches:
- Ask Devin to produce a **MIGRATION_PROOF.md** with before/after build metrics
- Have Devin generate a **`TESTING_GAPS.md`** — an honest assessment of what it couldn't verify
- Try the same one-shot prompt on a different repo and **compare completion rates** across participants
- Ask Devin to add **automated regression checks** that can be rerun after manual fixes

#### Step 4: Review the PR and Give Feedback

Once Devin opens a PR from step 1, practice the feedback loop:
- **Review the diff** — did Devin follow the execution order specified in the prompt? Are the before/after metrics accurate?
- **Leave a comment on the PR** asking Devin to fix something (e.g., *"The TESTING_GAPS.md should include specific test classes that need manual verification"* or *"Can you add a comparison of CVE counts before and after the upgrade?"*)
- **Watch Devin respond** to your PR comment and push a fix — this is how real teams work with Devin
- **Review `TESTING_GAPS.md`** — this is the most important artifact; it shows Devin's engineering maturity

See the full challenge details for [MM11 — One-Shot Tech Debt Remediation](../../modules/migration-modernization/MM11.md) for more ideas.

- **Key Takeaways:**
  - **"Prompt engineering for complex tasks"** — the quality of the output is proportional to the quality of the input
  - **"The 80/90 principle"** — 80-90% autonomous completion with honest gap reporting is more valuable than claimed 100% with hidden failures
  - **"Testing gap awareness"** — `TESTING_GAPS.md` is the most important artifact; it shows engineering maturity
  - **"Long-term reasoning"** — Devin maintains context and executes a multi-step plan over 60+ minutes

- **Target Outcomes (any of these count):**
  - Single PR completing 80-90% of the framework upgrade
  - `MIGRATION_PROOF.md` with before/after metrics
  - `TESTING_GAPS.md` documenting what Devin could not verify
  - Clean build with all unit tests passing
  - PR with review comments and Devin's responses

## Additional Challenges

Participants who finish early may attempt any challenge from the full [module catalog](../../modules/). Recommended extensions:

| Challenge | Module | Repo | Difficulty | Time |
|-----------|--------|------|-----------|------|
| Shift Left Security (build on Lab 1) | [SEC3](../../modules/security/SEC3.md) | uc-cve-remediation-regulatory-compliance | Intermediate | 60 min |
| Repetitive Framework Upgrades (scale Lab 3) | [MM9](../../modules/migration-modernization/MM9.md) | Multiple repos | Intermediate | 60 min |
| CI/CD Pipeline | [DA1](../../modules/devops-automation/DA1.md) | app_timesheet | Intermediate | 45 min |

## Repos Required on Devin's Machine

- [ ] app_timesheet
- [ ] uc-cve-remediation-regulatory-compliance
- [ ] uc-framework-upgrade-monolith-to-microservices

## Runtime Resources

- **Devin API access:** Required for Lab 1 (programmatic session triggering) and Lab 2 (child session launching)
- **SonarQube (optional):** `docker compose -f docker-compose.sonarqube.yml up -d` on port 9000 for enhanced SAST scanning in Labs 1 and 2

## Context

- **Audience:** Enterprise engineering leadership evaluating Devin for organizational adoption
- **Narrative:** Reactive agent (Lab 1) → Coordinated agents (Lab 2) → Autonomous one-shot execution (Lab 3)
- **Enterprise value:**
  - Lab 1: Devin reduces MTTR for security findings to near-zero
  - Lab 2: Devin scales security remediation across the entire portfolio, not one repo at a time
  - Lab 3: Devin handles complex tech debt with minimal human oversight and honest self-assessment

## Devin Features Checklist

Encourage participants to track their progress on the [Devin Features Appendix](../../modules/devin-features/README.md) throughout the session.

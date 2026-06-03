# Event-Driven SAST Remediation — Polyglot Monorepo Demo

A single-thread demo showing Devin operating as a background security agent on
the OtterWorks polyglot monorepo. A human opens a PR, Trivy scans it
automatically, finds HIGH/CRITICAL CVEs, and Devin remediates them without
manual invocation — across Go, Rust, Python, Java, Node.js, Kotlin, Ruby, C#,
and Scala services. The full scan → fix → re-scan loop runs hands-free.

## Table of Contents

- [Quick Start](#quick-start)
- [Repositories](#repositories)
- [Architecture](#architecture)
- [Part 1 — Set Up the Pipeline](#part-1)
- [Part 2 — Trigger It Live](#part-2)
- [Part 3 — Scale with Child Sessions](#part-3)
- [Key Takeaways](#key-takeaways)

---

<a id="quick-start"></a>
## Quick Start

Paste this into Devin to build the event-driven pipeline from scratch on OtterWorks:

```
Create a GitHub Actions workflow called
sast-auto-remediate.yml on the otterworks repo that:
(1) triggers on PRs opened by users other than
    devin-ai-integration[bot],
(2) runs a Trivy filesystem scan for HIGH and CRITICAL
    severity vulnerabilities (skip services/report-service,
    respect .trivyignore),
(3) parses the Trivy JSON output and posts a PR comment
    summarizing findings by service,
(4) if findings exist and fewer than 2 fix attempts have
    been made, calls the Devin API to create a remediation
    session on the same branch,
(5) if findings persist after 2 attempts, opens a GitHub
    Issue for human review.
Write an EVENT_DRIVEN_SECURITY.md in docs/ documenting
the architecture, bot-loop prevention, and escalation
policy.
```

---

<a id="repositories"></a>
## Repositories

- [otterworks](https://github.com/Cognition-Partner-Workshops/otterworks) —
  polyglot monorepo with 10 backend services, 2 frontends, and pre-existing
  Trivy/Semgrep/Gitleaks CI. Has planted CVEs across Node.js (`lodash`),
  Python (`urllib3`), and Ruby (`activestorage`) services.

---

<a id="architecture"></a>
## Architecture

```
Developer opens PR
        ↓
GitHub Actions: sast-auto-remediate.yml
        ↓
Trivy fs scan (HIGH + CRITICAL)
        ↓
  ┌─ No findings → pass
  │
  ├─ Findings + attempts < 2
  │     ├── Post summary as PR comment
  │     └── Devin API → remediation session on same branch
  │             ↓
  │         Devin upgrades deps, runs tests, pushes fix
  │             ↓
  │         Push triggers re-scan (closed loop)
  │
  └─ Findings + attempts >= 2
        ├── Open GitHub Issue (security + needs-human-review)
        └── PR comment: escalated
```

**Bot-loop prevention:** The workflow checks the PR author — PRs from
`devin-ai-integration[bot]` are skipped entirely. A secondary counter tracks
Devin's commits on human-authored PRs and stops after `MAX_FIX_ATTEMPTS`.

**Closed-loop verification:** When Devin pushes a fix, the `synchronize` event
re-triggers the scan. If findings are gone, CI passes and the PR is unblocked.

---

<a id="part-1"></a>
## Part 1 — Set Up the Pipeline

### Step 1: Review existing security scanning

OtterWorks already runs Trivy, Semgrep, and Gitleaks on every PR via
`.github/workflows/security-scan.yml`. The new workflow extends this by adding
the Devin API integration for automated remediation.

Existing scan infrastructure:

| Scanner | Scope | Config |
|---------|-------|--------|
| Trivy | Dependency CVEs across all services | `security/scanning/trivy-config.yaml` |
| Semgrep | OWASP Top 10 + security audit rules | Inline config |
| Gitleaks | Secrets in git history | Default rules |

### Step 2: Build the event-driven workflow

Paste this prompt into Devin:

```
Analyze .github/workflows/security-scan.yml in the
otterworks repo. It runs Trivy, Semgrep, and Gitleaks on
PRs. Extend this pattern by creating a new workflow called
sast-auto-remediate.yml that:

(1) triggers on pull_request (opened, synchronize) to main,
(2) skips PRs where the author is devin-ai-integration[bot],
(3) runs Trivy fs scan with --severity CRITICAL,HIGH
    --format json, skipping services/report-service and
    respecting .trivyignore,
(4) parses the JSON output to extract vulnerability
    count and a per-service findings summary,
(5) posts the findings as a PR comment,
(6) if findings exist and this is the 1st or 2nd fix
    attempt, calls the Devin API (POST
    https://api.devin.ai/v1/sessions) with a prompt
    instructing Devin to check out the PR branch, upgrade
    the vulnerable dependencies in the correct manifest
    files (package.json, requirements.txt, Gemfile,
    go.mod, Cargo.toml, etc.), run the service tests,
    and push,
(7) if findings persist after 2 fix attempts, opens a
    GitHub Issue labeled "security" and
    "needs-human-review" with the remaining findings,
(8) writes docs/EVENT_DRIVEN_SECURITY.md documenting
    the full architecture, bot-loop prevention, and
    escalation policy.
```

### Step 3: Understand what Devin built

While Devin works, review the planted vulnerabilities that the scan will find:

| Service | Language | Vulnerability | Manifest |
|---------|----------|---------------|----------|
| collab-service | Node.js | `lodash` 4.17.20 — command injection | `package.json` |
| search-service | Python | `urllib3` 1.26.5 — ReDoS | `requirements.txt` |
| admin-service | Ruby | `activestorage` CVEs | `Gemfile` |

Also review `.trivyignore` — it contains an overly broad `CVE-2021-*` glob
pattern that silently suppresses real findings.

---

<a id="part-2"></a>
## Part 2 — Trigger It Live

### Step 4: Open a PR as a human

Create a branch with a minor change (e.g., a README edit) and open a PR against
`main`. This triggers the pipeline as a non-bot author.

```bash
git checkout -b workshop-test-sast main
echo "# Security test" >> README.md
git add README.md
git commit -m "docs: trigger SAST pipeline"
git push origin workshop-test-sast
# Open PR via GitHub UI or gh CLI
```

### Step 5: Watch the scan → fix → re-scan loop

1. The `sast-scan` job runs Trivy and finds HIGH/CRITICAL CVEs
2. A PR comment appears with the findings summary, grouped by service
3. The `trigger-devin` job calls the Devin API — a new session starts
4. Devin checks out the branch, upgrades `lodash`, `urllib3`, and the
   `activestorage` gems, runs each service's tests, and pushes
5. The push triggers the `synchronize` event → the workflow re-runs
6. If all findings are resolved, the scan passes and CI goes green

### Step 6: Review the polyglot fixes

Devin's PR commits typically touch 3+ languages in a single remediation cycle:

- `services/collab-service/package.json` — `lodash` bumped to 4.17.21+
- `services/search-service/requirements.txt` — `urllib3` bumped to 2.x
- `services/admin-service/Gemfile` — Rails/ActiveStorage updated

Each fix targets the specific manifest file for that service's ecosystem. Devin
runs the per-service tests (`npm test`, `pytest`, `bundle exec rspec`) before
pushing to avoid breaking changes.

---

<a id="part-3"></a>
## Part 3 — Scale with Child Sessions

For enterprise-scale remediation (many findings across many services), use
parent-child orchestration. The parent session triages findings and launches
one child session per service for parallel remediation.

```
You are coordinating a polyglot security remediation
across the otterworks monorepo.

Run make security-scan and capture the output. Create a
SECURITY_BACKLOG.md that lists all CRITICAL and HIGH
findings organized by service.

Then launch parallel child sessions — one per affected
service — with scoped instructions:
- Each child works only on its assigned service directory
- Each child upgrades the vulnerable dependency, runs
  the service tests, and pushes to the same branch
- After all children complete, summarize results in
  REMEDIATION_SUMMARY.md
```

This demonstrates the same event-driven pattern at organizational scale: one
scan produces a backlog, and multiple agents remediate in parallel.

---

<a id="key-takeaways"></a>
## Key Takeaways

- **Devin as a background agent**: Devin is not a tool someone opens — it
  responds to CI events automatically. Developers commit code; Devin handles
  security remediation.
- **Polyglot remediation**: A single pipeline covers Go, Rust, Python, Java,
  Node.js, Kotlin, Ruby, C#, and Scala — Devin reads the right manifest for
  each ecosystem.
- **Closed-loop verification**: The same CI that found the problem re-scans
  after Devin's fix. No manual verification needed for dependency upgrades.
- **Bot-loop prevention**: Author filtering and attempt counting prevent
  infinite remediation cycles.
- **Escalation policy**: When automation is not enough, the pipeline opens an
  issue for human review rather than looping forever.
- **Scanner-agnostic**: The architecture works with Trivy, Snyk, SonarQube, or
  any scanner that produces parseable output. Swap the scan step; the Devin API
  integration and escalation logic stay the same.

# E4 — Automated CI Failure Resolution

## Challenge

Define a CI flow where Devin can triage and resolve failed CI gates/checks for PRs when the commit is not authored by Devin.

## Options

- **Repository:** Any repo with CI configured
- **Reference:** [client-timesheet-app](https://github.com/Cognition-Partner-Workshops/client-timesheet-app) — Has `sonar-devin-fix.yml` as a working example of this pattern

## Task

Define a CI flow where Devin can triage failed CI gates/checks for PRs when the commit is not authored by Devin. This creates an autonomous remediation loop.

## Architecture Pattern

```
Developer commits → CI runs → CI fails → Trigger Devin Session → Devin diagnoses → Devin pushes fix → CI re-runs
```

## Implementation Approaches

### Approach 1: GitHub Actions + Devin API
1. CI workflow runs checks (lint, test, security scan)
2. On failure, a step calls the Devin API to create a session
3. Devin receives the CI logs and the branch name
4. Devin diagnoses and pushes a fix commit
5. CI re-triggers on the new commit

### Approach 2: Manual Trigger
1. CI fails on a PR
2. Participant manually triggers a Devin session with the failure context
3. Devin reads the CI logs, diagnoses, and fixes

## Sample Prompt (Approach 2)

> CI is failing on PR #[number] in [repo]. Here's the failure: [paste CI logs or link]. Diagnose the root cause, fix it, and push a commit to the PR branch. Do not modify test files.

## Reference Implementation

See `client-timesheet-app/.github/workflows/sonar-devin-fix.yml` for a working example that:
1. Runs SonarQube analysis on PRs
2. If critical issues are found and the PR author is `bsmitches`, triggers a Devin session
3. Devin receives the SonarQube findings and the branch name
4. Devin pushes a fix commit

## What Participants Will Learn

- How to integrate Devin into CI/CD as an automated remediation agent
- The Devin API for programmatic session creation
- Feedback loops: CI → Devin → CI
- When autonomous remediation is appropriate vs. when human review is needed

## Devin Features Exercised

- Devin API integration
- CI log interpretation
- Automated diagnosis and fix
- Multi-step reasoning (read logs → identify cause → implement fix → verify)

## Difficulty

Advanced — Requires understanding of CI/CD, GitHub Actions, and the Devin API.

## Estimated Time

60 minutes

## Notes

- This is the most advanced challenge in the workshop
- Consider pairing with E1 (CI/CD) — first create the pipeline, then add automated resolution
- The Devin API documentation is available at https://docs.devin.ai

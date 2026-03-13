# DA9

## Repositories

- [uc-pod-remediation-credential-rotation](#uc-pod-remediation-credential-rotation)

---

## Challenge

Implement automated detection and remediation of pod failures caused by credential rotations. This exercises Devin's ability to work with Kubernetes manifests, observability patterns, and multi-agent orchestration code that coordinates detection, approval, and remediation steps.

## Target Outcomes

- Rotation monitoring agent that detects recently rotated secrets and identifies affected deployments
- Failure detection agent that scans pods for CrashLoopBackOff and credential-related error patterns
- Approval workflow integration with ServiceNow (or mock) for change request creation and polling
- Remediation orchestrator that performs rolling restarts upon approval
- PR with agent implementations, Kubernetes RBAC, and unit tests

## What Participants Will Learn

- How Devin navigates multi-agent Python codebases with Kubernetes integration
- How Devin implements approval-gated remediation workflows
- Devin's ability to work with K8s RBAC, deployment manifests, and pod lifecycle management
- How to evaluate AI-generated observability and remediation code

## Devin Features Exercised

- Multi-file Python development across agents, models, and utilities
- Kubernetes manifest authoring (RBAC, Deployments, ConfigMaps)
- Integration pattern implementation (ServiceNow API client)
- Unit test generation for domain models
- PR creation with architectural documentation

## Difficulty

Advanced

## Estimated Time

60 minutes

---

## <a id="uc-pod-remediation-credential-rotation"></a>uc-pod-remediation-credential-rotation

**Repository:** [uc-pod-remediation-credential-rotation](https://github.com/Cognition-Partner-Workshops/uc-pod-remediation-credential-rotation)

Python multi-agent system for Kubernetes credential rotation monitoring and automated pod remediation.

### Step 1: Get Started Fast

> Review the uc-pod-remediation-credential-rotation codebase. The rotation_monitor agent needs to be enhanced to support detecting rotations that happen outside the scheduled cron window (emergency rotations). Add a method `detect_emergency_rotations` that compares the last_rotated_at timestamp against the cron schedule and flags any rotation that occurred more than 24 hours before the next scheduled window. Add unit tests for the new method. Open a PR.

### Step 2: Level Up with AskDevin

- *"What failure patterns beyond CrashLoopBackOff should the failure detector watch for after a credential rotation?"*
- *"How should the approval workflow handle timeouts — should it auto-escalate or auto-reject?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the agent architecture and data flow between rotation monitoring, failure detection, approval, and remediation. Identify which agent interactions could benefit from better error handling.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — does the emergency rotation detection correctly parse cron schedules?
- **Leave a comment** asking Devin to add integration test scaffolding that mocks the Kubernetes API client

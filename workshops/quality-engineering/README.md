# Workshop: Quality Engineering

## Overview

| | |
|---|---|
| **Focus** | Testing, documentation, code review automation, and quality assurance |
| **Duration** | 2-4 hours |
| **Audience** | QA engineers, test leads, development teams focused on quality |
| **Key Modules** | [Linting & Static Analysis](../../modules/quality-engineering/linting-static-analysis.md) through [BDD Test Generation](../../modules/quality-engineering/bdd-test-generation.md) |

## Workshop Narrative

Quality engineering encompasses everything from unit testing to E2E testing, from code review to documentation. This workshop demonstrates how Devin can generate tests, automate reviews, and produce documentation — improving code quality across the entire development lifecycle.

## Labs

### Lab 1 — Unit & Integration Testing

- **Modules:** [Unit Testing](../../modules/quality-engineering/unit-testing.md) + [End-to-End Testing](../../modules/quality-engineering/end-to-end-testing.md)
- **Repository:** Any application repo
- **Objective:** Generate comprehensive unit tests and integration tests for an existing codebase
- **Duration:** 60 min

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Analyze the test coverage of [repo-name]. Identify the modules with the lowest test coverage. Write unit tests for the top 5 least-tested modules, following the existing test patterns and framework. Aim for at least 80% line coverage on each module. Open a PR with the new tests.

#### Step 2: Research with Ask Devin

- *"What's the current test coverage in [repo]? Which modules are most at risk?"*
- *"What testing patterns does the codebase use? JUnit, Mockito, TestContainers?"*

#### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page. Try generating property-based tests, mutation tests, or E2E test scenarios.

#### Step 4 (Optional): Review & Give Feedback

- Review tests for meaningful assertions (not just coverage padding)
- Ask Devin to add edge case tests or integration tests

**Target Outcomes:** New unit tests with meaningful assertions, improved coverage, integration tests

---

### Lab 2 — Code Review & Documentation

- **Modules:** [Code Refactoring & Tech Debt](../../modules/quality-engineering/code-refactoring-tech-debt.md) + [Inline Documentation](../../modules/quality-engineering/inline-documentation.md)
- **Repository:** Any application repo
- **Objective:** Automate code review and generate documentation for an existing codebase
- **Duration:** 45 min

#### Step 1: Paste into Devin (copy-paste this prompt into Devin)

> Review the codebase of [repo-name] and add JSDoc/Javadoc documentation to all public interfaces, classes, and exported functions that are currently undocumented. Follow the existing documentation style. Also identify any code smells, anti-patterns, or architectural concerns and document them in a `CODE_REVIEW.md`. Open a PR.

#### Step 2: Research with Ask Devin

- *"What documentation conventions does this codebase follow?"*
- *"What are the most common code smells in this repo?"*

#### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page. Try generating API documentation, architecture diagrams, or developer onboarding guides.

#### Step 4 (Optional): Review & Give Feedback

- Review documentation for accuracy and completeness
- Ask Devin to add more detail to specific sections or fix documentation style

**Target Outcomes:** Comprehensive documentation, code review report, improved maintainability

## Repos Required

Any application repo from the catalog. Recommended starting points:
- [ ] uc-framework-upgrade-monolith-to-microservices (Java/Spring Boot)
- [ ] app_timesheet (React/Node.js)
- [ ] app_petclinic-angular (Angular)

## Key Takeaways

- **"Quality at scale"** — Devin generates meaningful tests and documentation across entire codebases
- **"Existing patterns respected"** — tests follow the codebase's framework and style conventions
- **"Living documentation"** — generated docs stay in sync with the code via PR reviews

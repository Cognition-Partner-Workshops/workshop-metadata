# DA3

## Repositories

- [app_timesheet](#app_timesheet)
- [ts-java-spring-boot-realworld-example-app](#ts-java-spring-boot-realworld-example-app)
- [uc-framework-upgrade-monolith-to-microservices](#uc-framework-upgrade-monolith-to-microservices)

---

## Challenge

Use Devin to review pull requests — both Devin-generated PRs and human-authored PRs. This exercises Devin's code review capabilities: identifying bugs, suggesting improvements, checking for best practices, and providing actionable feedback.

## Target Outcomes

- PR reviewed with actionable inline comments
- Bugs, security issues, or style violations identified
- Improvement suggestions with code examples
- Review summary with severity-ranked findings

## What Participants Will Learn

- How Devin reviews code for correctness, security, and style
- How Devin provides inline comments with code suggestions
- The difference between reviewing your own PR vs. someone else's
- How to use Devin as a "second pair of eyes" before merging

## Devin Features Exercised

- PR review and inline commenting
- Code analysis for bugs and antipatterns
- Security review
- Style and convention checking

## Difficulty

Beginner to Intermediate

## Estimated Time

30 minutes

## Notes

- This challenge works best after another challenge has produced a PR to review
- Can also review PRs from other participants in the workshop
- Demonstrates Devin's value as a code review assistant for daily development

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Node.js/Express + React application — review PRs for JavaScript/TypeScript best practices.

### Step 1: Get Started Fast

> Review the open PR on app_timesheet. Check for: security issues (SQL injection, XSS, missing input validation), performance problems (N+1 queries, missing indexes), code style violations, missing error handling, and test coverage gaps. Leave inline comments on specific lines with suggested fixes. Provide an overall review summary.

### Step 2: Level Up with AskDevin

- *"What are the most common security issues in Express.js applications that I should look for in PRs?"*
- *"What code review checklist should I use for React + Express applications?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the codebase conventions. A good review should flag deviations from established patterns.

### Step 4: Review the PR and Give Feedback

- **Meta-review** — evaluate Devin's code review comments for accuracy and helpfulness
- **Leave a comment** asking Devin to also check for accessibility issues in any React component changes

---

## <a id="ts-java-spring-boot-realworld-example-app"></a>ts-java-spring-boot-realworld-example-app

**Repository:** [ts-java-spring-boot-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-java-spring-boot-realworld-example-app)

Spring Boot Java application — review PRs for Java best practices and Spring patterns.

### Step 1: Get Started Fast

> Review the open PR on ts-java-spring-boot-realworld-example-app. Check for: proper exception handling, Spring dependency injection patterns, JPA entity design, REST API conventions, and test coverage. Leave inline comments with suggested improvements. Provide a review summary.

### Step 2: Level Up with AskDevin

- *"What Spring Boot antipatterns should I look for in code reviews?"*
- *"What JPA/Hibernate pitfalls are common in Spring Boot applications?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the existing code patterns. Flag any PR changes that deviate from established conventions.

### Step 4: Review the PR and Give Feedback

- **Meta-review** — are Devin's review comments accurate and actionable?
- **Leave a comment** asking Devin to prioritize findings by severity (critical, major, minor, nitpick)

---

## <a id="uc-framework-upgrade-monolith-to-microservices"></a>uc-framework-upgrade-monolith-to-microservices

**Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)

Spring Boot monolith with GraphQL + REST — review PRs for architectural consistency.

### Step 1: Get Started Fast

> Review the open PR on uc-framework-upgrade-monolith-to-microservices. Focus on: architectural consistency (does the change follow existing patterns?), Spring Security configuration, GraphQL schema design, database migration safety, and test coverage. Leave inline comments and provide a summary.

### Step 2: Level Up with AskDevin

- *"What should I look for when reviewing a Spring Boot 2 to 3 upgrade PR? What are common mistakes?"*
- *"What GraphQL schema design issues should I flag in code reviews?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the architecture. Use this as a baseline for reviewing whether PR changes maintain architectural integrity.

### Step 4: Review the PR and Give Feedback

- **Meta-review** — did Devin catch the most important issues? Did it miss anything?
- **Leave a comment** asking Devin to generate a review checklist specific to this repository

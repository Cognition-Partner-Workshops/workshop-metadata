# C9 — Repetitive Framework Upgrades

## Challenge

Demonstrate how Devin handles repetitive upgrade tasks across multiple codebases — the same type of upgrade (Angular version bump, Spring Boot major version, Java LTS upgrade) applied consistently across different services or projects.

## Options

### Option 1: Spring Boot Upgrade (Java)
- **Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)
- **Task:** Upgrade Java 11 → 17+ and Spring Boot 2.6.3 → 3.x. Handle javax → jakarta, deprecated APIs, Gradle plugin changes.

### Option 2: Angular Upgrade
- **Repository:** [ts-angular-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-angular-realworld-example-app) or [app_petclinic-angular](https://github.com/Cognition-Partner-Workshops/app_petclinic-angular)
- **Task:** Upgrade Angular to the latest major version. Handle breaking changes, deprecated APIs, module system changes.

### Option 3: Both (Parallel Sessions)
- Run Option 1 and Option 2 in parallel Devin sessions to demonstrate how repetitive upgrades scale across multiple services simultaneously.

## Target Outcomes

- Application builds and all tests pass on the upgraded version
- Breaking changes handled systematically (namespace migrations, API changes)
- Upgrade documented: what changed, what broke, how it was fixed
- PR with clean, reviewable diff

## Sample Prompt (Spring Boot)

> Upgrade uc-framework-upgrade-monolith-to-microservices from Java 11 + Spring Boot 2.6.3 to Java 17 + Spring Boot 3.2. Handle the javax to jakarta namespace migration, update Gradle build configuration, fix any deprecations, and ensure all tests pass. Document every breaking change you encounter and how you resolved it. Open a PR.

## Sample Prompt (Angular)

> Upgrade ts-angular-realworld-example-app to the latest Angular version. Handle any breaking changes from the Angular update guide, update dependencies, fix deprecated APIs, and ensure the app builds and tests pass. Open a PR.

## What Participants Will Learn

- How Devin follows established upgrade guides (Spring Boot migration guide, Angular update guide)
- How Devin identifies and resolves breaking changes systematically
- The value of running parallel Devin sessions for repetitive tasks across services
- How to evaluate Devin's upgrade PRs for correctness and completeness

## Devin Features Exercised

- Large-scale refactoring across many files
- Build system modification (Gradle, npm)
- Iterative error resolution (fix → build → fix cycle)
- Parallel session execution (for Option 3)
- PR creation with upgrade documentation

## Difficulty

Intermediate

## Estimated Time

60 minutes (per upgrade; parallel sessions can run simultaneously)

## Notes

- This challenge is specifically designed to showcase Devin's value for repetitive, well-defined tasks
- The parallel sessions option (Option 3) demonstrates a key Devin advantage: doing the same task across multiple repos simultaneously
- For workshops focused on enterprise scale, emphasize that the same prompt can be reused across 10+ microservices

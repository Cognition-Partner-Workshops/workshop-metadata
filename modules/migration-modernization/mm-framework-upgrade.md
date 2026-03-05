# C2 — Framework Upgrade

## Challenge

Upgrade a project's framework, language version, or design library to a current version.

## Options

### Option 1: Java/Spring Boot Upgrade
- **Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)
- **Task:** Upgrade Java from 11 to 17+ and Spring Boot from 2.6.3 to 3.x. Handle breaking changes (javax → jakarta namespace, removed deprecated APIs, Gradle plugin updates).

### Option 2: Design Library Migration
- **Repository:** [coreui-free-react-admin-template](https://github.com/Cognition-Partner-Workshops/coreui-free-react-admin-template)
- **Task:** Change the design library from Bootstrap to Material UI.

### Option 3: Angular Upgrade
- **Repository:** [ts-angular-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-angular-realworld-example-app) or [app_petclinic-angular](https://github.com/Cognition-Partner-Workshops/app_petclinic-angular)
- **Task:** Upgrade Angular to the latest major version.

## Sample Prompt (Option 1)

> Upgrade uc-framework-upgrade-monolith-to-microservices from Java 11 + Spring Boot 2.6.3 to Java 17 + Spring Boot 3.2. Handle the javax to jakarta namespace migration, update Gradle build configuration, fix any deprecations, and ensure all tests pass. Open a PR with the changes.

## What Participants Will Learn

- How Devin handles complex, cross-cutting framework upgrades
- How Devin identifies and resolves breaking changes (namespace migrations, API changes)
- Devin's ability to iteratively fix build/test failures after an upgrade
- The importance of having tests before upgrading (safety net)

## Devin Features Exercised

- Large-scale refactoring across many files
- Build system modification (Gradle/npm)
- Iterative error resolution
- PR creation

## Difficulty

Intermediate

## Estimated Time

60 minutes

## Notes

- For Option 1, the Spring Boot 2 → 3 migration is well-documented. Key changes: javax.* → jakarta.*, Spring Security config changes, deprecated API removal.
- For Option 2, this is a full UI library swap — expect Devin to touch many component files.

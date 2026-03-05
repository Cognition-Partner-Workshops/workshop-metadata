# C4 — API Consolidation

## Challenge

Consolidate two API designs into one consistent design pattern.

## Repository

- **Primary:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)

## Task

The RealWorld example app exposes both **REST** and **GraphQL** (DGS framework) APIs. Consolidate these into one design pattern — either:
- Remove GraphQL and standardize on REST, or
- Remove REST and standardize on GraphQL, or
- Create a unified API gateway pattern

## Sample Prompt

> The uc-framework-upgrade-monolith-to-microservices repo has both REST controllers and GraphQL mutations/fetchers serving the same data. Consolidate to REST only: remove all GraphQL-related code (DGS framework, schema files, datafetchers, mutations), update the build.gradle to remove DGS dependencies, and ensure all functionality is accessible via REST endpoints. Verify tests pass. Open a PR.

## What Participants Will Learn

- How Devin identifies parallel API implementations
- How Devin safely removes code while preserving functionality
- Dependency cleanup in build files
- Test verification after API surface changes

## Devin Features Exercised

- Codebase analysis (identifying what to keep vs. remove)
- Safe code removal
- Build configuration changes
- PR creation

## Difficulty

Intermediate

## Estimated Time

45 minutes

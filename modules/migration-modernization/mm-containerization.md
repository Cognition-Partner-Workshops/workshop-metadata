# C3 — Containerization

## Challenge

Identify a self-contained microservice that can be extracted from a monolith into a containerized microservice implementation.

## Repository

- **Primary:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)
- **Reference:** [app_petclinic-microservices](https://github.com/Cognition-Partner-Workshops/app_petclinic-microservices) (example of what "done" looks like)

## Task

Identify a self-contained microservice that can be extracted into a containerized microservice implementation. The RealWorld app has three clear bounded contexts:
- **Articles** — CRUD, feed, favorites, tags
- **Users/Profiles** — registration, authentication, following
- **Comments** — CRUD linked to articles

## Sample Prompt

> Analyze the domain boundaries in uc-framework-upgrade-monolith-to-microservices. Extract the Comments domain into a standalone Spring Boot microservice with its own database, Dockerfile, and REST API. The monolith should communicate with the comments microservice via HTTP. Create a docker-compose.yml that runs both services. Open a PR.

## What Participants Will Learn

- How Devin analyzes domain boundaries and dependency graphs
- How Devin handles the complexity of extracting shared code
- Containerization best practices (multi-stage builds, health checks, env config)
- Service communication patterns (REST, shared contracts)

## Devin Features Exercised

- Architectural analysis
- Code extraction and refactoring
- Docker/docker-compose authoring
- Multi-module project setup
- PR creation

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

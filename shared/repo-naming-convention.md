# Repository Naming Convention

All repositories in the [Cognition-Partner-Workshops](https://github.com/Cognition-Partner-Workshops) org follow a prefix-based naming convention.

## Prefixes

| Prefix | Meaning | When to Use | Examples |
|--------|---------|------------|---------|
| `uc-` | **Use Case** | Repo exists to support a specific technical use case (modernization, migration, quality engineering, etc.) | `uc-legacy-modernization-cobol-to-java`, `uc-dw-migration-teradata-to-snowflake` |
| `ts-` | **Technology Stack** | Repo exists to represent a specific language, cloud provider, or software product | `ts-angular-realworld-example-app`, `ts-sas-legacy-codebase` |
| `i-` | **Industry Vertical** | Repo exists to represent an industry domain (healthcare, retail, banking, etc.) | `i-banking-loan-processing` |
| `app_<appname>-` | **Application** | Multiple repos belong to the same application (note: underscore after `app`, not hyphen) | `app_petclinic-angular`, `app_petclinic-backend`, `app_petclinic-microservices` |
| _(none)_ | **Non-prefixed** | Forks of well-known projects, general utilities, anything that doesn't fit above | `cal.com`, `client-timesheet-app`, `fineract` |

## Rules

1. **Apply prefixes to new repos only.** Do not rename existing org repos to fit the convention — legacy non-prefixed names are acceptable.
2. **Choose the prefix that matches the primary reason the repo exists.** If it exists to demonstrate a tech stack, use `ts-`. If it supports a use case narrative, use `uc-`.
3. **Use kebab-case** after the prefix: `uc-data-migration-sas-to-snowflake` (not `uc_data_migration` or `uc-DataMigration`).
4. **The `app_` prefix uses an underscore**, not a hyphen. This is intentional: `app_petclinic-backend` (not `app-petclinic-backend`).
5. **Document secondary use cases** in the repo description if a repo serves multiple purposes.

## Choosing Between Prefixes

When a repo could fit multiple prefixes, pick based on **why it was added to the org**:

| Scenario | Prefix | Reasoning |
|----------|--------|-----------|
| "We need a COBOL codebase for the legacy modernization lab" | `uc-` | The lab (use case) drove the need |
| "We need an Angular app to show the Angular tech stack" | `ts-` | The tech stack drove the need |
| "We need the PetClinic frontend, backend, and microservices versions" | `app_` | Multiple repos for one application |
| "We forked cal.com for general demos" | _(none)_ | Well-known project, no specific prefix needed |

## Repo Description Format

Set meaningful descriptions via the GitHub API:

```
Lab N: [Lab Title] — [One-line description]. Source: [upstream repo if imported]
```

Example:
```
Lab 2: Framework Upgrade and Refactor — Upgrade Java 11/Spring Boot 2.6 monolith to Java 17+/Spring Boot 3.x, extract a microservice. Source: spring-boot-realworld-example-app
```

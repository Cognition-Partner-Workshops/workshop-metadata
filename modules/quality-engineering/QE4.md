# QE4

## Repositories

- [app_timesheet](#app_timesheet)
- [ts-java-spring-boot-realworld-example-app](#ts-java-spring-boot-realworld-example-app)
- [uc-dw-migration-teradata-to-snowflake](#uc-dw-migration-teradata-to-snowflake)

---

## Challenge

Enhance documentation in a codebase so that code is more readable and maintainable. This includes inline documentation (JSDoc/Javadoc/docstrings), README improvements, architecture decision records (ADRs), and API documentation from code.

## Target Outcomes

- Comprehensive inline documentation added to public methods and classes
- README improved with setup instructions, architecture overview, or contribution guide
- Documentation focuses on the "why" not just the "what"
- PR with documentation changes

## What Participants Will Learn

- How Devin understands code intent and generates meaningful documentation
- Quality of AI-generated documentation vs. boilerplate
- How to guide Devin to produce documentation at the right level of detail

## Devin Features Exercised

- Deep codebase understanding
- Large-scale file editing
- PR creation

## Difficulty

Beginner

## Estimated Time

30 minutes

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Moderate codebase with a mix of frontend (React) and backend (Express) — benefits from JSDoc comments and API documentation.

### Step 1: Get Started Fast

> Review app_timesheet and add comprehensive inline documentation (JSDoc) to all public functions in the backend API routes and service layer. Also add TSDoc comments to the main React components. Focus on explaining the "why" not just the "what". Open a PR with the changes.

### Step 2: Level Up with AskDevin

- *"Which parts of app_timesheet are most confusing for a new developer? Where would documentation have the highest impact?"*
- *"Should the README be updated with an architecture diagram or setup guide?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page — compare the auto-generated documentation with what's in the code. Identify gaps where inline documentation would complement DeepWiki's output.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — is the documentation accurate? Does it explain intent or just restate the code?
- **Leave a comment** asking Devin to improve a specific doc comment that's too generic

---

## <a id="ts-java-spring-boot-realworld-example-app"></a>ts-java-spring-boot-realworld-example-app

**Repository:** [ts-java-spring-boot-realworld-example-app](https://github.com/Cognition-Partner-Workshops/ts-java-spring-boot-realworld-example-app)

Java Spring Boot codebase — benefits from Javadoc comments on services, controllers, and domain models.

### Step 1: Get Started Fast

> Review ts-java-spring-boot-realworld-example-app and add comprehensive Javadoc comments to all public classes and methods in the service and controller layers. Include parameter descriptions, return values, and exception documentation. Open a PR with the changes.

### Step 2: Level Up with AskDevin

- *"What are the most complex service methods that would benefit most from documentation?"*
- *"Should we also add package-level documentation (package-info.java) for each module?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the domain model. Use this to write documentation that explains the business domain, not just the technical implementation.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — does the Javadoc follow standard conventions? Are @param and @return tags used correctly?
- **Leave a comment** asking Devin to add an ADR explaining a specific architectural decision

---

## <a id="uc-dw-migration-teradata-to-snowflake"></a>uc-dw-migration-teradata-to-snowflake

**Repository:** [uc-dw-migration-teradata-to-snowflake](https://github.com/Cognition-Partner-Workshops/uc-dw-migration-teradata-to-snowflake)

SQL-heavy data warehouse repo — benefits from header comments on DDL/DML files, data dictionary documentation, and schema documentation.

### Step 1: Get Started Fast

> Review uc-dw-migration-teradata-to-snowflake and add comprehensive header comments to all SQL files in ddl/ and dml/ directories. Each file should document: purpose, input/output tables, key business rules, and Teradata-specific features used. Also create a DATA_DICTIONARY.md from the schema definitions. Open a PR.

### Step 2: Level Up with AskDevin

- *"What are the business rules embedded in the stored procedures and macros? Can you extract them into a business rules document?"*
- *"Can you generate an ER diagram description from the DDL files?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the data warehouse schema relationships and ETL flow. Use this to improve the documentation with data lineage information.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — do the SQL comments accurately describe the business logic?
- **Leave a comment** asking Devin to document the ETL dependencies between stored procedures

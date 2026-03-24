# Oracle Forms to Java

## Repositories

- [ts-plsql-oracle-forms-legacy-codebase](#ts-plsql-oracle-forms-legacy-codebase)
- [uc-legacy-modernization-oracle-forms-to-java](#uc-legacy-modernization-oracle-forms-to-java)

---

## Challenge

Use Devin to migrate part of an Oracle Forms/PL/SQL HR Management System to Java Spring Boot. You choose which module to migrate, how to structure the Java code, and what patterns to use — the goal is to see how Devin handles multi-layer legacy code comprehension (Forms triggers + PLL libraries + PL/SQL packages + database schema) and translates it into clean, modern Java with proper testing.

## Target Outcomes

- Java Spring Boot service code replacing a selected PL/SQL package
- JPA entities mapped to the existing Oracle schema
- REST API endpoints replacing Forms UI interactions
- Validation logic unifying the drifted client-side (PLL) and server-side (package) rules
- Unit tests verifying functional equivalence
- Migration notes documenting translation decisions and technical debt resolved
- PR with Java code, tests, and migration documentation

## Starting Points

The legacy codebase contains modules of varying complexity:

| PL/SQL Package | Description | Complexity | Good For |
|----------------|-------------|-----------|----------|
| `PKG_EMPLOYEE` | Full CRUD + search + org chart + transfer | High | Comprehensive migration (has SQL injection, race condition) |
| `PKG_LEAVE` | Leave request workflow + accrual processing | Medium | Workflow/state machine migration |
| `PKG_PAYROLL` | Payroll calculation + batch processing | Very High | Batch migration to Spring Batch |
| `PKG_PERFORMANCE` | Performance reviews + goal tracking | Medium | Standard CRUD with notification |
| `PKG_SECURITY` | Auth + session + permissions + encryption | Medium | Security stack replacement (Spring Security) |
| `PKG_VALIDATION` | Server-side field validation | Low-Medium | Quick win, compare with PLL drift |

## What Participants Will Learn

- How Devin handles multi-layer Oracle Forms architecture (UI triggers + PLL + PL/SQL + DB)
- How Devin maps Oracle-specific constructs (sequences, CONNECT BY, NVL, autonomous transactions) to Java equivalents
- How Devin resolves technical debt during migration (fixing bugs rather than preserving them)
- How validation logic scattered across Forms triggers, PLL libraries, and PL/SQL packages gets unified in Spring Boot
- The importance of parity testing in migration — ensuring the Java version behaves identically

## Devin Features Exercised

- Multi-language understanding (PL/SQL + SQL + Oracle Forms XML → Java + JPA + REST)
- Code generation with architectural decisions
- Technical debt remediation during translation
- Test generation for functional equivalence
- PR creation with detailed migration notes
- DeepWiki for codebase exploration
- AskDevin for pre-session planning
- Parallel sessions (if trying multiple module migrations)

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

## Notes

- The legacy codebase has no build system (Oracle Forms is compiled in Forms Builder) — Devin will extend the Maven project in the migration use-case repo
- There is no single "right answer" — different participants will produce different migrations
- The migration use-case repo provides a scaffolded Spring Boot project in `java-target/` with the Employee module started — participants can extend this or start fresh
- Encourage participants to share and compare their different approaches after the lab
- Key technical debt items to resolve during migration: MD5 hashing → BCrypt, SQL injection → parameterized queries, cursor loops → bulk operations, hard-coded tax brackets → config-driven

---

## <a id="ts-plsql-oracle-forms-legacy-codebase"></a>ts-plsql-oracle-forms-legacy-codebase

**Repository:** [ts-plsql-oracle-forms-legacy-codebase](https://github.com/Cognition-Partner-Workshops/ts-plsql-oracle-forms-legacy-codebase)

Oracle Forms 11g/12c HRMS legacy application — the source system being migrated.

## <a id="uc-legacy-modernization-oracle-forms-to-java"></a>uc-legacy-modernization-oracle-forms-to-java

**Repository:** [uc-legacy-modernization-oracle-forms-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-oracle-forms-to-java)

Migration use-case repo with target Spring Boot project structure, test harness, and reference architecture.

### Step 1: Paste into Devin

> Analyze the PL/SQL package PKG_EMPLOYEE in ts-plsql-oracle-forms-legacy-codebase (both the spec in `plsql/packages/PKG_EMPLOYEE.pks` and body in `plsql/packages/PKG_EMPLOYEE.pkb`). Also review the HRMS_EMPLOYEE Forms XML export and the HRMS_VALIDATION_LIB PLL library for client-side validation logic. Migrate the employee management functionality to Java Spring Boot:
>
> 1. Create a Spring Boot `EmployeeService` with all CRUD operations, search, org chart, and transfer logic
> 2. Create JPA entities for the EMPLOYEES table and related tables
> 3. Create REST API endpoints for all employee operations
> 4. Unify the validation logic from HRMS_VALIDATION_LIB (client-side) and PKG_VALIDATION (server-side) into Bean Validation annotations
> 5. Fix the known technical debt: SQL injection in search, race condition in emp number generation, circular dependency with PKG_PAYROLL
> 6. Create unit tests verifying the Java version matches the PL/SQL behavior
> 7. Document your migration decisions in MIGRATION_NOTES.md
>
> Use the scaffolded project in uc-legacy-modernization-oracle-forms-to-java/java-target/ as your starting point. Open a PR.

### Step 2: Research with Ask Devin

- *"What are the most complex procedures in PKG_EMPLOYEE and what business rules do they implement?"*
- *"How does the HRMS_EMPLOYEE form interact with PKG_EMPLOYEE — what triggers fire and in what order?"*
- *"What Oracle-specific SQL constructs in PKG_EMPLOYEE need to be translated for Spring Data JPA?"*
- Use the refined plan as your Devin session prompt — compare the result to your first attempt

### Step 3 (Optional): Read the DeepWiki

Open both repos' DeepWiki pages to understand the legacy architecture and the target project structure. Identify which PL/SQL constructs interest you and decide your migration scope.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the Java code faithfully represent the PL/SQL business logic?
- **Review the validation** — has Devin unified the drifted client-side and server-side validation?
- **Leave a comment** asking Devin to handle a specific technical debt item differently (e.g., *"Can you use Spring Data Specifications for the search instead of JPQL?"*)
- Try migrating **different modules** in parallel sessions (e.g., PKG_LEAVE and PKG_PAYROLL simultaneously) and compare results

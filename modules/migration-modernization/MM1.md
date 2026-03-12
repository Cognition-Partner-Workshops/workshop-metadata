# MM1

## Repositories

- [uc-legacy-modernization-cobol-to-java](#uc-legacy-modernization-cobol-to-java)

---

## Challenge

Explore a real COBOL mainframe application and use Devin to modernize part of it to Java 17+. You choose what to migrate, how to structure the Java code, and what target language/framework to use — the goal is to see how Devin handles legacy code comprehension and translation.

## Target Outcomes

- Java source code replacing selected COBOL program(s) with parity tests
- Migration documentation covering translation decisions
- Business rules extracted and documented
- PR with Java code, tests, and migration notes

## Starting Points

The repo contains programs of varying complexity:

| Program | Description | Complexity | Good For |
|---------|-------------|-----------|----------|
| `CBACT01C.cbl` | Account file batch processing | Medium | First migration attempt |
| `CBACT02C.cbl` | Account data processing | Medium | Data transformation focus |
| `CBTRN01C.cbl` | Transaction processing | High | Complex business logic |
| `COTRTUPC.cbl` | Transaction type update | Low-Medium | Quick win |
| `CBSTM03A.cbl` | Statement generation | Medium-High | Report generation |

## What Participants Will Learn

- How Devin reads and understands COBOL (a language most developers can't read)
- How Devin maps COBOL data structures (copybooks, WORKING-STORAGE) to modern equivalents
- How Devin handles COBOL-specific constructs (PERFORM, EVALUATE, file I/O, packed decimal)
- The importance of parity testing in migration
- How different prompting strategies (direct vs. AskDevin-refined) affect output quality

## Devin Features Exercised

- Multi-language understanding (COBOL to Java/Kotlin/Python)
- Code generation with architectural decisions
- Test generation for functional equivalence
- PR creation with detailed migration notes
- DeepWiki for codebase exploration
- AskDevin for pre-session planning
- Parallel sessions (if trying multiple migration targets)

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

## Notes

- The repo has no build system (COBOL is compiled on mainframes) — Devin will need to create a project structure from scratch
- There is no single "right answer" — different participants will produce different migrations
- The CardDemo app includes DB2 SQL — the Java version can use JDBC, JPA, or an ORM
- Encourage participants to share and compare their different approaches after the lab

---

## <a id="uc-legacy-modernization-cobol-to-java"></a>uc-legacy-modernization-cobol-to-java

**Repository:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)

AWS Mainframe Modernization CardDemo (Apache 2.0). Contains 30+ COBOL programs (.cbl), JCL, DB2 integration, copybooks, and VSAM file definitions.

### Step 1: Get Started Fast

> Analyze the COBOL program CBACT01C.cbl in uc-legacy-modernization-cobol-to-java. Understand its business logic, data structures (copybooks), and I/O operations. Rewrite it as a Java 17+ application using modern idioms. Create JUnit tests that verify the Java version produces identical results to the COBOL version for a set of sample inputs. Open a PR with the Java code and tests.

### Step 2: Level Up with AskDevin

- *"What are the most complex COBOL programs in uc-legacy-modernization-cobol-to-java and what do they do?"*
- *"What would be the best Java architecture for migrating CBTRN01C.cbl? Consider Spring Boot, plain Java, or Kotlin."*
- Use the refined plan as your Devin session prompt — compare the result to your first attempt

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to see the auto-generated architecture diagrams, module relationships, and code explanations. Identify which COBOL programs interest you and what they do. Use this understanding to decide your own migration scope.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — does the Java code faithfully represent the COBOL business logic?
- **Leave a comment** asking Devin to handle a specific COBOL construct differently (e.g., *"Can you use an enum for the status codes instead of string constants?"*)
- Try migrating the **same program to two different targets** (e.g., Java and Python) in parallel sessions and compare results

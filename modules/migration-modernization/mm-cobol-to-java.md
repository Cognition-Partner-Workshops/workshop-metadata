# C1 — Legacy Modernization: COBOL to Java

## Challenge

Explore a real COBOL mainframe application and use Devin to modernize part of it to Java 17+. You choose what to migrate, how to structure the Java code, and what target language/framework to use — the goal is to see how Devin handles legacy code comprehension and translation.

## Repository

- **Primary:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Source:** AWS Mainframe Modernization CardDemo (Apache 2.0)
- **Contents:** 30+ COBOL programs (.cbl), JCL, DB2 integration, copybooks, VSAM file definitions

## Get Familiar First

Before diving in, explore the repo using **DeepWiki** to understand what's in it:
- Open the repo's DeepWiki page to see the auto-generated architecture diagrams, module relationships, and code explanations
- Identify which COBOL programs interest you and what they do
- Use this understanding to decide your own migration scope

## Task

Pick **any** approach that interests you — here are some ideas, but you are not limited to these:

1. **Migrate a batch program** — Select a COBOL batch program and rewrite it in Java 17+ with parity tests
2. **Migrate to a different target** — Instead of plain Java, try Kotlin, Python, or even a Spring Boot service
3. **Reverse-engineer and document** — Have Devin analyze a complex COBOL program and produce detailed technical documentation, data flow diagrams, or an architecture decision record
4. **Extract business rules** — Pull the business logic out of COBOL into a rules engine or decision table format
5. **Create a test harness** — Build a testing framework that can validate COBOL behavior against a modern implementation
6. **Modernize the data layer** — Analyze the DB2/VSAM data structures and design a modern relational or NoSQL schema

## Starting Points (if you want guidance)

The repo contains programs of varying complexity:

| Program | Description | Complexity | Good For |
|---------|-------------|-----------|----------|
| `CBACT01C.cbl` | Account file batch processing | Medium | First migration attempt |
| `CBACT02C.cbl` | Account data processing | Medium | Data transformation focus |
| `CBTRN01C.cbl` | Transaction processing | High | Complex business logic |
| `COTRTUPC.cbl` | Transaction type update | Low–Medium | Quick win |
| `CBSTM03A.cbl` | Statement generation | Medium–High | Report generation |

## Quick-Start Prompt (copy-paste ready)

If you want to get started immediately with minimal friction, paste this into Devin:

> Analyze the COBOL program CBACT01C.cbl in uc-legacy-modernization-cobol-to-java. Understand its business logic, data structures (copybooks), and I/O operations. Rewrite it as a Java 17+ application using modern idioms. Create JUnit tests that verify the Java version produces identical results to the COBOL version for a set of sample inputs. Open a PR with the Java code and tests.

## Level Up: Use AskDevin First

After your first attempt, try a different approach — go to **AskDevin** before starting a new session:

1. Ask: *"What are the most complex COBOL programs in uc-legacy-modernization-cobol-to-java and what do they do?"*
2. Use the answer to pick a more ambitious target
3. Ask: *"What would be the best Java architecture for migrating [program X]? Consider Spring Boot, plain Java, or Kotlin."*
4. Use the refined plan as your Devin session prompt

This shows how pre-planning with AskDevin leads to better session outcomes.

## Keep Exploring

After completing your first challenge, try other things in this repo:
- Pick a **different COBOL program** and compare how Devin handles varying complexity
- Ask Devin to **explain the copybook data structures** and generate a data dictionary
- Have Devin **identify dead code** or unused programs in the application
- Try migrating the **same program to two different targets** (e.g., Java and Python) in parallel sessions and compare results
- Ask Devin to **create a migration plan** for the entire application — not code, just a strategic document

## What Participants Will Learn

- How Devin reads and understands COBOL (a language most developers can't read)
- How Devin maps COBOL data structures (copybooks, WORKING-STORAGE) to modern equivalents
- How Devin handles COBOL-specific constructs (PERFORM, EVALUATE, file I/O, packed decimal)
- The importance of parity testing in migration
- How different prompting strategies (direct vs. AskDevin-refined) affect output quality

## Devin Features Exercised

- Multi-language understanding (COBOL → Java/Kotlin/Python)
- Code generation with architectural decisions
- Test generation for functional equivalence
- PR creation with detailed migration notes
- DeepWiki for codebase exploration
- AskDevin for pre-session planning
- Parallel sessions (if trying multiple migration targets)

## Difficulty

Intermediate to Advanced — depends on which program you pick and how much freedom you take.

## Estimated Time

60 minutes

## Notes

- The repo has no build system (COBOL is compiled on mainframes) — Devin will need to create a project structure from scratch
- There is no single "right answer" — different participants will produce different migrations and that's the point
- The CardDemo app includes DB2 SQL — the Java version can use JDBC, JPA, or an ORM
- Encourage participants to share and compare their different approaches after the lab

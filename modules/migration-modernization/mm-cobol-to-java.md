# C1 — Legacy Modernization: COBOL to Java

## Challenge

Migrate a small COBOL batch program that reads fixed-width input records, applies business rules, and produces a report file to Java 17+ while preserving behaviour with parity tests.

## Repository

- **Primary:** [uc-legacy-modernization-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernization-cobol-to-java)
- **Source:** AWS Mainframe Modernization CardDemo (Apache 2.0)
- **Contents:** 30+ COBOL programs (.cbl), JCL, DB2 integration, copybooks, VSAM file definitions

## Task

Select a COBOL batch program from the CardDemo application and migrate it to Java 17+. Write parity tests that verify the Java implementation produces identical outputs for identical inputs.

## Target Outcomes

- Java source code + tests with Maven build
- Parity tests: Java output matches COBOL output for provided fixtures
- `MIGRATION_NOTES.md` describing field mappings and decisions
- Clear separation: parsing, business rules, and output formatting

## Suggested Starting Points

The repo contains programs of varying complexity:

| Program | Description | Complexity |
|---------|-------------|-----------|
| `CBACT01C.cbl` | Account file batch processing | Medium |
| `CBACT02C.cbl` | Account data processing | Medium |
| `CBTRN01C.cbl` | Transaction processing | High |
| `COTRTUPC.cbl` | Transaction type update | Low–Medium |

## Sample Prompt

> Analyze the COBOL program CBACT01C.cbl in uc-legacy-modernization-cobol-to-java. Understand its business logic, data structures (copybooks), and I/O operations. Rewrite it as a Java 17+ application using modern idioms. Create JUnit tests that verify the Java version produces identical results to the COBOL version for a set of sample inputs. Open a PR with the Java code and tests.

## What Participants Will Learn

- How Devin reads and understands COBOL (a language most developers can't read)
- How Devin maps COBOL data structures (copybooks, WORKING-STORAGE) to Java classes
- How Devin handles COBOL-specific constructs (PERFORM, EVALUATE, file I/O, packed decimal)
- The importance of parity testing in migration

## Devin Features Exercised

- Multi-language understanding (COBOL → Java)
- Code generation with architectural decisions
- Test generation for functional equivalence
- PR creation with detailed migration notes

## Difficulty

Advanced — COBOL is unfamiliar to most participants; the migration requires deep understanding.

## Estimated Time

60 minutes

## Notes

- The repo has no build system (COBOL is compiled on mainframes) — Devin will need to create a Java project structure
- Participants should focus on one program, not the entire application
- The CardDemo app includes DB2 SQL — the Java version can use JDBC or an ORM

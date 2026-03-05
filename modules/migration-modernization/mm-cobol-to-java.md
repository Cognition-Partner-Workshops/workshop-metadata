# C1 — Legacy Modernisation: COBOL to Java

## Challenge

Migrate a COBOL batch program to Java 17+ with parity tests to verify functional equivalence.

## Repository

- **Primary:** [uc-legacy-modernisation-cobol-to-java](https://github.com/Cognition-Partner-Workshops/uc-legacy-modernisation-cobol-to-java)
- **Source:** AWS Mainframe Modernization CardDemo (Apache 2.0)
- **Contents:** 30+ COBOL programs (.cbl), JCL, DB2 integration, copybooks, VSAM file definitions

## Task

Select a COBOL batch program from the CardDemo application and migrate it to Java 17+. Write parity tests that verify the Java implementation produces identical outputs for identical inputs.

## Suggested Starting Points

The repo contains programs of varying complexity:

| Program | Description | Complexity |
|---------|-------------|-----------|
| `CBACT01C.cbl` | Account file batch processing | Medium |
| `CBACT02C.cbl` | Account data processing | Medium |
| `CBTRN01C.cbl` | Transaction processing | High |
| `COTRTUPC.cbl` | Transaction type update | Low–Medium |

## Sample Prompt

> Analyze the COBOL program CBACT01C.cbl in uc-legacy-modernisation-cobol-to-java. Understand its business logic, data structures (copybooks), and I/O operations. Rewrite it as a Java 17+ application using modern idioms. Create JUnit tests that verify the Java version produces identical results to the COBOL version for a set of sample inputs. Open a PR with the Java code and tests.

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

90 minutes

## Notes

- The repo has no build system (COBOL is compiled on mainframes) — Devin will need to create a Java project structure
- Participants should focus on one program, not the entire application
- The CardDemo app includes DB2 SQL — the Java version can use JDBC or an ORM

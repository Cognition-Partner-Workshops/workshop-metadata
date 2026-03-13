# QE8

## Repositories

- [uc-document-review-automation](#uc-document-review-automation)

---

## Challenge

Implement and improve automated document review for loan correction processing. This exercises Devin's ability to work with document extraction pipelines, fuzzy matching algorithms, confidence-based decisioning, and audit logging for compliance.

## Target Outcomes

- Document extraction pipeline that handles PDF, image, and form-based inputs
- Field comparison engine with exact, fuzzy, and numeric matching strategies
- Decision agent with configurable confidence thresholds and escalation logic
- Audit agent that logs all decisions for compliance traceability
- PR with comparator improvements and unit tests

## What Participants Will Learn

- How Devin works with multi-strategy comparison engines (exact, fuzzy, numeric)
- How Devin implements confidence-based auto-approval decisioning
- Devin's ability to build compliance-oriented audit logging
- How to evaluate AI-generated document processing code

## Devin Features Exercised

- Multi-module Python development (extractors, comparators, agents)
- Algorithm implementation (fuzzy matching, Jaccard similarity)
- Configuration-driven architecture (YAML comparison rules)
- Unit test generation for comparison logic
- PR creation with architectural documentation

## Difficulty

Intermediate

## Estimated Time

45 minutes

---

## <a id="uc-document-review-automation"></a>uc-document-review-automation

**Repository:** [uc-document-review-automation](https://github.com/Cognition-Partner-Workshops/uc-document-review-automation)

Python document review automation system with extraction, comparison, decisioning, and audit agents for loan processing workflows.

### Step 1: Get Started Fast

> Review the uc-document-review-automation codebase. The fuzzy_comparator currently uses Jaccard similarity on bigrams for name matching. Enhance it to also support Levenshtein distance as an alternative strategy, configurable via comparison_rules.yaml. Add unit tests comparing accuracy of both strategies on sample name pairs (with typos, abbreviations, and reordering). Open a PR.

### Step 2: Level Up with AskDevin

- *"What document types are most likely to have extraction errors? How should the decision agent weight confidence differently by document type?"*
- *"Should the audit agent support structured query capabilities (e.g., find all reviews with confidence below 0.8)?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the extraction-comparison-decision pipeline and the field routing logic in the comparison agent. Identify which document types would benefit from specialized extraction templates.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — does the Levenshtein implementation handle Unicode characters correctly?
- **Leave a comment** asking Devin to add a batch processing CLI that reads a directory of documents and outputs a comparison report

# LLM Integration Patterns

## Repositories

- [app_timesheet](#app_timesheet)
- [uc-document-review-automation](#uc-document-review-automation)

---

## Challenge

Add LLM-powered features to existing applications — such as summarization, classification, or semantic search — with proper error handling, rate limiting, and fallback behavior. This exercises Devin's ability to integrate AI services into production codebases.

## Target Outcomes

- LLM integration with at least one feature (summarization, classification, or search)
- Proper error handling, rate limiting, and fallback behavior
- Configuration for API keys and model selection (not hardcoded)
- Usage documentation explaining the integration and how to configure it
- PR with LLM integration and usage documentation

## What Participants Will Learn

- How Devin integrates external AI/LLM services into existing application architectures
- How Devin handles production concerns like error handling, retries, and rate limiting
- How Devin structures prompt templates and manages LLM configuration
- The importance of specifying fallback behavior and error handling requirements in prompts

## Devin Features Exercised

- API integration and service architecture
- Error handling and resilience patterns
- Prompt engineering and LLM configuration
- PR creation with integration documentation

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

## Notes

- Participants do not need real API keys — Devin should scaffold the integration with configurable API key settings and mock/stub modes for testing
- Good follow-up: have participants review each other's LLM integrations for prompt quality and error handling robustness
- Encourage specifying the exact LLM feature desired (summarization, classification, etc.) rather than leaving it open-ended

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

React + Node.js/Express timesheet application — add LLM-powered smart categorization or description summarization for timesheet entries.

### Step 1: Paste into Devin

> Add an LLM-powered feature to app_timesheet that automatically categorizes and summarizes timesheet entries. Create a backend service that: (1) accepts a timesheet entry description and returns a suggested category (development, meeting, review, admin, etc.) and a one-line summary, (2) uses an OpenAI-compatible API with the model and API key configurable via environment variables, (3) includes a fallback that returns a default category and the original description if the LLM is unavailable, (4) implements rate limiting (max 10 requests/minute per user), and (5) exposes this as POST /api/entries/:id/categorize. Add a simple UI button that triggers categorization. Include a README section explaining configuration. Open a PR.

### Step 2: Research with Ask Devin

- *"What is the structure of timesheet entries in app_timesheet? What fields are available as input for LLM-based categorization?"*
- *"What categories or tags already exist in the app? Should the LLM use existing categories or suggest new ones?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the entry data model and existing categorization patterns. The LLM integration should complement, not replace, any existing classification logic.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the integration handle API failures gracefully? Is the API key properly secured (not hardcoded)?
- **Leave a comment** asking Devin to add a batch categorization endpoint that processes multiple entries in a single LLM call
- **Watch Devin respond** and push a follow-up commit

---

## <a id="uc-document-review-automation"></a>uc-document-review-automation

**Repository:** [uc-document-review-automation](https://github.com/Cognition-Partner-Workshops/uc-document-review-automation)

Document review automation repository — enhance with LLM-powered summarization and key finding extraction for reviewed documents.

### Step 1: Paste into Devin

> Enhance uc-document-review-automation with LLM-powered document analysis. Add a service that: (1) takes a document (text or markdown) and produces a structured summary with key findings, risk areas, and action items, (2) classifies each finding by severity (critical, major, minor, informational), (3) uses an OpenAI-compatible API with configurable model and API key via environment variables, (4) includes retry logic with exponential backoff for transient API failures and a stub mode for testing without a live API, and (5) outputs results in a structured JSON format suitable for downstream processing. Add unit tests with mocked LLM responses. Include documentation explaining the integration architecture. Open a PR.

### Step 2: Research with Ask Devin

- *"What document types and review workflows exist in uc-document-review-automation? What structure should the LLM output follow to be compatible?"*
- *"What existing automation does the repo provide? How should LLM-powered analysis integrate with the current review pipeline?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the document review pipeline and output formats. The LLM integration should produce output compatible with existing review workflows.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the prompt templates well-structured? Does the severity classification logic make sense for the document types?
- **Leave a comment** asking Devin to add a comparison mode that highlights differences between the LLM summary and any existing manual review notes
- **Watch Devin respond** and push a follow-up commit

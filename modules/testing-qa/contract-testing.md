# Contract Testing

## Repositories

- [app_petclinic-microservices](#app_petclinic-microservices)
- [app_dotnet_angular_containerized_decomposition_microservices](#app_dotnet_angular_containerized_decomposition_microservices)

---

## Challenge

Generate consumer-driven contract tests (Pact or Spring Cloud Contract) for service boundaries in microservice architectures. Tests verify that services can communicate correctly across API boundaries.

## Target Outcomes

- Contract test suite covering at least 2 service boundaries
- Consumer and provider test stubs generated
- Contract verification passing in CI
- PR with contract tests and documentation

## What Participants Will Learn

- How Devin analyzes microservice communication patterns to identify contract boundaries
- How Devin selects and configures the appropriate contract testing framework for the tech stack
- Devin's ability to generate both consumer and provider sides of a contract
- How to evaluate whether generated contracts cover real integration risks

## Devin Features Exercised

- Microservice architecture understanding
- Test framework selection and configuration
- Cross-service analysis
- PR creation

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

---

## <a id="app_petclinic-microservices"></a>app_petclinic-microservices

**Repository:** [app_petclinic-microservices](https://github.com/Cognition-Partner-Workshops/app_petclinic-microservices)

Spring Cloud microservices with multiple service boundaries (API Gateway, Customers, Visits, Vets) communicating via REST.

### Step 1: Paste into Devin

> Analyze the service boundaries in app_petclinic-microservices. The API Gateway calls Customers Service and Visits Service via WebClient. Generate Spring Cloud Contract tests for at least 2 of these service boundaries — create both the consumer (gateway) and provider (service) contract tests. Ensure the contract verification passes. Open a PR with the contract tests and a brief README explaining how to run them.

### Step 2: Research with Ask Devin

- *"What are the main service-to-service communication patterns in app_petclinic-microservices? Which boundaries carry the most data?"*
- *"Should we use Spring Cloud Contract or Pact for this Spring Boot microservices project? What are the tradeoffs?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the API Gateway's aggregation pattern — it calls both CustomersServiceClient and VisitsServiceClient and merges results. These are the primary contract boundaries to test.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — do the contracts accurately reflect the real API payloads between services? Check that field names and types match the actual DTOs
- **Leave a comment** asking Devin to add a contract test for the Vets Service boundary
- **Watch Devin respond** and push a follow-up commit

---

## <a id="app_dotnet_angular_containerized_decomposition_microservices"></a>app_dotnet_angular_containerized_decomposition_microservices

**Repository:** [app_dotnet_angular_containerized_decomposition_microservices](https://github.com/Cognition-Partner-Workshops/app_dotnet_angular_containerized_decomposition_microservices)

.NET microservices with Angular frontend — a containerized decomposition architecture with multiple service boundaries.

### Step 1: Paste into Devin

> Analyze the service boundaries in app_dotnet_angular_containerized_decomposition_microservices. Identify the inter-service API contracts and generate Pact consumer-driven contract tests for at least 2 service boundaries. Create both consumer and provider test implementations. Open a PR with the contract tests, a Pact broker configuration guide, and instructions for running the tests locally.

### Step 2: Research with Ask Devin

- *"What inter-service communication patterns exist in this .NET microservices project? Are services using REST, gRPC, or message queues?"*
- *"What is the best contract testing approach for .NET microservices — Pact.NET or a custom solution?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the decomposition boundaries and identify which services depend on each other's APIs.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the Pact interactions realistic? Do they cover error scenarios as well as happy paths?
- **Leave a comment** asking Devin to add contract tests for an additional service boundary or an error response scenario
- **Watch Devin respond** and push a follow-up commit

# QE6

## Repositories

- [app_timesheet](#app_timesheet)
- [cal.com](#calcom)
- [uc-framework-upgrade-monolith-to-microservices](#uc-framework-upgrade-monolith-to-microservices)

---

## Challenge

Profile, benchmark, and optimize application performance. This challenge covers identifying performance bottlenecks, adding benchmarks, optimizing database queries, and improving response times.

## Target Outcomes

- Performance bottlenecks identified with evidence (profiling data, slow query logs, etc.)
- At least one optimization implemented with before/after measurements
- Benchmark or load test script created for regression testing
- PR with optimization changes and performance evidence

## What Participants Will Learn

- How Devin profiles and measures application performance
- How Devin identifies N+1 queries, slow endpoints, and memory issues
- How Devin implements optimizations (caching, query optimization, indexing)
- The importance of measuring before and after optimization

## Devin Features Exercised

- Runtime application profiling
- Database query analysis
- Code optimization
- PR creation with performance evidence

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

## Prerequisites

The application should be running locally for profiling. See [runtime-resources.md](../../shared/runtime-resources.md) for hosted instance details.

---

## <a id="app_timesheet"></a>app_timesheet

**Repository:** [app_timesheet](https://github.com/Cognition-Partner-Workshops/app_timesheet)

Node.js/Express backend with SQLite — good candidate for query optimization and API response time improvement.

### Step 1: Get Started Fast

> Run app_timesheet locally and profile the API endpoints. Identify the slowest endpoints and database queries. Add request timing middleware to measure response times. Optimize the top 3 slowest operations (query optimization, adding indexes, caching). Create a simple benchmark script to measure before/after performance. Open a PR with the optimizations and evidence.

### Step 2: Level Up with AskDevin

- *"Are there any N+1 query patterns in the work entries or client listing endpoints?"*
- *"What SQLite indexes would most improve query performance for the typical access patterns?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the data access patterns and API usage. Identify which endpoints are most likely to be called frequently.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are the optimizations safe? Do they change any API contracts?
- **Leave a comment** asking Devin to add a specific index or caching strategy you think would help

---

## <a id="calcom"></a>cal.com

**Repository:** [cal.com](https://github.com/Cognition-Partner-Workshops/cal.com)

Complex Next.js application with Prisma ORM — many opportunities for database query optimization and frontend performance improvement.

### Step 1: Get Started Fast

> Start cal.com locally with `yarn dev`. Profile the booking page load time and the availability check API. Identify slow database queries using Prisma query logging. Optimize the top 3 performance bottlenecks. Create before/after measurements. Open a PR.

### Step 2: Level Up with AskDevin

- *"What are the most expensive Prisma queries in cal.com? Are there any missing database indexes?"*
- *"Are there any React components that re-render unnecessarily on the booking page?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the booking engine and availability calculation logic. These are likely the most performance-critical paths.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — do the optimizations maintain data correctness?
- **Leave a comment** asking Devin to benchmark a specific high-traffic endpoint

---

## <a id="uc-framework-upgrade-monolith-to-microservices"></a>uc-framework-upgrade-monolith-to-microservices

**Repository:** [uc-framework-upgrade-monolith-to-microservices](https://github.com/Cognition-Partner-Workshops/uc-framework-upgrade-monolith-to-microservices)

Spring Boot monolith with MyBatis and SQLite — opportunities for query optimization, connection pooling, and caching.

### Step 1: Get Started Fast

> Run uc-framework-upgrade-monolith-to-microservices locally and profile the article listing and feed endpoints. Enable SQL logging to identify slow queries. Add Spring Boot Actuator for metrics. Optimize the top 3 performance bottlenecks (query optimization, caching with Spring Cache, pagination improvements). Open a PR with evidence.

### Step 2: Level Up with AskDevin

- *"Are there any N+1 query patterns in the article feed or comment loading?"*
- *"Would adding Redis or in-memory caching significantly improve the article feed performance?"*

### Step 3: Explore with DeepWiki

Open the repo's DeepWiki page to understand the data access patterns. Identify which MyBatis mappers could benefit from query optimization or result caching.

### Step 4: Review the PR and Give Feedback

- **Review the diff** — are cache invalidation strategies correct? Do optimized queries return the same results?
- **Leave a comment** asking Devin to add a JMH benchmark for a specific hot path

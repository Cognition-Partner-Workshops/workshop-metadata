# Sample Node.js REST API with AWS CDK

A production-ready Node.js REST API deployed on AWS Lambda with **zero cold starts**, using AWS CDK for infrastructure and GitLab CI/CD for automated deployment.

## Architecture

```
                    ┌──────────────┐
  Client ──────►   │ API Gateway  │
                    │  REST API    │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │   Lambda     │ ◄── Provisioned Concurrency (2-10 instances)
                    │  (Node 20)   │     Auto-scales at 70% utilization
                    │  Express.js  │
                    └──────────────┘
```

### No Cold Start Strategy

This project eliminates Lambda cold starts through:

1. **Provisioned Concurrency** — Keeps 2 warm Lambda instances ready at all times
2. **Auto-Scaling** — Scales from 2 to 10 provisioned instances based on 70% utilization threshold
3. **ARM64 Architecture** — Faster startup times and lower cost than x86
4. **esbuild Bundling** — CDK bundles with esbuild for minimal package size and fast initialization
5. **Lambda Alias Routing** — API Gateway routes to a Lambda alias (not `$LATEST`), ensuring requests always hit provisioned instances

## REST API Endpoints

| Method | Path             | Description        |
|--------|------------------|--------------------|
| GET    | `/`              | Service info       |
| GET    | `/health`        | Health check       |
| GET    | `/api/items`     | List all items     |
| GET    | `/api/items/:id` | Get item by ID     |
| POST   | `/api/items`     | Create new item    |
| PUT    | `/api/items/:id` | Update item        |
| DELETE | `/api/items/:id` | Delete item        |

## Prerequisites

- Node.js 20+
- AWS CLI configured with credentials
- AWS CDK CLI (`npm install -g aws-cdk`)

## Quick Start

### Install Dependencies

```bash
npm install
```

### Local Development

```bash
npm run dev
# Server starts at http://localhost:3000
```

### Run Tests

```bash
npm test
```

### Lint

```bash
npm run lint
```

### Deploy with CDK

```bash
# Bootstrap CDK (first time only)
npx cdk bootstrap

# Deploy to dev
npx cdk deploy --context env=dev

# Deploy to staging
npx cdk deploy --context env=staging

# Deploy to production
npx cdk deploy --context env=prod
```

## Project Structure

```
├── bin/
│   └── app.js              # CDK app entry point
├── lib/
│   └── api-stack.js        # CDK stack (Lambda, API GW, Provisioned Concurrency)
├── src/
│   ├── app.js              # Express application
│   ├── handler.js          # Lambda handler (serverless-express)
│   ├── local.js            # Local dev server
│   └── routes/
│       ├── health.js       # Health check endpoint
│       └── items.js        # CRUD items endpoints
├── test/
│   └── api-stack.test.js   # CDK stack tests
├── .gitlab-ci.yml          # GitLab CI/CD pipeline
├── cdk.json                # CDK configuration
└── package.json
```

## GitLab CI/CD Pipeline

The `.gitlab-ci.yml` defines a multi-stage pipeline:

```
validate ──► test ──► build ──► deploy
 (lint)       (jest)   (synth)   (dev → staging → prod)
```

### Required GitLab CI/CD Variables

Set these in **Settings > CI/CD > Variables**:

| Variable              | Description                          |
|-----------------------|--------------------------------------|
| `AWS_ACCESS_KEY_ID`   | AWS IAM access key                   |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM secret key                 |
| `AWS_DEFAULT_REGION`  | AWS region (default: `us-east-1`)    |
| `CDK_DEFAULT_ACCOUNT` | AWS account ID for CDK               |

### Deployment Flow

- Push to `develop` → auto-deploys to **dev**
- Push to `main` → manual deploy to **dev**, **staging**, then **production**

## Customization

### Change Provisioned Concurrency

Edit `lib/api-stack.js`:

```javascript
provisionedConcurrentExecutions: 5, // increase warm instances
```

### Add DynamoDB Table

The items are currently in-memory. To persist data, add a DynamoDB table to `lib/api-stack.js` and update the routes in `src/routes/items.js`.

## Cost Considerations

Provisioned Concurrency incurs charges even when not handling requests. For development environments, consider setting `provisionedConcurrentExecutions: 0` or removing it entirely.

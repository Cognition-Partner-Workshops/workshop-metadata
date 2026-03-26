# Sample Node.js REST API with AWS CDK

A Node.js REST API deployed on **EC2** behind **API Gateway HTTP API**, using AWS CDK for infrastructure and GitLab CI/CD for automated deployment. **Zero cold start, zero latency** — the Express.js server is always running on EC2.

## Architecture

```
                    ┌──────────────────┐
  Client ──────►   │ API Gateway      │
                    │ HTTP API         │
                    └──────┬───────────┘
                           │  HTTP Proxy
                    ┌──────▼───────────┐
                    │   EC2 (t3.micro) │ ◄── Always running, no cold start
                    │   Express.js     │     systemd auto-restart
                    │   Port 3000      │
                    └──────────────────┘
```

### Why EC2 instead of Lambda?

- **Zero cold start** — Express.js runs continuously on EC2, always ready
- **Consistent low latency** — no initialization overhead on each request
- **Direct access** — can also hit the EC2 instance directly (bypass API Gateway)
- **Simple architecture** — no VPC Link or NLB needed

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

After deployment, you get two URLs:
- **API Gateway URL**: `https://<api-id>.execute-api.<region>.amazonaws.com/<env>/`
- **Direct EC2 URL**: `http://<ec2-public-ip>:3000/` (bypass API Gateway)

## Project Structure

```
├── bin/
│   └── app.js              # CDK app entry point
├── lib/
│   └── api-stack.js        # CDK stack (VPC, EC2, API Gateway HTTP API)
├── src/
│   ├── app.js              # Express application (local dev)
│   ├── handler.js          # Lambda handler (kept for reference)
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

### Change Instance Type

Edit `lib/api-stack.js`:

```javascript
instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.SMALL),
```

### Add DynamoDB or RDS

The items are currently in-memory. To persist data, add a DynamoDB table or RDS instance in `lib/api-stack.js` and update the app code on EC2.

## Cost Considerations

- **EC2 t3.micro**: ~$8.50/month (or free tier eligible for first 12 months)
- **API Gateway HTTP API**: $1.00 per million requests
- Much simpler billing than Lambda with Provisioned Concurrency

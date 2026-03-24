# Cost Optimization Analysis

## Repositories

- [hosting-client-timesheet-app](#hosting-client-timesheet-app)
- [cal.com-infra](#calcom-infra)

---

## Challenge

Analyze cloud infrastructure configurations and recommend cost optimizations. Review resource sizing, identify unused resources, and suggest right-sizing or architectural changes to reduce costs.

## Target Outcomes

- Cost analysis report with current resource inventory
- Right-sizing recommendations with projected savings
- Identified unused or underutilized resources
- PR with optimized configurations and cost analysis document

## What Participants Will Learn

- How Devin analyzes infrastructure-as-code to identify cost optimization opportunities
- How Devin estimates cost impacts of resource sizing changes
- Devin's ability to recommend architectural alternatives that reduce cloud spend
- How to evaluate cost optimization recommendations for risk and feasibility

## Devin Features Exercised

- Infrastructure analysis
- Cost modeling
- Terraform/IaC understanding
- Technical writing

## Difficulty

Intermediate

## Estimated Time

45 minutes

---

## <a id="hosting-client-timesheet-app"></a>hosting-client-timesheet-app

**Repository:** [hosting-client-timesheet-app](https://github.com/Cognition-Partner-Workshops/hosting-client-timesheet-app)

AWS infrastructure (EC2, ECR, VPC) for a Node.js application — review resource sizing and identify optimization opportunities.

### Step 1: Paste into Devin

> Analyze the AWS infrastructure defined in hosting-client-timesheet-app's Terraform configurations. Create a cost optimization report that includes: a current resource inventory with estimated monthly costs, right-sizing recommendations for EC2 instances based on the application's workload profile, identification of any over-provisioned or unused resources, and specific Terraform changes to implement the optimizations. Consider alternatives like Fargate vs EC2, reserved instances vs on-demand, and S3 lifecycle policies. Open a PR with an optimized Terraform configuration and a detailed cost analysis document (COST_ANALYSIS.md) showing current vs recommended costs.

### Step 2: Research with Ask Devin

- *"What EC2 instance types and sizes are used in hosting-client-timesheet-app? Are they appropriate for a Node.js Express application?"*
- *"Are there any resources defined in Terraform that might be over-provisioned for a timesheet application's typical workload?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the infrastructure architecture. Pay attention to resource sizing, storage configurations, and any resources that seem over-provisioned for the application's needs.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the cost estimates realistic? Check that the optimization recommendations don't compromise application reliability
- **Leave a comment** asking Devin to add a comparison table showing on-demand vs reserved instance pricing for the recommended instance types
- **Watch Devin respond** and push a follow-up commit

---

## <a id="calcom-infra"></a>cal.com-infra

**Repository:** [cal.com-infra](https://github.com/Cognition-Partner-Workshops/cal.com-infra)

Infrastructure configuration for deploying cal.com — a more complex cloud setup with database, caching, and application tiers to analyze for cost efficiency.

### Step 1: Paste into Devin

> Analyze the infrastructure configurations in cal.com-infra and create a comprehensive cost optimization report. Review: compute resource sizing for the application tier, database instance sizing and storage allocation, caching layer configuration, network transfer costs, and any unused or redundant resources. Provide specific recommendations with estimated monthly savings for each optimization. Consider managed vs self-hosted tradeoffs, auto-scaling configurations, and storage tier optimization. Open a PR with a COST_ANALYSIS.md report and any Terraform changes that implement quick-win optimizations.

### Step 2: Research with Ask Devin

- *"What cloud resources are provisioned in cal.com-infra? What are the most expensive components based on the resource types and sizes?"*
- *"Are there any auto-scaling configurations? Could the infrastructure benefit from scaling to zero during off-peak hours?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the infrastructure topology and resource interdependencies. Identify which tiers (compute, database, cache) represent the largest cost and where right-sizing would have the most impact.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — do the savings estimates account for the application's actual usage patterns? Check that database right-sizing recommendations include performance impact analysis
- **Leave a comment** asking Devin to add a cost projection showing monthly savings over 12 months with recommended changes
- **Watch Devin respond** and push a follow-up commit

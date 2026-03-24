# Terraform Module Extraction

## Repositories

- [hosting-client-timesheet-app](#hosting-client-timesheet-app)
- [app_dotnet-angular-monolith-iac](#app_dotnet-angular-monolith-iac)

---

## Challenge

Refactor monolithic Terraform configurations into reusable, composable modules. Extract common patterns (networking, compute, storage) into versioned modules with clear interfaces.

## Target Outcomes

- Extracted Terraform modules with clear input/output interfaces
- Module documentation with usage examples
- Refactored root module using the extracted child modules
- PR with modularized Terraform and migration guide

## What Participants Will Learn

- How Devin identifies repeated patterns and extraction opportunities in Terraform code
- How Devin designs module interfaces with appropriate input variables and outputs
- Devin's ability to refactor infrastructure code while preserving behavior
- How to evaluate Terraform modules for reusability and composability

## Devin Features Exercised

- Infrastructure-as-Code understanding
- Refactoring
- Module design
- PR creation

## Difficulty

Intermediate to Advanced

## Estimated Time

60 minutes

---

## <a id="hosting-client-timesheet-app"></a>hosting-client-timesheet-app

**Repository:** [hosting-client-timesheet-app](https://github.com/Cognition-Partner-Workshops/hosting-client-timesheet-app)

AWS infrastructure for hosting a Node.js application — Terraform configurations covering EC2, ECR, networking, and IAM.

### Step 1: Paste into Devin

> Analyze the Terraform configurations in hosting-client-timesheet-app and refactor them into reusable modules. Extract at least 3 modules: networking (VPC, subnets, security groups), compute (EC2 instance, IAM roles), and container registry (ECR repository, lifecycle policies). Each module should have clear input variables, outputs, and a README with usage examples. Refactor the root module to use the extracted child modules. Ensure `terraform plan` shows no changes after refactoring. Open a PR with the modularized Terraform, module documentation, and a migration guide.

### Step 2: Research with Ask Devin

- *"What Terraform resources exist in hosting-client-timesheet-app? Which ones are tightly coupled and which can be cleanly extracted into modules?"*
- *"Are there any Terraform state considerations when extracting modules? How do we ensure the refactoring doesn't trigger resource recreation?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the infrastructure architecture and resource dependencies. Identify which resources form natural module boundaries (networking, compute, storage).

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — do the module interfaces follow Terraform best practices? Check that variables have descriptions, types, and sensible defaults
- **Leave a comment** asking Devin to add validation blocks for critical input variables (e.g., CIDR ranges, instance types)
- **Watch Devin respond** and push a follow-up commit

---

## <a id="app_dotnet-angular-monolith-iac"></a>app_dotnet-angular-monolith-iac

**Repository:** [app_dotnet-angular-monolith-iac](https://github.com/Cognition-Partner-Workshops/app_dotnet-angular-monolith-iac)

Infrastructure-as-Code for a .NET/Angular monolith deployment — Terraform configurations for cloud infrastructure provisioning.

### Step 1: Paste into Devin

> Analyze the Terraform configurations in app_dotnet-angular-monolith-iac and extract reusable modules. Identify common infrastructure patterns and create modules for: networking (VPC/VNET, subnets, NSGs), application hosting (App Service/compute, scaling rules), and data storage (database, blob storage). Design each module with clear variable interfaces and output values. Refactor the root configuration to compose these modules. Open a PR with the extracted modules, documentation, and a migration guide explaining the before/after structure.

### Step 2: Research with Ask Devin

- *"What cloud provider and Terraform resources are used in app_dotnet-angular-monolith-iac? Is this AWS, Azure, or multi-cloud?"*
- *"What patterns are repeated across the Terraform files that would benefit from module extraction?"*

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the infrastructure topology and resource relationships. Map out which resources depend on each other to determine the best module boundaries.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — are the module boundaries clean? Check that there are no circular dependencies between modules
- **Leave a comment** asking Devin to add output values that enable cross-module references (e.g., networking module outputs subnet IDs consumed by compute module)
- **Watch Devin respond** and push a follow-up commit

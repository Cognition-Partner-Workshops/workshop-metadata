# IaC Translation

## Repositories

- [timesheet-infra](#timesheet-infra)

---

## Challenge

Convert infrastructure as code from one ecosystem to another. This exercises Devin's understanding of cloud resource semantics across different IaC paradigms — declarative (Terraform, CloudFormation) vs. imperative (CDK, Pulumi).

## Target Outcomes

- IaC translated to the target ecosystem with all resources preserved
- Translated code validates/synthesizes successfully
- Resource definitions, outputs, and variable handling preserved
- PR with translated IaC

## What Participants Will Learn

- How Devin translates between IaC paradigms (declarative vs. imperative)
- Devin's understanding of cloud resource semantics across tool ecosystems
- How to validate IaC translations (synth, plan, diff)

## Devin Features Exercised

- IaC comprehension and translation
- Tool installation (CDK, Pulumi CLI)
- Build verification
- PR creation

## Difficulty

Intermediate

## Estimated Time

45 minutes

---

## <a id="timesheet-infra"></a>timesheet-infra

**Repository:** [timesheet-infra](https://github.com/Cognition-Partner-Workshops/timesheet-infra)

Terraform infrastructure code for hosting the timesheet application. Translate to AWS CDK, CloudFormation, or Pulumi.

### Step 1: Paste into Devin

> Convert the Terraform configuration in timesheet-infra to AWS CDK using TypeScript. Preserve all resource definitions, outputs, and variable handling. Create a new cdk/ directory with the translated code. Verify it synthesizes correctly with `cdk synth`. Open a PR.

### Step 2: Research with Ask Devin

- *"What Terraform resources are defined in timesheet-infra? What AWS services do they provision?"*
- *"What's the best CDK pattern for translating Terraform modules — L1 constructs (raw CloudFormation) or L2 constructs (higher-level abstractions)?"*
- Try a different translation target (Pulumi, CloudFormation) and compare the output

### Step 3 (Optional): Read the DeepWiki

Open the repo's DeepWiki page to understand the infrastructure topology. Map out the Terraform resources and their relationships to ensure nothing is lost in translation.

### Step 4 (Optional): Review & Give Feedback

- **Review the diff** — does the CDK code produce equivalent CloudFormation to the Terraform plan?
- **Leave a comment** asking Devin to add unit tests for the CDK constructs using the CDK assertions library
- **Watch Devin respond** and push a follow-up commit

# C6 — Infrastructure as Code Translation

## Challenge

Convert infrastructure as code from one ecosystem to another.

## Options

- **Repository:** [hosting-client-timesheet-app](https://github.com/Cognition-Partner-Workshops/hosting-client-timesheet-app) (Terraform)
- **Repository:** [cal.com-infra](https://github.com/Cognition-Partner-Workshops/cal.com-infra)

## Task

Convert the IaC to another ecosystem. Possible translations:
- Terraform → AWS CDK (TypeScript or Python)
- Terraform → AWS CloudFormation
- Terraform → Pulumi
- CloudFormation → Terraform

## Sample Prompt

> Convert the Terraform configuration in hosting-client-timesheet-app to AWS CDK using TypeScript. Preserve all resource definitions, outputs, and variable handling. Create a new cdk/ directory with the translated code. Verify it synthesizes correctly with `cdk synth`. Open a PR.

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

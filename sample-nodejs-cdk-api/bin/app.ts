#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ApiStack } from '../lib/api-stack';

const app = new cdk.App();

const envName = app.node.tryGetContext('env') || 'dev';

new ApiStack(app, `NodejsRestApi-${envName}`, {
  envName,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
  },
  description: `Node.js REST API stack (${envName}) - Lambda with Provisioned Concurrency`,
});

app.synth();

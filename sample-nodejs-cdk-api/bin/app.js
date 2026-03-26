#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { ApiStack } = require('../lib/api-stack');

const app = new cdk.App();

const envName = app.node.tryGetContext('env') || 'dev';

new ApiStack(app, `NodejsRestApi-${envName}`, {
  envName,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
  },
  description: `Node.js REST API stack (${envName}) - EC2 with API Gateway HTTP API`,
});

app.synth();

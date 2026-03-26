const cdk = require('aws-cdk-lib');
const ec2 = require('aws-cdk-lib/aws-ec2');
const iam = require('aws-cdk-lib/aws-iam');
const apigwv2 = require('aws-cdk-lib/aws-apigatewayv2');

class ApiStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const { envName } = props;

    // -------------------------------------------------------
    // VPC — default public subnet for simplicity
    // -------------------------------------------------------
    const vpc = new ec2.Vpc(this, 'ApiVpc', {
      vpcName: `nodejs-rest-api-vpc-${envName}`,
      maxAzs: 2,
      natGateways: 0,
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
      ],
    });

    // -------------------------------------------------------
    // Security Group — allow HTTP traffic on port 3000
    // -------------------------------------------------------
    const sg = new ec2.SecurityGroup(this, 'ApiSG', {
      vpc,
      securityGroupName: `nodejs-rest-api-sg-${envName}`,
      description: 'Allow HTTP traffic to Express API on port 3000',
      allowAllOutbound: true,
    });

    sg.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(3000),
      'Allow HTTP on port 3000 from API Gateway'
    );

    sg.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      'Allow SSH access'
    );

    // -------------------------------------------------------
    // IAM Role for EC2
    // -------------------------------------------------------
    const role = new iam.Role(this, 'Ec2Role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'),
      ],
    });

    // -------------------------------------------------------
    // EC2 Instance — runs Express.js API on port 3000
    // -------------------------------------------------------
    const userData = ec2.UserData.forLinux();
    userData.addCommands(
      '#!/bin/bash',
      'set -e',

      // Install Node.js 20
      'curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -',
      'yum install -y nodejs git',

      // Create app directory
      'mkdir -p /home/ec2-user/app',
      'cd /home/ec2-user/app',

      // Write package.json
      'cat > package.json << \'PKG\'',
      '{',
      '  "name": "nodejs-rest-api",',
      '  "version": "1.0.0",',
      '  "dependencies": {',
      '    "express": "^4.18.3"',
      '  }',
      '}',
      'PKG',

      // Write the Express app
      'cat > app.js << \'APP\'',
      'const express = require("express");',
      'const app = express();',
      'app.use(express.json());',
      '',
      '// In-memory store',
      'const items = new Map();',
      'items.set("1", { id: "1", name: "Sample Item 1", description: "First sample item", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });',
      'items.set("2", { id: "2", name: "Sample Item 2", description: "Second sample item", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });',
      '',
      'app.get("/", (_req, res) => res.json({ service: "nodejs-rest-api", version: "1.0.0", endpoints: ["GET /health", "GET /api/items", "GET /api/items/:id", "POST /api/items", "PUT /api/items/:id", "DELETE /api/items/:id"] }));',
      'app.get("/health", (_req, res) => res.json({ status: "healthy", timestamp: new Date().toISOString(), uptime: process.uptime() }));',
      'app.get("/api/items", (_req, res) => res.json({ items: Array.from(items.values()), count: items.size }));',
      'app.get("/api/items/:id", (req, res) => { const item = items.get(req.params.id); if (!item) return res.status(404).json({ error: "Item not found" }); res.json(item); });',
      'app.post("/api/items", (req, res) => { const { name, description } = req.body; if (!name || !description) return res.status(400).json({ error: "name and description are required" }); const id = String(Date.now()); const now = new Date().toISOString(); const item = { id, name, description, createdAt: now, updatedAt: now }; items.set(id, item); res.status(201).json(item); });',
      'app.put("/api/items/:id", (req, res) => { const existing = items.get(req.params.id); if (!existing) return res.status(404).json({ error: "Item not found" }); const { name, description } = req.body; const updated = { ...existing, name: name || existing.name, description: description || existing.description, updatedAt: new Date().toISOString() }; items.set(req.params.id, updated); res.json(updated); });',
      'app.delete("/api/items/:id", (req, res) => { if (!items.has(req.params.id)) return res.status(404).json({ error: "Item not found" }); items.delete(req.params.id); res.status(204).send(); });',
      '',
      'const PORT = process.env.PORT || 3000;',
      'app.listen(PORT, "0.0.0.0", () => console.log(`API running on port ${PORT}`));',
      'APP',

      // Install dependencies and start
      'npm install',
      'chown -R ec2-user:ec2-user /home/ec2-user/app',

      // Create systemd service for auto-start
      'cat > /etc/systemd/system/nodejs-api.service << \'SVC\'',
      '[Unit]',
      'Description=Node.js REST API',
      'After=network.target',
      '',
      '[Service]',
      'Type=simple',
      'User=ec2-user',
      'WorkingDirectory=/home/ec2-user/app',
      'ExecStart=/usr/bin/node /home/ec2-user/app/app.js',
      'Restart=always',
      'RestartSec=5',
      'Environment=NODE_ENV=production',
      'Environment=PORT=3000',
      '',
      '[Install]',
      'WantedBy=multi-user.target',
      'SVC',

      'systemctl daemon-reload',
      'systemctl enable nodejs-api',
      'systemctl start nodejs-api'
    );

    const instance = new ec2.Instance(this, 'ApiInstance', {
      instanceName: `nodejs-rest-api-${envName}`,
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux2023(),
      securityGroup: sg,
      role,
      userData,
      associatePublicIpAddress: true,
    });

    // -------------------------------------------------------
    // API Gateway HTTP API — proxies to EC2 public IP
    // -------------------------------------------------------
    const httpApi = new apigwv2.CfnApi(this, 'HttpApi', {
      name: `nodejs-rest-api-${envName}`,
      protocolType: 'HTTP',
      description: `Node.js REST API (${envName}) — EC2 backed, zero latency`,
      corsConfiguration: {
        allowOrigins: ['*'],
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization'],
      },
    });

    // HTTP proxy integration to EC2 public DNS
    const integration = new apigwv2.CfnIntegration(this, 'HttpIntegration', {
      apiId: httpApi.ref,
      integrationType: 'HTTP_PROXY',
      integrationMethod: 'ANY',
      integrationUri: `http://${instance.instancePublicDnsName}:3000/{proxy}`,
      payloadFormatVersion: '1.0',
    });

    // Default catch-all route
    new apigwv2.CfnRoute(this, 'DefaultRoute', {
      apiId: httpApi.ref,
      routeKey: '$default',
      target: `integrations/${integration.ref}`,
    });

    // Auto-deploy stage
    new apigwv2.CfnStage(this, 'ApiStage', {
      apiId: httpApi.ref,
      stageName: envName,
      autoDeploy: true,
    });

    // -------------------------------------------------------
    // Outputs
    // -------------------------------------------------------
    this.apiUrl = new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: `https://${httpApi.ref}.execute-api.${this.region}.amazonaws.com/${envName}`,
      description: 'API Gateway endpoint URL',
    });

    new cdk.CfnOutput(this, 'Ec2PublicIp', {
      value: instance.instancePublicIp,
      description: 'EC2 instance public IP',
    });

    new cdk.CfnOutput(this, 'Ec2DirectUrl', {
      value: `http://${instance.instancePublicDnsName}:3000`,
      description: 'Direct EC2 endpoint (bypass API Gateway)',
    });

    new cdk.CfnOutput(this, 'InstanceId', {
      value: instance.instanceId,
      description: 'EC2 instance ID (use for SSM Session Manager)',
    });
  }
}

module.exports = { ApiStack };

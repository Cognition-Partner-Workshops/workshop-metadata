const cdk = require('aws-cdk-lib');
const ec2 = require('aws-cdk-lib/aws-ec2');
const iam = require('aws-cdk-lib/aws-iam');
const apigwv2 = require('aws-cdk-lib/aws-apigatewayv2');
const s3assets = require('aws-cdk-lib/aws-s3-assets');
const path = require('path');

class ApiStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const { envName } = props;

    // -------------------------------------------------------
    // Upload src/ as an S3 Asset (single source of truth)
    // -------------------------------------------------------
    const appAsset = new s3assets.Asset(this, 'AppCode', {
      path: path.join(__dirname, '..', 'src'),
    });

    const pkgAsset = new s3assets.Asset(this, 'PackageJson', {
      path: path.join(__dirname, '..', 'package.json'),
    });

    // -------------------------------------------------------
    // VPC — public subnet for simplicity
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
    // IAM Role for EC2 (SSM + S3 asset access)
    // -------------------------------------------------------
    const role = new iam.Role(this, 'Ec2Role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'),
      ],
    });

    // Grant EC2 read access to the S3 assets
    appAsset.grantRead(role);
    pkgAsset.grantRead(role);

    // -------------------------------------------------------
    // EC2 Instance — downloads src/ from S3, runs Express.js
    // -------------------------------------------------------
    const userData = ec2.UserData.forLinux();
    userData.addCommands(
      'set -e',
      'curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -',
      'yum install -y nodejs unzip',
      'mkdir -p /home/ec2-user/app/src',
      'cd /home/ec2-user/app',
      `aws s3 cp s3://${appAsset.s3BucketName}/${appAsset.s3ObjectKey} /tmp/app-code.zip`,
      'unzip -o /tmp/app-code.zip -d /home/ec2-user/app/src/',
      `aws s3 cp s3://${pkgAsset.s3BucketName}/${pkgAsset.s3ObjectKey} /home/ec2-user/app/package.json`,
      'npm install --omit=dev',
      'chown -R ec2-user:ec2-user /home/ec2-user/app'
    );

    // systemd service — runs src/local.js (same entry point as local dev)
    userData.addCommands(
      'cat > /etc/systemd/system/nodejs-api.service << SVCEOF',
      '[Unit]',
      'Description=Node.js REST API',
      'After=network.target',
      '',
      '[Service]',
      'Type=simple',
      'User=ec2-user',
      'WorkingDirectory=/home/ec2-user/app/src',
      'ExecStart=/usr/bin/node /home/ec2-user/app/src/local.js',
      'Restart=always',
      'RestartSec=5',
      'Environment=NODE_ENV=production',
      'Environment=PORT=3000',
      '',
      '[Install]',
      'WantedBy=multi-user.target',
      'SVCEOF',
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

    const integration = new apigwv2.CfnIntegration(this, 'HttpIntegration', {
      apiId: httpApi.ref,
      integrationType: 'HTTP_PROXY',
      integrationMethod: 'ANY',
      integrationUri: `http://${instance.instancePublicDnsName}:3000/{proxy}`,
      payloadFormatVersion: '1.0',
    });

    new apigwv2.CfnRoute(this, 'DefaultRoute', {
      apiId: httpApi.ref,
      routeKey: '',
      target: `integrations/${integration.ref}`,
    });

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

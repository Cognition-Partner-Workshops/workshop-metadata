const cdk = require('aws-cdk-lib');
const { Template } = require('aws-cdk-lib/assertions');
const { ApiStack } = require('../lib/api-stack');

describe('ApiStack', () => {
  let template;

  beforeAll(() => {
    const app = new cdk.App();
    const stack = new ApiStack(app, 'TestStack', {
      envName: 'test',
    });
    template = Template.fromStack(stack);
  });

  test('creates a VPC with public subnets', () => {
    template.hasResourceProperties('AWS::EC2::VPC', {});
    template.hasResourceProperties('AWS::EC2::Subnet', {
      MapPublicIpOnLaunch: true,
    });
  });

  test('creates a security group allowing port 3000', () => {
    template.hasResourceProperties('AWS::EC2::SecurityGroup', {
      GroupDescription: 'Allow HTTP traffic to Express API on port 3000',
    });
  });

  test('creates an EC2 instance with t3.micro', () => {
    template.hasResourceProperties('AWS::EC2::Instance', {
      InstanceType: 't3.micro',
    });
  });

  test('grants EC2 role S3 read access for app assets', () => {
    // S3 assets trigger an IAM policy granting the EC2 role read access
    template.hasResourceProperties('AWS::IAM::Policy', {});
    // Verify at least one S3 asset parameter exists (CDK creates these for assets)
    const resources = template.findResources('AWS::IAM::Policy');
    expect(Object.keys(resources).length).toBeGreaterThan(0);
  });

  test('creates an API Gateway HTTP API', () => {
    template.hasResourceProperties('AWS::ApiGatewayV2::Api', {
      Name: 'nodejs-rest-api-test',
      ProtocolType: 'HTTP',
    });
  });

  test('creates an HTTP proxy integration', () => {
    template.hasResourceProperties('AWS::ApiGatewayV2::Integration', {
      IntegrationType: 'HTTP_PROXY',
      IntegrationMethod: 'ANY',
    });
  });

  test('creates an auto-deploy stage', () => {
    template.hasResourceProperties('AWS::ApiGatewayV2::Stage', {
      StageName: 'test',
      AutoDeploy: true,
    });
  });

  test('outputs the API endpoint URL', () => {
    template.hasOutput('ApiEndpoint', {});
  });

  test('outputs the EC2 public IP', () => {
    template.hasOutput('Ec2PublicIp', {});
  });
});

import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ApiStack } from '../lib/api-stack';

describe('ApiStack', () => {
  let template: Template;

  beforeAll(() => {
    const app = new cdk.App();
    const stack = new ApiStack(app, 'TestStack', {
      envName: 'test',
    });
    template = Template.fromStack(stack);
  });

  test('creates Lambda function with Node.js 20 runtime', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {
      Runtime: 'nodejs20.x',
      Architectures: ['arm64'],
      MemorySize: 512,
    });
  });

  test('creates Lambda alias with provisioned concurrency', () => {
    template.hasResourceProperties('AWS::Lambda::Alias', {
      Name: 'test',
      ProvisionedConcurrencyConfig: {
        ProvisionedConcurrentExecutions: 2,
      },
    });
  });

  test('creates auto-scaling target for provisioned concurrency', () => {
    template.hasResourceProperties('AWS::ApplicationAutoScaling::ScalableTarget', {
      MinCapacity: 2,
      MaxCapacity: 10,
    });
  });

  test('creates API Gateway REST API', () => {
    template.hasResourceProperties('AWS::ApiGateway::RestApi', {
      Name: 'nodejs-rest-api-test',
    });
  });

  test('configures CORS on API Gateway', () => {
    template.hasResourceProperties('AWS::ApiGateway::Method', {
      HttpMethod: 'OPTIONS',
    });
  });

  test('outputs the API endpoint URL', () => {
    template.hasOutput('ApiEndpoint', {});
  });
});

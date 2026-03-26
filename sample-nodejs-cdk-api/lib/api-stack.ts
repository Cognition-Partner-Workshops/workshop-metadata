import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import * as path from 'path';

interface ApiStackProps extends cdk.StackProps {
  envName: string;
}

export class ApiStack extends cdk.Stack {
  public readonly apiUrl: cdk.CfnOutput;

  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const { envName } = props;

    // -------------------------------------------------------
    // Lambda Function — bundled with esbuild for fast cold starts
    // -------------------------------------------------------
    const fn = new nodejs.NodejsFunction(this, 'ApiHandler', {
      functionName: `nodejs-rest-api-${envName}`,
      runtime: lambda.Runtime.NODEJS_20_X,
      architecture: lambda.Architecture.ARM_64,
      entry: path.join(__dirname, '..', 'src', 'handler.ts'),
      handler: 'handler',
      memorySize: 512,
      timeout: cdk.Duration.seconds(29),
      environment: {
        NODE_ENV: 'production',
        ENV_NAME: envName,
      },
      bundling: {
        minify: true,
        sourceMap: true,
        target: 'node20',
        format: nodejs.OutputFormat.CJS,
        mainFields: ['module', 'main'],
      },
      logGroup: new logs.LogGroup(this, 'ApiHandlerLogs', {
        retention: logs.RetentionDays.TWO_WEEKS,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      }),
    });

    // -------------------------------------------------------
    // Provisioned Concurrency — eliminates cold starts
    // -------------------------------------------------------
    const version = fn.currentVersion;

    const alias = new lambda.Alias(this, 'ApiAlias', {
      aliasName: envName,
      version,
      provisionedConcurrentExecutions: 2, // keep 2 warm instances
    });

    // Auto-scaling for provisioned concurrency (scales 2 → 10 based on utilisation)
    const scalingTarget = alias.addAutoScaling({
      minCapacity: 2,
      maxCapacity: 10,
    });

    scalingTarget.scaleOnUtilization({
      utilizationTarget: 0.7, // scale up when 70% of provisioned instances are busy
    });

    // -------------------------------------------------------
    // API Gateway REST API — points to the warm alias
    // -------------------------------------------------------
    const api = new apigateway.RestApi(this, 'RestApi', {
      restApiName: `nodejs-rest-api-${envName}`,
      description: `Node.js REST API (${envName}) — zero cold start`,
      deployOptions: {
        stageName: envName,
        throttlingBurstLimit: 100,
        throttlingRateLimit: 50,
        loggingLevel: apigateway.MethodLoggingLevel.INFO,
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ['Content-Type', 'Authorization'],
      },
    });

    // Proxy all requests to Lambda alias (not $LATEST — avoids cold starts)
    const integration = new apigateway.LambdaIntegration(alias);

    api.root.addMethod('ANY', integration);
    api.root.addProxy({
      defaultIntegration: integration,
      anyMethod: true,
    });

    // -------------------------------------------------------
    // Outputs
    // -------------------------------------------------------
    this.apiUrl = new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.url,
      description: 'REST API endpoint URL',
    });

    new cdk.CfnOutput(this, 'FunctionName', {
      value: fn.functionName,
      description: 'Lambda function name',
    });

    new cdk.CfnOutput(this, 'FunctionArn', {
      value: fn.functionArn,
      description: 'Lambda function ARN',
    });
  }
}

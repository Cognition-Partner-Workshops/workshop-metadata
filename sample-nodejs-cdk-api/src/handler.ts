import serverlessExpress from '@vendia/serverless-express';
import { app } from './app';

// Create the serverless handler once (reused across warm invocations)
export const handler = serverlessExpress({ app });

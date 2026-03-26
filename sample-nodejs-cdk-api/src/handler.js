const serverlessExpress = require('@vendia/serverless-express');
const { app } = require('./app');

// Create the serverless handler once (reused across warm invocations)
exports.handler = serverlessExpress({ app });

const express = require('express');
const { healthRouter } = require('./routes/health');
const { itemsRouter } = require('./routes/items');

const app = express();

app.use(express.json());

// Request logging middleware
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/health', healthRouter);
app.use('/api/items', itemsRouter);

// Root endpoint
app.get('/', (_req, res) => {
  res.json({
    service: 'sample-nodejs-cdk-api',
    version: '1.0.0',
    endpoints: [
      'GET  /health',
      'GET  /api/items',
      'GET  /api/items/:id',
      'POST /api/items',
      'PUT  /api/items/:id',
      'DELETE /api/items/:id',
    ],
  });
});

module.exports = { app };

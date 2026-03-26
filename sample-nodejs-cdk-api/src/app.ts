import express, { Request, Response } from 'express';
import { healthRouter } from './routes/health';
import { itemsRouter } from './routes/items';

const app = express();

app.use(express.json());

// Request logging middleware
app.use((req: Request, _res: Response, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/health', healthRouter);
app.use('/api/items', itemsRouter);

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
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

export { app };

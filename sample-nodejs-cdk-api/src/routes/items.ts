import { Router, Request, Response } from 'express';

interface Item {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

// In-memory store (replace with DynamoDB or RDS for production)
const items: Map<string, Item> = new Map();

// Seed sample data
const seedItems: Item[] = [
  {
    id: '1',
    name: 'Sample Item 1',
    description: 'First sample item',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Sample Item 2',
    description: 'Second sample item',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

seedItems.forEach((item) => items.set(item.id, item));

const itemsRouter = Router();

// GET all items
itemsRouter.get('/', (_req: Request, res: Response) => {
  res.json({
    items: Array.from(items.values()),
    count: items.size,
  });
});

// GET single item by ID
itemsRouter.get('/:id', (req: Request, res: Response) => {
  const item = items.get(req.params.id);
  if (!item) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }
  res.json(item);
});

// POST create new item
itemsRouter.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;

  if (!name || !description) {
    res.status(400).json({ error: 'name and description are required' });
    return;
  }

  const id = String(Date.now());
  const now = new Date().toISOString();
  const newItem: Item = {
    id,
    name,
    description,
    createdAt: now,
    updatedAt: now,
  };

  items.set(id, newItem);
  res.status(201).json(newItem);
});

// PUT update item
itemsRouter.put('/:id', (req: Request, res: Response) => {
  const existing = items.get(req.params.id);
  if (!existing) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  const { name, description } = req.body;
  const updatedItem: Item = {
    ...existing,
    name: name ?? existing.name,
    description: description ?? existing.description,
    updatedAt: new Date().toISOString(),
  };

  items.set(req.params.id, updatedItem);
  res.json(updatedItem);
});

// DELETE item
itemsRouter.delete('/:id', (req: Request, res: Response) => {
  if (!items.has(req.params.id)) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  items.delete(req.params.id);
  res.status(204).send();
});

export { itemsRouter };

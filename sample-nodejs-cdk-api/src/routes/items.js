const { Router } = require('express');

// In-memory store (replace with DynamoDB or RDS for production)
const items = new Map();

// Seed sample data
const seedItems = [
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
itemsRouter.get('/', (_req, res) => {
  res.json({
    items: Array.from(items.values()),
    count: items.size,
  });
});

// GET single item by ID
itemsRouter.get('/:id', (req, res) => {
  const item = items.get(req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
});

// POST create new item
itemsRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'name and description are required' });
  }

  const id = String(Date.now());
  const now = new Date().toISOString();
  const newItem = {
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
itemsRouter.put('/:id', (req, res) => {
  const existing = items.get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const { name, description } = req.body;
  const updatedItem = {
    ...existing,
    name: name ?? existing.name,
    description: description ?? existing.description,
    updatedAt: new Date().toISOString(),
  };

  items.set(req.params.id, updatedItem);
  res.json(updatedItem);
});

// DELETE item
itemsRouter.delete('/:id', (req, res) => {
  if (!items.has(req.params.id)) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items.delete(req.params.id);
  res.status(204).send();
});

module.exports = { itemsRouter };

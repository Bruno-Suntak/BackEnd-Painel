import { Request, Response } from 'express';
import { ItemModel } from './models';

export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = await ItemModel.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getReport = async (req: Request, res: Response) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const items = await ItemModel.find()
      .sort({ data: 'desc' })
      .skip((Number(page) - 1) * Number(pageSize))
      .limit(Number(pageSize));

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getGraph = async (req: Request, res: Response) => {
  try {
    const graphData = await ItemModel.aggregate([
      { $group: { _id: '$produto', count: { $sum: 1 } } },
      { $project: { _id: 0, name: '$_id', count: 1 } },
    ]);

    res.status(200).json(graphData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
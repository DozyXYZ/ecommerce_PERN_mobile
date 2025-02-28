import { Request, Response } from 'express';

export function listProducts(_: Request, res: Response) {
  console.log('listProducts function called');
  res.json({ message: 'the list of products' });
}

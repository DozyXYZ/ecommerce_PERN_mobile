import { Request, Response } from 'express';

export function listProducts(_: Request, res: Response) {
  res.send('the list of products');
}

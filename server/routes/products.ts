import { Router } from 'express';
import { listProducts } from '../controllers/products';

const router = Router();

router.get('/', listProducts);

export default router;

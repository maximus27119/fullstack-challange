import { Router } from 'express';
import OrderController from '../controllers/order.controller.js';

const router = new Router();

router.get('/orders', OrderController.list);
router.post('/orders', OrderController.insert);

export default router;
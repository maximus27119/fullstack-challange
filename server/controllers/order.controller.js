import OrderService from '../services/order.service.js';
import ClientService from '../services/client.service.js';

class OrderController {
  async insert(req, res) {
    try {
      const { clientName, orderName } = req.body;
      let client = await ClientService.getOne({ name: clientName });

      if (!client)
        client = await ClientService.create({ name: clientName });

      const order = await OrderService.insert({
        name: orderName,
        clientId: client.id
      });

      const orderResponse = await OrderService.getById(order.id);

      res.status(201).json({ order: orderResponse });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async list(req, res) {
    try {
      const orders = await OrderService.list();
      res.json({ orders });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export default new OrderController();
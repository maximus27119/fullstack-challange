import prismaClient from '../prisma/prismaClient.js';

class OrderService {
  async insert(data) {
    return prismaClient.order.create({
      data: {
        name: data.name,
        client: {
          connect: { id: data.clientId }
        }
      }
    });
  }

  async list() {
    return prismaClient.order.findMany({
      include: {
        client: true
      }
    });
  }
}

export default new OrderService();
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

  async getById(id) {
    return prismaClient.order.findUnique({
      where: { id },
      include: {
        client: { select: { id: true, name: true } }
      }
    });
  }
}

export default new OrderService();
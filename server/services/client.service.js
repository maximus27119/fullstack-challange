import prismaClient from '../prisma/prismaClient.js';

class ClientService {
  async create(data) {
    return prismaClient.client.create({ data });
  }

  async getOne(conditions) {
    return prismaClient.client.findUnique({ where: conditions });
  }
}

export default new ClientService();
const prisma =
  require("../../config/database");

const createOrder =
  async (data) => {
    return prisma.order.create({
      data,
      include: {
        product: true,
      },
    });
  };

const getOrders =
  async () => {
    return prisma.order.findMany({
      include: {
        product: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

const getOrderById =
  async (id) => {
    return prisma.order.findUnique({
      where: { id },
      include: {
        product: true,
      },
    });
  };

const updateOrder =
  async (id, data) => {
    return prisma.order.update({
      where: { id },
      data,
      include: {
        product: true,
      },
    });
  };

const deleteOrder =
  async (id) => {
    return prisma.order.delete({
      where: { id },
    });
  };

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
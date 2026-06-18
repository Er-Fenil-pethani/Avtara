const prisma =
  require("../../config/database");

const createInventory =
  async (data) => {
    return prisma.inventory.create({
      data,
      include: {
        product: true,
      },
    });
  };

const getInventories =
  async () => {
    return prisma.inventory.findMany({
      include: {
        product: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

const getInventoryById =
  async (id) => {
    return prisma.inventory.findUnique({
      where: { id },
      include: {
        product: true,
      },
    });
  };

const updateInventory =
  async (id, data) => {
    return prisma.inventory.update({
      where: { id },
      data,
      include: {
        product: true,
      },
    });
  };

const deleteInventory =
  async (id) => {
    return prisma.inventory.delete({
      where: { id },
    });
  };

module.exports = {
  createInventory,
  getInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
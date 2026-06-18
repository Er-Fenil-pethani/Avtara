const prisma =
  require("../../config/database");

const createProduct =
  async (data) => {
    return prisma.product.create({
      data,
      include: {
        brand: true,
      },
    });
  };

const getProducts =
  async () => {
    return prisma.product.findMany({
      include: {
        brand: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

const getProductById =
  async (id) => {
    return prisma.product.findUnique({
      where: { id },
      include: {
        brand: true,
      },
    });
  };

const updateProduct =
  async (id, data) => {
    return prisma.product.update({
      where: { id },
      data,
      include: {
        brand: true,
      },
    });
  };

const deleteProduct =
  async (id) => {
    return prisma.product.delete({
      where: { id },
    });
  };

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
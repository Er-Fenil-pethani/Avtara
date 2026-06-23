const prisma = require("../../config/database");

const getCart = async () => {
  return prisma.cart.findMany({
    include: {
      items: true,
    },
  });
};

const createCart = async (data) => {
  return prisma.cart.create({
    data,
  });
};

module.exports = {
  getCart,
  createCart,
};
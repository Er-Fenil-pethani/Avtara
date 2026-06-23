const prisma = require("../../config/database");

const getWishlist =
  async () => {
    return prisma.wishlist.findMany({
      include: {
        items: true,
      },
    });
  };

const createWishlist =
  async (data) => {
    return prisma.wishlist.create({
      data,
    });
  };

module.exports = {
  getWishlist,
  createWishlist,
};
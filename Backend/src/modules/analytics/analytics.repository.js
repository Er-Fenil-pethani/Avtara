const prisma =
  require("../../config/database");

const getAnalytics =
  async () => {
    const products =
      await prisma.product.count();

    const orders =
      await prisma.order.count();

    const inventory =
      await prisma.inventory.count();

    const reels =
      await prisma.reel.count();

    return {
      products,
      orders,
      inventory,
      reels,
    };
  };

module.exports = {
  getAnalytics,
};
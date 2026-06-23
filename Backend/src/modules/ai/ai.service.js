const prisma =
  require("../../config/database");

const generateOutfit =
  async (payload) => {
    const {
      occasion,
      budget,
      gender,
    } = payload;

    const products =
      await prisma.product.findMany({
        take: 12,
        include: {
          brand: true,
        },
      });

    return {
      occasion,
      budget,
      gender,
      outfit: products,
      totalProducts:
        products.length,
    };
  };

module.exports = {
  generateOutfit,
};
const prisma =
  require("../../config/database");

const getReels =
  async () => {
    return prisma.reel.findMany({
      include: {
        product: true,
        user: true,
        likes: true,
        comments: true,
      },
    });
  };

const createReel =
  async (data) => {
    return prisma.reel.create({
      data,
    });
  };

module.exports = {
  getReels,
  createReel,
};
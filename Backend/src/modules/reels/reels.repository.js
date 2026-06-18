const prisma =
  require("../../config/database");

const createReel =
  async (data) => {
    return prisma.reel.create({
      data,
    });
  };

const getReels =
  async () => {
    return prisma.reel.findMany({
      include: {
        user: true,
        likes: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

module.exports = {
  createReel,
  getReels,
};
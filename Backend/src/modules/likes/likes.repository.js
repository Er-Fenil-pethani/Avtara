const prisma =
  require("../../config/database");

const createLike =
  async (data) => {
    return prisma.like.create({
      data,
    });
  };

const getLikes =
  async () => {
    return prisma.like.findMany({
      include: {
        user: true,
        reel: true,
      },
    });
  };

module.exports = {
  createLike,
  getLikes,
};

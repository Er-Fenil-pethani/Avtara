const prisma =
  require("../../config/database");

const createComment =
  async (data) => {
    return prisma.comment.create({
      data,
      include: {
        user: true,
        reel: true,
      },
    });
  };

const getComments =
  async () => {
    return prisma.comment.findMany({
      include: {
        user: true,
        reel: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  };

const deleteComment =
  async (id) => {
    return prisma.comment.delete({
      where: { id },
    });
  };

module.exports = {
  createComment,
  getComments,
  deleteComment,
};
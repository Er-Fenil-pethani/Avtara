const service =
  require("./comments.service");

const createComment =
  async (req, res) => {
    try {
      const comment =
        await service.createComment(
          req.body
        );

      return res.status(201).json({
        success: true,
        data: comment,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getComments =
  async (req, res) => {
    try {
      const comments =
        await service.getComments();

      return res.status(200).json({
        success: true,
        data: comments,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const deleteComment =
  async (req, res) => {
    try {
      await service.deleteComment(
        req.params.id
      );

      return res.status(200).json({
        success: true,
        message:
          "Comment deleted",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

module.exports = {
  createComment,
  getComments,
  deleteComment,
};
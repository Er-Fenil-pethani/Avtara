const service =
  require("./likes.service");

const createLike =
  async (req, res) => {
    try {
      const like =
        await service.createLike(
          req.body
        );

      return res.status(201).json({
        success: true,
        data: like,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getLikes =
  async (req, res) => {
    try {
      const likes =
        await service.getLikes();

      return res.status(200).json({
        success: true,
        data: likes,
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
  createLike,
  getLikes,
};
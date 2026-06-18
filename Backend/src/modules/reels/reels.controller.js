const service =
  require("./reels.service");

const createReel =
  async (req, res) => {
    try {
      const reel =
        await service.createReel(
          req.body
        );

      return res.status(201).json({
        success: true,
        data: reel,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getReels =
  async (req, res) => {
    try {
      const reels =
        await service.getReels();

      return res.status(200).json({
        success: true,
        data: reels,
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
  createReel,
  getReels,
};
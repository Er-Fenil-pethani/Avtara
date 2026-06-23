const service =
  require("./ai.service");

const generateOutfit =
  async (req, res) => {
    try {
      const result =
        await service.generateOutfit(
          req.body
        );

      return res.status(200).json({
        success: true,
        data: result,
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
  generateOutfit,
};
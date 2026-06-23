const service =
  require(
    "./wishlist.service"
  );

const getWishlist =
  async (req, res) => {
    try {
      const wishlist =
        await service.getWishlist();

      return res.status(200).json({
        success: true,
        data: wishlist,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const createWishlist =
  async (req, res) => {
    try {
      const wishlist =
        await service.createWishlist(
          req.body
        );

      return res.status(201).json({
        success: true,
        data: wishlist,
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
  getWishlist,
  createWishlist,
};
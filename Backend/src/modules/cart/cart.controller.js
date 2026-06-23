const service = require("./cart.service");

const getCart = async (
  req,
  res
) => {
  try {
    const cart =
      await service.getCart();

    return res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};

const createCart = async (
  req,
  res
) => {
  try {
    const cart =
      await service.createCart(
        req.body
      );

    return res.status(201).json({
      success: true,
      data: cart,
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
  getCart,
  createCart,
};
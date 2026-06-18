const service =
  require("./products.service");

const createProduct =
  async (req, res) => {
    try {
      const product =
        await service.createProduct(
          req.body
        );

      return res.status(201).json({
        success: true,
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getProducts =
  async (req, res) => {
    try {
      const products =
        await service.getProducts();

      return res.status(200).json({
        success: true,
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getProductById =
  async (req, res) => {
    try {
      const product =
        await service.getProductById(
          req.params.id
        );

      return res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const updateProduct =
  async (req, res) => {
    try {
      const product =
        await service.updateProduct(
          req.params.id,
          req.body
        );

      return res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const deleteProduct =
  async (req, res) => {
    try {
      await service.deleteProduct(
        req.params.id
      );

      return res.status(200).json({
        success: true,
        message:
          "Product deleted",
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
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
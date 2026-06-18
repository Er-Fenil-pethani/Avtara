const service =
  require("./orders.service");

const createOrder =
  async (req, res) => {
    try {
      const order =
        await service.createOrder(
          req.body
        );

      return res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getOrders =
  async (req, res) => {
    try {
      const orders =
        await service.getOrders();

      return res.status(200).json({
        success: true,
        data: orders,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getOrderById =
  async (req, res) => {
    try {
      const order =
        await service.getOrderById(
          req.params.id
        );

      return res.status(200).json({
        success: true,
        data: order,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const updateOrder =
  async (req, res) => {
    try {
      const order =
        await service.updateOrder(
          req.params.id,
          req.body
        );

      return res.status(200).json({
        success: true,
        data: order,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const deleteOrder =
  async (req, res) => {
    try {
      await service.deleteOrder(
        req.params.id
      );

      return res.status(200).json({
        success: true,
        message:
          "Order deleted",
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
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
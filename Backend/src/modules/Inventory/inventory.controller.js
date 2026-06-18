const service =
  require("./inventory.service");

const createInventory =
  async (req, res) => {
    try {
      const inventory =
        await service.createInventory(
          req.body
        );

      return res.status(201).json({
        success: true,
        data: inventory,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getInventories =
  async (req, res) => {
    try {
      const inventories =
        await service.getInventories();

      return res.status(200).json({
        success: true,
        data: inventories,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getInventoryById =
  async (req, res) => {
    try {
      const inventory =
        await service.getInventoryById(
          req.params.id
        );

      return res.status(200).json({
        success: true,
        data: inventory,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const updateInventory =
  async (req, res) => {
    try {
      const inventory =
        await service.updateInventory(
          req.params.id,
          req.body
        );

      return res.status(200).json({
        success: true,
        data: inventory,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const deleteInventory =
  async (req, res) => {
    try {
      await service.deleteInventory(
        req.params.id
      );

      return res.status(200).json({
        success: true,
        message:
          "Inventory deleted",
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
  createInventory,
  getInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
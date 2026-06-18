const repository =
  require("./inventory.repository");

const createInventory =
  async (payload) => {
    return repository.createInventory(
      payload
    );
  };

const getInventories =
  async () => {
    return repository.getInventories();
  };

const getInventoryById =
  async (id) => {
    return repository.getInventoryById(
      id
    );
  };

const updateInventory =
  async (
    id,
    payload
  ) => {
    return repository.updateInventory(
      id,
      payload
    );
  };

const deleteInventory =
  async (id) => {
    return repository.deleteInventory(
      id
    );
  };

module.exports = {
  createInventory,
  getInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
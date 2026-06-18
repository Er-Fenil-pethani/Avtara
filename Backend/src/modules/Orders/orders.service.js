const repository =
  require("./orders.repository");

const createOrder =
  async (payload) => {
    return repository.createOrder(
      payload
    );
  };

const getOrders =
  async () => {
    return repository.getOrders();
  };

const getOrderById =
  async (id) => {
    return repository.getOrderById(
      id
    );
  };

const updateOrder =
  async (
    id,
    payload
  ) => {
    return repository.updateOrder(
      id,
      payload
    );
  };

const deleteOrder =
  async (id) => {
    return repository.deleteOrder(
      id
    );
  };

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
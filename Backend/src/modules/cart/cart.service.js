const repository = require("./cart.repository");

const getCart = async () => {
  return repository.getCart();
};

const createCart = async (payload) => {
  return repository.createCart(
    payload
  );
};

module.exports = {
  getCart,
  createCart,
};
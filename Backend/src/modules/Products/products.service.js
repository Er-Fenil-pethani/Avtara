const repository =
  require("./products.repository");

const createProduct =
  async (payload) => {
    return repository.createProduct(
      payload
    );
  };

const getProducts =
  async () => {
    return repository.getProducts();
  };

const getProductById =
  async (id) => {
    return repository.getProductById(
      id
    );
  };

const updateProduct =
  async (id, payload) => {
    return repository.updateProduct(
      id,
      payload
    );
  };

const deleteProduct =
  async (id) => {
    return repository.deleteProduct(
      id
    );
  };

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
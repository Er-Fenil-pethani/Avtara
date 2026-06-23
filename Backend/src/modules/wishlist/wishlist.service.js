const repository =
  require(
    "./wishlist.repository"
  );

const getWishlist =
  async () => {
    return repository.getWishlist();
  };

const createWishlist =
  async (payload) => {
    return repository.createWishlist(
      payload
    );
  };

module.exports = {
  getWishlist,
  createWishlist,
};
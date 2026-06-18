const repository =
  require("./likes.repository");

const createLike =
  async (payload) => {
    return repository.createLike(
      payload
    );
  };

const getLikes =
  async () => {
    return repository.getLikes();
  };

module.exports = {
  createLike,
  getLikes,
};
const repository =
  require("./reels.repository");

const createReel =
  async (payload) => {
    return repository.createReel(
      payload
    );
  };

const getReels =
  async () => {
    return repository.getReels();
  };

module.exports = {
  createReel,
  getReels,
};
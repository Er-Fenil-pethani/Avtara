const repository =
  require("./analytics.repository");

const getAnalytics =
  async () => {
    return repository.getAnalytics();
  };

module.exports = {
  getAnalytics,
};
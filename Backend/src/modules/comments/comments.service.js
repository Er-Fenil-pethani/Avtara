const repository =
  require("./comments.repository");

const createComment =
  async (payload) => {
    return repository.createComment(
      payload
    );
  };

const getComments =
  async () => {
    return repository.getComments();
  };

const deleteComment =
  async (id) => {
    return repository.deleteComment(
      id
    );
  };

module.exports = {
  createComment,
  getComments,
  deleteComment,
};
import api from "./api";

export const getComments =
  async () => {
    const response =
      await api.get(
        "/comments"
      );

    return response.data;
  };

export const createComment =
  async (payload) => {
    const response =
      await api.post(
        "/comments",
        payload
      );

    return response.data;
  };

export const deleteComment =
  async (id) => {
    const response =
      await api.delete(
        `/comments/${id}`
      );

    return response.data;
  };
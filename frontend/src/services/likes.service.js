import api from "./api";

export const getLikes =
  async () => {
    const response =
      await api.get(
        "/likes"
      );

    return response.data;
  };

export const createLike =
  async (payload) => {
    const response =
      await api.post(
        "/likes",
        payload
      );

    return response.data;
  };
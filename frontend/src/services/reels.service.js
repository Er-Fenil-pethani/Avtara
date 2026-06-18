import api from "./api";

export const getReels =
  async () => {
    const response =
      await api.get(
        "/reels"
      );

    return response.data;
  };

export const createReel =
  async (payload) => {
    const response =
      await api.post(
        "/reels",
        payload
      );

    return response.data;
  };
import api from "./api";

export const generateOutfit =
  async (payload) => {
    const response =
      await api.post(
        "/ai/generate-outfit",
        payload
      );

    return response.data;
  };
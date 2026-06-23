import api from "./api";

export const getBrands =
  async () => {
    const response =
      await api.get(
        "/brands"
      );

    return response.data;
  };

export const getBrandById =
  async (id) => {
    const response =
      await api.get(
        `/brands/${id}`
      );

    return response.data;
  };
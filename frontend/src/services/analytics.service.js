import api from "./api";

export const getAnalytics =
  async () => {
    const response =
      await api.get(
        "/analytics"
      );

    return response.data;
  };

export const getDashboardStats =
  async () => {
    const response =
      await api.get(
        "/analytics"
      );

    return response.data;
  };
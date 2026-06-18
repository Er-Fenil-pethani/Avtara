import api from "./api";

export const getInventories =
  async () => {
    const response =
      await api.get(
        "/inventory"
      );

    return response.data;
  };

export const createInventory =
  async (payload) => {
    const response =
      await api.post(
        "/inventory",
        payload
      );

    return response.data;
  };

export const updateInventory =
  async (
    id,
    payload
  ) => {
    const response =
      await api.put(
        `/inventory/${id}`,
        payload
      );

    return response.data;
  };

export const deleteInventory =
  async (id) => {
    const response =
      await api.delete(
        `/inventory/${id}`
      );

    return response.data;
  };
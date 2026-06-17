import { create } from "zustand";

const useAuthStore = create(
  (set) => ({
    user: null,
    token:
      localStorage.getItem(
        "accessToken"
      ) || null,

    setAuth: ({
      user,
      token,
    }) => {
      localStorage.setItem(
        "accessToken",
        token
      );

      set({
        user,
        token,
      });
    },

    logout: () => {
      localStorage.removeItem(
        "accessToken"
      );

      set({
        user: null,
        token: null,
      });
    },
  })
);

export default useAuthStore;
import { create } from "zustand";

export const useStore = create((set) => ({
  product: {},
  setProduct: (value) => set(() => ({ product: value })),
  login: false,
  setLogin: (value) => set(() => ({ login: value })),
}));

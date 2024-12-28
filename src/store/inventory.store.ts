import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
type State = {
  isUser: boolean;
};

type Actions = {
  toggle: () => void;
};

export const useInventoryStore = create<State & Actions>()(
  immer((set) => ({
    isUser: false,
    toggle: () =>
      set((state) => {
        state.isUser = !state.isUser;
      }),
  }))
);

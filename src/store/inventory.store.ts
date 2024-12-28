import { Actions, State } from "src/types/store.types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useInventoryStore = create<State & Actions>()(
  immer((set) => ({
    isUser: false,
    inventory: [],
    toggle: () =>
      set((state) => {
        state.isUser = !state.isUser;
      }),
    update: (key: keyof State, value: State[keyof State]) => {
      set((state) => {
        if (key in state) {
          state[key] = value as any;
        }
      });
    },
  }))
);

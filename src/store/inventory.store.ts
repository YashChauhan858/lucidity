import { Actions, TState, TGetInventory } from "types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useInventoryStore = create<TState & Actions>()(
  immer((set) => ({
    isUser: false,
    inventory: [],
    editInventoryItem: -1,

    toggle: () =>
      set((state) => {
        state.isUser = !state.isUser;
      }),
      
    updateInventory: (inventory: TGetInventory[]) => {
      set((state) => {
        state.inventory = inventory;
      });
    },

    toggleEditModal: (itemIndex: number) => {
      set((state) => {
        state.editInventoryItem = itemIndex;
      });
    },

    removeItemFromInventory: (itemIndex: number) => {
      if (typeof itemIndex !== "undefined") {
        set((state) => {
          state.inventory = state.inventory.filter((_, i) => i !== itemIndex);
        });
      }
    },
    toggleDisableInventoryItem: (itemIndex: number) => {
      if (typeof itemIndex !== "undefined") {
        set((state) => {
          state.inventory.map((item, i) => {
            if (i === itemIndex) item.isDisabled = !item?.isDisabled;
          });
        });
      }
    },
    edit: (item: number) => {
      set((state) => {
        state.editInventoryItem = item;
      });
    },

    updateInventoryItem: (item: Partial<TGetInventory>) => {
      set((state) => {
        if (state.editInventoryItem >= 0) {
          state.inventory[state.editInventoryItem] = {
            ...state.inventory[state.editInventoryItem],
            ...item,
          };
        }
      });
    },
  }))
);

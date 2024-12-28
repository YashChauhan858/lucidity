import { TGetInventory } from "./request.types";

export type TState = {
  isUser: boolean;
  inventory: TGetInventory[];
  editInventoryItem: number;
};

export type Actions = {
  toggle: () => void;
  toggleEditModal: (itemIndex: number) => void;
  updateInventory: (inventory: TGetInventory[]) => void;
  removeItemFromInventory: (itemIndex: number) => void;
  toggleDisableInventoryItem: (itemIndex: number) => void;
  edit: (item: number) => void;
  updateInventoryItem: (item: Partial<TGetInventory>) => void;
};

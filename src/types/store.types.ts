import { TGetInventory } from "./request.types";

export type State = {
  isUser: boolean;
  inventory: TGetInventory[];
  editInventoryItem: number;
};

export type Actions = {
  toggle: () => void;
  update: (key: keyof State, value: State[keyof State]) => void;
  removeItemFromInventory: (itemIndex: number) => void;
  toggleDisableInventoryItem: (itemIndex: number) => void;
  edit: (item: number) => void;
  updateInventoryItem: (item: Partial<TGetInventory>) => void;
};

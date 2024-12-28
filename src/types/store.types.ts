import { TGetInventory } from "./request.types";

export type State = {
  isUser: boolean;
  inventory: TGetInventory[];
};

export type Actions = {
  toggle: () => void;
  update: (key: keyof State, value: State[keyof State]) => void;
  removeItemFromInventory: (itemIndex: number) => void;
  toggleDisableInventoryItem: (itemIndex: number) => void;
};

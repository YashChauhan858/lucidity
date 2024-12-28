import { useMemo } from "react";
import { TGetInventory } from "src/types";

export const useCalculateInventoryStats = (inventory: TGetInventory[]) => {
  const inventoryStats = useMemo(() => {
    const inventoryStats = {
      outOfStock: 0,
      totalValue: 0,
      numberOfCategory: 0,
      totalProducts: 0,
    };

    if (inventory.length === 0) return inventoryStats;

    const groupByCategory = Object.groupBy(
      inventory,
      (element: TGetInventory) => element.category
    );
    const categoryArray = Object.values(groupByCategory);
    for (let i = 0; i < categoryArray.length; i++) {
      const categoryItemList = Object.values(groupByCategory)[i];
      if (categoryItemList?.length === 0) continue;
      if (categoryItemList?.some((item) => !item?.isDisabled))
        inventoryStats.numberOfCategory++;
    }

    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].isDisabled) continue;
      if (inventory[i].quantity === 0) inventoryStats.outOfStock++;
      inventoryStats.totalProducts++;

      const value = inventory[i].value.slice(1);
      if (value) {
        inventoryStats.totalValue += Number(value);
      }
    }

    return inventoryStats;
  }, [inventory]);

  return inventoryStats;
};

import {
  BadgeDollarSign,
  Layers,
  PackageX,
  ShoppingCartIcon,
} from "lucide-react";
import Card from "components/Card";
import { useInventoryStore } from "store/inventory.store";
import { useMemo } from "react";
import { TGetInventory } from "src/types";

const CardContainer = () => {
  const inventory = useInventoryStore((state) => state.inventory);

  const { outOfStock, numberOfCategory } = useMemo(() => {
    let outOfStock = 0;
    let numberOfCategory = 0;

    if (inventory.length === 0) return { outOfStock, numberOfCategory };

    const groupByCategory = Object.groupBy(
      inventory,
      (element: TGetInventory) => element.category
    );

    numberOfCategory = Object.keys(groupByCategory).length;

    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].quantity === 0) outOfStock++;
    }

    return { outOfStock, numberOfCategory };
  }, [inventory]);

  return (
    <div className="flex gap-2 mt-5">
      <Card
        Icon={ShoppingCartIcon}
        heading="Total product"
        stats={inventory.length}
      />
      <Card
        Icon={BadgeDollarSign}
        heading="Total store value"
        stats={inventory.reduce(
          (prev, current) => prev + Number(current?.price ?? 0),
          0
        )}
      />
      <Card
        Icon={PackageX}
        heading="Out of stock"
        stats={outOfStock > 0 ? outOfStock : "-"}
      />
      <Card Icon={Layers} heading="No of Category" stats={numberOfCategory} />
    </div>
  );
};

export default CardContainer;

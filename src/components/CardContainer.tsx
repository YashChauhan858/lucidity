import {
  BadgeDollarSign,
  Layers,
  PackageX,
  ShoppingCartIcon,
} from "lucide-react";
import Card from "components/Card";
import { useInventoryStore } from "store/inventory.store";
import { useCalculateInventoryStats } from "hooks";

const CardContainer = () => {
  const inventory = useInventoryStore((state) => state.inventory);

  const { outOfStock, numberOfCategory, totalValue, totalProducts } =
    useCalculateInventoryStats(inventory);

  return (
    <div className="flex gap-2 mt-5 md:flex-wrap">
      <Card
        Icon={ShoppingCartIcon}
        heading="Total product"
        stats={totalProducts > 0 ? totalProducts : "-"}
      />
      <Card
        Icon={BadgeDollarSign}
        heading="Total store value"
        stats={totalValue > 0 ? totalValue : "-"}
      />
      <Card
        Icon={PackageX}
        heading="Out of stock"
        stats={outOfStock > 0 ? outOfStock : "-"}
      />
      <Card
        Icon={Layers}
        heading="No of Category"
        stats={numberOfCategory > 0 ? numberOfCategory : "-"}
      />
    </div>
  );
};

export default CardContainer;

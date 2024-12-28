import {
  BadgeDollarSign,
  Layers,
  PackageX,
  ShoppingCartIcon,
} from "lucide-react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="flex gap-2 mt-5">
      <Card Icon={ShoppingCartIcon} heading="Total product" stats={123123} />
      <Card Icon={BadgeDollarSign} heading="Total store value" stats={123123} />
      <Card Icon={PackageX} heading="Out of stock" stats={123123} />
      <Card Icon={Layers} heading="No of Category" stats={123123} />
    </div>
  );
};

export default CardContainer;

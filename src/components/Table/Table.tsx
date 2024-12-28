import TableHeader from "./TableHeader";
import { useInventoryStore } from "store/inventory.store";
import RowLoader from "./RowLoader";
import ErrorState from "./ErrorState";
import TableRow from "./TableRow";
import EmptyTable from "./EmptyTable";

const Table = ({
  status,
}: {
  status: "loading" | "error" | "success" | "idle";
}) => {
  const inventory = useInventoryStore((state) => state.inventory);

  return (
    <div className="w-full bg-cardBg mt-7 rounded-xl">
      <table className="w-full">
        <TableHeader />
        <tbody>
          {status === "error" && <ErrorState />}
          {status === "loading" && <RowLoader />}
          {status === "success" && inventory.length === 0 && <EmptyTable />}
          {status === "success" &&
            inventory.length !== 0 &&
            inventory.map((item, index) => (
              <TableRow
                key={index + item.value + item.name}
                item={item}
                itemIndex={index}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import TableHeader from "./TableHeader";
import { useInventoryStore } from "store/inventory.store";
import RowLoader from "./RowLoader";
import ErrorState from "./ErrorState";
import TableRow from "./TableRow";
import EmptyTable from "./EmptyTable";

const Table = ({
  status,
}: {
  status: {
    status: "loading" | "error" | "success" | "idle";
    statusMsg?: string;
  };
}) => {
  const inventory = useInventoryStore((state) => state.inventory);

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full bg-cardBg mt-7 rounded-xl overflow-x-scroll">
        <table className="w-full min-w-[600px]">
          <TableHeader />
          <tbody>
            {status.status === "error" && (
              <ErrorState errorMsg={status?.statusMsg} />
            )}
            {status.status === "loading" && <RowLoader />}
            {status.status === "success" && inventory.length === 0 && (
              <EmptyTable />
            )}
            {status.status === "success" &&
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
    </div>
  );
};

export default Table;

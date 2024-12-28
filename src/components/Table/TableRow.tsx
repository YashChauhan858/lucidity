import { Eye, EyeClosed, Pencil, Trash2 } from "lucide-react";
import { TGetInventory } from "src/types";
import { useInventoryStore } from "store/inventory.store";
import { formatNumberWithCommas } from "utils/helper";

const TableRow = ({
  item,
  itemIndex,
}: {
  item: TGetInventory;
  itemIndex: number;
}) => {
  const isAdmin = useInventoryStore((state) => !state?.isUser);
  const removeItemFromInventory = useInventoryStore(
    (state) => state?.removeItemFromInventory
  );
  const toggleDisableInventoryItem = useInventoryStore(
    (state) => state?.toggleDisableInventoryItem
  );
  const edit = useInventoryStore((state) => state.edit);

  const disableFunctionality = item.isDisabled || !isAdmin;

  return (
    <tr
      className={`rounded-lg text-gray-300 transition-colors hover:bg-zinc-800 border-border border-b-[1px] ${
        item.isDisabled ? "opacity-50" : "opacity-100"
      }`}
    >
      <td className="rounded-l-lg p-4 text-sm">{item.name}</td>
      <td className="p-4 text-sm">{item.category}</td>
      <td className="p-4 text-sm">{formatNumberWithCommas(item?.price)}</td>
      <td className="p-4 text-sm">{formatNumberWithCommas(item?.quantity)}</td>
      <td className="p-4 text-sm">{formatNumberWithCommas(item.value)}</td>
      <td className="rounded-r-lg p-4">
        <div className="flex items-center gap-2">
          <button
            className="text-gray-400 hover:text-gray-100"
            disabled={disableFunctionality}
            onClick={() => edit(itemIndex)}
          >
            <Pencil
              size={16}
              className={`${disableFunctionality ? "" : "text-green-400"}`}
            />
          </button>
          <button
            className="text-gray-400 hover:text-gray-100"
            onClick={() => isAdmin && toggleDisableInventoryItem(itemIndex)}
          >
            {item.isDisabled ? (
              <EyeClosed size={16} />
            ) : (
              <Eye
                size={16}
                className={`${disableFunctionality ? "" : "text-purple-600"}`}
              />
            )}
          </button>
          <button
            className="text-gray-400 hover:text-gray-100"
            disabled={disableFunctionality}
            onClick={() => isAdmin && removeItemFromInventory(itemIndex)}
          >
            <Trash2
              size={16}
              className={`${disableFunctionality ? "" : "text-red-500"}`}
            />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;

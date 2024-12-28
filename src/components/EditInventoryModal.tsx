import { useState, FormEvent, useEffect } from "react";
import { X } from "lucide-react";
import { TGetInventory } from "types";
import { useInventoryStore } from "store/inventory.store";

const defaultState: Partial<TGetInventory> = {
  category: "",
  price: "",
  quantity: 0,
  value: "",
};

export const EditInventoryModal = () => {
  const editInventoryItem = useInventoryStore((state) =>
    state.editInventoryItem >= 0
      ? state.inventory[state.editInventoryItem]
      : defaultState
  );

  const update = useInventoryStore((state) => state.update);
  const updateInventoryItem = useInventoryStore(
    (state) => state.updateInventoryItem
  );

  const closeModal = () => update("editInventoryItem", -1);

  const [formData, setFormData] =
    useState<Partial<TGetInventory>>(defaultState);

  useEffect(() => {
    setFormData({
      category: editInventoryItem?.category ?? "",
      price: editInventoryItem?.price ?? "",
      quantity: editInventoryItem?.quantity ?? 0,
      value: editInventoryItem?.value ?? "",
    });
  }, [editInventoryItem]);

  const onChangeHandler = (
    name: keyof Partial<TGetInventory>,
    value: Partial<TGetInventory>[keyof Partial<TGetInventory>]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateInventoryItem(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900/95 p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Edit product</h2>
            <p className="text-sm text-zinc-400">
              {editInventoryItem?.name ?? "-"}
            </p>
          </div>
          <button
            onClick={closeModal}
            className="rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Category</label>
              <input
                type="text"
                value={formData.category}
                name="category"
                onChange={(e) => onChangeHandler("category", e.target.value)}
                className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Price</label>
              <input
                type="text"
                value={formData.price}
                name="price"
                onChange={(e) =>
                  /^\d*\.?\d*$/.test(e.target.value) &&
                  onChangeHandler("price", e.target.value)
                }
                className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Quantity</label>
              <input
                type="text"
                value={formData.quantity}
                name="quantity"
                onChange={(e) =>
                  /^\d*\.?\d*$/.test(e.target.value) &&
                  onChangeHandler("quantity", Number(e.target.value))
                }
                className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-zinc-400">Value</label>
              <input
                type="text"
                value={formData.value}
                name="value"
                onChange={(e) =>
                  /^\d*\.?\d*$/.test(e.target.value) &&
                  onChangeHandler("value", e.target.value)
                }
                className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 text-sm text-[#98C379] hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

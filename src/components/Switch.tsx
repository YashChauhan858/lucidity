import { useInventoryStore } from "../store/inventory.store";

const Switch = () => {
  const isUser = useInventoryStore((state) => state.isUser);
  const toggle = useInventoryStore((state) => state.toggle);

  return (
    <label className="inline-flex items-center cursor-pointer gap-2">
      <span
        className={`text-sm font-medium   ${
          !isUser ? "text-gray-50" : "text-gray-400"
        }`}
      >
        admin
      </span>
      <input
        type="checkbox"
        checked={isUser}
        className="sr-only peer"
        onChange={toggle}
      />
      <div className="relative w-11 h-[15px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[-2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-secondary"></div>
      <span
        className={`text-sm font-medium   ${
          isUser ? "text-gray-50" : "text-gray-400"
        }`}
      >
        user
      </span>
    </label>
  );
};

export default Switch;

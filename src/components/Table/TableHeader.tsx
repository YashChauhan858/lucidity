const TableHeader = () => {
  return (
    <thead>
      <tr className="border-border border-b-[1px]">
        <th className="pb-3 pt-3 text-left text-sm font-normal pl-3">
          <p className="mb-0 text-badgeText text-xs bg-primary px-3 py-1 w-fit rounded-lg">
            Name
          </p>
        </th>
        <th className="pb-3 pt-3 text-left text-sm font-normal">
          <p className="mb-0 text-badgeText text-xs bg-primary px-3 py-1 w-fit rounded-lg">
            Category
          </p>
        </th>
        <th className="pb-3 pt-3 text-left text-sm font-normal">
          <p className="mb-0 text-badgeText text-xs bg-primary px-3 py-1 w-fit rounded-lg">
            Price
          </p>
        </th>
        <th className="pb-3 pt-3 text-left text-sm font-normal">
          <p className="mb-0 text-badgeText text-xs bg-primary px-3 py-1 w-fit rounded-lg">
            Quantity
          </p>
        </th>
        <th className="pb-3 pt-3 text-left text-sm font-normal">
          <p className="mb-0 text-badgeText text-xs bg-primary px-3 py-1 w-fit rounded-lg">
            Value
          </p>
        </th>
        <th className="pb-3 pt-3 text-left text-sm font-normal">
          <p className="mb-0 text-badgeText text-xs bg-primary px-3 py-1 w-fit rounded-lg">
            Action
          </p>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;

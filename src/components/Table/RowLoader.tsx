const RowLoader = () => {
  return Array(5)
    .fill(1)
    .map((e, i) => (
      <tr key={e + i} className="border-border border-b-[1px]">
        <td colSpan={10000} className="animate-pulse bg-slate-800 py-6"></td>
      </tr>
    ));
};

export default RowLoader;

const ErrorState = ({ errorMsg }: { errorMsg?: string }) => {
  return Array(5)
    .fill(1)
    .map((e, i) => (
      <tr key={e + i} className="border-border border-b-[1px]">
        <td colSpan={10000} className="py-6">
          {i == 2 && (
            <p className="text-center w-full mb-0 text-red-500">
              {errorMsg ?? "Something went wrong"}
            </p>
          )}
        </td>
      </tr>
    ));
};

export default ErrorState;

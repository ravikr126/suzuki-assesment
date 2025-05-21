import { PaginationProps } from "@/src/interface/paginationInterface";

export default function Pagination({
  currentPage = 1,
  totalItems,
  itemsPerPage,
  itemsPerPageOptions = [5, 10, 25, 50],
  onPageChange = () => {},
  onItemsPerPageChange = () => {},
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = Number(e.target.value);
    onItemsPerPageChange(newItemsPerPage);
    onPageChange(1); // reset to page 1
  };

  return (
    <div className="flex items-center justify-between mt-4 px-2 py-1 border-t border-gray-300 select-none">
      <div className="flex items-center gap-2">
        <label htmlFor="itemsPerPage" className="text-sm text-gray-700">
          Rows per page:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          {itemsPerPageOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-700">
        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-3 py-1 rounded border border-gray-300 shadow-sm transition
            ${currentPage <= 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-blue-600 hover:text-white"}`}
        >
          Prev
        </button>

        <button
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-3 py-1 rounded border border-gray-300 shadow-sm transition
            ${currentPage >= totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-blue-600 hover:text-white"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

interface PaginationProps {
  currentPage?: number;
  totalItems: number;
  itemsPerPageOptions?: number[];
  initialItemsPerPage?: number;
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
}

export default function Pagination({
  currentPage = 1,
  totalItems,
  itemsPerPageOptions = [5, 10, 25, 50],
  initialItemsPerPage = 5,
  onPageChange = () => {},
  onItemsPerPageChange = () => {},
}: PaginationProps) {
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [page, setPage] = useState(currentPage);


  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  useEffect(() => {
    setItemsPerPage(initialItemsPerPage);
    setPage(currentPage);
  }, []); 

  useEffect(() => {
    if (currentPage !== page) {
      setPage(currentPage);
    }
  }, [currentPage]);

 useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
      onPageChange(totalPages);
    }
  }, [totalItems, itemsPerPage, totalPages]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    onPageChange(newPage);
  };
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = Number(e.target.value);
    setItemsPerPage(newItemsPerPage);
    onItemsPerPageChange(newItemsPerPage);
    setPage(1);
    onPageChange(1);
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
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
          className={`px-3 py-1 rounded border border-gray-300 shadow-sm transition
            ${page <= 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-blue-600 hover:text-white"}`}
        >
          Prev
        </button>

        <button
          disabled={page >= totalPages}
          onClick={() => handlePageChange(page + 1)}
          className={`px-3 py-1 rounded border border-gray-300 shadow-sm transition
            ${page >= totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-blue-600 hover:text-white"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

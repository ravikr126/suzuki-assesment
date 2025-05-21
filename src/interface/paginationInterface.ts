export interface PaginationProps {
  currentPage?: number;
  totalItems: number;
  itemsPerPage: number; 
  itemsPerPageOptions?: number[];
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
}
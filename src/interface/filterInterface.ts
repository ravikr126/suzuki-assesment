export interface FiltersProps {
  filters: { make: string; model: string; year: string };
  onChange: (filters: { make: string; model: string; year: string }) => void;
}

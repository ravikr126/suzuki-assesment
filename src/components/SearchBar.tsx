// SearchBar.tsx
interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {

  return (
    <input
      type="text"
      placeholder="Search by make, model, or year..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full max-w-xl p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

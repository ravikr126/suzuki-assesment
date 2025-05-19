interface FiltersProps {
  filters: { make: string; model: string; year: string };
  onChange: (filters: { make: string; model: string; year: string }) => void;
}

export default function Filters({ filters, onChange }: FiltersProps) {
  return (
    <form className="flex flex-wrap gap-4 mt-6 max-w-4xl w-full">
 
      <div className="flex flex-col flex-grow min-w-[160px]">
        <label htmlFor="make" className="mb-2 text-gray-800 font-semibold text-sm sm:text-base">
          Make
        </label>
        <input
          id="make"
          type="text"
          placeholder="Enter car make"
          value={filters.make}
          onChange={(e) => onChange({ ...filters, make: e.target.value })}
          className="
            border border-gray-300 rounded-lg p-3
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition
            hover:border-blue-400
            shadow-sm
            text-sm sm:text-base
          "
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col flex-grow min-w-[160px]">
        <label htmlFor="model" className="mb-2 text-gray-800 font-semibold text-sm sm:text-base">
          Model
        </label>
        <input
          id="model"
          type="text"
          placeholder="Enter car model"
          value={filters.model}
          onChange={(e) => onChange({ ...filters, model: e.target.value })}
          className="
            border border-gray-300 rounded-lg p-3
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition
            hover:border-blue-400
            shadow-sm
            text-sm sm:text-base
          "
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col flex-grow min-w-[160px]">
        <label htmlFor="year" className="mb-2 text-gray-800 font-semibold text-sm sm:text-base">
          Year
        </label>
        <input
          id="year"
          type="number"
          placeholder="Year"
          value={filters.year}
          onChange={(e) => onChange({ ...filters, year: e.target.value })}
          className="
            border border-gray-300 rounded-lg p-3
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition
            hover:border-blue-400
            shadow-sm
            text-sm sm:text-base
          "
          min={1900}
          max={new Date().getFullYear()}
          inputMode="numeric"
          autoComplete="off"
        />
      </div>
    </form>
  );
}

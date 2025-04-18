import { Button } from "@radix-ui/themes";
const FilterBar = ({ filters, setFilters }: {
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  if (filters.length === 0) return null;
  
  const handleRemove = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="bg-white shadow-md rounded p-3 w-full flex items-center justify-between transform -translate-y-1/2">
      <div className="flex flex-wrap gap-2.5">
        {filters.map((filter) => (
          <div key={filter} className="flex" >
            <span className="rounded-tl-[10px] rounded-bl-[10px] bg-cyan-200 p-2">{filter}</span>
            <button
              onClick={() => handleRemove(filter)}
              className=" rounded-tl-none rounded-tr-[10px] rounded-br-[10px] bg-cyan-500 text-white cursor-pointer px-2.5 py-1"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button onClick={clearFilters} className="text-cyan-500 hover:underline cursor-pointer">
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
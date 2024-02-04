import { useDispatch, useSelector } from "react-redux";
import { getRegions, updateRegion } from "../countriesSlice";
const continents = [
  "Americas",
  "Antarctic",
  "Africa",
  "Asia",
  "Europe",
  "Oceania",
];
function SelectedRegions() {
  const dispatch = useDispatch();
  const selectedRegions = useSelector(getRegions);

  return (
    <div className="grid gap-2">
      <label className="text-xs font-medium text-gray-light">Region</label>
      <div className="flex flex-wrap gap-3">
        {continents.map((c) => (
          <button
            key={c}
            className={`animate rounded-xl p-1 px-3 text-sm transition-colors duration-300 active:scale-95 ${selectedRegions.includes(c.toLowerCase()) ? "bg-gray-dark" : "bg-gray-dark/5"}`}
            onClick={() => dispatch(updateRegion(c))}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectedRegions;

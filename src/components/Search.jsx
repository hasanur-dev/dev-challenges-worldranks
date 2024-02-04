import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountries,
  getSearchIndex,
  updateSearchIndex,
} from "../countriesSlice";
export function Search() {
  const dispatch = useDispatch();
  const searchIndex = useSelector(getSearchIndex);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="relative w-full max-w-72 overflow-hidden rounded-lg bg-gray-dark text-xs font-medium"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        onChange={(e) => {
          dispatch(updateSearchIndex(e.target.value));
          dispatch(fetchCountries(e.target.value));
        }}
        placeholder="Search by Name, Region, Subregion"
        value={searchIndex}
        className="w-full bg-transparent p-3 indent-6 tracking-wide placeholder:text-gray-light"
      />
    </form>
  );
}

export default Search;

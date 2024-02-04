import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getSortedBy,
  getTotalCountries,
  updateSortBy,
} from "../countriesSlice";

import SelectedRegions from "../components/SelectedRegions";
import Status from "../components/Status";
import Search from "../components/Search";

function Home() {
  const dispatch = useDispatch();
  const sortedBy = useSelector(getSortedBy);
  const totalCountries = useSelector(getTotalCountries);
  const handleSortBy = (e) => {
    dispatch(updateSortBy(e.target.value));
  };

  return (
    <div className="relative grid max-w-[1200px] -translate-y-10 gap-6 border  border-b-gray-light/20 border-l-transparent border-r-transparent border-t-gray-light/20 bg-gray-very-dark p-6 transition-all sm:mx-7 sm:grid-cols-2 sm:rounded-lg sm:border-gray-light/20 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
      <div className=" col-span-2 flex flex-wrap items-center justify-between gap-2 lg:col-span-full">
        <p className="text-sm font-semibold tracking-wide text-gray-light">
          Found {totalCountries} countries
        </p>
        <Search />
      </div>
      <section className="col-span-2 grid content-start items-start gap-6 sm:grid-cols-2 sm:gap-x-10 lg:col-span-1 lg:grid-cols-1">
        <div className="grid gap-2">
          <label
            htmlFor="select"
            className="text-xs font-medium text-gray-light"
          >
            Sort by
          </label>

          <select
            name="select"
            id="select"
            className="rounded-lg border-2 border-gray-dark bg-transparent p-2"
            onChange={handleSortBy}
            value={sortedBy}
          >
            <option value="population" className="bg-gray-dark ">
              Population
            </option>
            <option value="name" className="bg-gray-dark">
              Name
            </option>
            <option value="area" className="bg-gray-dark">
              Area
            </option>
          </select>
        </div>
        <SelectedRegions />
        <Status />
      </section>
      <Outlet />
    </div>
  );
}

export default Home;

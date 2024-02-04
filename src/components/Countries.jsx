import { useLoaderData } from "react-router-dom";
import { getAllCountries } from "../services/apiCountries";
import CountryItem from "./CountryItem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByIndependence,
  filterByRegions,
  filterByUnMembership,
  sortCountriesBy,
} from "../services/countriesSorter";
import {
  getCountries,
  getIsIndependent,
  getIsUnMember,
  getRegions,
  getSearchIndex,
  getSortedBy,
  setCountries,
  updateTotalCountries,
} from "../countriesSlice";
import Loader from "../ui/Loader";

function Countries() {
  const allCountries = useLoaderData();
  const dispatch = useDispatch();
  const countries = useSelector(getCountries);
  const sortedBy = useSelector(getSortedBy);
  const regions = useSelector(getRegions);
  const unMember = useSelector(getIsUnMember);
  const isIndependent = useSelector(getIsIndependent);

  const searchIndex = useSelector(getSearchIndex);
  const status = useSelector((store) => store.countries.status);
  const [sortedCountries, setSortedCountries] = useState(countries || []);
  //   const [sortedBy, setSortedBy] = useState("population");
  console.log("render");
  useEffect(() => {
    if (searchIndex !== "") setSortedCountries(countries);
    if (searchIndex === "") dispatch(setCountries(allCountries));
  }, [searchIndex, allCountries, dispatch, countries]);

  useEffect(() => {
    // if (searchIndex !== "") {
    //   return;
    // }
    let tempCountries = [...countries];

    tempCountries = sortCountriesBy(tempCountries, sortedBy);
    tempCountries = filterByRegions(tempCountries, regions);

    tempCountries = filterByUnMembership(tempCountries, unMember);
    tempCountries = filterByIndependence(tempCountries, isIndependent);

    setSortedCountries(tempCountries);
    dispatch(updateTotalCountries(sortedCountries.length));
  }, [
    dispatch,
    sortedBy,
    countries,
    regions,
    unMember,
    isIndependent,
    sortedCountries.length,
    searchIndex,
  ]);

  return (
    <section className="col-span-2 lg:col-span-3 ">
      <>
        <div className="grid grid-cols-5 gap-7 border-b-2 border-b-gray-very-light/20 pb-3 min-[480px]:grid-cols-7 xl:grid-cols-9">
          <p className="text-xs font-medium text-gray-light">Flag</p>
          <p className="col-span-2 text-xs font-medium text-gray-light">Name</p>
          <p className="col-span-2 text-wrap text-xs font-medium text-gray-light">
            Population
          </p>
          <p className="col-span-2 hidden text-xs font-medium text-gray-light min-[480px]:block">
            Area(km2)
          </p>
          <p className="col-span-2 hidden text-xs font-medium text-gray-light xl:block">
            Region
          </p>
        </div>
        <div className="scroll relative mt-5 grid max-h-[500px] min-h-20 scroll-m-1 gap-3 overflow-scroll overflow-x-visible pr-3">
          {status === "loading" ? (
            <Loader />
          ) : (
            sortedCountries.map((country) => (
              <CountryItem key={country.name.official} country={country} />
            ))
          )}
        </div>
      </>
    </section>
  );
}
export const countriesLoader = async () => {
  const countries = await getAllCountries();
  return countries;
};
export default Countries;

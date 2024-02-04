import { Link, useLoaderData } from "react-router-dom";
import { getCountry } from "../services/apiCountries";
import NeighbourCountryItem from "../components/NeighbourCountryItem";
import { useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";
function Country() {
  const country = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const {
    flags: { png, alt },
    name: { common, official },
    population,
    area,
    capital,
    continents,
    subregion,
    languages,
    currencies,
    borders,
  } = country[0];

  const valuesFromObject = (obj) => {
    return Object.keys(obj).map((prop) => obj[prop]);
  };

  isLoading && <Loader />;

  return (
    <>
      <Link to="/">
        <button className="absolute left-5 top-5 z-50 rounded-md bg-blue-sky/30 px-2 py-1 text-blue-50">
          &larr; Home
        </button>
      </Link>

      <div className="relative mx-auto flex w-full max-w-[700px] -translate-y-10 flex-col items-center gap-6 border border-b-gray-light/20  border-l-transparent border-r-transparent border-t-gray-light/20 bg-gray-very-dark pb-20 text-gray-very-light transition-all sm:mx-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:rounded-lg sm:border-gray-light/20 lg:grid-cols-4">
        <div className=" absolute -top-8 max-h-6 w-auto   ">
          <img src={png} alt={alt} className="max-h-32 w-full rounded-lg" />
        </div>
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-semibold">{common}</h1>
          <p className="text-sm">{official}</p>
        </div>
        <div className="flex gap-x-8 gap-y-3 text-xs max-[450px]:flex-col">
          <div className="flex justify-between rounded-lg bg-gray-dark p-1">
            <p className="border-r border-r-gray-very-dark px-3 py-2">
              Population
            </p>
            <p className="px-3 py-2">{population.toLocaleString()}</p>
          </div>
          <div className="flex  rounded-lg bg-gray-dark p-1">
            <p className="border-r border-r-gray-very-dark  px-3 py-2">
              Area(km²)
            </p>
            <p className="px-3 py-2">{area.toLocaleString()}</p>
          </div>
        </div>
        <div className="w-full text-xs *:flex *:w-full *:justify-between *:gap-4 *:border-t *:border-gray-light/30 *:px-4 *:py-5 sm:text-sm">
          <div className="">
            <p className="text-gray-light">Capital</p>
            <p className="text-gray-very-light">{capital.join(", ")}</p>
          </div>
          <div className="">
            <p className="text-gray-light">Subregion</p>
            <p className="text-gray-very-light">{subregion}</p>
          </div>
          <div className="">
            <p className="text-gray-light">Language</p>
            <p className="text-gray-very-light">
              {valuesFromObject(languages).join(", ")}
            </p>
          </div>
          <div className="">
            <p className="text-gray-light">Currencies</p>
            <p className="text-gray-very-light">
              {valuesFromObject(currencies)
                .map((c) => c.name)
                .join(", ")}
            </p>
          </div>
          <div className="">
            <p className="text-gray-light">Continents</p>
            <p className="text-gray-very-light">{continents.join(", ")}</p>
          </div>
        </div>
        <div className="w-full space-y-4 px-4">
          <h3 className="text-sm text-gray-light">
            {borders ? "Neighbouring Countries" : "No Neighbouring Countries"}
          </h3>
          {borders && (
            <div className="flex flex-wrap gap-3">
              {borders.map((country) => (
                <NeighbourCountryItem key={country} country={country} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const countryLoader = async ({ params }) => {
  const country = await getCountry(params.countryName);
  return country;
};
export default Country;

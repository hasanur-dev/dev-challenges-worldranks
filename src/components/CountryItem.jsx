import { Link } from "react-router-dom";

// const country = {
//   area: 3287590,
//   flag: "https://flagcdn.com/w320/in.png",
//   name: "India",
//   region: "Asia",
//   population: "1380004385",
// };
function CountryItem({ country }) {
  const {
    area,
    flags: { png },
    name: { common },
    region,
    population,
  } = country;
  return (
    <Link to={`/country/${common}`}>
      {" "}
      <div className="grid grid-cols-5 items-center gap-7 rounded-md bg-gray-dark/0 p-3 transition-all duration-300 hover:-translate-y-1  hover:bg-gray-dark min-[480px]:grid-cols-7 xl:grid-cols-9">
        <div className="max-w-12 overflow-hidden rounded-[4px] ">
          <img src={png} alt="" />
        </div>
        <p className="col-span-2 text-base font-medium text-gray-very-light">
          {common}
        </p>
        <p className="col-span-2 text-base font-medium text-gray-very-light">
          {population.toLocaleString()}
        </p>
        <p className="col-span-2 hidden text-base font-medium text-gray-very-light min-[480px]:block">
          {area.toLocaleString()}
        </p>
        <p className="col-span-2 hidden text-base font-medium text-gray-very-light xl:block">
          {region}
        </p>
      </div>
    </Link>
  );
}

export default CountryItem;

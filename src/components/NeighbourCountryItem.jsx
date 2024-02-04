import { useEffect, useState } from "react";
import { getNeighbourCountry } from "../services/apiCountries";
import { Link } from "react-router-dom";

function NeighbourCountryItem({ country }) {
  const [countryData, setCountryData] = useState(null);
  useEffect(() => {
    const getCountry = async () => {
      const data = await getNeighbourCountry(country);
      setCountryData(data[0]);
    };
    try {
      getCountry();
    } catch (error) {
      console.log(error);
    }
  }, []);
  //   console.log(countryData);
  if (!countryData) return <p>Loading...</p>;
  return (
    <Link to={`/country/${countryData.name.common}`}>
      <div className=" space-y-1 transition-transform duration-300 hover:scale-105">
        <img
          className="max-h-10 rounded-[4px]"
          src={countryData.flags.png}
          alt=""
        />
        <p className="text-xs">{countryData.name.common}</p>
      </div>
    </Link>
  );
}

export default NeighbourCountryItem;

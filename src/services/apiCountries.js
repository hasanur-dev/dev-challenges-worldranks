// const BASE_URL = `https://restcountries.com/v3.1?`
const BASE_URL = `https://restcountries.com/v3.1`;

export const getAllCountries = async () => {
  try {
    const res = await fetch(`${BASE_URL}/all`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountry = async (countryName) => {
  try {
    const res = await fetch(`${BASE_URL}/name/${countryName}?fullText=true
    `);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getNeighbourCountry = async (countryName) => {
  try {
    const res = await fetch(
      `${BASE_URL}/alpha?codes=${countryName}&fields=flags,name`,
    );
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

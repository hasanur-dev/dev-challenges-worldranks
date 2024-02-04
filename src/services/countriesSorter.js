export const sortCountriesBy = function (
  countries,
  sortedBy,
  setSortedCountries,
) {
  const tempCountries = [...countries];
  if (sortedBy !== "name")
    tempCountries.sort((a, b) => b[sortedBy] - a[sortedBy]);
  // tempCountries.sort();
  else
    tempCountries.sort(function (a, b) {
      // Access the string property using the provided property name
      const stringA = a["name"]["common"].toUpperCase(); // ignore case during comparison
      const stringB = b["name"]["common"].toUpperCase(); // ignore case during comparison

      // Compare the strings alphabetically
      if (stringA < stringB) {
        return -1;
      } else if (stringA > stringB) {
        return 1;
      } else {
        return 0; // strings are equal
      }
    });

  return tempCountries;
};

export const filterByRegions = function (tempCountries, regions) {
  //   const tempCountries = [...sortedCountries];
  if (regions.length === 0) return tempCountries;

  const filteredCountries = tempCountries.filter((country) => {
    // console.log(country);
    const isIncluded = regions.some(
      (region) => region === country.region.toLowerCase(),
    );
    // console.log(isIncluded);
    // console.log(country.region.toLowerCase() === );
    // return true;

    return isIncluded;
  });
  //   console.log(filteredCountries);
  return filteredCountries;
};

export function filterByUnMembership(tempCountries, unMember) {
  if (!unMember) return tempCountries;
  return tempCountries.filter((country) => {
    return country.unMember === true;
  });
}

export function filterByIndependence(tempCountries, isIndependent) {
  if (!isIndependent) return tempCountries;
  return tempCountries.filter((country) => {
    return country.independent === true;
  });
}

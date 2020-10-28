import React from "react";
import useCountryDetails from "@hooks/useCountryDetails";
import CountryInfo from "@atoms/CountryInfo";
const CountryDetails = () => {
  const {
    country,
    currencies,
    languages,
    borderCountries,
    goTo,
  } = useCountryDetails();

  if(!country) return (
    <h1>Loading...</h1>
  );
  return (
    <CountryInfo
      country={country}
      currencies={currencies}
      languages={languages}
      borderCountries={borderCountries}
      goTo={goTo}
    />
  );
};

export default CountryDetails;

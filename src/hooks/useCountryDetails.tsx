import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useCountriesList from "@hooks/useCountriesList";
import { ICountry } from "@interfaces/ICountry.interface";
import { ICurrency } from "@interfaces/ICurrency.interface";
import { ILanguage } from "@interfaces/ILanguage.interface";
import { RouterUtils } from "@utils/RouterUtils";
import { Paths } from "@constants/paths";

/**
* 
* Independent functions that require only parameters can be outside the component scope
* As it will always have the same reference it'll help the component performance
*
**/

const languageAndCurrencyReducer = (acc: string[], item: ICurrency | ILanguage): string[] => {
  return [...acc, item.name];
};
const borderCountriesFilter = (ciocs?: string[]) => {
  return (item: ICountry) => ciocs?.includes(item.alpha3Code);
};

const countryFinder = (country: ICountry, countryName: string) => {
  return country.name.toLocaleLowerCase() == RouterUtils.routeToName(countryName);
};

const useCountryDetails = () => {
  const history = useHistory();
  const { countries, error } = useCountriesList();
  const { countryName } = useParams<{ countryName: string }>();
  const [country, setCountry] = useState<ICountry | undefined>();
  const [currencies, setCurrencies] = useState<string | undefined>();
  const [languages, setLanguages] = useState<string | undefined>();
  const [borderCountries, setBorderCountries] = useState<ICountry[]>([]);

  const goTo = (nextCountry: ICountry) => {
    const nextRouteNormalized = RouterUtils.nameToRoute(nextCountry.name);
    return `${countryName}+${nextRouteNormalized}`;
  };
  
  useEffect(() => {
    setCountry(countries.find(item => countryFinder(item, countryName)));
  }, [countries, countryName]);

  useEffect(() => {
    if (error) history.push(Paths.home);
  }, [error, history]);

  useEffect(() => {
    setCurrencies(country?.currencies.reduce(languageAndCurrencyReducer, []).join(", "));
    setLanguages(country?.languages.reduce(languageAndCurrencyReducer, []).join(", "));
  }, [country]);

  useEffect(() => {
    const borderCountries = countries.filter(borderCountriesFilter(country?.borders));
    setBorderCountries(borderCountries);
  },[countries,country, countryName]);

  return {country,currencies, languages, borderCountries, goTo};
};

export default useCountryDetails;
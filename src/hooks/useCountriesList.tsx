import { useEffect, useState, useCallback } from "react";
import CountryListService from "@api/services/CountryListService";
import { ICountryKeys } from "@interfaces/ICountryKeys.interface";
import { ICountryKey } from "@interfaces/ICountryKey.interface";
import { IRegions } from "@interfaces/IRegions.interface";
import useGlobalState from "@hooks/useGlobalState";
import useGlobalDispatch from "@hooks/useGlobalDispatch";
import { ICountry } from "@interfaces/ICountry.interface";

/**
 * 
 * Constants which won't have reference changed during the execution 
 * can be outside of the component scope
 * 
 */

const service = new CountryListService();
const countryFields: ICountryKeys = [
  "name",
  "region",
  "flag",
  "capital",
  "population",
  "topLevelDomain",
  "subregion",
  "nativeName",
  "currencies",
  "languages",
  "borders",
  "alpha3Code"
];

const useCountriesList = () => {
  const dispatch =  useGlobalDispatch();
  const { all_countries, filtered_countries } = useGlobalState();
  const [countries, setCountries] = useState<ICountry[]>(all_countries);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(false);
  const [hashResult, setHashResult] = useState(true);
  const [name, setName] = useState<string>("");
  const [region, setRegion] = useState<IRegions>("");

  const load = useCallback(async () => {
    try {
      if(all_countries.length) return setCountries(all_countries);
      setIsLoading(true);
      setError(false);
      dispatch({
        type: "set_all_countries",
        payload: {countries: await service.all(countryFields)}});
      setCountries(all_countries);
    } catch {
      dispatch({type: "set_all_countries", payload: {countries: []}});
      setError(true);
    } finally { setIsLoading(false);}
  }, [all_countries, dispatch]);

  const searchBy = useCallback(async (key: ICountryKey, value: string) => {
    try{
      setIsLoading(true);
      setError(false);
      dispatch({
        type: "set_filtered_countries",
        payload: {countries: await service.searchBy(key, value, countryFields)}
      });
    } catch {
      dispatch({type: "set_filtered_countries", payload: {countries: []}});
    } finally { setIsLoading(false);}
  }, [dispatch]);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if(name){
        setRegion("");
        searchBy("name", name);
      }
    }, 300);
    return () => { clearTimeout(handler); };
  }, [searchBy, name]);

  useEffect(() => {
    if(region) {
      setName("");
      searchBy("region", region);
    }
  }, [searchBy, region]);

  useEffect(() => {
    setCountries(filtered_countries);
  }, [filtered_countries]);
  
  useEffect(() => {
    if(!region && !name) load();
  }, [region, name, load]);

  useEffect(() => {
    setHashResult(!(!isLoading && !countries.length));
  }, [countries.length, isLoading]);
  

  return {
    countries,
    error,
    isLoading,
    region,
    name,
    load,
    setRegion,
    setName,
    hashResult
  };
};

export default useCountriesList;

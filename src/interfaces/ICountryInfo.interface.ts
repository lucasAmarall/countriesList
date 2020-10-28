import { ICountry } from "@interfaces/ICountry.interface";

export interface ICountryInfo {
  borderCountries: ICountry[] | undefined;
  country: ICountry | undefined;
  currencies: string | undefined;
  languages: string | undefined;
  goTo: (country: ICountry) => string;
}
import { ICountry } from "@interfaces/ICountry.interface";
import { ICountriesListService } from "@interfaces/ICountriesListService.interface";
import { ICountryKeys } from "@interfaces/ICountryKeys.interface";
import { ICountryKey } from "@interfaces/ICountryKey.interface";
import APIService from "..";

export default class CountryListService  extends APIService implements ICountriesListService {
  async all(fields: ICountryKeys): Promise<ICountry[]> {
    return (await (this.get<ICountry[]>(`/all?fields=${fields.join(";")}`))).data;
  }
  
  async searchBy(key: ICountryKey, term: string, fields: ICountryKeys): Promise<ICountry[]> {
    return (await (this.get<ICountry[]>(`/${key}/${term}?fields=${fields.join(";")}`))).data;
  }
}
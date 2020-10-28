import { IAPIService } from "./IAPIService.interface";
import { ICountry } from "./ICountry.interface";
import { ICountryKeys } from "./ICountryKeys.interface";
import { ICountryKey } from "./ICountryKey.interface";

export interface ICountriesListService extends IAPIService {
  all(fields: ICountryKeys) : Promise<ICountry[]>;
  searchBy(key: ICountryKey, term: string, fields: ICountryKeys): Promise<ICountry[]>
}

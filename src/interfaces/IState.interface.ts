import { ICountry } from "./ICountry.interface";

export type IState = {
  light_theme: boolean;
  all_countries: ICountry[];
  filtered_countries: ICountry[];
}

import { ICountry } from "./ICountry.interface";
export interface IAction {
  type: "toggle_theme" | "set_filtered_countries" | "set_all_countries";
  payload?: {
   countries: ICountry[]
  };
} 
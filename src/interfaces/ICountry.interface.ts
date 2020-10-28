
import { ICurrency } from "./ICurrency.interface";
import { ILanguage } from "./ILanguage.interface";
import { IRegionalBlocs } from "./IRegionalBlocs.interface";
import { ITranslation } from "./ITranslation";

export interface ICountry {
	name: string;
	topLevelDomain: string;
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: string[];
	capital: string;
	altSpellings: string[];
	region: string;
	subregion: string;
	population: number;
	latlng: number[];
	demonym: string;
	area: number;
	gini: number;
	timezones: string[];
	borders: string[];
	nativeName: string;
	numericCode: string;
	currencies: ICurrency[];
	languages: ILanguage[];
	Itranslations: ITranslation;
	flag: string;
	regionalBlocs: IRegionalBlocs[];
	cioc: string;
}

import React, { useState, useEffect, useMemo } from "react";
import CountryItem from "@atoms/CountryItem";
import useCountriesList from "@hooks/useCountriesList";
import Input from "@atoms/Input";
import Dropdown from "@atoms/Dropdown";
import { IDropdownOptionInterface } from "@interfaces/IDropdownOption.interface";
import { IRegions } from "@interfaces/IRegions.interface";
import { Paths } from "@constants/paths";
import { RouterUtils } from "@utils/RouterUtils";
import { 
  Container,
  ItemContainer,
  FiltersContainer,
  SearchContainer,
  GridContainer,
  DropdownContainer
} from "./styles";

const CountriesList = () => {
  const { 
    countries,
    isLoading,
    name,
    region,
    hashResult,
    setName,
    setRegion,
  } = useCountriesList();
  const [regions] = useState<IDropdownOptionInterface<IRegions>[]>([
    { uid: "default",label: "Filter by region",active: true },
    { uid: "africa",label: "Africa"},
    { uid: "americas",label: "America"},
    { uid: "asia",label: "Asia"},
    { uid: "europe",label: "Europe"},
    { uid: "oceania",label: "Oceania"}  
  ]);

  useEffect(() => {
    regions.map(_region => _region.active = region == _region.uid);
  },[name, region, regions]);
  
  const filterByRegion = (regions: IDropdownOptionInterface<IRegions>[]) => {
    setRegion((regions.find(region => region?.active)?.uid) || "");
  };

  const CountriesList = useMemo(() =>  {
    return countries.map(country => {
      return <ItemContainer 
        key={country.name} 
        to={ `${Paths.details}/${RouterUtils.nameToRoute(country.name)}`}
      >
        <CountryItem country={country} />
      </ItemContainer>;
    });
  }, [countries]);

  return <Container>
    <FiltersContainer>
      <SearchContainer>
        <Input 
          value={name}
          onChange={setName} 
          isLoading={isLoading}
          placeholder="Search for a country..." 
          iconName="icon-search"
        />
      </SearchContainer>
      <DropdownContainer>
        <Dropdown<IRegions> options={regions} onChange={filterByRegion}/>
      </DropdownContainer>
    </FiltersContainer>
    <GridContainer>
      { hashResult ? CountriesList  : <h1>Search does not match with any country</h1>}
    </GridContainer>
  </Container>;
};

export default CountriesList;

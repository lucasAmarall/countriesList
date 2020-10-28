import React from "react";
import { ICountryInfo } from "@interfaces/ICountryInfo.interface";
import { Link } from "react-router-dom";

import {
  Container,
  Image,
  InfoContainer,
  Title,
  InfoList,
  InfoItem,
  BorderCountriesContainer,
  InfoLabel,
  TagsContainer,
  Tag,
} from "./styles";
import { StringUtils } from "@utils/StringUtils";

const CountryInfo = ({country, currencies, languages, borderCountries, goTo}: ICountryInfo) => {
  return (
    <Container>
      <Image src={country?.flag} />
      <InfoContainer>
        <Title>{country?.name}</Title>
        <InfoList>
          <InfoItem>
            <InfoLabel>Native Name:</InfoLabel> {country?.nativeName}
          </InfoItem>
          <InfoItem>
            <InfoLabel>Population:</InfoLabel> {StringUtils.chunk(country?.population, 3).join(".")}
          </InfoItem>
          <InfoItem>
            <InfoLabel>Region:</InfoLabel> {country?.region}
          </InfoItem>
          <InfoItem>
            <InfoLabel>Sub Region:</InfoLabel> {country?.subregion}
          </InfoItem>
          <InfoItem>
            <InfoLabel>Capital:</InfoLabel> {country?.capital}
          </InfoItem>
        </InfoList>
        <InfoList>
          <InfoItem>
            <InfoLabel>Top Level Domain:</InfoLabel> {country?.topLevelDomain}
          </InfoItem>
          <InfoItem>
            <InfoLabel>Currencies:</InfoLabel> {currencies}
          </InfoItem>
          <InfoItem>
            <InfoLabel>Languages:</InfoLabel> {languages}
          </InfoItem>
        </InfoList>
        <BorderCountriesContainer>
          { borderCountries?.length ? <InfoLabel>Border Countries:</InfoLabel> : null}
          <TagsContainer>
            {
              borderCountries?.map( (borderCountry, index) => {
                return <Tag key={index}>
                  <Link to={goTo(borderCountry)} >
                    {borderCountry.name}
                  </Link>
                </Tag>;
              })
            }
          </TagsContainer>
        </BorderCountriesContainer>
      </InfoContainer>
    </Container>
  );
};

export default CountryInfo;

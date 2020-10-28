import React from "react";
import { ICountryItemProps } from "@interfaces/ICountryItemProps.interface";
import { Container, Flag,InformationContainer, Title, InfoList, InfoItem} from "./styles";

const CountryItem = ({country}: ICountryItemProps ) => {
  const {flag, name, population, region, capital} = country;
  return <Container>
    <Flag src={flag} alt={`Photo of ${name}`}/>
    <InformationContainer>
      <InfoList>
        <InfoItem>
          <Title>{name}</Title>
        </InfoItem>
        <InfoItem>
          <span>Population: </span><span>{population}</span>
        </InfoItem>
        <InfoItem>
          <span>Region: </span><span>{region}</span>
        </InfoItem>
        <InfoItem>
          <span>Capital: </span> <span>{capital}</span>
        </InfoItem>
      </InfoList>
    </InformationContainer>
  </Container>;
};

export default CountryItem;

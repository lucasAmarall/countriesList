import React from "react";
import Header from "@templates/Header";
import {useParams, useHistory }  from "react-router-dom";

import { Container, BackButtonContainer,BackIcon } from "./styles";
import CountryDetails from "@templates/CountryDetails";
import { Paths } from "@constants/paths";
import { RouterUtils } from "@utils/RouterUtils";

const Details = () => {
  const history = useHistory();
  const { countryName } = useParams<{ countryName: string }>();

  const goBack = () => {
    if(RouterUtils.hasPrevRouteFromParams(countryName)) {
      history.push(RouterUtils.getPreviousRoute(countryName));
      return;
    }
    history.push(Paths.home);
  };
  return <>
    <Header />
    <Container>
      <a onClick={goBack} href="#">
        <BackButtonContainer><BackIcon className="icon-arrow"/>Back</BackButtonContainer>
      </a>
      <CountryDetails />
    </Container>
  </>;
};

export default Details;

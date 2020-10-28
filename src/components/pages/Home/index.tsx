import React from "react";
import Header from "@templates/Header";
import CountriesList from "@templates/CountriesList";
import { Container } from "./styles";

const Home = () => {
  return <>
    <Header />
    <Container>
      <CountriesList />
    </Container>
  </>;
};

export default Home;

import React from "react";
import { Container, ContentContainer } from "./styles";
import Logo from "@atoms/Logo";
import ToggleThemeButton from "@atoms/ToggleThemeButton";

const Header = () => {
  return <Container>
    <ContentContainer>
      <Logo />
      <ToggleThemeButton />
    </ContentContainer>
  </Container>;
};

export default Header;

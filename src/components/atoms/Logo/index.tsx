import React from "react";
import { Paths } from "@constants/paths";
import { Link } from "react-router-dom";
import { Container, SemanticTitle, VisualLogo } from "./styles";

const Logo = () => {
  return <Link to={Paths.home}>
    <Container title="where in the world">
      <SemanticTitle>where in the world</SemanticTitle>
      <VisualLogo className="icon-logo" />
    </Container>
  </Link>;
};

export default Logo;

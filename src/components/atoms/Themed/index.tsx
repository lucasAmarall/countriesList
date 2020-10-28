import React from "react";
import { ThemeProvider } from "styled-components";
import { Themes } from "@constants/themes";
import { IThemed } from "@interfaces/IThemed.interface";
import useGlobalState from "@hooks/useGlobalState";

const Themed = ({children}: IThemed) => {
  const { light_theme } = useGlobalState();
  return(
    <ThemeProvider theme={Themes[light_theme ? "light" : "dark"]}>
      {children}
    </ThemeProvider>
  );
};

export default Themed;
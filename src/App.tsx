import React from "react";
import Router from "./router";
import Reset from "@atoms/Reset";
import Themed from "@atoms/Themed";
import { GlobalProvider } from "./context/globalContext";
import "./fonts/text/index.css";
import "./fonts/icons/index.css";

const App = () => {
  return  <GlobalProvider>
    <Themed>
      <Router />
      <Reset />
    </Themed>
  </GlobalProvider>
  ;
};

export default App;

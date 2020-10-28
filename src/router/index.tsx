import React from "react";
import { Paths } from "@constants/paths";
import { 
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "@pages/Home";
import Details from "@pages/Details";

const Router = () => {
  return <BrowserRouter>
    <Switch>
      <Route path={`${Paths.details}/:countryName`} component={Details} />
      <Route path={Paths.home} component={Home} />
      <Route path={Paths.default} component={Home} />
    </Switch>
  </BrowserRouter>;
};

export default Router;

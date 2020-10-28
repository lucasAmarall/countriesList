import React from "react";
import useGlobalDispatch from "@hooks/useGlobalDispatch";
import { Container, MoonIcon , Label} from "./styles";
import persistentData from "@hooks/persistentData";

const ToggleThemeButton = () => {
  const dispatch = useGlobalDispatch();
  const {state: themeSchema, setState: setThemeSchema } = persistentData("theme", true);

  const toggleTheme = () => {
    dispatch({type: "toggle_theme"});
    setThemeSchema(!themeSchema);
  };

  return <Container onClick={toggleTheme}>
    <MoonIcon className="icon-moon" />
    <Label>Dark Mode</Label>
  </Container>;
};

export default ToggleThemeButton;

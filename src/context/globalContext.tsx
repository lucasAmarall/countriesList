import React, { createContext, useReducer } from "react";
import GlobalReducer from "./globalReducer";

import { IState } from "@interfaces/IState.interface";
import { IDispatch } from "@interfaces/IDispatch.interface";
import { IGlobalProvider } from "@interfaces/IGlobalProvider.interface";
import persistentData from "@hooks/persistentData";
export const GlobalStateContext = createContext<IState | undefined>(undefined);
export const GlobalDispatchContext = createContext<IDispatch | undefined>(undefined);

export const GlobalProvider = ({ children }: IGlobalProvider) => {
  const {state: themeSchema } = persistentData("theme", true);
  const [state, dispatch] = useReducer(GlobalReducer, {
    light_theme: themeSchema,
    all_countries: [],
    filtered_countries: [],
  });
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
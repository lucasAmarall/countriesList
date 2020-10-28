
import { IAction } from "@interfaces/IAction.interface";
import { IState } from "@interfaces/IState.interface";

const GlobalReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
  case "toggle_theme": {
    return {
      ...state,
      light_theme: !state.light_theme,
    };
  }
  case "set_all_countries": {
    return {
      ...state,
      all_countries: action?.payload?.countries ?? []
    };
  }
  case "set_filtered_countries": {
    return {
      ...state,
      filtered_countries: action?.payload?.countries ?? []
    };
  }
  default: {
    throw new Error(`Unhandled action type: ${action.type}`);
  }
  }
};

export default GlobalReducer; 
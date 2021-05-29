import React, { useReducer } from "react";
import {
  AppContextInterface,
  AppContextProviderProps,
  AppReducerAction,
  AppState,
} from "../types/types";

export const AppContext =
  React.createContext<AppContextInterface | undefined>(undefined);

const appReducer = (state: AppState, action: AppReducerAction) => {
  switch (action) {
    case AppReducerAction.UpdateRedirectArray: {
      return state;
    }
    case AppReducerAction.UpdateLastRedirect: {
      return state;
    }
    case AppReducerAction.SubmitShortenRequest: {
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

const AppContextProvider = ({
  children,
}: AppContextProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(appReducer, {
    redirects: [],
  });

  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = (): AppContextInterface => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };

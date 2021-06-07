import React, { useReducer } from "react";
import {
  AppContextInterface,
  AppContextProviderProps,
  Action,
  AppState,
  ActionType,
} from "../types/types";

// import { PostShortenUrl } from "../api/request";

export const AppContext =
  React.createContext<AppContextInterface | undefined>(undefined);

// const appReducer: React.Reducer<AppState, Action> = async (
const appReducer: React.Reducer<AppState, Action> = (
  state: AppState,
  action: Action
) => {
  console.log(
    `AppContext::appReducer called with state: ${JSON.stringify(
      state
    )}, action: ${JSON.stringify(action)}`
  );

  switch (action.type as ActionType) {
    case ActionType.SetLastRedirect: {
      return {
        redirects: state.redirects,
        lastRedirect: action.payload,
      };
    }
    case ActionType.AppendToRedirectArray: {
      return {
        redirects: [...state.redirects, action.payload],
        lastRedirect: state.lastRedirect,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
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

import { Redirect } from "../services/hexlink";

export interface AppState {
  redirects: Array<Redirect>;
  lastRedirect?: Redirect;
}

export enum ActionType {
  AppendToRedirectArray = "AppendToRedirectArray",
  SetLastRedirect = "SetLastRedirect",
}

export interface Action {
  type: ActionType;
  payload: Redirect;
}

export interface AppContextInterface {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}
export interface AppContextProviderProps {
  children: React.ReactNode;
}

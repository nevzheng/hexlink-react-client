export interface Redirect {
  url: string;
  code: string;
  created: string;
}

export interface AppState {
  redirects: Array<Redirect>;
  lastRedirect?: Redirect;
}

export enum ActionType {
  SetRedirectArray = "SetRedirectArray",
  AppendToRedirectArray = "AppendToRedirectArray",
  SetLastRedirect = "SetLastRedirect",
}

export interface Action {
  type: ActionType;
  payload: Array<Redirect> | Redirect;
}

export interface AppContextInterface {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}
export interface AppContextProviderProps {
  children: React.ReactNode;
}

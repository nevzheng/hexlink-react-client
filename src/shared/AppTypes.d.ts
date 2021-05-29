declare module "AppTypes" {
  interface Redirect {
    url: string;
    code: string;
    created: string;
  }

  interface AppState {
    redirects: Array<Redirect>;
    lastRedirect?: Redirect;
  }

  enum AppReducerAction {
    UpdateRedirectArray,
    UpdateLastRedirect,
    SubmitShortenRequest,
  }

  interface AppContextInterface {
    state: AppState;
    dispatch: React.Dispatch<AppReducerAction>;
  }
  interface AppContextProviderProps {
    children: React.ReactNode;
  }
}

module.exports = {
  Redirect,
  AppState,
  AppReducerAction,
  AppContextInterface,
  AppContextProviderProps,
};

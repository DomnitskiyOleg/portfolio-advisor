export interface StrategyState {
  value: 'none' | 'aggressive' | 'conservative' | 'common';
}
export interface Auth {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

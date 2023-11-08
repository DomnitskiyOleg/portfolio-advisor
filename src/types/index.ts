export interface StrategyState {
  value: 'none' | 'aggressive' | 'conservative' | 'common';
}
export interface Auth {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

// export interface UserAnswers {
//   investGoal: string
//   investTime: number;
//   spendIncome: string;
//   expectedProfit: string;
//   investType: string;
//   age: number;
// }

export interface UserAnswers {
  investGoal: '' | 'ptotect' | 'medGrow' | 'grow';
  investTime: number;
  spendIncome: '' | 'spendAll' | 'spendPart' | 'reinvest';
  expectedProfit: '' | 'earn5' | 'earn10' | 'earn15';
  investType: '' | 'deposits' | 'bonds' | 'stocks';
  age: number;
}

export type EtfType = 'SBGB' | 'SBGD' | 'SBRB' | 'SBMX' | 'SBHI';

export interface EtfRatesType {
  SBGB?: number;
  SBGD?: number;
  SBRB?: number;
  SBMX?: number;
  SBHI?: number;
}

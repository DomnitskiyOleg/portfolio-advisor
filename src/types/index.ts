export interface StrategyState {
  value: 'none' | 'aggressive' | 'conservative' | 'common';
}

export interface TestPassedState {
  value: 'passed' | 'notPassed';
}

export interface Auth {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

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
  SBGB: number;
  SBGD: number;
  SBRB: number;
  SBMX: number;
  SBHI: number;
}

export interface ChartDataType {
  name: string;
  value: number;
}

export interface GeneralAllocationType {
  акции: {
    value: number;
    name: string;
  };
  облигации: {
    value: number;
    name: string;
  };
  золото: {
    value: number;
    name: string;
  };
}

export interface EtfPool {
  ['SBGB']: { type: 'облигации'; fraction: 2 };
  ['SBGD']: { type: 'золото'; fraction: 1 };
  ['SBRB']: { type: 'облигации'; fraction: 2 };
  ['SBMX']: { type: 'акции'; fraction: 2 };
  ['SBHI']: { type: 'акции'; fraction: 2 };
}

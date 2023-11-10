import type { EtfType, EtfPool } from '../types/index';

export const strategies = {
  conservative: {
    акции: { value: 20, name: 'акции' },
    облигации: { value: 60, name: 'облигации' },
    золото: { value: 10, name: 'золото' },
  },
  common: {
    акции: { value: 50, name: 'акции' },
    облигации: { value: 40, name: 'облигации' },
    золото: { value: 10, name: 'золото' },
  },
  aggressive: {
    акции: { value: 70, name: 'акции' },
    облигации: { value: 20, name: 'облигации' },
    золото: { value: 10, name: 'золото' },
  },
  none: {
    акции: { value: 0, name: 'акции' },
    облигации: { value: 0, name: 'облигации' },
    золото: { value: 0, name: 'золото' },
  },
};

export const etfs: EtfType[] = ['SBGB', 'SBGD', 'SBRB', 'SBMX', 'SBHI'];

export const etfPool: EtfPool = {
  SBGB: { type: 'облигации', fraction: 2 },
  SBGD: { type: 'золото', fraction: 1 },
  SBRB: { type: 'облигации', fraction: 2},
  SBMX: { type: 'акции', fraction: 2 },
  SBHI: { type: 'акции', fraction: 2 },
};



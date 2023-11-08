import type { EtfType } from '../types/index';

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
  none: {},
};

export const etfs: EtfType[] = ['SBGB', 'SBGD', 'SBRB', 'SBMX', 'SBHI'];

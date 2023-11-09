import { etfPool, etfs } from '../static/strategies';
import type { EtfRatesType, GeneralAllocationType } from '../types/index';

const getActualEtfAllocation = (
  initialCapital: number,
  etfActualRates: EtfRatesType,
  userAllocation: GeneralAllocationType,
) => {
  const initialAcc: EtfRatesType = {
    SBGB: 0,
    SBGD: 0,
    SBRB: 0,
    SBMX: 0,
    SBHI: 0,
  };
  const actualEtfAllocation = etfs.reduce((acc, etf) => {
    const { type, fraction } = etfPool[etf];
    const actualPrice = etfActualRates[etf];
    const percentageOfEtfType = userAllocation[type].value;
    const aviliableMoneyForThisEtfType =
      (initialCapital * percentageOfEtfType) / 100;
    if (actualPrice) {
      const etfToBuy = aviliableMoneyForThisEtfType / fraction / actualPrice;
      acc[etf] = Math.ceil(etfToBuy);
      return acc;
    }
    acc[etf] = 0;
    return acc;
  }, initialAcc);
  return actualEtfAllocation;
};
export default getActualEtfAllocation;

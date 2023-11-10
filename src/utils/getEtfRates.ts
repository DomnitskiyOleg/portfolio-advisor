import axios from 'axios';
import getMoexUrl from '../routes/getMoexUrl';
import type { EtfType, EtfRatesType } from '../types/index';

const getEtfData = async (etfs: EtfType[]) => {
  const promises = etfs.map((etf) => axios.get(getMoexUrl(etf)));
  const responses = await Promise.all(promises);

  const initialAcc: EtfRatesType = {
    SBGB: 0,
    SBGD: 0,
    SBRB: 0,
    SBMX: 0,
    SBHI: 0,
  };

  const etfRates = responses.reduce((acc, item) => {
    const [[ticker, value]]: [[EtfType, number]] = item.data.marketdata.data;
    acc[ticker] = value;
    return acc;
  }, initialAcc);

  return etfRates;
};

export default getEtfData;

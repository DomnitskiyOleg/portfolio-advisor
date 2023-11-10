import type { EtfType } from '../types/index';

const getMoexUrl = (etf: EtfType): string => {
  const baseUrl = ' https://iss.moex.com';
  const path = `/iss/engines/stock/markets/shares/boards/TQTF/securities/${etf}.json`;
  const moexApiUrl = new URL(path, baseUrl);
  moexApiUrl.search =
    'iss.meta=off&iss.only=marketdata&marketdata.columns=SECID,MARKETPRICE';
  return moexApiUrl.toString();
};

export default getMoexUrl;

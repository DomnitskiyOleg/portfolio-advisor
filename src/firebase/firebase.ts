import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import type { EtfRatesType } from '../types/index';

const firebaseConfig = {
  apiKey: 'AIzaSyAOk7Te6G3FPPkXa0AjbsFL9EHjZD3inBg',
  authDomain: 'portfolio-advisor-278c4.firebaseapp.com',
  databaseURL: 'https://portfolio-advisor-278c4-default-rtdb.firebaseio.com',
  projectId: 'portfolio-advisor-278c4',
  storageBucket: 'portfolio-advisor-278c4.appspot.com',
  messagingSenderId: '382252262734',
  appId: '1:382252262734:web:d64043157934d46cc8aa1f',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const fireBaseApi = {
  saveEmail: async (email: string) => {
    await set(ref(database, email.replace(/\./g,'-dot-')), { potrfolio: 'empty' });
  },
  savePortfolio: async (email: string, portfolio: EtfRatesType) => {
    await set(ref(database, email.replace(/\./g,'-dot-')), portfolio);
  },
};

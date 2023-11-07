import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioSlice';
import strategyReducer from './strategySlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    strategy: strategyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

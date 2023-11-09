import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioSlice';
import strategyReducer from './strategySlice';
import testPassedReducer from './testPassedSlice';
import emailReducer from './emailSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    strategy: strategyReducer,
    isTestPassed: testPassedReducer,
    email: emailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

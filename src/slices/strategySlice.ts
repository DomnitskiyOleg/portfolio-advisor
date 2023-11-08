import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { StrategyState } from '../types/index';

const initialState: StrategyState = {
  value: 'none',
};

export const strategySlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setStrategy: (state, action: PayloadAction<StrategyState['value']>) => {
      const { payload } = action;
      state.value = payload;
    },
  },
});

export const { setStrategy } = strategySlice.actions;
export default strategySlice.reducer;

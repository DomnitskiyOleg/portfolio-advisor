import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { StrategyState } from '../types/index'


const initialState: StrategyState = {
  value: 'none',
};

export const strategySlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setStrategy: (state, action: PayloadAction<StrategyState['value']>) => {
      state.value = action.payload;
    },
  },
});

export default strategySlice.reducer;

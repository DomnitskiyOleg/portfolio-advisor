import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TestPassedState } from '../types/index';

const initialState: TestPassedState = {
  value: 'notPassed',
};

export const testPassedSlice = createSlice({
  name: 'isTestPassed',
  initialState,
  reducers: {
    setTestPassed: (state, action: PayloadAction<TestPassedState['value']>) => {
      const { payload } = action;
      state.value = payload;
    },
  },
});

export const { setTestPassed } = testPassedSlice.actions;
export default testPassedSlice.reducer;

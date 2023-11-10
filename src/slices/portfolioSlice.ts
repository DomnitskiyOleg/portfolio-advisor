import { createSlice } from '@reduxjs/toolkit';

//This slice not used yet

interface PortfolioState {
  value: number[];
}

const initialState: PortfolioState = {
  value: [],
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    increment: (state) => {},
  },
});

export default portfolioSlice.reducer;
//This slice not used yet
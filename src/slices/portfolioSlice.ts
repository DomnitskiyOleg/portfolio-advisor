import { createSlice } from '@reduxjs/toolkit'


interface PortfolioState {
  value: number[]
}

const initialState: PortfolioState = {
  value: [],
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    increment: (state) => {

      },
  },
})

export default portfolioSlice.reducer
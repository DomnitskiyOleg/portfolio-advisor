import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  value: 'none',
};

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.value = payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;

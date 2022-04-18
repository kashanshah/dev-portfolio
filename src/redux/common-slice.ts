import { createSlice } from '@reduxjs/toolkit';
import { randomNumberBetween } from '../utils/helpers';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    helloCSS: 'rotate(0) scale(1)',
    homeBGImage: randomNumberBetween(1, 12),
  },
  reducers: {
    updateHelloCss: (state, action) => {
      state.helloCSS = action.payload;
    },
    updateBG: (state) => {
      state.homeBGImage = randomNumberBetween(1, 12);
    },
  },
});

export const { updateHelloCss, updateBG } = commonSlice.actions;

export default commonSlice.reducer;

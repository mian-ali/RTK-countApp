import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: '',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeColor: (state, action) => {
      state.color += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { themeColor } = themeSlice.actions;

export default themeColor.reducer;

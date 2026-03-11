import { createSlice } from '@reduxjs/toolkit';


export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    theme: 'light', 
    lang: 'en',
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setTheme, setLang } = homeSlice.actions;

export default homeSlice.reducer;
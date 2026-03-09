import { createSlice } from '@reduxjs/toolkit';

// Başlangıç değerlerini al
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : 'light';
};

const getInitialLang = () => {
  const savedLang = localStorage.getItem('lang');
  return savedLang ? savedLang : 'en';
};

//light-dark tema ve dil seçeneği için reducers
export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    theme: getInitialTheme(),
    lang: getInitialLang(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme); 
    },
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem('lang', state.lang);
    },
  },
});

export const { toggleTheme, setLang } = homeSlice.actions;
export default homeSlice.reducer;
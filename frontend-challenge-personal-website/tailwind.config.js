/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F4F4F4',
        'custom-dark-bg1': '#2A262B',
        'custom-dark-bg2': '#484148',
        'custom-dark-card': '#2A262E',
        'custom-pink': '#EA2678',
        'custom-blue': '#82BBFF', 
    },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
  },
},
  plugins: [],
}
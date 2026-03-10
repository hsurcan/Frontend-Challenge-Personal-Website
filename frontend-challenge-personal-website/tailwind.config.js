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
       
        'custom-dark-bg': '#252128',
        'custom-dark-card': '#2A262E',
        'custom-pink': '#EA2678',
        'custom-blue': '#0077B5', 
    },
  },
},
  plugins: [],
}
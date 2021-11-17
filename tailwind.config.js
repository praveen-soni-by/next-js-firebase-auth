
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    

     extend: {
      outline: ['hover', 'active'],
      colors: {
        primary: colors.blue,
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
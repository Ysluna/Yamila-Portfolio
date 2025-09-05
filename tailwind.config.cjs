/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pirata: ['"Pirata One"', ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        meie: ['"Meie Script"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        dark: '#503d41',
        light: '#f1eee9',
        pink: '#f9bdc1',
      },
    },
  },
  plugins: [],
};
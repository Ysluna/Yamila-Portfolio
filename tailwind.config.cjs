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
        news: ['"Newsreader"', ...defaultTheme.fontFamily.serif],
        kapakana: ['"Kapakana"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        dark: '#503d41',
        light: '#f1eee9',
        pink: '#f9bdc1',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
        '13xl': '16rem',
      },
    },
  },
  plugins: [],
};
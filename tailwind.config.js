/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, jsx, ts, tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      stone: colors.stone,
      red: colors.red,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      sky: colors.sky,
      violet: colors.violet,
      purple: colors.purple,
    },
    extend: {},
  },
  plugins: [],
}


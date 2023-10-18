/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './projects/**/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/typography"),
    require('tailwindcss-animated'),
    require("daisyui")
  ],
}


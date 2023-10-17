/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './projects/**/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


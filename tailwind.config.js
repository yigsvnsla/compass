/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "projects/web-compass/src/**/*.{html,ts}"
    './projects/**/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


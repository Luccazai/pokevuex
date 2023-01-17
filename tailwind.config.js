/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html", "./src/components/**.vue", "./src/**.vue"],
  theme: {
    extend: {
      display: ['group-hover'],
      screens: {
        'tall': { 'raw': '(max-height: 600px)'},
      },
      colors: {
        'mainBlue': '#3EB07E',
        'secondaryBlue': '#41628b',
      },
    },
  },
  plugins: [],
}

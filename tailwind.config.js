/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html", "./src/components/**.vue", "./src/**.vue"],
  theme: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}

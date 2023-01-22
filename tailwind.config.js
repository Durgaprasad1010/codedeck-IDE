/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      primary: "#1E90FF",
      secondary: "#FF6347",
      primaryLighty: "#00BFFF",
      black: "#000000",
      red: "#FF0000",
      white: "#FFFFFF",
      gray: "#808080",
      lightGray: "#D3D3D3",
      darkGray: "#A9A9A9",
      green: "#008000",
      blue: "#0000FF",
      yellow: "#FFFF00",
      orange: "#FFA500",
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

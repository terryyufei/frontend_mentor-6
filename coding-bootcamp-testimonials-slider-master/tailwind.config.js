/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        'darkBlue': 'hsl(240, 38%, 20%)',
        'grayishBlue': 'hsl(240, 18%, 77%)',
      },
      fontFamily: {
        'body': "'Inter', sans-serif",
      },
      fontSize: {
        'size': '32px'
      }
    },
  },
  plugins: [],
}


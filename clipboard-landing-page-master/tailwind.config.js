/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "strongCyan": "hsl(171, 66%, 44%)",
        "lightBlue": "hsl(233, 100%, 69%)",
        "darkGrayishBlue": "hsl(210, 10%, 33%)",
        "grayishBlue": "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        'body': "'Bai Jamjuree', sans-serif",
      },
      fontSize: {
        'size': "18px",
      }
    },
  },
  plugins: [],
}


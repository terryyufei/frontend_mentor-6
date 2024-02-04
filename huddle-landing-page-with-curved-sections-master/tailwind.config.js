/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "pink": "hsl(322, 100%, 66%)",
        "lightPink": "hsl(321, 100%, 78%)",
        "lightRed": "hsl(0, 100%, 63%)",
        "veryDarkCyan": "hsl(192, 100%, 9%)",
        "veryPaleBlue": "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        "headings": "'Poppins', sans-serif",
        "body": "'Open Sans', sans-serif",
      },
      backgroundImage: {
        'mobileSectionTop': "url('./images/bg-section-top-mobile-1.svg')",
        'footerMobile': "url('./images/bg-footer-top-mobile.svg')",
        'footerDesktop': "url('./images/wave.svg')",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '639px'},   // Up to 639px
      'md': {'max': '767px'},   // Up to 767px
      'lg': {'max': '1023px'},  // Up to 1023px
      'xl': {'max': '1279px'},  // Up to 1279px
      '2xl': {'max': '1400px'}, // Up to 1535px
      '3xl': {'max': '1599px'} , // Up to 1599px
    }
  },
  plugins: [],
}


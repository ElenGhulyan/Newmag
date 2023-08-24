/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '3xl': {'max': '1599px'} , // Up to 1599px
      '2xl': {'max': '1400px'}, // Up to 1535px
      'xl': {'max': '1200px'},  // Up to 1279px
      'lg': {'max': '992px'},  // Up to 1023px
      'md': {'max': '768px'},   // Up to 767px
      'sm': {'max': '400px'},   // Up to 639px

    }
  },
  plugins: [],
}


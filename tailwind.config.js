/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'saffron': {
          '50': '#fefaec',
          '100': '#fcf3c9',
          '200': '#f8e58f',
          '300': '#f4d255',
          '400': '#f2c033',
          '500': '#eb9f15',
          '600': '#d0790f',
          '700': '#ad5710',
          '800': '#8c4314',
          '900': '#733814',
        },
      },
      zIndex: {
        '-1': -1,
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

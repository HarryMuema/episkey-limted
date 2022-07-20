/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue':'#1A49CB',
      'white':{
        100:'#FFFFFF',
        200:'#FFFFFE',
        300:'#EFF0F3'
      },
      'dark-blue':'#080F4C',
      'green':{
        100:'#60F99E',
        200:'#3CAB75'
      },
      'gray':{
        100:'#9FA4A9',
        200:'#6C757E',
        300:'#D9D9D9',
        400:'#D9E1F3',
      },
      'black':'#353535',
      'yellow':'#F2B101',
    },
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
        'lato':['Lato'],
      }
    },
  },
  plugins: [],
}

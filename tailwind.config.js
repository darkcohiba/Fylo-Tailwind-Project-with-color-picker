/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        darkBlue: '',
        darkBlue1:'',
        darkBlue2:'',
        darkBlue3:'',
        accentCyan:'',
        accentBlue:'',
        lightRed:'',
      },
      fontFamily:{
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}


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
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('./dist/images/logo-dark-mode.svg')",
        'logo-light-mode': "url('./dist/images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('./dist/images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('./dist/images/bg-curvy-light-mode.svg')"        
      })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: [],
}


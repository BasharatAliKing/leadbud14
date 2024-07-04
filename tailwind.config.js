/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {

    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

    },
    colors:{
      'green': '#56F444',
      'dark-blue': '#030621',
      'mygray': '#7B7B7B',
      'red': '#FF0000',
      'gray-light': '#F5F5F5',
      'greenlight': 'rgba(86,244,68, 50%)',

    },

    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']

    },

    extend: {

      borderRadius: {
        'xl': '10px',
        '2xl': '16px'
      },
      boxShadow: {
        'xl': '0px 5px 12px rgba(0, 0, 0, 16%)',
      },
      fontSize: {
        'xs': '16px',
        'sm': '20px',
        'md': '26px',
        'xl': '40px',
        'h2': '24px',
        'p' : '15px',
      },
      backgroundImage: {
        'welcome-bg': "url('/src/assets/images/welcome-bg.png')",
      }
      

    },
  },
  plugins: [
  require('@tailwindcss/forms'),
  

  ],
}
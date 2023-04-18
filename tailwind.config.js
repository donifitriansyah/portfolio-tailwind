/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container :{
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        secondary: '#FF7315',
        primary: '#232020',
        third: '3A3535'
      },
      screens :{
        '2xl':'1320px',
      }
    },
  },

  plugins: [],
}


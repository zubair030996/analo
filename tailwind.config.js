/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './*.html' ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        myRed: 'hsl(12, 88%, 59%)',
        moreRed: 'hsl(12, 88%, 69%)',
        mostRed: 'hsl(12, 88%, 95%)',
        myBlue: 'hsl(228, 39%, 23%)',
        grayishBlue: 'hsl(227, 12%, 61%)',
        mostDarkBlue: 'hsl(233, 12%, 13%)',
        lessRed: 'hsl(13, 100%, 96%)',
        lessGray: 'hsl(0, 0%, 90%)',
      },
    },
  },
  plugins: [],
}

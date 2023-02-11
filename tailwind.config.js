/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#4E60FF',
        secondary: '#FF5C60',
        neutralGray: '#C7C8D2',
        grayBackground: '#F3F4FF',
        dark: '#2B2B43',
        bgLight:'#F3F4FF', 
        grayText: '#83859C',
        darkGray: '#545563'
      },
      fontFamily: {
        body: ['Nunito']
      },
    },
  },
  plugins: [],
}

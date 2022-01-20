const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.2rem',
        md: '4rem',
      },
    },
    fontFamily: {
      'work-sans': ["'Work Sans'", 'sans-serif'],
      sans: ["'Quattrocento Sans'", 'sans-serif'],
    },
    colors: {
      currrent: 'currentColor',
      primary: '#1A0F5F',
      danger: '#CF2C76',
      warning: '#F3812F',
      info: '#582ED2',
      light: '#f3f4f9',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
    },
    extends: {},
  },
  plugins: [],
};

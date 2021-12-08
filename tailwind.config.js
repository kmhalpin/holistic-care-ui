module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        'primary': '#223bc9'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

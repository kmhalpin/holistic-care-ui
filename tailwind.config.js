module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        'primary': '#3498db',
        'primary-10': '#3498db1a'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

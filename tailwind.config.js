module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

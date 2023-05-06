const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      // Add base styles or utilities here
    }),
  ],
};

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.mask-polygon': {
          maskImage: 'url("/polygons/Polygon1.svg")',
          webkitMaskImage: 'url("/polygons/Polygon1.svg")',
          maskRepeat: 'no-repeat',
          webkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          webkitMaskSize: 'contain',
        },
      });
    }),
  ],
};

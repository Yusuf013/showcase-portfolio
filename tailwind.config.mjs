/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scan de bestanden in de app-map
    './pages/**/*.{js,ts,jsx,tsx}', // Scan de bestanden in de pages-map
    './components/**/*.{js,ts,jsx,tsx}', // Scan de bestanden in de components-map
    './src/**/*.{js,jsx,ts,tsx}', // Scan de bestanden in de src-map
  ],
  theme: {
    extend: {
      fontFamily: {
        formula1: ['Formula1', 'sans-serif'], // Voeg de Formula1 font toe
      },
    },
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

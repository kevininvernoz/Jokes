// tailwind.config.js

const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeInDelay: 'fadeIn 2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [require('daisyui'),addDynamicIconSelectors()],
  daisyui: {
    themes: ["light", "dark"],
  },

}
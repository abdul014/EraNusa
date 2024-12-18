/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "lg:top-44",
    "lg:left-[calc(50%+200px)]",
    "lg:max-w-[300px]",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform-bg': 'transform, background-color',
        'opacity-transform-filter': 'opacity, transform, filter',
      },
    },
  },
  plugins: [tailwindScrollbar],
};
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      clipPath: {
        'webdev': 'polygon(0 0, 100% 0, 0 100%)',
        'photography': 'polygon(100% 0, 100% 100%, 0 100%)',
      },
    },
    colors: {
      ...colors,
      primary: colors.lime,
      secondary: colors.green,
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    function({ addUtilities }) {
      addUtilities({
        '.clip-path-webdev': {
          'clip-path': 'polygon(0 0, 100% 0, 0 100%)',
        },
        '.clip-path-photography': {
          'clip-path': 'polygon(100% 0, 100% 100%, 0 100%)',
        },
      });
    }
  ],
};
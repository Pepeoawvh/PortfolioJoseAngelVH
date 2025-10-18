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
      // Usa extend para no sobrescribir la paleta base de Tailwind
      colors: {
        // Paletas vigentes (no usar lightBlue/warmGray/trueGray/coolGray/blueGray)
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
            // Si antes usabas lightBlue, su reemplazo es sky
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,

        // Tus tokens
        primary: colors.lime,
        secondary: colors.green,
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      clipPath: {
        webdev: "polygon(0 0, 100% 0, 0 100%)",
        photography: "polygon(100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar"),
    function ({ addUtilities }) {
      addUtilities({
        ".clip-path-webdev": {
          "clip-path": "polygon(0 0, 120% 0, 0 100%)",
        },
        ".clip-path-photography": {
          "clip-path": "polygon(100% 0, 100% 100%, 0 100%)",
        },
      });
    },
  ],
};

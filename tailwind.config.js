/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#121212",
          100: "#121212",
          200: "#1a1a1a",
          300: "#201D1D",
        },
        secondary: {
          100: "#0d31a5",
          200: "#0b2886",
          300: "#0a2376",
          400: "#061547",
        },
        tertiary: {
          100: "#c90324",
          200: "#b20320",
          300: "#97021b",
        },
        accent: {
          200: "#fcef27",
          300: "#e2d303",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

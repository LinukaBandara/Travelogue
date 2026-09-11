/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        arctic: "#090d16",
        steel: "#131c2e",
        steelLight: "#1b2740",
        mint: "#34d399",
        mintDim: "#1f7a5c",
        slateSoft: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Fraunces", "serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

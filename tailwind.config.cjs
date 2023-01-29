/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "0px", max: "480px" },

      md: { min: "481px", max: "768px" },

      lg: { min: "769px" },
    },
  },
  plugins: [],
};

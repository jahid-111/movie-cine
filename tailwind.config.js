/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25em",
      },
    },
    colors: {
      primary: "#00D991",
    },
  },
  plugins: [],
};

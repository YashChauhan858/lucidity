const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#161718",
      secondary: "#243325",
      cardBg: "#212124",
      badgeText: "#98C379",
      border: "#ffffff1c",
    },
    screens: {
      sm: { max: "468px" },
      md: { max: "768px" },
      lg: { max: "1020px" },
      xl: { max: "1280px" },
      "2xl": { max: "1538px" },
    },
  },
  plugins: [],
};

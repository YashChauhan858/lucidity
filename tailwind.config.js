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
      badgeText: "#6f7a3d",
      border: "#ffffff1c",
    },
  },
  plugins: [],
};

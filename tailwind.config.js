const { nextui } = require("@nextui-org/react");
const { url } = require("inspector");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Logo: "#07592F",
        Nav: "#0f703e",
        Footer: "#000000CC",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

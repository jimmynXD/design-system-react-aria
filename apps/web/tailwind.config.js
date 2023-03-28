// // tailwind config is required for editor support

// module.exports = require("tailwind-config/tailwind.config.js");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["src/**/*.{js,ts,jsx,tsx}", "./theme.config.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

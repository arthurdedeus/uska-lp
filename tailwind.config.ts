/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-blue": "#282560",
      primary: "#282560",
      secondary: "#FAAF42",
      "secondary-light": "#FFC676",
      dark: "#1E1E1E",
      "dark-grey": "#818285",
      "mid-grey": "#E0E0E0",
      "light-grey": "#E7EAF6",
      success: "#4CD964",
      error: "#FF3B30",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};

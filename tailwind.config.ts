/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-blue": "#282560",
      primary: "#322E89",
      secondary: "#FAAF42",
      "secondary-light": "#FFC676",
      "secondary-dark": "#473313",
      dark: "#1E1E1E",
      "dark-grey": "#818285",
      "mid-grey": "#E0E0E0",
      "light-grey": "#E7EAF6",
      success: "#4CD964",
      error: "#FF3B30",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      "light-purple": "#642ab3",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "3.5rem", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        h3: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],
        paragraph: ["1.125rem", { lineHeight: "2rem", fontWeight: "200" }],
        "paragraph-alt1": [
          "1.125rem",
          { lineHeight: "2rem", fontWeight: "700" },
        ],
        "paragraph-alt2": [
          "0.75rem",
          { lineHeight: "1.5rem", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};

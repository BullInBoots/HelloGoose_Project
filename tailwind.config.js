/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#277ebb",
      secondary: "#3098da",
      tertiary: "#ecf0f2",
      accent: "#e84a3b",
      util: "#2B3C4E",
      "p-secondary": "#5E6E89",
      white: "#fff",
      black: "#000",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      hero: "40px",
    },
  },
  plugins: [],
};


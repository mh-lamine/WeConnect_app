/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fbf6fd",
          100: "#f6ecfb",
          200: "#ecd7f7",
          300: "#deb8ef",
          400: "#cb8de5",
          500: "#b361d4",
          600: "#9841b8",
          700: "#7f3398",
          800: "#743089",
          900: "#592867",
          950: "#381042",
        },
        secondary: {
          50: "#fdf6fc",
          100: "#fbecfa",
          200: "#f6d8f4",
          300: "#efb8e8",
          400: "#e48ed9",
          500: "#d362c4",
          600: "#b643a3",
          700: "#8a307a",
          800: "#7b2d6c",
          900: "#662959",
          950: "#421038",
        },
        dark: "#250F2C",
        light: "#E9E7EA",
        error: "#8A3045",
        success: "#308A3E",
      },
    },
  },
  plugins: [],
};

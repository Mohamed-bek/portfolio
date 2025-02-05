/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      writingMode: {
        vertical: "vertical-rl", // This makes text vertical
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "867px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

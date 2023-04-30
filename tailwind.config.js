/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // darkMode: 'media',
  
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#ffffff",
        secondary: "#b0b2c3",
        bgBlue: "#3b82f6",
        bgDark: "#171717",
        slightDark: "#464343",
      },
    },
  },
  plugins: [],
};

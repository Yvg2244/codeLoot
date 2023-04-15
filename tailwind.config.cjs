/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "monte": ["Montserrat", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
        "inter":['Inter', 'sans-serif'],
        
      },
      colors:{
        primary_gray:"#18181B",
        primary_gray_light:"#333337",
        primary_black:"#151716",
        primary_green:"#A9FF1C"

      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        plus: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

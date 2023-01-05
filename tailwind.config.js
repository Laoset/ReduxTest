/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        fondo:"linear-gradient(to bottom, #0f0c29, #302b63, #24243e)"
      },
      colors: {
        'fondoOpaco' : '#C8C8C8'
      },
      boxShadow: {
        '3xl': '0px 5px 15px rgba(0,0,0,0.35)'
      }
    },
  },
  plugins: [],
}

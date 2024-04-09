/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'starcruiser': ['starcruiser', 'sans-serif'],
        'd-din-bold': ['d-din-bold', 'sans-serif'],
        'd-din-italic': ['d-din-italic', 'sans-serif'],
        'd-din-regular': ['d-din-regular', 'sans-serif'],
        'd-din-condensed': ['d-din-condensed', 'sans-serif'],
        'd-din-condensed-bold': ['d-din-condensed-bold', 'sans-serif'],
        'd-din-exp': ['d-din-exp', 'sans-serif'],
        'd-din-exp-bold': ['d-din-exp-bold', 'sans-serif'],
        'd-din-exp-italic': ['d-din-exp-italic', 'sans-serif'],
      },
      textShadow: {
        default: '0 2px 5px rgba(0, 0, 0, 0.5)', 
      },
      
    },
  },
  plugins: [],
}
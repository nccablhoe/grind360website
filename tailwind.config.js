/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          silver: '#C0C0C0',
          jet: '#000000',
          charcoal: '#1A1A1A',
          lime: '#C5FF00',
      },
      fontFamily: {
          headline: ['Bebas Neue', 'Anton', 'sans-serif'],
          body: ['Inter', 'Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-in-out",
      },
    },
  },
  plugins: [],
}
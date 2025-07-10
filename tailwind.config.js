/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'emerald': {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        'purple': {
          400: '#a78bfa',
          500: '#8b5cf6',
        }
      }
    },
  },
  plugins: [],
}
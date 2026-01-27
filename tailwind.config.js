/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005F99',      // Azul KoreDesk
        accent: '#00D100',       // Verde vibrante (o cambia a tu naranja #FF9900)
        'dark-ui': '#0F172A',    // Fondo oscuro paneles
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}

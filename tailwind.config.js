/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",           // Busca en la raíz (App.tsx, index.tsx)
    "./components/**/*.{js,ts,jsx,tsx}", // Busca en la carpeta components
    "./pages/**/*.{js,ts,jsx,tsx}",      // Busca en la carpeta pages
    "./services/**/*.{js,ts,jsx,tsx}"    // Busca en la carpeta services
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005F99',
        accent: '#00D100',
        'dark-ui': '#0F172A',
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#CDEAC0', // Verde claro
          DEFAULT: '#6DAA6F', // Verde médio
          dark: '#2E5E36', // Verde escuro
        },
        
        secondary: {
          light: '#F8D7DA', // Rosa claro
          DEFAULT: '#E07A9B', // Rosa médio
          dark: '#B25570', // Rosa escuro 
        },
        
        highlight: '#C7A299', // marrom claro
      },
    },
  },
  plugins: [],
}
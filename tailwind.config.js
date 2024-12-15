/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src içindeki tüm React dosyalarını tarar
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3A0CA3',
        'sub-color1': '#4361EE',         
        'sub-color2': '#4CC9F0',         
        'sub-color3': '#7209B7',         
        'sub-color4': '#F72585',       
        'col-text-1': '#0B090A', 
        'col-text-2': '#2B2B2B',
        'col-text-3': '#808080', 
        'col-text-4': '#AAAAAA',  
        'col-text-5': '#D4D4D4',  
      },
      boxShadow:{
        custom: '10px 30px 50px 0px rgba(0, 0, 0, 0.05)', // Figma'daki değer
      }
    },
  },
  plugins: [],
}


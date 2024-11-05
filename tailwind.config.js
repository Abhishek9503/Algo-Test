/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    
    colors: {
      textlight: '#17384D', // Add your custom hex color here
      textDark:'#000000'
    },},
  },
  plugins: [],
}
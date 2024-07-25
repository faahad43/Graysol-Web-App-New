/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          light:{
            900:'#ffffff',
            500:"#D9D9D9",
            400:"#D8D8D8",
          },
          primary:{
            default:"#722594",
            600:"#280F37",
            700:"#290837",
            900:"#12101A"
          },
          secondary:{
            default:"#1969C7",
            500:'#060223',
            900:"#172554",
          },
          tertiary:{
            default:"#00B67A",
            500:"#01B277",
          },
          dark:{
            900:"#000000",
            700:"#0F0E0E",
            600:"#0D0C0C",
            500:"#100D0D",
            400:"#100F0F",
            200:"#1B1A1A",
            100:"#878787"
          },
          neutral:{
            default:"#604E40"
          }

          },
          fontFamily: {
            teklea: ['Teklea', 'sans-serif'],
            abhaya: ['Abhaya Libre', 'serif'],
          },
          fontWeight: {
            'extralight': 200,
            'light': 300,
            'normal': 400,
            'medium': 500,
          },
        }        
      },
  plugins: [],
}


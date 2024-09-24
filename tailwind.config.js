/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-150px * 25))' },
        },
      }, 
      colors:{
          light:{
            900:'#ffffff',
            500:"#D9D9D9",
            400:"#D8D8D8",
            300:'#E5E5EAE0',
          },
          primary:{
            default:"#722594",
            100:"#DC8DFF7c",
            600:"#280F37",
            700:"#290837",
            900:"#12101A"
          },
          secondary:{
            default:"#1969C7",
            500:'#060223',
            600:'#0C71C3',
            700:'#1E9DFF',
            900:"#172554",
          },
          tertiary:{
            default:"#00B67A",
            500:"#01B277",
          },
          dark:{
            900:"#000000",
            800:"#131313",
            700:"#0F0E0E",
            600:"#0D0C0C",
            500:"#100D0D",
            400:"#100F0F",
            300:"#100E0E",
            200:"#1B1A1A",
            100:"#878787"
          },
          neutral:{
            default:"#604E40",
            light:'#604E40B0'
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


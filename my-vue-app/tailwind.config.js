/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",  
    "./public/index.html",],
  theme: {
    extend:{
      backgroundImage: {
        'hero-pattern': "url('https://img.freepik.com/premium-photo/white-robot-is-running-treadmill_388357-24.jpg?w=740')",
        
      },
    },
  }}

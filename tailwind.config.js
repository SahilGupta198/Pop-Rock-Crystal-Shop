/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navyshade: '#31546d',
        pinkshade: '#ff2b77',
        tealshade: '#317189',
        redshade: '#e35b3e',
        purpleshade: '#8a93e5',
  
      },
      backgroundImage: {
        'hero-bg': "url('assets/bg1.png')",
        'wave': "url('assets/wave1.png')",
        'wave2': "url('assets/wave2.png')",       
        'gradient': "linear-gradient(to top right, #75cceb, #6fb4ff)",
      },
      boxShadow:{
        'circle-shadow': '0 0 30px rgba(120, 143, 156, 0.2)',
      },
      fontFamily: {
        product: ['ProductSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

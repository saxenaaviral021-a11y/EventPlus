/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    extend: { fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
     scale: {
        102: '1.02',
        105: '1.05',
      },
      transitionProperty: {
        'scale': 'transform',
      },},
     
  },
  plugins: [],
}


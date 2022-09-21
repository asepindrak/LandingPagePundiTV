/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'acme': 'Acme',
        'satisfy': 'Satisfy',
        'caveat': 'Caveat'
      },
      colors: {
        'dark-blue': '#1F1F39',
        'blue': '#0000ff',
        'yellow': '#ffff00',
        'orange': '#FF6905'
      },
      dropShadow: {
        'small': '0px 2px 5px #000000'
      },
      backgroundImage: {
        'hero': "url('/images/hero.png')"
      },
      backgroundSize: {
        '50%': '50%',
        '30%': '30%',
        '20%': '20%'
      },
      height: {
        '500': '500px',
        '400': '400px'
      }
    },
  },
  plugins: [],
}

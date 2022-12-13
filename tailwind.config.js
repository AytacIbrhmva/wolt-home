/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkBlue: '#171420',
        primary: '#14A5E2',
        milk: '#CBE1AD',
        overlay: 'rgba(0, 0, 0, 0.2)',
      },
      colors: {
        primary: '#14A5E2',
      },
      borderColor: {
        primary: '#14A5E2',
      },
      outlineColor: {
        primary: '#14A5E2',
      },
      backgroundImage: {
        'hero': "url('https://consumer-static-assets.wolt.com/frontpage-assets/hero-images/6_Saturday.jpg')",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

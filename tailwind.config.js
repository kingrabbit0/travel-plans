/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tighter: '-0.075em',
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
        widest: '1.5em',
      },
    },
  },
  plugins: [],
}
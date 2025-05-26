/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ['./src/index.html'],
  safelist: ['bg-hero-pattern'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/hero.png')",
      },
    },
  },
  plugins: [],
}

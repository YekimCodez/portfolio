/** @type {import('tailwindcss').Config} **/
module.exports = {
    content: ["./index.html"], // Add any other files/folders too
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('./src/images/hero.png')",
        },
      },
    },
    plugins: [],
  }
  
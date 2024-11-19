/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'card-texture': "url('/src/assets/card.png')"
      }
    }
  },
  plugins: []
}

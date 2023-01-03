/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{html,js,ts,jsx,tsx}",
  "./src/components/**/*.{html,js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      border: ['focus'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
}

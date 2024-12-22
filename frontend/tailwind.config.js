/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{html,js,jsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


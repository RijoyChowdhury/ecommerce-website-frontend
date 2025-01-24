/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252',
        'custom-gray': '#ddd',
        'custom-dark-gray': '#666',
        yellow: '#f2b600'
      },
      backgroundColor: {
        primary: '#ff5252',
        'custom-gray': '#ddd',
        'custom-light-gray': '#cccccc26'
      },
      borderColor: {
        primary: '#ff5252',
      }
    },
  },
  plugins: [],
}


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
        'custom-light-gray': '#cccccc26',
        'global-gray': '#e5e7eb',
      },
      borderColor: {
        primary: '#ff5252',
        'custom-light-gray': '#cccccc26',
        'global-gray': '#e5e7eb',
      }
    },
  },
  plugins: [],
}


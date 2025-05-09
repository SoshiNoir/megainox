/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#3C78D8',
        'sec-color': '#1C4587',
        'gray-color': '#808080', // Lighter gray for text-gray
      },
      spacing: {
        'min-container': '14rem', // Custom spacing for container padding
      },
    },
  },
  plugins: [],
};

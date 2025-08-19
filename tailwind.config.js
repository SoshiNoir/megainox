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
        'ter-color': '#1f2937',
        'qua-color': '#111827',
        'gray-color': '#333333',
      },
      spacing: {
        'min-container': '14rem',
      },
    },
  },
  plugins: [],
};

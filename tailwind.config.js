/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selectionBg: 'rgba(120,119,198,0.3)', // Add your transparent background color here
        selectionText: 'rgba(255,255,255,1)', // Text color during selection
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '::selection': {
          backgroundColor: 'rgba(153, 57, 226, 0.41)', // Transparent background
          color: 'rgba(255,255,255,1)', // Text color
        },
      });
    },
  ],
};
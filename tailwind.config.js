/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-text-color': '#1A0745',
        'secondary-text-color': '#5F517D',
        'btn-border-color': '#1A07451A',
        'btn-color': '#9D71FD',
        'btn-text-color': '#543E81',
        'person-card-bg': '#f2effe',
        'project-border-color': '#e8e6ec',
        'switch-border': '#A39CB5',
      },
      zIndex: {
        '999': '999',
      },
      fontFamily: {
        circular: ['CircularStd', 'sans-serif'],
        'sf-pro': ['SF Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


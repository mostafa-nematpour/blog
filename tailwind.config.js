/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'vazirmatn': ['vazirmatn-rd', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        'text-color-2': '#656d75',
        'bg-color-2': '#f6f8fa'
      },
    },
  },
  plugins: [],
}


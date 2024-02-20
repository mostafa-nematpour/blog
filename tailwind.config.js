/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'vazirmatn': ['vazirmatn-rd', 'ui-sans-serif', 'system-ui'],
      'sahel': ['sahel']
    },
    extend: {
      colors: {
        'text-color-2': 'var(--text-color-2)',
        'bg-color-2': 'var(--bg-color-2)',
        'bg-color-3': 'var(--bg-color-3)'
      },
    },
  },
  plugins: [],
}


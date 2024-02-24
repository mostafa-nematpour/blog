/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
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


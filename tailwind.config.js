/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    fontFamily: {
      vazirmatn: ['vazirmatn-rd', 'ui-sans-serif', 'system-ui'],
      sahel: ['sahel']
    },
    extend: {
      colors: {
        'c-bg': 'var(--color-background)',
        'c-header-bg': 'var(--color-header-background)',
        'c-text': 'var(--color-text)',
        'c-text-soft': 'var(--color-text-soft)',
        'c-text-3': 'var(--color-text-3)',

        'text-color-2': 'var(--text-color-2)',
        'bg-color-2': 'var(--bg-color-2)',
        'bg-color-3': 'var(--bg-color-3)'
      }
    }
  },
  plugins: []
}

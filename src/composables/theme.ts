const storageKey = 'site-theme'

export function useAppearance() {
  let userPreference = localStorage.getItem(storageKey) || 'auto'
  const query = window.matchMedia(`(prefers-color-scheme: dark)`)
  const isDark = ref(userPreference === 'auto' ? query.matches : userPreference === 'dark')
  const classList = document.documentElement.classList
  const setClass = (dark: boolean) => classList[dark ? 'add' : 'remove']('dark')

  const theme = ref<'dark' | 'light' | 'auto'>('auto')

  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark.value = e.matches))
    }
  }

  const toggle = () => {
    setClass((isDark.value = !isDark.value))
    localStorage.setItem(
      storageKey,
      (userPreference = isDark.value
        ? query.matches
          ? 'auto'
          : 'dark'
        : query.matches
        ? 'light'
        : 'auto')
    )
  }

  watchEffect(() => {
    theme.value = isDark.value ? 'dark' : 'light'
  })

  return { theme, isDark, toggle }
}

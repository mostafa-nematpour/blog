import { ref } from 'vue'
import { useEventListener } from './event'

export function useSiteSetting(setSettings) {
  const siteSettings = ref({
    theme: 'auto',
    lang: 'fa',
    dir: 'rtl'
  })
  const SITE_THEME = 'site-theme'

  if (localStorage.getItem(SITE_THEME) === null) {
    localStorage.setItem(SITE_THEME, 'auto')
  }
  const siteTheme = localStorage.getItem(SITE_THEME) || 'auto'
  siteSettings.value.theme = `${siteTheme}`

  const isBrowserInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  // console.log(isBrowserInDarkMode)
  if (!siteTheme || siteTheme === 'auto' ? isBrowserInDarkMode : siteTheme === 'dark') {
    document.documentElement.classList.add('dark')
  }

  // useEventListener(document, 'storage', function(event) {
  window.addEventListener('storage', function (event) {
    console.log(event)
    // function for validate
    const validateTheme = (theme) => {
      const themeList = ['auto', 'dark', 'light']
      return themeList.includes(theme)
    }
    // check storage key
    if (event.key === SITE_THEME) {
      const newTheme = event.newValue
      if (validateTheme(newTheme)) {
        switch (newTheme) {
          case 'auto':
            document.documentElement.classList.remove('dark')
            const isBrowserInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
            console.log(isBrowserInDarkMode)
            if (isBrowserInDarkMode) {
              document.documentElement.classList.add('dark')
            }
            break

          case 'dark':
            document.documentElement.classList.add('dark')
            break
          case 'light':
            document.documentElement.classList.remove('dark')
            break
        }
      } else {
        localStorage.setItem(SITE_THEME, 'auto')
      }
      // Handle the change in site theme
      console.log('Site theme has changed to:', newTheme)
      // You can add your logic here to update the UI or perform other actions
    }
  })

  return siteSettings
}

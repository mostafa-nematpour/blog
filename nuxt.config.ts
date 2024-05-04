// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/turnstile'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**']
  },
  turnstile: {
    siteKey: '0x4AAAAAAAZR15ZEAnMLtfA1'
  },
  css: ['~/assets/css/main.css'],
  srcDir: 'src/',
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#1f2667' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#1f2667' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#1f2667' }
      ],
      script: [
        {
          hid: 'check-dark-mode',
          innerHTML: `
        (() => {
            const e = localStorage.getItem("site-theme") || "auto";
            const a = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (!e || e === "auto" ? a : e === "dark") {
              document.documentElement.classList.add("dark");
            }
          })();
        `
        }
      ]
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**']
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
      script: [
        {
          hid: 'check-dark-mode',
          innerHTML: `
        (() => {
            const e = localStorage.getItem("vitepress-theme-appearance") || "auto";
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

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
  }
})
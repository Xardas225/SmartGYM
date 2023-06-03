// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "ru"
      },
      link: []
    }
  },
  typescript: {
    strict: true
  },
  modules: [
    '@nuxt/image-edge'
  ],
  css: ['~/assets/styles/main.scss']
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    storage: {
      user: {
        driver: 'fs',
        base: '.cache'
      }
    }

  },
  routeRules: {
    '/api/**': {
      cors: true,    }
  },
  
})

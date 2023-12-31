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
      cors: true,    
    },
    '/api/user/bob': {
      //prerender: true,
      isr: true    
    },
    '/page': {
      headers: {
        'x-hackathon': 'true'
      }
    },
  } 
})

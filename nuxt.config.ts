// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $production: {
    nitro: {
      storage: {
        cache: {
          driver: 'redis',
        }
      }
    }  
  },
  nitro: {
    storage: {
      cache: {
        driver: 'memory',
      }
    }

  }
})

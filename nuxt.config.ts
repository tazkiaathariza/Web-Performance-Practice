// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "BTJ Academy Tazkia",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        {
          name: "description",
          content: "Website anime BTJ - Tazkia"
        }
      ]
    }
  },
  ssr: true,
  modules: ["@nuxt/image", 'nuxt-delay-hydration'],
  delayHydration: {
    debug: process.env.NODE_ENV === 'development'
  },
  image: {
    presets: {
      presetOne: {
        modifiers : {
          width: 600,
          height: 600,
          format: "webp",
        }
      }
    },
    domains: ['https://cdn.myanimelist.net'],
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
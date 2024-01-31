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
  modules: ["@nuxt/image",
  ['nuxt-highcharts', {
    setOptions:{
      colors: ['#FF9843', '#86A7FC', '#FFDD95', '#3468C0'],
      chart: {
        background: 'transparent',
      },
      lang: { // ngatur bahasa untuk opsi download
        downloadPNG: 'Unduh Gambar PNG',
        downloadPDF: 'Unduh Gambar PDF',
        downloadJPEG: 'Unduh Gambar JPEG',
      },
      credits: { //logo highcjhart
        enabled: false
       },
    }
    }]
  ],
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
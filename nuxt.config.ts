// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/_vars.scss" as *;
          @use '~/assets/styles/_mixins.scss' as *;
          `,
        },
      },
    },
  },
  css: [
    "~/assets/styles/global.scss",
    "~/assets/styles/_fonts.scss",
    "swiper/css",
  ],
  app: {
    head: {
      title: "Тестовое задание",
    },
  },
});

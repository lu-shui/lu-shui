// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: ["@nuxt/content", "nuxt-svgo", "@nuxt/eslint", "dayjs-nuxt"], svgo: {
    defaultImport: 'component',
  }, nitro: {
    minify: false,
  },
  app: {
    head: {
      title: 'Luise Punge', // default fallback title
      htmlAttrs: {
        lang: 'de',
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/luisepunge/favicon.ico",
        },
      ],
    },
    baseURL: "/luisepunge/",
  }
});

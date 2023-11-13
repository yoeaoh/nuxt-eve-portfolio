// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        subsets: ["Latin", "Cyrillic"],
        families: {
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          Nunito: [200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
  ],
});

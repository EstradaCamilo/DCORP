// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  css: [
    "~/assets/scss/tailwind.scss",
    "~/public/main.css", // Regular
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL ?? "",
      apiKeyPublic: process.env.API_KEY_PUBLIC ?? "",
      apiKeyPrivate: process.env.API_KEY_PRIVATE ?? "",
    },
  },
});

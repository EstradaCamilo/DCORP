// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Prueba frontend",
        },
        {
          hid: "image",
          name: "image",
          content: `${
            process.env.APP_BASE_URL || "http://localhost:3011"
          }image.png`,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: `${
            process.env.APP_BASE_URL || "http://localhost:3011"
          }og-image.png`,
        },
      ],
    },
  },
  modules: [
    // ...
    "@pinia/nuxt",
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

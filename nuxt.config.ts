// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss'],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: false,
    configFile: './formkit/formkit.config.ts',
  },
});

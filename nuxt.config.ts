// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  pages: true,
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxt/image'],
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
})
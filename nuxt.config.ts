// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  pages: true,
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/supabase',
    '@nuxthub/core'
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  supabase: {
    redirect: true,
  },
  runtimeConfig: {
    public: {
      version: pkg.version,
      baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
    }
  },
  nitro: {
    experimental: {
      openAPI: true
    }
  }
})
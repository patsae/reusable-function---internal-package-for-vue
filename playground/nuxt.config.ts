import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false,
  devtools: { enabled: false },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  vite: {
    build: {
      target: "es2022",
    },
    plugins: [tailwindcss() as any],
  },
});

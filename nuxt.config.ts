// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@formkit/nuxt",
    "nuxt-icon",
    "@nuxtjs/seo",
    "@hypernym/nuxt-gsap",
  ],
  googleFonts: {
    families: { "Hanken+Grotesk": [400, 700, 900] },
  },
  app: {
    head: {
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      templateParams: {
        titleTemplate: "%s %separator %siteName",
        separator: "-",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  site: {
    url: "https://cyrusyip.com",
    name: "Cyrus Yip",
    description: "Cyrus Yip's personal website.",
    defaultLocale: "en",
  },
  devtools: { enabled: true },
  gsap: { extraPlugins: { scrollTrigger: true, flip: true } },
});

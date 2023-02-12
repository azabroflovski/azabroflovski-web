// https://nuxt.com/docs/api/configuration/nuxt-config

const seoTitle = "azabroflovski"
const seoDescription = "I am a software developer."

export default defineNuxtConfig({
   modules: [
      "@unocss/nuxt",
   ],
   css: [
      "assets/scss/main.scss"
   ],

   app: {
      head: {
         title: seoTitle,
         charset: "utf-8",
         viewport: "width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0",

         meta: [
            {
               name: "description",
               content: seoDescription
            },
            {
               name: "keywords",
               content: "azabroflovski, software developer, web, javascript, typescript, php"
            },
            {
               "http-equiv": "X-UA-Compatible",
               content: "IE=edge,chrome=1"
            },
            {
               property: "og:type",
               content: "website"
            },
            {
               property: "og:title",
               content: seoTitle
            },
            {
               property: "og:description",
               content: seoDescription
            },
            {
               property: "og:site_name",
               content: seoTitle
            }
         ]
      }
   }
})

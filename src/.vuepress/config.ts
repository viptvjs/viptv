import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
const base = (process.env["BASE"] as "/" | `/${string}/`) || "/";

export default defineUserConfig({
  base,
  dest: "./dist",
  host: '0.0.0.0',
  port: 80,
  head: [
    ["link", { rel: "icon", href: "/logo.svgs" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "baidu-site-verification", content: "codeva-4N5cviFcWA" }],
    [
      "meta",
      { name: "msvalidate.01", content: "60990E7826770BD82AE9B5EFB468E0BB" },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV - 云视听",
      description: "便捷 、高效 、最有价值的视听链",
    },
    "/en/": {
      lang: "en-US",
      title: "VIPTV",
      description: " VIPTV is the highest quality IPTV service",
    },
  },
  alias: {
    "@db": path.resolve(__dirname, "composables/dexie/index.js"),
    "@act": path.resolve(__dirname, "composables/artConst.js"),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(__dirname, "./layouts/BlogHero.vue"),
    "@theme-hope/modules/info/components/TOC": path.resolve(__dirname, "./components/toc.vue"),
  },

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/bing/, ""),
          },
          "/raw": {
            target: "https://raw.viptv.work/",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/raw/, ""),
          },
          "/cors": {
            target: "https://cors.eu.org/",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/cors/, ""),
          },
        },
      },
    }
  }),
  theme,
  shouldPrefetch: false,
});

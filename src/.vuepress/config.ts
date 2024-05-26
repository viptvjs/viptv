import { defineUserConfig } from "vuepress";
import { addViteOptimizeDepsInclude } from "@vuepress/helper";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
<<<<<<< HEAD:src/.vuepress/config.ts
const base = (process.env["BASE"] as "/" | `/${string}/`) || "/";

=======
>>>>>>> ca70720fe4d31c6ae1d52bfe6b185608c0555e56:docs/.vuepress/config.ts
export default defineUserConfig({
  base,
  dest: "./dist",
  head: [
    ["link", { rel: "icon", href: "/logo.svgs" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    ],
    ["meta", { name: "baidu-site-verification", content: "codeva-4N5cviFcWA" }],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV 云视听",
      description: "便捷 、高效 、最有价值的视听链",
    },
    "/en/": {
      lang: "en-US",
      title: "VIPTV",
      description: " the most valuable video chain",
    },
  },
  alias: {
    db: path.resolve(__dirname, "./lib/dexie"),
    cpn: path.resolve(__dirname, "./components"),
    cps: path.resolve(__dirname, "./composables"),
<<<<<<< HEAD:src/.vuepress/config.ts
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },
  

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path: any) => path.replace(/^\/bing/, ""),
          },
          "/raw": {
            target: "https://raw.viptv.work",
            changeOrigin: true,
            rewrite: (path: any) => path.replace(/^\/raw/, ""),
          },
          "/cors": {
            target: "https://cors.eu.org/",
            changeOrigin: true,
            rewrite: (path: any) => path.replace(/^\/cors/, ""),
          },
        },
      },
    },
    // vuePluginOptions: {},
  }),
=======
  },

>>>>>>> ca70720fe4d31c6ae1d52bfe6b185608c0555e56:docs/.vuepress/config.ts
  theme,
  shouldPrefetch: false,
});

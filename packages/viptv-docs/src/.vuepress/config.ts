import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from "@vuepress/bundler-vite";
import { getDirname, path } from "vuepress/utils";
import metingPlugin from "vuepress-plugin-meting2";
const __dirname = getDirname(import.meta.url);
const base = (process.env["BASE"] as "/" | `/${string}/`) || "/";

export default defineUserConfig({
  base,
  dest: "./dist",
  head: [
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "codeva-iazwBEuOEA",
      },
    ],
    [
      "meta",
      {
        name: "msvalidate.01",
        content: "60990E7826770BD82AE9B5EFB468E0BB",
      },
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
      description: " VIPTV Is The Highest Quality IPTV Service",
    },
  },
  alias: {
    "@db": path.resolve(__dirname, "composables/dexie"),
    "@act": path.resolve(__dirname, "composables/artConst.ts"),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
    "@theme-hope/components/NormalPage": path.resolve(
      __dirname,
      "./components/NormalPage.vue"
    ),
    "@theme-hope/modules/info/components/TOC": path.resolve(
      __dirname,
      "./components/toc.vue"
    ),
  },
  theme,
  port: 80,
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
    },
  }),
  plugins: [
    metingPlugin({
      metingOptions: {
        global: false,
        server: "tencent",
        api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
        type: "playlist",
        mid: "851947617",
        aplayerOptions: {
          lrcDisplay: "hide",
        },
      },
    }),
  ],

  shouldPrefetch: false,
});

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
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
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV - 工作室",
      description: "便捷 、高效 、最有价值的视听链",
    },
    "/en/": {
      lang: "en-US",
      title: "VIPTV",
      description: " VIPTV Is The Highest Quality IPTV Service",
    },
  },
  theme,
  shouldPrefetch: false,
  shouldPreload: false,
  alias: {
    "@db": path.resolve(__dirname, "composables/dexie"),
    "@act": path.resolve(__dirname, "composables/artConst.ts"),
    "@theme-hope/components/NormalPage": path.resolve(__dirname, "./components/NormalPage.vue"),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(__dirname, "./components/BlogHome.vue"),
  },
  port: 80
});

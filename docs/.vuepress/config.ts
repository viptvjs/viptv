import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/viptv-private/",
  dest: "./dist",
  head: [
    ["link", { rel: "icon", href: "/logo.svgs" }],
    ["meta", { name: "baidu-site-verification", content: "codeva-4N5cviFcWA" }],
    [
      "meta",
      { name: "msvalidate.01", content: "60990E7826770BD82AE9B5EFB468E0BB" },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV 云视听",
      description: "便捷 、高效 、最高质量的IPTV服务",
    },
    "/en/": {
      lang: "en-US",
      title: "VIPTV",
      description: "Top IPTV Service Providers",
    },
  },
  alias: {
    db: path.resolve(__dirname, "./lib/dexie"),
    cpn: path.resolve(__dirname, "./components"),
    cps: path.resolve(__dirname, "./composables"),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),

  },
  theme,
  shouldPrefetch: false,
});

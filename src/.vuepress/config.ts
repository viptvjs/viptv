import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",
  dest: "./dist",
  head: [
    ['link', { rel: 'icon', href: '/logo.svgs' }],
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "codeva-4N5cviFcWA",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV",
      description: "便捷 、高效 、最有价值的视听链",
    },
    "/en/": {
      lang: "en-US",
      title: "VIPTV - Cloud Audiovisual",
      description: "Simple, efficient, and the most valuable audio-visual chain",
    },
  },
  alias: {
    "db": path.resolve(__dirname, "./lib/dexie"),
    "cpn": path.resolve(__dirname, "./components"),
    "cps": path.resolve(__dirname, "./composables")
  },

  theme,
  shouldPrefetch: false,
});
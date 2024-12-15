import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
import { viteBundler } from '@vuepress/bundler-vite'
const __dirname = getDirname(import.meta.url);
const base = (process.env.BASE as "/" | `/${string}/` | undefined) ?? "/";
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
  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/bing/, ""),
          },
        },
      }
    },
    // vuePluginOptions: {},
  }),
  plugins: [
    
  ],
  alias: {
    "@db": path.resolve(__dirname, "composables/dexie"),
    "@act": path.resolve(__dirname, "composables/artConst.ts"),
  },
  port: 80
});

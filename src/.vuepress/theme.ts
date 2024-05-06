import { hopeTheme } from "vuepress-theme-hope";


import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
const hostname =
  process.env["HOSTNAME"] ?? "https://viptv.work";

export default hopeTheme({
  hostname,

  author: {
    name: "VIPTV - 云视听",
    url: "/about",
  },
  favicon: "/favicon.ico",
  iconAssets: "fontawesome-with-brands",
  //iconAssets: "//at.alicdn.com/t/c/font_2601581_j5ywre6kshm.css",

  logo: "https://img.viptv.work/viptv/VIP-TV-LOGO-FINAL-360x360.png",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  copyright: "MIT Licensed | Copyright © 2024-present Mr.Hefung",
  displayFooter: true,
  // 加密配置
  encrypt: {
    config: {
      "/vod/lunli/": ["3.1415926", "8.8888888", "9.9999999"],
    },
  },
  editLink: false,
  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    copyCode: {},

    components: {
      components: ["Badge", "VPCard", "ArtPlayer", "VPBanner", "SiteInfo"],
      rootComponents: {
        notice: [
          {
            path: "/",
            title: "通知",
            content: "我们的文档已经迁移至新域名 vuejs.press 下。<br>当前文档是基于主分支最新提交构建的，可能包含<strong>未发布的更改</strong>。",
            actions: [
              {
                text: "立即访问→",
                type: "primary",
              },
            ],
            showOnce: true,
          },
        ],
      },
    },

    mdEnhance: {
      align: true, // 启用自定义对齐
      hint: true,// 启用提示容器
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true, // 图像添加描述
      imgLazyload: true, // 启用图片懒加载
      imgMark: true, // 启用图片标记
      imgSize: true,  // 启用图片大小
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({
            tag,
          }): {
            tag: string;
            attrs: Record<string, string>;
            content: string;
          } | void => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true, // 添加选项卡支持
      tasklist: true,
      vPre: true,
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
        themes: [
          "auto",
          "beige",
          "black",
          "blood",
          "league",
          "moon",
          "night",
          "serif",
          "simple",
          "sky",
          "solarized",
          "white",
        ],
      },
    },
    seo:
      hostname === "https://viptv.work"
        ? {}
        : { canonical: "https://viptv.work" },

  },
},
  { custom: true },
);

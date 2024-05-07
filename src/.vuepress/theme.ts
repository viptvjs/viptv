import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";


const hostname =
  process.env["HOSTNAME"] ?? "https://viptv.work";

export default hopeTheme({
  hostname,
  author: {
    name: "VIPTV - 云视听",
    url: "/about",
    email: 'mail@vodtv.cn',
  },
  favicon: "/favicon.ico",
  iconAssets: "fontawesome-with-brands",
  docsRepo: "viptv-work/viptv",
  repo: `viptv-work/viptv`,
  fullscreen: true,
  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "默认页脚",
      blog: {
        name: "VIPTV 云视听",
        description: '专心致志做事，大气温和待人。',
        intro: '/about/',
        timeline: '简单快乐，理应如此。',
        medias: {
          Email: "mailto:vodtvx@gamil.com",
          Gitee: "https://gitee.com/viptv-work",
          GitHub: "https://github.com/viptv-work",
          Gitlab: "https://gitlab.com/viptv",
        },
      },
    },
  },
  //iconAssets: "//at.alicdn.com/t/c/font_2601581_j5ywre6kshm.css",

  logo: "/logo.svg",

  docsDir: "src",

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

  plugins: {
    blog: true,
    copyCode: {},

    components: {
      components: ["Badge", "VPCard", "ArtPlayer", "VPBanner", "SiteInfo"],
      rootComponents: {
        notice: [
          {
            path: "/",
            title: "通知",
            content: "欢迎光临我的新站",
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
  },
},
  { custom: true },
);

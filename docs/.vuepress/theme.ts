import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, enSidebar, zhSidebar } from "./config/index.js";
const hostname = process.env["HOSTNAME"] ?? "https://viptv.work";
export default hopeTheme(
  {
    hostname,
    author: {
      name: "Mr.Hefung",
      email: "viptvx@gmail.com",
      url: "/",
    },
    iconAssets: "fontawesome-with-brands",
    favicon: "/favicon.ico",
    logo: "/logo.svg",
    docsRepo: "viptv-work/viptv",
    docsDir: "docs",
    repo: `viptv-work/viptv`,
    repoDisplay: true,  //是否在导航栏显示仓库链接。
    fullscreen: true,  //全屏按钮
    displayFooter: true,  //是否默认显示页脚
    extraLocales: {
      主站: "https://www.viptv.work",
      镜像1: "https://dns1.viptv.work",
      镜像2: "https://dns2.viptv.work",
    },
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "SocialLink", "Outlook", "Search"],
    },
    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
        footer: "简单 、 强大 、 快速 、 无广告",
        copyright: "基于 MIT 协议 © 2019-至今  Mr.HeFung",
      },
      "/en/": {
        navbar: enNavbar,
        sidebar: enSidebar,
        footer: "The Most Valuable Audio-visual Chain.",
        copyright: "MIT Licensed © 2019-present Mr.HeFung",
      },
    },
    blog: {
      description: "低调做事，高调做人。",
      intro: "/about/",
      timeline: "简单快乐，理应如此。",
      medias: {
        Email: "mailto:vodtvx@gmail.com",
        Gitee: "https://gitee.com/viptv-work",
        GitHub: "https://github.com/viptv-work",
        Gitlab: "https://gitlab.com/viptv",
      },
    },
    blogLocales: {
      tutorial: "教程",
      slide: "幻灯片",
      original: "原创",
    },
    encrypt: {  // 加密配置
      config: {
        "/vod/lunli/": ["3.1415926", "8.8888888", "9.9999999"],
      },
    },
    editLink: false,  //是否展示编辑此页链接
    plugins: {
      blog: {
        excerptLength: 0,
      },
      notice: [
        {
          path: "/",
          title: "欢迎光临 : VIPTV - 云视听",
          content: "便捷 、高效 、最有价值的视听链",
          actions: [
            {
              text: "主站 → ",
              link: "https://www.viptv.work/",
              type: "primary",
            },
            {
              text: "镜像1",
              link: "https://dns1.viptv.work/",
            },
            {
              text: "镜像2",
              link: "https://dns2.viptv.work/",
            },
          ],
        },
      ],
      watermark: {
        enabled: false,
      },

      components: {
        components: ["Badge", "VPCard", "ArtPlayer", "VPBanner", "SiteInfo"],
      },

      mdEnhance: {
        align: true, // 启用自定义对齐
        hint: true, // 启用提示容器
        attrs: true, //属性支持
        codetabs: true,
        spoiler: true,
        component: true,
        figure: true, // 图像添加描述
        imgLazyload: true, // 启用图片懒加载
        imgMark: true, // 启用图片标记
        imgSize: true, // 启用图片大小
        include: true,
        mark: true, //标记
        stylize: [  //样式化
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
        sup: true, //是否启用上角标格式支持
        tabs: true, // 添加选项卡支持
        tasklist: true, //是否启用任务列表支持
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
  { custom: true }
);

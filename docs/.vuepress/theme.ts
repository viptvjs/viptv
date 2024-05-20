import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, enSidebar, zhSidebar } from "./config/index.js";

const hostname = process.env["HOSTNAME"] ?? "https://viptv.work";

export default hopeTheme(
  {
    hostname,
    author: {
      name: "Mr.Hefung",
      url: "/",
    },
    favicon: "/favicon.ico",
    iconAssets: "fontawesome-with-brands",
    logo: "/logo.svg",
    docsRepo: "viptv-work/viptv",
    repo: `viptv-work/viptv`,
    repoDisplay: false,
    fullscreen: true,
    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
        footer: "努力打造便捷 、高效 、最有价值的视听链",
      },
      "/en/": {
        navbar: enNavbar,
        sidebar: enSidebar,
        footer:
          "「VIPTV Cloud Audiovisual」 is a very good audiovisual toolchain.",
      },
    },
    docsDir: "src",
    blog: {
      description: "专心致志做事，大气温和待人。",
      intro: "/",
      timeline: "简单快乐，理应如此。",
      medias: {
        Email: "mailto:vodtvx@gmail.com",
        Gitee: "https://gitee.com/viptv-work",
        GitHub: "https://github.com/viptv-work",
        Gitlab: "https://gitlab.com/viptv",
      },
    },
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
              text: "主站→",
              link: "https://www.viptv.work/",
              type: "primary",
            },
            {
              text: "镜像1→",
              link: "https://dns1.viptv.work/",
            },
            {
              text: "镜像2→",
              link: "https://dns2.viptv.work/",
            },
          ],
          confirm: true,
        },
      ],
      watermark: {
        enabled: false,
      },
      copyCode: {},
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
        stylize: [
          //样式化
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
  { custom: true }
);

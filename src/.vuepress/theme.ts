import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, enSidebar, zhSidebar } from "./config/index.js";
import { getRecentUpdatedArticles } from "vuepress-theme-hope/presets/getRecentUpdatedArticles.js";
import { getSlides } from "vuepress-theme-hope/presets/getSlides.js";

export default hopeTheme(
  {
    hostname: "https://viptv.work",
    author: {
      name: "Mr.Hefung",
      url: "/",
    },
    iconAssets: "fontawesome-with-brands",
    favicon: "/favicon.ico",
    logo: "/logo.svg",
    docsRepo: "viptv-work/viptv",
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    docsDir: "src",
    repoLabel: "GitHub", // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repo: "viptv-work/viptv",  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    repoDisplay: true,  //是否在导航栏显示仓库链接，默认为 `true`
    fullscreen: true,  //全屏按钮
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
        displayFooter: true,
        footer: "极速 、 高清 、 无广告", // 页脚
        copyright: "MIT 协议 | 版权所有 © 2024-至今 Mr.Hefung",
      },
      "/en/": {
        navbar: enNavbar,
        sidebar: enSidebar,
        displayFooter: true,
        footer: "Best IPTV Subscription Provider.", // 页脚
        copyright: "MIT Licensed | Copyright © 2024-present Mr.Hefung",
      },
    },
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
    // 加密配置
    encrypt: {
      config: {
        "/vod/lunli/": ["3.1415926", "8.8888888", "9.9999999"],
      },
    },
    editLink: false,
    plugins: {
      searchPro: {
        indexContent: true,
        hotReload: true,
        customFields: [
          {
            getter: (page: any) => page.frontmatter.category,
            formatter: {
              "/en/": "Category: $content",
              "/": "分类：$content",
            },
          },
          {
            getter: (page: any) => page.frontmatter.tag,
            formatter: {
              "/en/": "Tag: $content",
              "/": "标签：$content",
            },
          }
        ]
      },
      blog: {
        excerptLength: 0,
        type: [
          getRecentUpdatedArticles({
            locales: { "/en/": "Recent Updated", "/": "最近更新" },
          }),
          getSlides({
            locales: { "/en": "Slides", "/": "幻灯片" },
          }),
        ],
      },
      notice: [
        {
          path: "/",
          title: "温馨提示",
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
          fullscreen: false,
          showOnce: false,
        },
      ],
      shiki: {
        lineNumbers: 15,
        notationDiff: true,
        themes: {
          light: "github-light",
          dark: "one-dark-pro",
        },
      },
      watermark: {
        enabled: false,
      },
      copyCode: {},
      components: {
        components: ["Badge", "VPCard", "ArtPlayer", "VPBanner", "SiteInfo"]
      },
      mdEnhance: {
        align: true, // 启用自定义对齐
        hint: true, // 启用提示容器
        attrs: true, //属性支持
        alert: true, // 启用 GFM 警告
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

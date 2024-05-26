import { hopeTheme } from "vuepress-theme-hope";
import { AVAILABLE_SERVICES } from "vuepress-plugin-components";
import { enNavbar, zhNavbar, enSidebar, zhSidebar } from "./config/index.js";

<<<<<<< HEAD:src/.vuepress/theme.ts

=======
>>>>>>> ca70720fe4d31c6ae1d52bfe6b185608c0555e56:docs/.vuepress/theme.ts
const hostname = process.env["HOSTNAME"] ?? "https://viptv.work";

export default hopeTheme(
  {
    hostname,
    author: {
      name: "Mr.Hefung",
      url: "/",
    },
<<<<<<< HEAD:src/.vuepress/theme.ts
    iconAssets: [
      "https://theme-hope-assets.vuejs.press/fontawesome/js/fontawesome.min.js",
      "https://theme-hope-assets.vuejs.press/fontawesome/js/solid.min.js",
      "https://theme-hope-assets.vuejs.press/fontawesome/js/brands.min.js",
    ],
=======
>>>>>>> ca70720fe4d31c6ae1d52bfe6b185608c0555e56:docs/.vuepress/theme.ts
    favicon: "/favicon.ico",
    iconAssets: "fontawesome-with-brands",
    logo: "/logo.svg",
    docsRepo: "viptv-work/viptv",
<<<<<<< HEAD:src/.vuepress/theme.ts
    docsDir: "docs",
    repoLabel: "GitHub", // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repo: "viptv-work/viptv",  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    repoDisplay: true,  //是否在导航栏显示仓库链接，默认为 `true`
    fullscreen: true,  //全屏按钮
    displayFooter: true,  //是否默认显示页脚
    pageInfo: ["ReadingTime", "Category", "Tag"],
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
=======
    repo: `viptv-work/viptv`,
    repoDisplay: false,
    fullscreen: true,
>>>>>>> ca70720fe4d31c6ae1d52bfe6b185608c0555e56:docs/.vuepress/theme.ts
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
      
      searchPro: {
        // 这里放置 searchProPlugin 的配置
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
<<<<<<< HEAD:src/.vuepress/theme.ts
          fullscreen: false,
          showOnce: true,
=======
          confirm: true,
>>>>>>> ca70720fe4d31c6ae1d52bfe6b185608c0555e56:docs/.vuepress/theme.ts
        },
      ],
      watermark: {
        enabled: false,
      },
      copyCode: {},
      components: {
        components: ["Badge", "VPCard", "ArtPlayer", "VPBanner", "SiteInfo"],
        componentOptions: {
          share: {
            services: AVAILABLE_SERVICES,
          },
          artPlayer: {
            fastForward: true,
            screenshot: true,
          },
        },
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

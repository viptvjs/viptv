import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, enSidebar, zhSidebar } from "./config/index.js";
import { getRecentUpdatedArticles } from "vuepress-theme-hope/presets/getRecentUpdatedArticles.js";
import { getSlides } from "vuepress-theme-hope/presets/getSlides.js";
const hostname = process.env["HOSTNAME"] ?? "https://www.viptv.work";
export default hopeTheme(
  {
    hostname,
    author: {
      name: "Mr.Hefung",
      url: "/about/us",
    },
    iconAssets: "fontawesome-with-brands",
    favicon: "/favicon.ico",
    breadcrumb: true, // 面包屑导航
    darkmode: "toggle",
    logo: "/logo.svg",
    repo: "viptv-work/viptv", // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    repoDisplay: true, //是否在导航栏显示仓库链接，默认为 `true`
    fullscreen: true, //全屏按钮
    lastUpdated: true,
    contributors: true, //全局禁用是否显示页面贡献者
    navbarTitle: "VIPTV - 工作室",
    extraLocales: {
      官网主站: "https://www.viptv.work/:route",
      官网社区: "https://github.com/viptv-work/viptv/discussions",
      官网镜像1: "https://dns1.viptv.work/:route",
      官网镜像2: "https://dns2.viptv.work/:route",
      官网镜像3: "https://dns3.viptv.work/:route",
    },
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Search", "Language", "SocialLink", "Repo", "Outlook"],
    },

    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
        displayFooter: true,
        footer: "极速 、 高清 、 无广告", // 页脚
        copyright: "基于MIT 协议 | 版权所有 © 2020-至今 Mr.Hefung",
      },
      "/en/": {
        navbar: enNavbar,
        sidebar: enSidebar,
        displayFooter: true,
        footer: "Best IPTV Subscription Provider.", // 页脚
        copyright: "MIT Licensed | Copyright © 2020-present Mr.Hefung",
      },
    },
    blog: {
      description: "专心致志做事，大气温和待人。",
      intro: "/about/blog",
      timeline: "简单快乐，理应如此。",
      medias: {
        Email: "mailto:vodtvx@gmail.com",
        Gitee: "https://gitee.com/viptv-work",
        Discord: "https://discord.gg/K7azvhYv",
        Twitter: "https://x.com/viptv_work",
        Telegram: "https://t.me/viptv_work",
        GitHub: "https://github.com/viptv-work",
        Gitlab: "https://gitlab.com/viptv",
      },
    },
    // 加密配置
    encrypt: {
      config: {
        "/private/lunli/": ["3.1415926", "8.8888888", "9.9999999"],
        "/private/sm/": ["3.1415926", "8.8888888", "9.9999999"],
      },
    },
    editLink: false,
    plugins: {
      redirect: {
        localeConfig: {
          '/en/': ['en-US', 'en-UK', 'en'],
          '/': ['zh-CN', 'zh-TW', 'zh'],
        },
        config: {
          '/en/': '/',
        },
      },
      blog: {
        hotReload: true, // 启用热更新
        excerpt: true, //是否生成摘要。
        excerptLength: 0,
        type: [
          getRecentUpdatedArticles({
            locales: { "/en/": "Recent Updated", "/": "最近更新" },
          }),

          getSlides({
            locales: { "/en": "Slides", "/": "幻灯片" },
          })
        ],
      },
      /* comment: {
           provider: 'Giscus',
           comment: true,
           repo: 'viptv-work/viptv',
           repoId: 'R_kgDOKdyFzg',
           category: 'Q&A',
           categoryId: 'DIC_kwDOKdyFzs4CeLSD',
           mapping: 'pathname',
           reactionsEnabled: true,
           inputPosition: 'top',
           darkTheme: 'dark_protanopia',
           lightTheme: 'light_protanopia',
         }, */
      components: {
        components: [
          "PDF",
          "Share",
          "FontIcon",
          "Badge",
          "VPCard",
          "ArtPlayer",
          "VPBanner",
          "SiteInfo",
          "VidStack",
        ]
      },
      copyright: true,

      notice: [
        {
          path: "/",
          title: "温馨提示：",
          content:
            "<b>非常感谢您对本网站的支持！我是本站的独立开发者,作者,主要维护者</b><ul><li>函数与变量支持代码补全</li><li>JSON filter支持</li></ul>",
          actions: [
            {
              text: "立即体验",
              type: "default",
            },
          ],
          fullscreen: false,
          showOnce: false,
        },
        {
          path: "/en/",
          title: "Welcome to viptv",
          content: "VIPTV is the highest quality IPTV service",
          actions: [
            {
              text: "DONATE",
              link: "/about/donate.html",
              type: "primary",
            },
            { text: "Default Action" },
          ],
          fullscreen: false,
          showOnce: false,
        },
      ],

      watermark: {
        enabled: false,
      },
      markdownHint: {
        hint: true,
        alert: true,
      },
      markdownImage: {
        mark: true,
        figure: true,
        lazyload: true,
        size: true,
      },
      markdownMath: true,
      markdownTab: {
        // 启用代码选项卡
        codeTabs: true,
        // 启用选项卡
        tabs: true,
      },
      prismjs: true,
      mdEnhance: {
        align: true, // 启用自定义对齐
        attrs: true, //属性支持
        vPre: true, //是否启用 v-pre 容器。
        breaks: true, //是否将段落中的 \n 转换为 <br>
        linkify: true, //是否将文字中的链接格式文字转换为链接
        gfm: true, //是否支持完整的 GFM 语法
        mark: true, // 开启标记
        tasklist: true, // 启用任务列表
        include: true, // 启用导入支持
        markmap: true, // 启用 Markmap
        spoiler: true, //是否启用剧透支持。
        component: true, //是否启用组件支持
        footnote: true, //是否启用脚注格式支持
        sub: true, //是否启用下角标格式支持
        sup: true, //是否启用上角标格式支持。
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
      },

      pwa: {
        favicon: "/favicon.ico",
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
        apple: {
          icon: "/assets/png/VIPTV-LOGO-192x192.png",
          statusBarColor: "white",
        },
        msTile: {
          image: "/assets/png/VIPTV-LOGO-192x192.png",
          color: "#ffffff",
        },
        manifest: {
          name: " VIPTV -  工作室",
          short_name: "Viptv work",
          description: "VIPTV 的网络工作室",
          theme_color: "#5c92d1",
          icons: [
            {
              src: "/assets/png/VIPTV-LOGO-512x512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/png/VIPTV-LOGO-192x192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/png/VIPTV-LOGO-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/png/VIPTV-LOGO-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "分类",
              short_name: "分类",
              icons: [
                {
                  src: "/assets/png/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/category/",
              description: "文章分类分组",
            },
            {
              name: "标签",
              short_name: "标签",
              icons: [
                {
                  src: "/assets/png/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/tag/",
              description: "文章标签分组",
            },
            {
              name: "时间线",
              short_name: "时间线",
              icons: [
                {
                  src: "/assets/png/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/timeline/",
              description: "时间线文章列表",
            },
            {
              name: "关于我们",
              short_name: "团队介绍",
              icons: [
                {
                  src: "/logo.svg",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/about/",
              description: "我的团队介绍",
            },
          ],
        },
      },

      revealjs: {
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

      searchPro: {
        indexContent: true,
        hotReload: true,
        customFields: [
          {
            getter: ({ frontmatter }): string[] => frontmatter["category"] as string[],
            formatter: {
              "/en/": "Category: $content",
              "/": "分类：$content",
            },
          },
          {
            getter: ({ frontmatter }): string[] => frontmatter["tag"] as string[],
            formatter: {
              "/en/": "Tag: $content",
              "/": "标签：$content",
            },
          },
        ]
      },

      shiki: {
        lineNumbers: 15,
        notationDiff: true,
        themes: {
          light: "one-light",
          dark: "one-dark-pro",
        },
      },

      seo: hostname === "https://www.viptv.work"
        ? {}
        : { canonical: "https://www.viptv.work" },
      sitemap: true,
    },
  },
  {
    custom: true,
  }
);

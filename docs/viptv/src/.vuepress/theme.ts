import { hopeTheme } from "vuepress-theme-hope";
import { dateSorter } from "@vuepress/helper";
import { getDirname, path } from "vuepress/utils";
import { AVAILABLE_SERVICES } from "vuepress-plugin-components";
import { enNavbar, zhNavbar, enSidebar, zhSidebar } from "./config/index.js";
import { getRecentUpdatedArticles } from "vuepress-theme-hope/presets/getRecentUpdatedArticles.js";
import { getSlides } from "vuepress-theme-hope/presets/getSlides.js";
const hostname = process.env.HOSTNAME ?? "https://www.viptv.work";
const __dirname = getDirname(import.meta.url);
export default hopeTheme(
  {
    hotReload: true,
    hostname,
    themeColor: true,
    author: {
      name: "Mr.Hefung",
      url: "/about/us",
    },
    favicon: "/favicon.ico",
    breadcrumb: true, // 面包屑导航
    logo: "/logo.svg",
    repo: "viptv-work/dev", // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    docsDir: "docs/viptv/src", //文档在仓库中的目录
    repoDisplay: true, //是否在导航栏显示仓库链接，默认为 `true`
    fullscreen: true, //全屏按钮
    navbarAutoHide: 'always',
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
        copyright: "基于MIT 协议 | 版权所有 © 2020-至今 Mr.HeFung",
        blogLocales: {
          tutorial: "教程",
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

      },
      "/en/": {
        navbar: enNavbar,
        sidebar: enSidebar,
        displayFooter: true,
        footer: "Best IPTV Subscription Provider.", // 页脚
        copyright: "MIT Licensed | Copyright © 2020-present Mr.HeFung",
        blogLocales: {
          tutorial: "Tutorial",
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
      },
    },
    
    
    // 加密配置
    encrypt: {
      config: {
        "/private/lunli/": ["3.1415926", "8.8888888", "9.9999999"],
        "/private/sm/": ["3.1415926", "8.8888888", "9.9999999"],
      },
    },
    markdown: {
      highlighter: {
        type: "shiki",
        lineNumbers: 15,
        themes: {
          light: "one-light",
          dark: "one-dark-pro",
        },
      },
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: {
        deep: true,
        resolvePath: (file) => {
          if (file.startsWith("@components/"))
            return file.replace(
              "@components",
              path.resolve(__dirname, "./components/"),
            );
          return file;
        },
        resolveLinkPath: false,
      },
      mark: true,
      math: true,
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      spoiler: true,
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
      tabs: true,
      tasklist: true,
      vPre: true,
    },

    editLink: false,
    plugins: {
      slimsearch: {
        indexContent: true,
      },
      feed: {
        atom: true,
        json: true,
        rss: true,
        image: '/assets/png/VIPTV-LOGO-192x192.png',
        icon: '/assets/png/VIPTV-LOGO-192x192.png',
      },
      photoSwipe: {
        selector: [
          ".theme-hope-content :not(a) > img:not([no-view])",
          ".news-content :not(a) > .vp-article-excerpt img",
        ],
      },
      git: true,
      redirect: {
        switchLocale: "modal" ,
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
          "Share",
          "Badge",
          "VPCard",
          "ArtPlayer",
          "VPBanner",
          "SiteInfo",
          "VidStack",
        ],
        componentOptions: {
          share: {
            services: AVAILABLE_SERVICES,
          },
          artPlayer: {
            fastForward: true,
            screenshot: true,
          }
        },
      },

      icon: {
        assets: "fontawesome-with-brands",
      },

      copyright: true,


      notice: [
        {
          path: "/",
          title: "VIPTV已入驻Twitter,Telegram",
          content:
            "<b>欢迎访问本站！</b><ul><li>我是本站的独立开发者,维护者</li><li>我们会不定期分享一些Telegram优质频道/群组、Telegram使用技巧等，欢迎您关注！！</li></ul>",
          actions: [
            {
              text: "我知道了",
              type: "default",
            },
            {
              text: "Telegram",
              link: "https://t.me/viptv_work",
              type: "primary",
            },
            {
              text: "Twitter",
              link: "https://x.com/viptv_work",
              type: "primary",
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

     
      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: true,
        cacheImage: true,
        appendBase: true,
        apple: {
          icon: "/assets/png/VIPTV-LOGO-192x192.png",
          statusBarColor: "black",
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

// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";
import { getDirname, path } from "vuepress/utils";
import { AVAILABLE_SERVICES } from "vuepress-plugin-components";

// src/.vuepress/config/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar(["/en/"]);

// src/.vuepress/config/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";

// package.json
var version = "3.0.1";

// src/.vuepress/config/navbar/zh.ts
var zhNavbar = navbar2([
  "/",
  "/iptv/",
  "/vod/",
  "/music/",
  "/tutorial/",
  {
    text: "\u5FC5\u5E94\u58C1\u7EB8",
    icon: "images",
    link: "/archives/"
  },
  {
    text: "\u5173\u4E8E",
    icon: "circle-info",
    prefix: "/about/",
    children: [
      {
        text: "\u5173\u4E8E\u6211\u4EEC",
        icon: "circle-info",
        link: "",
        activeMatch: "^/about/$"
      },
      {
        text: "\u6211\u7684\u535A\u5BA2",
        icon: "blog",
        link: "blog"
      },
      {
        text: "\u53CB\u60C5\u6253\u8D4F",
        icon: "heart",
        link: "donate"
      },
      {
        text: version + "\u65E5\u5FD7",
        icon: "fa-brands fa-vuejs",
        link: "changelog"
      }
    ]
  }
]);

// src/.vuepress/config/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/en/": [""]
});

// src/.vuepress/config/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";

// src/.vuepress/config/sidebar/archives.ts
var archives_default = [{ "text": "\u6700\u8FD1\u66F4\u65B0 31", "link": "/archives/" }, { "text": "2025", "collapsible": true, "icon": "lock-open", "children": [{ "text": "2025-03", "icon": "images", "link": "/archives/2025/2025-03.md" }, { "text": "2025-02", "icon": "images", "link": "/archives/2025/2025-02.md" }, { "text": "2025-01", "icon": "images", "link": "/archives/2025/2025-01.md" }] }, { "text": "2024", "collapsible": true, "icon": "lock-open", "children": [{ "text": "2024-12", "icon": "images", "link": "/archives/2024/2024-12.md" }, { "text": "2024-11", "icon": "images", "link": "/archives/2024/2024-11.md" }, { "text": "2024-10", "icon": "images", "link": "/archives/2024/2024-10.md" }, { "text": "2024-09", "icon": "images", "link": "/archives/2024/2024-09.md" }, { "text": "2024-08", "icon": "images", "link": "/archives/2024/2024-08.md" }, { "text": "2024-07", "icon": "images", "link": "/archives/2024/2024-07.md" }, { "text": "2024-06", "icon": "images", "link": "/archives/2024/2024-06.md" }, { "text": "2024-05", "icon": "images", "link": "/archives/2024/2024-05.md" }, { "text": "2024-04", "icon": "images", "link": "/archives/2024/2024-04.md" }, { "text": "2024-03", "icon": "images", "link": "/archives/2024/2024-03.md" }, { "text": "2024-02", "icon": "images", "link": "/archives/2024/2024-02.md" }, { "text": "2024-01", "icon": "images", "link": "/archives/2024/2024-01.md" }] }, { "text": "2023", "collapsible": true, "icon": "lock-open", "children": [{ "text": "2023-12", "icon": "images", "link": "/archives/2023/2023-12.md" }, { "text": "2023-11", "icon": "images", "link": "/archives/2023/2023-11.md" }, { "text": "2023-10", "icon": "images", "link": "/archives/2023/2023-10.md" }, { "text": "2023-09", "icon": "images", "link": "/archives/2023/2023-09.md" }, { "text": "2023-08", "icon": "images", "link": "/archives/2023/2023-08.md" }, { "text": "2023-07", "icon": "images", "link": "/archives/2023/2023-07.md" }, { "text": "2023-06", "icon": "images", "link": "/archives/2023/2023-06.md" }, { "text": "2023-05", "icon": "images", "link": "/archives/2023/2023-05.md" }, { "text": "2023-04", "icon": "images", "link": "/archives/2023/2023-04.md" }, { "text": "2023-03", "icon": "images", "link": "/archives/2023/2023-03.md" }, { "text": "2023-02", "icon": "images", "link": "/archives/2023/2023-02.md" }, { "text": "2023-01", "icon": "images", "link": "/archives/2023/2023-01.md" }] }, { "text": "2022", "collapsible": true, "icon": "lock-open", "children": [{ "text": "2022-12", "icon": "images", "link": "/archives/2022/2022-12.md" }, { "text": "2022-11", "icon": "images", "link": "/archives/2022/2022-11.md" }, { "text": "2022-10", "icon": "images", "link": "/archives/2022/2022-10.md" }, { "text": "2022-09", "icon": "images", "link": "/archives/2022/2022-09.md" }, { "text": "2022-08", "icon": "images", "link": "/archives/2022/2022-08.md" }, { "text": "2022-07", "icon": "images", "link": "/archives/2022/2022-07.md" }, { "text": "2022-06", "icon": "images", "link": "/archives/2022/2022-06.md" }, { "text": "2022-05", "icon": "images", "link": "/archives/2022/2022-05.md" }, { "text": "2022-04", "icon": "images", "link": "/archives/2022/2022-04.md" }, { "text": "2022-03", "icon": "images", "link": "/archives/2022/2022-03.md" }, { "text": "2022-02", "icon": "images", "link": "/archives/2022/2022-02.md" }, { "text": "2022-01", "icon": "images", "link": "/archives/2022/2022-01.md" }] }, { "text": "2021", "collapsible": true, "icon": "lock-open", "children": [{ "text": "2021-12", "icon": "images", "link": "/archives/2021/2021-12.md" }, { "text": "2021-11", "icon": "images", "link": "/archives/2021/2021-11.md" }, { "text": "2021-10", "icon": "images", "link": "/archives/2021/2021-10.md" }, { "text": "2021-09", "icon": "images", "link": "/archives/2021/2021-09.md" }, { "text": "2021-08", "icon": "images", "link": "/archives/2021/2021-08.md" }, { "text": "2021-07", "icon": "images", "link": "/archives/2021/2021-07.md" }, { "text": "2021-06", "icon": "images", "link": "/archives/2021/2021-06.md" }, { "text": "2021-05", "icon": "images", "link": "/archives/2021/2021-05.md" }, { "text": "2021-04", "icon": "images", "link": "/archives/2021/2021-04.md" }, { "text": "2021-03", "icon": "images", "link": "/archives/2021/2021-03.md" }, { "text": "2021-02", "icon": "images", "link": "/archives/2021/2021-02.md" }, { "text": "2021-01", "icon": "images", "link": "/archives/2021/2021-01.md" }] }, { "text": "2020", "collapsible": true, "icon": "lock-open", "children": [{ "text": "2020-12", "icon": "images", "link": "/archives/2020/2020-12.md" }, { "text": "2020-11", "icon": "images", "link": "/archives/2020/2020-11.md" }, { "text": "2020-10", "icon": "images", "link": "/archives/2020/2020-10.md" }, { "text": "2020-09", "icon": "images", "link": "/archives/2020/2020-09.md" }, { "text": "2020-08", "icon": "images", "link": "/archives/2020/2020-08.md" }, { "text": "2020-07", "icon": "images", "link": "/archives/2020/2020-07.md" }, { "text": "2020-06", "icon": "images", "link": "/archives/2020/2020-06.md" }, { "text": "2020-05", "icon": "images", "link": "/archives/2020/2020-05.md" }, { "text": "2020-04", "icon": "images", "link": "/archives/2020/2020-04.md" }, { "text": "2020-03", "icon": "images", "link": "/archives/2020/2020-03.md" }, { "text": "2020-02", "icon": "images", "link": "/archives/2020/2020-02.md" }, { "text": "2020-01", "icon": "images", "link": "/archives/2020/2020-01.md" }] }, { "text": "2019", "collapsible": true, "icon": "lock-open", "children": [{ "text": "2019-12", "icon": "images", "link": "/archives/2019/2019-12.md" }, { "text": "2019-11", "icon": "images", "link": "/archives/2019/2019-11.md" }, { "text": "2019-10", "icon": "images", "link": "/archives/2019/2019-10.md" }, { "text": "2019-09", "icon": "images", "link": "/archives/2019/2019-09.md" }, { "text": "2019-08", "icon": "images", "link": "/archives/2019/2019-08.md" }, { "text": "2019-07", "icon": "images", "link": "/archives/2019/2019-07.md" }, { "text": "2019-06", "icon": "images", "link": "/archives/2019/2019-06.md" }, { "text": "2019-05", "icon": "images", "link": "/archives/2019/2019-05.md" }, { "text": "2019-04", "icon": "images", "link": "/archives/2019/2019-04.md" }, { "text": "2019-03", "icon": "images", "link": "/archives/2019/2019-03.md" }, { "text": "2019-02", "icon": "images", "link": "/archives/2019/2019-02.md" }, { "text": "2019-01", "icon": "images", "link": "/archives/2019/2019-01.md" }] }, { "text": "2018", "collapsible": true, "icon": "lock-open", "children": [{ "text": "2018-12", "icon": "images", "link": "/archives/2018/2018-12.md" }, { "text": "2018-11", "icon": "images", "link": "/archives/2018/2018-11.md" }, { "text": "2018-10", "icon": "images", "link": "/archives/2018/2018-10.md" }, { "text": "2018-09", "icon": "images", "link": "/archives/2018/2018-09.md" }] }];

// src/.vuepress/config/sidebar/zh.ts
var zhSidebar = sidebar2({
  "/about/": "structure",
  "/vod/": "structure",
  "/iptv/": "structure",
  "/music/": "structure",
  "/tutorial/": "structure",
  "/private/": "structure",
  "/archives/": archives_default
});

// src/.vuepress/theme.ts
import { getRecentUpdatedArticles } from "vuepress-theme-hope/presets/getRecentUpdatedArticles.js";
import { getSlides } from "vuepress-theme-hope/presets/getSlides.js";
var __vite_injected_original_import_meta_url = "file:///D:/admin/Documents/viptv/docs/viptv/src/.vuepress/theme.ts";
var hostname = process.env.HOSTNAME ?? "https://www.viptv.work";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var theme_default = hopeTheme(
  {
    hotReload: true,
    hostname,
    themeColor: true,
    author: {
      name: "Mr.Hefung",
      url: "/about/us"
    },
    favicon: "/favicon.ico",
    breadcrumb: true,
    // 面包屑导航
    logo: "/logo.svg",
    repo: "viptv-work/viptv",
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    docsDir: "docs/viptv/src",
    //文档在仓库中的目录
    repoDisplay: true,
    //是否在导航栏显示仓库链接，默认为 `true`
    fullscreen: true,
    //全屏按钮
    navbarAutoHide: "always",
    lastUpdated: true,
    contributors: true,
    //全局禁用是否显示页面贡献者
    navbarTitle: "VIPTV - \u5DE5\u4F5C\u5BA4",
    extraLocales: {
      \u5B98\u7F51\u4E3B\u7AD9: "https://www.viptv.work/:route",
      \u5B98\u7F51\u793E\u533A: "https://github.com/viptv-work/viptv/discussions",
      \u5B98\u7F51\u955C\u50CF1: "https://dns1.viptv.work/:route",
      \u5B98\u7F51\u955C\u50CF2: "https://dns2.viptv.work/:route",
      \u5B98\u7F51\u955C\u50CF3: "https://dns3.viptv.work/:route"
    },
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Search", "Language", "SocialLink", "Repo", "Outlook"]
    },
    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
        displayFooter: true,
        footer: "\u6781\u901F \u3001 \u9AD8\u6E05 \u3001 \u65E0\u5E7F\u544A",
        // 页脚
        copyright: "\u57FA\u4E8EMIT \u534F\u8BAE | \u7248\u6743\u6240\u6709 \xA9 2020-\u81F3\u4ECA Mr.HeFung",
        blogLocales: {
          tutorial: "\u6559\u7A0B"
        },
        blog: {
          description: "\u4E13\u5FC3\u81F4\u5FD7\u505A\u4E8B\uFF0C\u5927\u6C14\u6E29\u548C\u5F85\u4EBA\u3002",
          intro: "/about/blog",
          timeline: "\u7B80\u5355\u5FEB\u4E50\uFF0C\u7406\u5E94\u5982\u6B64\u3002",
          medias: {
            Email: "mailto:vodtvx@gmail.com",
            Gitee: "https://gitee.com/viptv-work",
            Discord: "https://discord.gg/K7azvhYv",
            Twitter: "https://x.com/viptv_work",
            Telegram: "https://t.me/viptv_work",
            GitHub: "https://github.com/viptv-work",
            Gitlab: "https://gitlab.com/viptv"
          }
        }
      },
      "/en/": {
        navbar: enNavbar,
        sidebar: enSidebar,
        displayFooter: true,
        footer: "Best IPTV Subscription Provider.",
        // 页脚
        copyright: "MIT Licensed | Copyright \xA9 2020-present Mr.HeFung",
        blogLocales: {
          tutorial: "Tutorial"
        },
        blog: {
          description: "\u4E13\u5FC3\u81F4\u5FD7\u505A\u4E8B\uFF0C\u5927\u6C14\u6E29\u548C\u5F85\u4EBA\u3002",
          intro: "/about/blog",
          timeline: "\u7B80\u5355\u5FEB\u4E50\uFF0C\u7406\u5E94\u5982\u6B64\u3002",
          medias: {
            Email: "mailto:vodtvx@gmail.com",
            Gitee: "https://gitee.com/viptv-work",
            Discord: "https://discord.gg/K7azvhYv",
            Twitter: "https://x.com/viptv_work",
            Telegram: "https://t.me/viptv_work",
            GitHub: "https://github.com/viptv-work",
            Gitlab: "https://gitlab.com/viptv"
          }
        }
      }
    },
    // 加密配置
    encrypt: {
      config: {
        "/private/lunli/": ["3.1415926", "8.8888888", "9.9999999"],
        "/private/sm/": ["3.1415926", "8.8888888", "9.9999999"]
      }
    },
    markdown: {
      highlighter: {
        type: "shiki",
        lineNumbers: 15,
        themes: {
          light: "one-light",
          dark: "one-dark-pro"
        }
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
              path.resolve(__dirname, "./components/")
            );
          return file;
        },
        resolveLinkPath: false
      },
      mark: true,
      math: true,
      revealjs: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({
            tag
          }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true
    },
    editLink: false,
    plugins: {
      slimsearch: {
        indexContent: true
      },
      feed: {
        atom: true,
        json: true,
        rss: true,
        image: "/assets/png/VIPTV-LOGO-192x192.png",
        icon: "/assets/png/VIPTV-LOGO-192x192.png"
      },
      photoSwipe: {
        selector: [
          ".theme-hope-content :not(a) > img:not([no-view])",
          ".news-content :not(a) > .vp-article-excerpt img"
        ]
      },
      git: true,
      redirect: {
        switchLocale: "modal",
        localeConfig: {
          "/en/": ["en-US", "en-UK", "en"],
          "/": ["zh-CN", "zh-TW", "zh"]
        },
        config: {
          "/en/": "/"
        }
      },
      blog: {
        hotReload: true,
        // 启用热更新
        excerpt: true,
        //是否生成摘要。
        excerptLength: 0,
        type: [
          getRecentUpdatedArticles({
            locales: { "/en/": "Recent Updated", "/": "\u6700\u8FD1\u66F4\u65B0" }
          }),
          getSlides({
            locales: { "/en": "Slides", "/": "\u5E7B\u706F\u7247" }
          })
        ]
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
          "VidStack"
        ],
        componentOptions: {
          share: {
            services: AVAILABLE_SERVICES
          },
          artPlayer: {
            fastForward: true,
            screenshot: true
          }
        }
      },
      icon: {
        assets: "fontawesome-with-brands"
      },
      copyright: true,
      notice: [
        {
          path: "/",
          title: "VIPTV\u5DF2\u5165\u9A7BTwitter,Telegram",
          content: "<b>\u6B22\u8FCE\u8BBF\u95EE\u672C\u7AD9\uFF01</b><ul><li>\u6211\u662F\u672C\u7AD9\u7684\u72EC\u7ACB\u5F00\u53D1\u8005,\u7EF4\u62A4\u8005</li><li>\u6211\u4EEC\u4F1A\u4E0D\u5B9A\u671F\u5206\u4EAB\u4E00\u4E9BTelegram\u4F18\u8D28\u9891\u9053/\u7FA4\u7EC4\u3001Telegram\u4F7F\u7528\u6280\u5DE7\u7B49\uFF0C\u6B22\u8FCE\u60A8\u5173\u6CE8\uFF01\uFF01</li></ul>",
          actions: [
            {
              text: "\u6211\u77E5\u9053\u4E86",
              type: "default"
            },
            {
              text: "Telegram",
              link: "https://t.me/viptv_work",
              type: "primary"
            },
            {
              text: "Twitter",
              link: "https://x.com/viptv_work",
              type: "primary"
            }
          ]
        },
        {
          path: "/en/",
          title: "Welcome to viptv",
          content: "VIPTV is the highest quality IPTV service",
          actions: [
            {
              text: "DONATE",
              link: "/about/donate.html",
              type: "primary"
            },
            { text: "Default Action" }
          ]
        }
      ],
      watermark: {
        enabled: false
      },
      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: true,
        cacheImage: true,
        appendBase: true,
        apple: {
          icon: "/assets/png/VIPTV-LOGO-192x192.png",
          statusBarColor: "black"
        },
        manifest: {
          name: " VIPTV -  \u5DE5\u4F5C\u5BA4",
          short_name: "Viptv work",
          description: "VIPTV \u7684\u7F51\u7EDC\u5DE5\u4F5C\u5BA4",
          theme_color: "#5c92d1",
          icons: [
            {
              src: "/assets/png/VIPTV-LOGO-512x512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png"
            },
            {
              src: "/assets/png/VIPTV-LOGO-192x192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png"
            },
            {
              src: "/assets/png/VIPTV-LOGO-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
            {
              src: "/assets/png/VIPTV-LOGO-192x192.png",
              sizes: "192x192",
              type: "image/png"
            }
          ],
          shortcuts: [
            {
              name: "\u5206\u7C7B",
              short_name: "\u5206\u7C7B",
              icons: [
                {
                  src: "/assets/png/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png"
                }
              ],
              url: "/category/",
              description: "\u6587\u7AE0\u5206\u7C7B\u5206\u7EC4"
            },
            {
              name: "\u6807\u7B7E",
              short_name: "\u6807\u7B7E",
              icons: [
                {
                  src: "/assets/png/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png"
                }
              ],
              url: "/tag/",
              description: "\u6587\u7AE0\u6807\u7B7E\u5206\u7EC4"
            },
            {
              name: "\u65F6\u95F4\u7EBF",
              short_name: "\u65F6\u95F4\u7EBF",
              icons: [
                {
                  src: "/assets/png/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png"
                }
              ],
              url: "/timeline/",
              description: "\u65F6\u95F4\u7EBF\u6587\u7AE0\u5217\u8868"
            },
            {
              name: "\u5173\u4E8E\u6211\u4EEC",
              short_name: "\u56E2\u961F\u4ECB\u7ECD",
              icons: [
                {
                  src: "/logo.svg",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png"
                }
              ],
              url: "/about/",
              description: "\u6211\u7684\u56E2\u961F\u4ECB\u7ECD"
            }
          ]
        }
      },
      seo: hostname === "https://www.viptv.work" ? {} : { canonical: "https://www.viptv.work" },
      sitemap: true
    }
  },
  {
    custom: true
  }
);

// src/.vuepress/config.ts
import { getDirname as getDirname2, path as path2 } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
var __vite_injected_original_dirname = "D:/admin/Documents/viptv/docs/viptv/src/.vuepress";
var __vite_injected_original_import_meta_url2 = "file:///D:/admin/Documents/viptv/docs/viptv/src/.vuepress/config.ts";
var __dirname2 = __vite_injected_original_dirname || getDirname2(__vite_injected_original_import_meta_url2);
var base = process.env.BASE ?? "/";
var config_default = defineUserConfig({
  base,
  dest: "./dist",
  head: [
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "codeva-iazwBEuOEA"
      }
    ],
    [
      "meta",
      {
        name: "msvalidate.01",
        content: "60990E7826770BD82AE9B5EFB468E0BB"
      }
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VIPTV - \u5DE5\u4F5C\u5BA4",
      description: "\u4FBF\u6377 \u3001\u9AD8\u6548 \u3001\u6700\u6709\u4EF7\u503C\u7684\u89C6\u542C\u94FE"
    },
    "/en/": {
      lang: "en-US",
      title: "VIPTV - Work",
      description: "VIPTV Is The Highest Quality IPTV Service"
    }
  },
  theme: theme_default,
  shouldPrefetch: false,
  shouldPreload: false,
  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path3) => path3.replace(/^\/bing/, "")
          }
        }
      }
    }
    // vuePluginOptions: {},
  }),
  plugins: [
    // 背景插件
    /* registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }) */
  ],
  alias: {
    "@db": path2.resolve(__dirname2, "composables/db"),
    "@act": path2.resolve(__dirname2, "composables/artConst"),
    "@theme-hope/modules/blog/components/BlogHero": path2.resolve(__dirname2, "./components/BlogHero.vue"),
    "@theme-hope/modules/sidebar/components/Sidebar": path2.resolve(__dirname2, "./components/Sidebar.vue"),
    "@theme-hope/components/NormalPage": path2.resolve(__dirname2, "./components/NormalPage.vue")
  },
  port: 80
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL2NvbmZpZy9uYXZiYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9jb25maWcvbmF2YmFyL3poLnRzIiwgInBhY2thZ2UuanNvbiIsICJzcmMvLnZ1ZXByZXNzL2NvbmZpZy9zaWRlYmFyL2VuLnRzIiwgInNyYy8udnVlcHJlc3MvY29uZmlnL3NpZGViYXIvemgudHMiLCAic3JjLy52dWVwcmVzcy9jb25maWcvc2lkZWJhci9hcmNoaXZlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2FkbWluL0RvY3VtZW50cy92aXB0di9kb2NzL3ZpcHR2L3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGFkbWluXFxcXERvY3VtZW50c1xcXFx2aXB0dlxcXFxkb2NzXFxcXHZpcHR2XFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9hZG1pbi9Eb2N1bWVudHMvdmlwdHYvZG9jcy92aXB0di9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcclxuLy9pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXJlZ2lzdGVyLWNvbXBvbmVudHMnXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xyXG5pbXBvcnQgeyBnZXREaXJuYW1lLCBwYXRoIH0gZnJvbSBcInZ1ZXByZXNzL3V0aWxzXCI7XHJcbmltcG9ydCB7IHZpdGVCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItdml0ZSc7XHJcbmNvbnN0IF9fZGlybmFtZSA9IGltcG9ydC5tZXRhLmRpcm5hbWUgfHwgZ2V0RGlybmFtZShpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCBiYXNlID0gKHByb2Nlc3MuZW52LkJBU0UgYXMgXCIvXCIgfCBgLyR7c3RyaW5nfS9gIHwgdW5kZWZpbmVkKSA/PyBcIi9cIjtcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XHJcbiAgYmFzZSxcclxuICBkZXN0OiBcIi4vZGlzdFwiLFxyXG4gIGhlYWQ6IFtcclxuICAgIFtcclxuICAgICAgXCJtZXRhXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImJhaWR1LXNpdGUtdmVyaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgY29udGVudDogXCJjb2RldmEtaWF6d0JFdU9FQVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJtZXRhXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIm1zdmFsaWRhdGUuMDFcIixcclxuICAgICAgICBjb250ZW50OiBcIjYwOTkwRTc4MjY3NzBCRDgyQUU5QjVFRkI0NjhFMEJCXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgXSxcclxuICBsb2NhbGVzOiB7XHJcbiAgICBcIi9cIjoge1xyXG4gICAgICBsYW5nOiBcInpoLUNOXCIsXHJcbiAgICAgIHRpdGxlOiBcIlZJUFRWIC0gXHU1REU1XHU0RjVDXHU1QkE0XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NEZCRlx1NjM3NyBcdTMwMDFcdTlBRDhcdTY1NDggXHUzMDAxXHU2NzAwXHU2NzA5XHU0RUY3XHU1MDNDXHU3Njg0XHU4OUM2XHU1NDJDXHU5NEZFXCIsXHJcbiAgICB9LFxyXG4gICAgXCIvZW4vXCI6IHtcclxuICAgICAgbGFuZzogXCJlbi1VU1wiLFxyXG4gICAgICB0aXRsZTogXCJWSVBUViAtIFdvcmtcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVklQVFYgSXMgVGhlIEhpZ2hlc3QgUXVhbGl0eSBJUFRWIFNlcnZpY2VcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aGVtZSxcclxuICBzaG91bGRQcmVmZXRjaDogZmFsc2UsXHJcbiAgc2hvdWxkUHJlbG9hZDogZmFsc2UsXHJcbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoe1xyXG4gICAgdml0ZU9wdGlvbnM6IHtcclxuICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgIFwiL2JpbmdcIjoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly9jbi5iaW5nLmNvbVwiLFxyXG4gICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9iaW5nLywgXCJcIiksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB2dWVQbHVnaW5PcHRpb25zOiB7fSxcclxuICB9KSxcclxuXHJcbiAgXHJcbiAgcGx1Z2luczogW1xyXG4gICAgLy8gXHU4MENDXHU2NjZGXHU2M0QyXHU0RUY2XHJcbiAgIFxyXG4gICAgLyogcmVnaXN0ZXJDb21wb25lbnRzUGx1Z2luKHtcclxuICAgICAgY29tcG9uZW50c0RpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cycpXHJcbiAgICB9KSAqL1xyXG4gIF0sXHJcbiAgYWxpYXM6IHtcclxuICAgIFwiQGRiXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiY29tcG9zYWJsZXMvZGJcIiksXHJcbiAgICBcIkBhY3RcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJjb21wb3NhYmxlcy9hcnRDb25zdFwiKSxcclxuICAgIFwiQHRoZW1lLWhvcGUvbW9kdWxlcy9ibG9nL2NvbXBvbmVudHMvQmxvZ0hlcm9cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4vY29tcG9uZW50cy9CbG9nSGVyby52dWVcIiksXHJcbiAgICBcIkB0aGVtZS1ob3BlL21vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL1NpZGViYXJcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4vY29tcG9uZW50cy9TaWRlYmFyLnZ1ZVwiKSxcclxuICAgIFwiQHRoZW1lLWhvcGUvY29tcG9uZW50cy9Ob3JtYWxQYWdlXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9jb21wb25lbnRzL05vcm1hbFBhZ2UudnVlXCIpLFxyXG4gIH0sXHJcbiAgcG9ydDogODBcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYWRtaW4vRG9jdW1lbnRzL3ZpcHR2L2RvY3MvdmlwdHYvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYWRtaW5cXFxcRG9jdW1lbnRzXFxcXHZpcHR2XFxcXGRvY3NcXFxcdmlwdHZcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYWRtaW4vRG9jdW1lbnRzL3ZpcHR2L2RvY3MvdmlwdHYvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcbmltcG9ydCB7IGdldERpcm5hbWUsIHBhdGggfSBmcm9tIFwidnVlcHJlc3MvdXRpbHNcIjtcclxuaW1wb3J0IHsgQVZBSUxBQkxFX1NFUlZJQ0VTIH0gZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGVuTmF2YmFyLCB6aE5hdmJhciwgZW5TaWRlYmFyLCB6aFNpZGViYXIgfSBmcm9tIFwiLi9jb25maWcvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZ2V0UmVjZW50VXBkYXRlZEFydGljbGVzIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvcHJlc2V0cy9nZXRSZWNlbnRVcGRhdGVkQXJ0aWNsZXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0U2xpZGVzIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvcHJlc2V0cy9nZXRTbGlkZXMuanNcIjtcclxuY29uc3QgaG9zdG5hbWUgPSBwcm9jZXNzLmVudi5IT1NUTkFNRSA/PyBcImh0dHBzOi8vd3d3LnZpcHR2LndvcmtcIjtcclxuY29uc3QgX19kaXJuYW1lID0gZ2V0RGlybmFtZShpbXBvcnQubWV0YS51cmwpO1xyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoXHJcbiAge1xyXG4gICAgaG90UmVsb2FkOiB0cnVlLFxyXG4gICAgaG9zdG5hbWUsXHJcbiAgICB0aGVtZUNvbG9yOiB0cnVlLFxyXG4gICAgYXV0aG9yOiB7XHJcbiAgICAgIG5hbWU6IFwiTXIuSGVmdW5nXCIsXHJcbiAgICAgIHVybDogXCIvYWJvdXQvdXNcIixcclxuICAgIH0sXHJcbiAgICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxyXG4gICAgYnJlYWRjcnVtYjogdHJ1ZSwgLy8gXHU5NzYyXHU1MzA1XHU1QzUxXHU1QkZDXHU4MjJBXHJcbiAgICBsb2dvOiBcIi9sb2dvLnN2Z1wiLFxyXG4gICAgcmVwbzogXCJ2aXB0di13b3JrL3ZpcHR2XCIsIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NEVEM1x1NUU5M1x1OTRGRVx1NjNBNVx1NjU4N1x1NUI1N1x1MzAwMlx1OUVEOFx1OEJBNFx1NEVDRSBgcmVwb2AgXHU0RTJEXHU4MUVBXHU1MkE4XHU2M0E4XHU2NUFEXHU0RTNBXHJcbiAgICBkb2NzRGlyOiBcImRvY3MvdmlwdHYvc3JjXCIsIC8vXHU2NTg3XHU2ODYzXHU1NzI4XHU0RUQzXHU1RTkzXHU0RTJEXHU3Njg0XHU3NkVFXHU1RjU1XHJcbiAgICByZXBvRGlzcGxheTogdHJ1ZSwgLy9cdTY2MkZcdTU0MjZcdTU3MjhcdTVCRkNcdTgyMkFcdTY4MEZcdTY2M0VcdTc5M0FcdTRFRDNcdTVFOTNcdTk0RkVcdTYzQTVcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgYHRydWVgXHJcbiAgICBmdWxsc2NyZWVuOiB0cnVlLCAvL1x1NTE2OFx1NUM0Rlx1NjMwOVx1OTRBRVxyXG4gICAgbmF2YmFyQXV0b0hpZGU6ICdhbHdheXMnLFxyXG4gICAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgICBjb250cmlidXRvcnM6IHRydWUsIC8vXHU1MTY4XHU1QzQwXHU3OTgxXHU3NTI4XHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU5ODc1XHU5NzYyXHU4RDIxXHU3MzJFXHU4MDA1XHJcbiAgICBuYXZiYXJUaXRsZTogXCJWSVBUViAtIFx1NURFNVx1NEY1Q1x1NUJBNFwiLFxyXG4gICAgZXh0cmFMb2NhbGVzOiB7XHJcbiAgICAgIFx1NUI5OFx1N0Y1MVx1NEUzQlx1N0FEOTogXCJodHRwczovL3d3dy52aXB0di53b3JrLzpyb3V0ZVwiLFxyXG4gICAgICBcdTVCOThcdTdGNTFcdTc5M0VcdTUzM0E6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZpcHR2LXdvcmsvdmlwdHYvZGlzY3Vzc2lvbnNcIixcclxuICAgICAgXHU1Qjk4XHU3RjUxXHU5NTVDXHU1MENGMTogXCJodHRwczovL2RuczEudmlwdHYud29yay86cm91dGVcIixcclxuICAgICAgXHU1Qjk4XHU3RjUxXHU5NTVDXHU1MENGMjogXCJodHRwczovL2RuczIudmlwdHYud29yay86cm91dGVcIixcclxuICAgICAgXHU1Qjk4XHU3RjUxXHU5NTVDXHU1MENGMzogXCJodHRwczovL2RuczMudmlwdHYud29yay86cm91dGVcIixcclxuICAgIH0sXHJcbiAgICBuYXZiYXJMYXlvdXQ6IHtcclxuICAgICAgc3RhcnQ6IFtcIkJyYW5kXCJdLFxyXG4gICAgICBjZW50ZXI6IFtcIkxpbmtzXCJdLFxyXG4gICAgICBlbmQ6IFtcIlNlYXJjaFwiLCBcIkxhbmd1YWdlXCIsIFwiU29jaWFsTGlua1wiLCBcIlJlcG9cIiwgXCJPdXRsb29rXCJdLFxyXG4gICAgfSxcclxuXHJcbiAgICBsb2NhbGVzOiB7XHJcbiAgICAgIFwiL1wiOiB7XHJcbiAgICAgICAgbmF2YmFyOiB6aE5hdmJhcixcclxuICAgICAgICBzaWRlYmFyOiB6aFNpZGViYXIsXHJcbiAgICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcclxuICAgICAgICBmb290ZXI6IFwiXHU2NzgxXHU5MDFGIFx1MzAwMSBcdTlBRDhcdTZFMDUgXHUzMDAxIFx1NjVFMFx1NUU3Rlx1NTQ0QVwiLCAvLyBcdTk4NzVcdTgxMUFcclxuICAgICAgICBjb3B5cmlnaHQ6IFwiXHU1N0ZBXHU0RThFTUlUIFx1NTM0Rlx1OEJBRSB8IFx1NzI0OFx1Njc0M1x1NjI0MFx1NjcwOSBcdTAwQTkgMjAyMC1cdTgxRjNcdTRFQ0EgTXIuSGVGdW5nXCIsXHJcbiAgICAgICAgYmxvZ0xvY2FsZXM6IHtcclxuICAgICAgICAgIHR1dG9yaWFsOiBcIlx1NjU1OVx1N0EwQlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmxvZzoge1xyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiXHU0RTEzXHU1RkMzXHU4MUY0XHU1RkQ3XHU1MDVBXHU0RThCXHVGRjBDXHU1OTI3XHU2QzE0XHU2RTI5XHU1NDhDXHU1Rjg1XHU0RUJBXHUzMDAyXCIsXHJcbiAgICAgICAgICBpbnRybzogXCIvYWJvdXQvYmxvZ1wiLFxyXG4gICAgICAgICAgdGltZWxpbmU6IFwiXHU3QjgwXHU1MzU1XHU1RkVCXHU0RTUwXHVGRjBDXHU3NDA2XHU1RTk0XHU1OTgyXHU2QjY0XHUzMDAyXCIsXHJcbiAgICAgICAgICBtZWRpYXM6IHtcclxuICAgICAgICAgICAgRW1haWw6IFwibWFpbHRvOnZvZHR2eEBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9naXRlZS5jb20vdmlwdHYtd29ya1wiLFxyXG4gICAgICAgICAgICBEaXNjb3JkOiBcImh0dHBzOi8vZGlzY29yZC5nZy9LN2F6dmhZdlwiLFxyXG4gICAgICAgICAgICBUd2l0dGVyOiBcImh0dHBzOi8veC5jb20vdmlwdHZfd29ya1wiLFxyXG4gICAgICAgICAgICBUZWxlZ3JhbTogXCJodHRwczovL3QubWUvdmlwdHZfd29ya1wiLFxyXG4gICAgICAgICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZpcHR2LXdvcmtcIixcclxuICAgICAgICAgICAgR2l0bGFiOiBcImh0dHBzOi8vZ2l0bGFiLmNvbS92aXB0dlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgfSxcclxuICAgICAgXCIvZW4vXCI6IHtcclxuICAgICAgICBuYXZiYXI6IGVuTmF2YmFyLFxyXG4gICAgICAgIHNpZGViYXI6IGVuU2lkZWJhcixcclxuICAgICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG4gICAgICAgIGZvb3RlcjogXCJCZXN0IElQVFYgU3Vic2NyaXB0aW9uIFByb3ZpZGVyLlwiLCAvLyBcdTk4NzVcdTgxMUFcclxuICAgICAgICBjb3B5cmlnaHQ6IFwiTUlUIExpY2Vuc2VkIHwgQ29weXJpZ2h0IFx1MDBBOSAyMDIwLXByZXNlbnQgTXIuSGVGdW5nXCIsXHJcbiAgICAgICAgYmxvZ0xvY2FsZXM6IHtcclxuICAgICAgICAgIHR1dG9yaWFsOiBcIlR1dG9yaWFsXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibG9nOiB7XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTRFMTNcdTVGQzNcdTgxRjRcdTVGRDdcdTUwNUFcdTRFOEJcdUZGMENcdTU5MjdcdTZDMTRcdTZFMjlcdTU0OENcdTVGODVcdTRFQkFcdTMwMDJcIixcclxuICAgICAgICAgIGludHJvOiBcIi9hYm91dC9ibG9nXCIsXHJcbiAgICAgICAgICB0aW1lbGluZTogXCJcdTdCODBcdTUzNTVcdTVGRUJcdTRFNTBcdUZGMENcdTc0MDZcdTVFOTRcdTU5ODJcdTZCNjRcdTMwMDJcIixcclxuICAgICAgICAgIG1lZGlhczoge1xyXG4gICAgICAgICAgICBFbWFpbDogXCJtYWlsdG86dm9kdHZ4QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICBHaXRlZTogXCJodHRwczovL2dpdGVlLmNvbS92aXB0di13b3JrXCIsXHJcbiAgICAgICAgICAgIERpc2NvcmQ6IFwiaHR0cHM6Ly9kaXNjb3JkLmdnL0s3YXp2aFl2XCIsXHJcbiAgICAgICAgICAgIFR3aXR0ZXI6IFwiaHR0cHM6Ly94LmNvbS92aXB0dl93b3JrXCIsXHJcbiAgICAgICAgICAgIFRlbGVncmFtOiBcImh0dHBzOi8vdC5tZS92aXB0dl93b3JrXCIsXHJcbiAgICAgICAgICAgIEdpdEh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vdmlwdHYtd29ya1wiLFxyXG4gICAgICAgICAgICBHaXRsYWI6IFwiaHR0cHM6Ly9naXRsYWIuY29tL3ZpcHR2XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIFx1NTJBMFx1NUJDNlx1OTE0RFx1N0Y2RVxyXG4gICAgZW5jcnlwdDoge1xyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICBcIi9wcml2YXRlL2x1bmxpL1wiOiBbXCIzLjE0MTU5MjZcIiwgXCI4Ljg4ODg4ODhcIiwgXCI5Ljk5OTk5OTlcIl0sXHJcbiAgICAgICAgXCIvcHJpdmF0ZS9zbS9cIjogW1wiMy4xNDE1OTI2XCIsIFwiOC44ODg4ODg4XCIsIFwiOS45OTk5OTk5XCJdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1hcmtkb3duOiB7XHJcbiAgICAgIGhpZ2hsaWdodGVyOiB7XHJcbiAgICAgICAgdHlwZTogXCJzaGlraVwiLFxyXG4gICAgICAgIGxpbmVOdW1iZXJzOiAxNSxcclxuICAgICAgICB0aGVtZXM6IHtcclxuICAgICAgICAgIGxpZ2h0OiBcIm9uZS1saWdodFwiLFxyXG4gICAgICAgICAgZGFyazogXCJvbmUtZGFyay1wcm9cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhbGlnbjogdHJ1ZSxcclxuICAgICAgYXR0cnM6IHRydWUsXHJcbiAgICAgIGNvZGVUYWJzOiB0cnVlLFxyXG4gICAgICBjb21wb25lbnQ6IHRydWUsXHJcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcclxuICAgICAgZ2ZtOiB0cnVlLFxyXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcclxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGRlZXA6IHRydWUsXHJcbiAgICAgICAgcmVzb2x2ZVBhdGg6IChmaWxlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZmlsZS5zdGFydHNXaXRoKFwiQGNvbXBvbmVudHMvXCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmlsZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgIFwiQGNvbXBvbmVudHNcIixcclxuICAgICAgICAgICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vY29tcG9uZW50cy9cIiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc29sdmVMaW5rUGF0aDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcms6IHRydWUsXHJcbiAgICAgIG1hdGg6IHRydWUsXHJcbiAgICAgIHJldmVhbGpzOiB0cnVlLFxyXG4gICAgICBzcG9pbGVyOiB0cnVlLFxyXG4gICAgICBzdHlsaXplOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxyXG4gICAgICAgICAgcmVwbGFjZXI6ICh7XHJcbiAgICAgICAgICAgIHRhZyxcclxuICAgICAgICAgIH0pOiB7XHJcbiAgICAgICAgICAgIHRhZzogc3RyaW5nO1xyXG4gICAgICAgICAgICBhdHRyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICAgICAgICAgICAgY29udGVudDogc3RyaW5nO1xyXG4gICAgICAgICAgfSB8IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxyXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJSZWNvbW1lbmRlZFwiLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHN1YjogdHJ1ZSxcclxuICAgICAgc3VwOiB0cnVlLFxyXG4gICAgICB0YWJzOiB0cnVlLFxyXG4gICAgICB0YXNrbGlzdDogdHJ1ZSxcclxuICAgICAgdlByZTogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgZWRpdExpbms6IGZhbHNlLFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBzbGltc2VhcmNoOiB7XHJcbiAgICAgICAgaW5kZXhDb250ZW50OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBmZWVkOiB7XHJcbiAgICAgICAgYXRvbTogdHJ1ZSxcclxuICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgIHJzczogdHJ1ZSxcclxuICAgICAgICBpbWFnZTogJy9hc3NldHMvcG5nL1ZJUFRWLUxPR08tMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgIGljb246ICcvYXNzZXRzL3BuZy9WSVBUVi1MT0dPLTE5MngxOTIucG5nJyxcclxuICAgICAgfSxcclxuICAgICAgcGhvdG9Td2lwZToge1xyXG4gICAgICAgIHNlbGVjdG9yOiBbXHJcbiAgICAgICAgICBcIi50aGVtZS1ob3BlLWNvbnRlbnQgOm5vdChhKSA+IGltZzpub3QoW25vLXZpZXddKVwiLFxyXG4gICAgICAgICAgXCIubmV3cy1jb250ZW50IDpub3QoYSkgPiAudnAtYXJ0aWNsZS1leGNlcnB0IGltZ1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGdpdDogdHJ1ZSxcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBzd2l0Y2hMb2NhbGU6IFwibW9kYWxcIiAsXHJcbiAgICAgICAgbG9jYWxlQ29uZmlnOiB7XHJcbiAgICAgICAgICAnL2VuLyc6IFsnZW4tVVMnLCAnZW4tVUsnLCAnZW4nXSxcclxuICAgICAgICAgICcvJzogWyd6aC1DTicsICd6aC1UVycsICd6aCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAnL2VuLyc6ICcvJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBibG9nOiB7XHJcbiAgICAgICAgaG90UmVsb2FkOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTcwRURcdTY2RjRcdTY1QjBcclxuICAgICAgICBleGNlcnB0OiB0cnVlLCAvL1x1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NjQ1OFx1ODk4MVx1MzAwMlxyXG4gICAgICAgIGV4Y2VycHRMZW5ndGg6IDAsXHJcbiAgICAgICAgdHlwZTogW1xyXG4gXHJcbiAgICAgICAgICBnZXRSZWNlbnRVcGRhdGVkQXJ0aWNsZXMoe1xyXG4gICAgICAgICAgICBsb2NhbGVzOiB7IFwiL2VuL1wiOiBcIlJlY2VudCBVcGRhdGVkXCIsIFwiL1wiOiBcIlx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFwiIH0sXHJcbiAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgICBnZXRTbGlkZXMoe1xyXG4gICAgICAgICAgICBsb2NhbGVzOiB7IFwiL2VuXCI6IFwiU2xpZGVzXCIsIFwiL1wiOiBcIlx1NUU3Qlx1NzA2Rlx1NzI0N1wiIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qIGNvbW1lbnQ6IHtcclxuICAgICAgICAgICBwcm92aWRlcjogJ0dpc2N1cycsXHJcbiAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcclxuICAgICAgICAgICByZXBvOiAndmlwdHYtd29yay92aXB0dicsXHJcbiAgICAgICAgICAgcmVwb0lkOiAnUl9rZ0RPS2R5RnpnJyxcclxuICAgICAgICAgICBjYXRlZ29yeTogJ1EmQScsXHJcbiAgICAgICAgICAgY2F0ZWdvcnlJZDogJ0RJQ19rd0RPS2R5RnpzNENlTFNEJyxcclxuICAgICAgICAgICBtYXBwaW5nOiAncGF0aG5hbWUnLFxyXG4gICAgICAgICAgIHJlYWN0aW9uc0VuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgaW5wdXRQb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgZGFya1RoZW1lOiAnZGFya19wcm90YW5vcGlhJyxcclxuICAgICAgICAgICBsaWdodFRoZW1lOiAnbGlnaHRfcHJvdGFub3BpYScsXHJcbiAgICAgICAgIH0sICovXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAgICBcIlNoYXJlXCIsXHJcbiAgICAgICAgICBcIkJhZGdlXCIsXHJcbiAgICAgICAgICBcIlZQQ2FyZFwiLFxyXG4gICAgICAgICAgXCJBcnRQbGF5ZXJcIixcclxuICAgICAgICAgIFwiVlBCYW5uZXJcIixcclxuICAgICAgICAgIFwiU2l0ZUluZm9cIixcclxuICAgICAgICAgIFwiVmlkU3RhY2tcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbXBvbmVudE9wdGlvbnM6IHtcclxuICAgICAgICAgIHNoYXJlOiB7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzOiBBVkFJTEFCTEVfU0VSVklDRVMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXJ0UGxheWVyOiB7XHJcbiAgICAgICAgICAgIGZhc3RGb3J3YXJkOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JlZW5zaG90OiB0cnVlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBpY29uOiB7XHJcbiAgICAgICAgYXNzZXRzOiBcImZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjb3B5cmlnaHQ6IHRydWUsXHJcblxyXG5cclxuICAgICAgbm90aWNlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJWSVBUVlx1NURGMlx1NTE2NVx1OUE3QlR3aXR0ZXIsVGVsZWdyYW1cIixcclxuICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgIFwiPGI+XHU2QjIyXHU4RkNFXHU4QkJGXHU5NUVFXHU2NzJDXHU3QUQ5XHVGRjAxPC9iPjx1bD48bGk+XHU2MjExXHU2NjJGXHU2NzJDXHU3QUQ5XHU3Njg0XHU3MkVDXHU3QUNCXHU1RjAwXHU1M0QxXHU4MDA1LFx1N0VGNFx1NjJBNFx1ODAwNTwvbGk+PGxpPlx1NjIxMVx1NEVFQ1x1NEYxQVx1NEUwRFx1NUI5QVx1NjcxRlx1NTIwNlx1NEVBQlx1NEUwMFx1NEU5QlRlbGVncmFtXHU0RjE4XHU4RDI4XHU5ODkxXHU5MDUzL1x1N0ZBNFx1N0VDNFx1MzAwMVRlbGVncmFtXHU0RjdGXHU3NTI4XHU2MjgwXHU1REU3XHU3QjQ5XHVGRjBDXHU2QjIyXHU4RkNFXHU2MEE4XHU1MTczXHU2Q0U4XHVGRjAxXHVGRjAxPC9saT48L3VsPlwiLFxyXG4gICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJcdTYyMTFcdTc3RTVcdTkwNTNcdTRFODZcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImRlZmF1bHRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVGVsZWdyYW1cIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vdC5tZS92aXB0dl93b3JrXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlR3aXR0ZXJcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8veC5jb20vdmlwdHZfd29ya1wiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6IFwiL2VuL1wiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiV2VsY29tZSB0byB2aXB0dlwiLFxyXG4gICAgICAgICAgY29udGVudDogXCJWSVBUViBpcyB0aGUgaGlnaGVzdCBxdWFsaXR5IElQVFYgc2VydmljZVwiLFxyXG4gICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogXCJET05BVEVcIixcclxuICAgICAgICAgICAgICBsaW5rOiBcIi9hYm91dC9kb25hdGUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6IFwiRGVmYXVsdCBBY3Rpb25cIiB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgd2F0ZXJtYXJrOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgIFxyXG4gICAgICBwd2E6IHtcclxuICAgICAgICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxyXG4gICAgICAgIGNhY2hlSFRNTDogdHJ1ZSxcclxuICAgICAgICBjYWNoZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIGFwcGVuZEJhc2U6IHRydWUsXHJcbiAgICAgICAgYXBwbGU6IHtcclxuICAgICAgICAgIGljb246IFwiL2Fzc2V0cy9wbmcvVklQVFYtTE9HTy0xOTJ4MTkyLnBuZ1wiLFxyXG4gICAgICAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgICBuYW1lOiBcIiBWSVBUViAtICBcdTVERTVcdTRGNUNcdTVCQTRcIixcclxuICAgICAgICAgIHNob3J0X25hbWU6IFwiVmlwdHYgd29ya1wiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVklQVFYgXHU3Njg0XHU3RjUxXHU3RURDXHU1REU1XHU0RjVDXHU1QkE0XCIsXHJcbiAgICAgICAgICB0aGVtZV9jb2xvcjogXCIjNWM5MmQxXCIsXHJcbiAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvcG5nL1ZJUFRWLUxPR08tNTEyeDUxMi5wbmdcIixcclxuICAgICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9wbmcvVklQVFYtTE9HTy0xOTJ4MTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL3BuZy9WSVBUVi1MT0dPLTUxMng1MTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9wbmcvVklQVFYtTE9HTy0xOTJ4MTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHNob3J0Y3V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJcdTUyMDZcdTdDN0JcIixcclxuICAgICAgICAgICAgICBzaG9ydF9uYW1lOiBcIlx1NTIwNlx1N0M3QlwiLFxyXG4gICAgICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL3BuZy9jYXRlZ29yeS1tYXNrYWJsZS5wbmdcIixcclxuICAgICAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgdXJsOiBcIi9jYXRlZ29yeS9cIixcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTY1ODdcdTdBRTBcdTUyMDZcdTdDN0JcdTUyMDZcdTdFQzRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiXHU2ODA3XHU3QjdFXCIsXHJcbiAgICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJcdTY4MDdcdTdCN0VcIixcclxuICAgICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9wbmcvdGFnLW1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB1cmw6IFwiL3RhZy9cIixcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTY1ODdcdTdBRTBcdTY4MDdcdTdCN0VcdTUyMDZcdTdFQzRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiXHU2NUY2XHU5NUY0XHU3RUJGXCIsXHJcbiAgICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJcdTY1RjZcdTk1RjRcdTdFQkZcIixcclxuICAgICAgICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9wbmcvdGltZWxpbmUtbWFza2FibGUucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIHVybDogXCIvdGltZWxpbmUvXCIsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXHU2NUY2XHU5NUY0XHU3RUJGXHU2NTg3XHU3QUUwXHU1MjE3XHU4ODY4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIlx1NTE3M1x1NEU4RVx1NjIxMVx1NEVFQ1wiLFxyXG4gICAgICAgICAgICAgIHNob3J0X25hbWU6IFwiXHU1NkUyXHU5NjFGXHU0RUNCXHU3RUNEXCIsXHJcbiAgICAgICAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgc3JjOiBcIi9sb2dvLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB1cmw6IFwiL2Fib3V0L1wiLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NjIxMVx1NzY4NFx1NTZFMlx1OTYxRlx1NEVDQlx1N0VDRFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzZW86IGhvc3RuYW1lID09PSBcImh0dHBzOi8vd3d3LnZpcHR2LndvcmtcIlxyXG4gICAgICAgID8ge31cclxuICAgICAgICA6IHsgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LnZpcHR2LndvcmtcIiB9LFxyXG4gICAgICBzaXRlbWFwOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGN1c3RvbTogdHJ1ZSxcclxuICB9XHJcbik7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYWRtaW4vRG9jdW1lbnRzL3ZpcHR2L2RvY3MvdmlwdHYvc3JjLy52dWVwcmVzcy9jb25maWcvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxhZG1pblxcXFxEb2N1bWVudHNcXFxcdmlwdHZcXFxcZG9jc1xcXFx2aXB0dlxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ1xcXFxuYXZiYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2FkbWluL0RvY3VtZW50cy92aXB0di9kb2NzL3ZpcHR2L3NyYy8udnVlcHJlc3MvY29uZmlnL25hdmJhci9lbi50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW5OYXZiYXIgPSBuYXZiYXIoW1wiL2VuL1wiXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYWRtaW4vRG9jdW1lbnRzL3ZpcHR2L2RvY3MvdmlwdHYvc3JjLy52dWVwcmVzcy9jb25maWcvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxhZG1pblxcXFxEb2N1bWVudHNcXFxcdmlwdHZcXFxcZG9jc1xcXFx2aXB0dlxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ1xcXFxuYXZiYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2FkbWluL0RvY3VtZW50cy92aXB0di9kb2NzL3ZpcHR2L3NyYy8udnVlcHJlc3MvY29uZmlnL25hdmJhci96aC50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9wYWNrYWdlLmpzb24nXHJcblxyXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xyXG4gIFwiL1wiLFxyXG4gIFwiL2lwdHYvXCIsXHJcbiAgXCIvdm9kL1wiLFxyXG4gIFwiL211c2ljL1wiLFxyXG4gIFwiL3R1dG9yaWFsL1wiLFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU1RkM1XHU1RTk0XHU1OEMxXHU3RUI4XCIsXHJcbiAgICBpY29uOiBcImltYWdlc1wiLFxyXG4gICAgbGluazogXCIvYXJjaGl2ZXMvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NTE3M1x1NEU4RVwiLFxyXG4gICAgaWNvbjogXCJjaXJjbGUtaW5mb1wiLFxyXG4gICAgcHJlZml4OiBcIi9hYm91dC9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NTE3M1x1NEU4RVx1NjIxMVx1NEVFQ1wiLFxyXG4gICAgICAgIGljb246IFwiY2lyY2xlLWluZm9cIixcclxuICAgICAgICBsaW5rOiBcIlwiLFxyXG4gICAgICAgIGFjdGl2ZU1hdGNoOiBcIl4vYWJvdXQvJFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTYyMTFcdTc2ODRcdTUzNUFcdTVCQTJcIixcclxuICAgICAgICBpY29uOiBcImJsb2dcIixcclxuICAgICAgICBsaW5rOiBcImJsb2dcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1M0NCXHU2MEM1XHU2MjUzXHU4RDRGXCIsXHJcbiAgICAgICAgaWNvbjogXCJoZWFydFwiLFxyXG4gICAgICAgIGxpbms6IFwiZG9uYXRlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiB2ZXJzaW9uICsgXCJcdTY1RTVcdTVGRDdcIixcclxuICAgICAgICBpY29uOiBcImZhLWJyYW5kcyBmYS12dWVqc1wiLFxyXG4gICAgICAgIGxpbms6IFwiY2hhbmdlbG9nXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl0pO1xyXG5cclxuIiwgIntcclxuICBcIm5hbWVcIjogXCJ2aXB0dlwiLFxyXG4gIFwidmVyc2lvblwiOiBcIjMuMC4xXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlZJUFRWLVx1NURFNVx1NEY1Q1x1NUJBNCxcdTdFQzRcdTRFRjZcdTVGMDBcdTUzRDEsXHU2NTg3XHU2ODYzXHU3RjE2XHU4RjkxXCIsXHJcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgXCJyZXBvc2l0b3J5XCI6IHtcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZpcHR2LXdvcmsvZGV2XCIsXHJcbiAgICBcImRpcmVjdG9yeVwiOiBcInBhY2thZ2VzL3ZpcHR2LWRvY3NcIlxyXG4gIH0sXHJcbiAgXCJhdXRob3JcIjoge1xyXG4gICAgXCJuYW1lXCI6IFwiTXIuSGVGdW5nXCIsXHJcbiAgICBcImVtYWlsXCI6IFwicXEyMjM2NjM5OTU2QG91dGxvb2suY29tXCIsXHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oZWZ1bmdcIlxyXG4gIH0sXHJcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgXCJzY3JpcHRzXCI6IHtcclxuICAgIFwiZGV2XCI6IFwidnVlcHJlc3Mtdml0ZSBkZXYgc3JjIC0tY2xlYW4tY2FjaGVcIixcclxuICAgIFwiYnVpbGRcIjogXCJ2dWVwcmVzcy12aXRlIGJ1aWxkICBzcmMgLS1jbGVhbi1jYWNoZVwiLFxyXG4gICAgXCJjbGVhblwiOiBcInJtIC1yZiBkaXN0ICYmIHJtIC1yZiBub2RlX21vZHVsZXNcIixcclxuICAgIFwiY2hhbmdlbG9nXCI6IFwiY29udmVudGlvbmFsLWNoYW5nZWxvZyAtcCBhbmd1bGFyIC1pIENIQU5HRUxPRy5tZCAtc1wiLFxyXG4gICAgXCJwcmV2aWV3XCI6IFwidnVlcHJlc3Mtdml0ZSBwcmV2aWV3IHNyY1wiXHJcbiAgfSxcclxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIyLjEzLjFcIixcclxuICAgIFwiQHZ1ZXByZXNzL2J1bmRsZXItdml0ZVwiOiBcIjIuMC4wLXJjLjE5XCIsXHJcbiAgICBcIkB2dWVwcmVzcy9oZWxwZXJcIjogXCIyLjAuMC1yYy43NFwiLFxyXG4gICAgXCJAdnVlcHJlc3MvcGx1Z2luLWZlZWRcIjogXCIyLjAuMC1yYy43NFwiLFxyXG4gICAgXCJAdnVlcHJlc3MvcGx1Z2luLXByaXNtanNcIjogXCIyLjAuMC1yYy43NFwiLFxyXG4gICAgXCJAdnVlcHJlc3MvcGx1Z2luLXB3YVwiOiBcIjIuMC4wLXJjLjc0XCIsXHJcbiAgICBcIkB2dWVwcmVzcy9wbHVnaW4tcmVkaXJlY3RcIjogXCIyLjAuMC1yYy43NFwiLFxyXG4gICAgXCJAdnVlcHJlc3MvcGx1Z2luLXJlZ2lzdGVyLWNvbXBvbmVudHNcIjogXCIyLjAuMC1yYy42NlwiLFxyXG4gICAgXCJAdnVlcHJlc3MvcGx1Z2luLXJldmVhbGpzXCI6IFwiMi4wLjAtcmMuNzRcIixcclxuICAgIFwiQHZ1ZXByZXNzL3BsdWdpbi1zbGltc2VhcmNoXCI6IFwiMi4wLjAtcmMuNzRcIixcclxuICAgIFwiQHZ1ZXByZXNzL3BsdWdpbi13YXRlcm1hcmtcIjogXCIyLjAuMC1yYy43NFwiLFxyXG4gICAgXCJAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdFwiOiBcIjIuMC4wLXJjLjc0XCIsXHJcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcIl4xMi41LjBcIixcclxuICAgIFwiYXBsYXllclwiOiBcIl4xLjEwLjFcIixcclxuICAgIFwiYXJ0cGxheWVyXCI6IFwiXjUuMi4yXCIsXHJcbiAgICBcImF4aW9zXCI6IFwiXjEuNy45XCIsXHJcbiAgICBcImRhc2hqc1wiOiBcIl40LjcuNFwiLFxyXG4gICAgXCJkZXhpZVwiOiBcIl40LjAuMTFcIixcclxuICAgIFwiaGxzLmpzXCI6IFwiXjEuNS4yMFwiLFxyXG4gICAgXCJtcGVndHMuanNcIjogXCJeMS44LjBcIixcclxuICAgIFwidmlkc3RhY2tcIjogXCJeMS4xMi4xMlwiLFxyXG4gICAgXCJ2dWVcIjogXCJeMy41LjEzXCIsXHJcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC41LjBcIixcclxuICAgIFwidnVlcHJlc3NcIjogXCIyLjAuMC1yYy4xOVwiLFxyXG4gICAgXCJ2dWVwcmVzcy1wbHVnaW4tY29tcG9uZW50c1wiOiBcIjIuMC4wLXJjLjcxXCIsXHJcbiAgICBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjogXCIyLjAuMC1yYy43MVwiXHJcbiAgfSxcclxuICBcImRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcImVsZW1lbnQtcGx1c1wiOiBcIl4yLjkuNFwiLFxyXG4gICAgXCJsb2Rhc2gtZXNcIjogXCJeNC4xNy4yMVwiLFxyXG4gICAgXCJwaW5pYVwiOiBcIl4yLjMuMVwiLFxyXG4gICAgXCJzdG9yZVwiOiBcIl4yLjAuMTJcIixcclxuICAgIFwidW5vY3NzXCI6IFwiXjY1LjQuM1wiLFxyXG4gICAgXCJ1dWlkXCI6IFwiXjExLjAuNVwiXHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYWRtaW4vRG9jdW1lbnRzL3ZpcHR2L2RvY3MvdmlwdHYvc3JjLy52dWVwcmVzcy9jb25maWcvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYWRtaW5cXFxcRG9jdW1lbnRzXFxcXHZpcHR2XFxcXGRvY3NcXFxcdmlwdHZcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWdcXFxcc2lkZWJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYWRtaW4vRG9jdW1lbnRzL3ZpcHR2L2RvY3MvdmlwdHYvc3JjLy52dWVwcmVzcy9jb25maWcvc2lkZWJhci9lbi50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuU2lkZWJhciA9IHNpZGViYXIoe1xyXG4gIFwiL2VuL1wiOiBbXCJcIl0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2FkbWluL0RvY3VtZW50cy92aXB0di9kb2NzL3ZpcHR2L3NyYy8udnVlcHJlc3MvY29uZmlnL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGFkbWluXFxcXERvY3VtZW50c1xcXFx2aXB0dlxcXFxkb2NzXFxcXHZpcHR2XFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnXFxcXHNpZGViYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2FkbWluL0RvY3VtZW50cy92aXB0di9kb2NzL3ZpcHR2L3NyYy8udnVlcHJlc3MvY29uZmlnL3NpZGViYXIvemgudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuaW1wb3J0IGFyY2hpdmVzIGZyb20gXCIuL2FyY2hpdmVzLmpzXCI7XHJcbmV4cG9ydCBjb25zdCB6aFNpZGViYXIgPSBzaWRlYmFyKHtcclxuICBcIi9hYm91dC9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi92b2QvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXCIvaXB0di9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi9tdXNpYy9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi90dXRvcmlhbC9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi9wcml2YXRlL1wiOiBcInN0cnVjdHVyZVwiLFxyXG4gIFwiL2FyY2hpdmVzL1wiOiBhcmNoaXZlcyxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYWRtaW4vRG9jdW1lbnRzL3ZpcHR2L2RvY3MvdmlwdHYvc3JjLy52dWVwcmVzcy9jb25maWcvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYWRtaW5cXFxcRG9jdW1lbnRzXFxcXHZpcHR2XFxcXGRvY3NcXFxcdmlwdHZcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWdcXFxcc2lkZWJhclxcXFxhcmNoaXZlcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYWRtaW4vRG9jdW1lbnRzL3ZpcHR2L2RvY3MvdmlwdHYvc3JjLy52dWVwcmVzcy9jb25maWcvc2lkZWJhci9hcmNoaXZlcy50c1wiO2V4cG9ydCBkZWZhdWx0IFt7XCJ0ZXh0XCI6XCJcdTY3MDBcdThGRDFcdTY2RjRcdTY1QjAgMzFcIixcImxpbmtcIjpcIi9hcmNoaXZlcy9cIn0se1widGV4dFwiOlwiMjAyNVwiLFwiY29sbGFwc2libGVcIjp0cnVlLFwiaWNvblwiOlwibG9jay1vcGVuXCIsXCJjaGlsZHJlblwiOlt7XCJ0ZXh0XCI6XCIyMDI1LTAzXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDI1LzIwMjUtMDMubWRcIn0se1widGV4dFwiOlwiMjAyNS0wMlwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyNS8yMDI1LTAyLm1kXCJ9LHtcInRleHRcIjpcIjIwMjUtMDFcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjUvMjAyNS0wMS5tZFwifV19LHtcInRleHRcIjpcIjIwMjRcIixcImNvbGxhcHNpYmxlXCI6dHJ1ZSxcImljb25cIjpcImxvY2stb3BlblwiLFwiY2hpbGRyZW5cIjpbe1widGV4dFwiOlwiMjAyNC0xMlwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyNC8yMDI0LTEyLm1kXCJ9LHtcInRleHRcIjpcIjIwMjQtMTFcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjQvMjAyNC0xMS5tZFwifSx7XCJ0ZXh0XCI6XCIyMDI0LTEwXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDI0LzIwMjQtMTAubWRcIn0se1widGV4dFwiOlwiMjAyNC0wOVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyNC8yMDI0LTA5Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjQtMDhcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjQvMjAyNC0wOC5tZFwifSx7XCJ0ZXh0XCI6XCIyMDI0LTA3XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDI0LzIwMjQtMDcubWRcIn0se1widGV4dFwiOlwiMjAyNC0wNlwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyNC8yMDI0LTA2Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjQtMDVcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjQvMjAyNC0wNS5tZFwifSx7XCJ0ZXh0XCI6XCIyMDI0LTA0XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDI0LzIwMjQtMDQubWRcIn0se1widGV4dFwiOlwiMjAyNC0wM1wiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyNC8yMDI0LTAzLm1kXCJ9LHtcInRleHRcIjpcIjIwMjQtMDJcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjQvMjAyNC0wMi5tZFwifSx7XCJ0ZXh0XCI6XCIyMDI0LTAxXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDI0LzIwMjQtMDEubWRcIn1dfSx7XCJ0ZXh0XCI6XCIyMDIzXCIsXCJjb2xsYXBzaWJsZVwiOnRydWUsXCJpY29uXCI6XCJsb2NrLW9wZW5cIixcImNoaWxkcmVuXCI6W3tcInRleHRcIjpcIjIwMjMtMTJcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjMvMjAyMy0xMi5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIzLTExXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIzLzIwMjMtMTEubWRcIn0se1widGV4dFwiOlwiMjAyMy0xMFwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMy8yMDIzLTEwLm1kXCJ9LHtcInRleHRcIjpcIjIwMjMtMDlcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjMvMjAyMy0wOS5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIzLTA4XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIzLzIwMjMtMDgubWRcIn0se1widGV4dFwiOlwiMjAyMy0wN1wiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMy8yMDIzLTA3Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjMtMDZcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjMvMjAyMy0wNi5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIzLTA1XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIzLzIwMjMtMDUubWRcIn0se1widGV4dFwiOlwiMjAyMy0wNFwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMy8yMDIzLTA0Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjMtMDNcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjMvMjAyMy0wMy5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIzLTAyXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIzLzIwMjMtMDIubWRcIn0se1widGV4dFwiOlwiMjAyMy0wMVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMy8yMDIzLTAxLm1kXCJ9XX0se1widGV4dFwiOlwiMjAyMlwiLFwiY29sbGFwc2libGVcIjp0cnVlLFwiaWNvblwiOlwibG9jay1vcGVuXCIsXCJjaGlsZHJlblwiOlt7XCJ0ZXh0XCI6XCIyMDIyLTEyXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIyLzIwMjItMTIubWRcIn0se1widGV4dFwiOlwiMjAyMi0xMVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMi8yMDIyLTExLm1kXCJ9LHtcInRleHRcIjpcIjIwMjItMTBcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjIvMjAyMi0xMC5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIyLTA5XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIyLzIwMjItMDkubWRcIn0se1widGV4dFwiOlwiMjAyMi0wOFwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMi8yMDIyLTA4Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjItMDdcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjIvMjAyMi0wNy5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIyLTA2XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIyLzIwMjItMDYubWRcIn0se1widGV4dFwiOlwiMjAyMi0wNVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMi8yMDIyLTA1Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjItMDRcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjIvMjAyMi0wNC5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIyLTAzXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIyLzIwMjItMDMubWRcIn0se1widGV4dFwiOlwiMjAyMi0wMlwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMi8yMDIyLTAyLm1kXCJ9LHtcInRleHRcIjpcIjIwMjItMDFcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjIvMjAyMi0wMS5tZFwifV19LHtcInRleHRcIjpcIjIwMjFcIixcImNvbGxhcHNpYmxlXCI6dHJ1ZSxcImljb25cIjpcImxvY2stb3BlblwiLFwiY2hpbGRyZW5cIjpbe1widGV4dFwiOlwiMjAyMS0xMlwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMS8yMDIxLTEyLm1kXCJ9LHtcInRleHRcIjpcIjIwMjEtMTFcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjEvMjAyMS0xMS5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIxLTEwXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIxLzIwMjEtMTAubWRcIn0se1widGV4dFwiOlwiMjAyMS0wOVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMS8yMDIxLTA5Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjEtMDhcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjEvMjAyMS0wOC5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIxLTA3XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIxLzIwMjEtMDcubWRcIn0se1widGV4dFwiOlwiMjAyMS0wNlwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMS8yMDIxLTA2Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjEtMDVcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjEvMjAyMS0wNS5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIxLTA0XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIxLzIwMjEtMDQubWRcIn0se1widGV4dFwiOlwiMjAyMS0wM1wiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMS8yMDIxLTAzLm1kXCJ9LHtcInRleHRcIjpcIjIwMjEtMDJcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjEvMjAyMS0wMi5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIxLTAxXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIxLzIwMjEtMDEubWRcIn1dfSx7XCJ0ZXh0XCI6XCIyMDIwXCIsXCJjb2xsYXBzaWJsZVwiOnRydWUsXCJpY29uXCI6XCJsb2NrLW9wZW5cIixcImNoaWxkcmVuXCI6W3tcInRleHRcIjpcIjIwMjAtMTJcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjAvMjAyMC0xMi5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIwLTExXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIwLzIwMjAtMTEubWRcIn0se1widGV4dFwiOlwiMjAyMC0xMFwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMC8yMDIwLTEwLm1kXCJ9LHtcInRleHRcIjpcIjIwMjAtMDlcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjAvMjAyMC0wOS5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIwLTA4XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIwLzIwMjAtMDgubWRcIn0se1widGV4dFwiOlwiMjAyMC0wN1wiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMC8yMDIwLTA3Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjAtMDZcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjAvMjAyMC0wNi5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIwLTA1XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIwLzIwMjAtMDUubWRcIn0se1widGV4dFwiOlwiMjAyMC0wNFwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMC8yMDIwLTA0Lm1kXCJ9LHtcInRleHRcIjpcIjIwMjAtMDNcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMjAvMjAyMC0wMy5tZFwifSx7XCJ0ZXh0XCI6XCIyMDIwLTAyXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDIwLzIwMjAtMDIubWRcIn0se1widGV4dFwiOlwiMjAyMC0wMVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAyMC8yMDIwLTAxLm1kXCJ9XX0se1widGV4dFwiOlwiMjAxOVwiLFwiY29sbGFwc2libGVcIjp0cnVlLFwiaWNvblwiOlwibG9jay1vcGVuXCIsXCJjaGlsZHJlblwiOlt7XCJ0ZXh0XCI6XCIyMDE5LTEyXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDE5LzIwMTktMTIubWRcIn0se1widGV4dFwiOlwiMjAxOS0xMVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAxOS8yMDE5LTExLm1kXCJ9LHtcInRleHRcIjpcIjIwMTktMTBcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMTkvMjAxOS0xMC5tZFwifSx7XCJ0ZXh0XCI6XCIyMDE5LTA5XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDE5LzIwMTktMDkubWRcIn0se1widGV4dFwiOlwiMjAxOS0wOFwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAxOS8yMDE5LTA4Lm1kXCJ9LHtcInRleHRcIjpcIjIwMTktMDdcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMTkvMjAxOS0wNy5tZFwifSx7XCJ0ZXh0XCI6XCIyMDE5LTA2XCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDE5LzIwMTktMDYubWRcIn0se1widGV4dFwiOlwiMjAxOS0wNVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAxOS8yMDE5LTA1Lm1kXCJ9LHtcInRleHRcIjpcIjIwMTktMDRcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMTkvMjAxOS0wNC5tZFwifSx7XCJ0ZXh0XCI6XCIyMDE5LTAzXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDE5LzIwMTktMDMubWRcIn0se1widGV4dFwiOlwiMjAxOS0wMlwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAxOS8yMDE5LTAyLm1kXCJ9LHtcInRleHRcIjpcIjIwMTktMDFcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMTkvMjAxOS0wMS5tZFwifV19LHtcInRleHRcIjpcIjIwMThcIixcImNvbGxhcHNpYmxlXCI6dHJ1ZSxcImljb25cIjpcImxvY2stb3BlblwiLFwiY2hpbGRyZW5cIjpbe1widGV4dFwiOlwiMjAxOC0xMlwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAxOC8yMDE4LTEyLm1kXCJ9LHtcInRleHRcIjpcIjIwMTgtMTFcIixcImljb25cIjpcImltYWdlc1wiLFwibGlua1wiOlwiL2FyY2hpdmVzLzIwMTgvMjAxOC0xMS5tZFwifSx7XCJ0ZXh0XCI6XCIyMDE4LTEwXCIsXCJpY29uXCI6XCJpbWFnZXNcIixcImxpbmtcIjpcIi9hcmNoaXZlcy8yMDE4LzIwMTgtMTAubWRcIn0se1widGV4dFwiOlwiMjAxOC0wOVwiLFwiaWNvblwiOlwiaW1hZ2VzXCIsXCJsaW5rXCI6XCIvYXJjaGl2ZXMvMjAxOC8yMDE4LTA5Lm1kXCJ9XX1dIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVSxTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCO0FBQzVWLFNBQVMsWUFBWSxZQUFZO0FBQ2pDLFNBQVMsMEJBQTBCOzs7QUNGcVUsU0FBUyxjQUFjO0FBRXhYLElBQU0sV0FBVyxPQUFPLENBQUMsTUFBTSxDQUFDOzs7QUNGaVUsU0FBUyxVQUFBQSxlQUFjOzs7QUNFN1gsY0FBVzs7O0FEQ04sSUFBTSxXQUFXQyxRQUFPO0FBQUEsRUFDN0I7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTSxVQUFVO0FBQUEsUUFDaEIsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRTFDMFcsU0FBUyxlQUFlO0FBRTVYLElBQU0sWUFBWSxRQUFRO0FBQUEsRUFDL0IsUUFBUSxDQUFDLEVBQUU7QUFDYixDQUFDOzs7QUNKMFcsU0FBUyxXQUFBQyxnQkFBZTs7O0FDQVosSUFBTyxtQkFBUSxDQUFDLEVBQUMsUUFBTywrQkFBVSxRQUFPLGFBQVksR0FBRSxFQUFDLFFBQU8sUUFBTyxlQUFjLE1BQUssUUFBTyxhQUFZLFlBQVcsQ0FBQyxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsQ0FBQyxFQUFDLEdBQUUsRUFBQyxRQUFPLFFBQU8sZUFBYyxNQUFLLFFBQU8sYUFBWSxZQUFXLENBQUMsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLENBQUMsRUFBQyxHQUFFLEVBQUMsUUFBTyxRQUFPLGVBQWMsTUFBSyxRQUFPLGFBQVksWUFBVyxDQUFDLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixDQUFDLEVBQUMsR0FBRSxFQUFDLFFBQU8sUUFBTyxlQUFjLE1BQUssUUFBTyxhQUFZLFlBQVcsQ0FBQyxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsQ0FBQyxFQUFDLEdBQUUsRUFBQyxRQUFPLFFBQU8sZUFBYyxNQUFLLFFBQU8sYUFBWSxZQUFXLENBQUMsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLEdBQUUsRUFBQyxRQUFPLFdBQVUsUUFBTyxVQUFTLFFBQU8sNEJBQTJCLENBQUMsRUFBQyxHQUFFLEVBQUMsUUFBTyxRQUFPLGVBQWMsTUFBSyxRQUFPLGFBQVksWUFBVyxDQUFDLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixHQUFFLEVBQUMsUUFBTyxXQUFVLFFBQU8sVUFBUyxRQUFPLDRCQUEyQixDQUFDLEVBQUMsR0FBRSxFQUFDLFFBQU8sUUFBTyxlQUFjLE1BQUssUUFBTyxhQUFZLFlBQVcsQ0FBQyxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFBTyw0QkFBMkIsR0FBRSxFQUFDLFFBQU8sV0FBVSxRQUFPLFVBQVMsUUFB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UztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxFQUNBLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLFNBQVMsWUFBWTtBQUFBLElBQ25CLGFBQWE7QUFBQSxNQUNYLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLGNBQWM7QUFBQSxZQUNkLFNBQVMsQ0FBQ0csVUFBU0EsTUFBSyxRQUFRLFdBQVcsRUFBRTtBQUFBLFVBQy9DO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUVGLENBQUM7QUFBQSxFQUdELFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVQ7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE9BQU9BLE1BQUssUUFBUUYsWUFBVyxnQkFBZ0I7QUFBQSxJQUMvQyxRQUFRRSxNQUFLLFFBQVFGLFlBQVcsc0JBQXNCO0FBQUEsSUFDdEQsZ0RBQWdERSxNQUFLLFFBQVFGLFlBQVUsMkJBQTJCO0FBQUEsSUFDbEcsa0RBQWtERSxNQUFLLFFBQVFGLFlBQVUsMEJBQTBCO0FBQUEsSUFDbkcscUNBQXFDRSxNQUFLLFFBQVFGLFlBQVcsNkJBQTZCO0FBQUEsRUFDNUY7QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogWyJuYXZiYXIiLCAibmF2YmFyIiwgInNpZGViYXIiLCAic2lkZWJhciIsICJnZXREaXJuYW1lIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJfX2Rpcm5hbWUiLCAiZ2V0RGlybmFtZSIsICJwYXRoIl0KfQo=

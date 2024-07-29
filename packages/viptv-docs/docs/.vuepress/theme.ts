import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, enSidebar, zhSidebar } from "./config/index.js";
import { getRecentUpdatedArticles } from "vuepress-theme-hope/presets/getRecentUpdatedArticles.js";
import { getSlides } from "vuepress-theme-hope/presets/getSlides.js";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
const hostname =
  process.env["HOSTNAME"] ?? "https://viptv.work";

export default hopeTheme(
  {
    hostname,
    author: {
      name: "Mr.Hefung",
      url: "/about/",
    },
    iconAssets: "fontawesome-with-brands",
    favicon: "favicon.ico",
    breadcrumb: false, // 面包屑导航
    logo: "logo.svg",
    docsRepo: "viptv-work/viptv",
    docsDir: "src",
    docsBranch: "main",// 文档源文件的仓库分支
    pageInfo: ["Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],
    repoLabel: "GitHub", // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repo: "viptv-work/viptv",  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    repoDisplay: true,  //是否在导航栏显示仓库链接，默认为 `true`
    fullscreen: true,  //全屏按钮
    lastUpdated: true,
    contributors: true, //全局禁用是否显示页面贡献者
    navbarTitle: 'VIPTV',
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
      end: ["Language", "SocialLink", "Repo", "Outlook", "Search"],
    },

    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
        displayFooter: true,
        footer: "极速 、 高清 、 无广告", // 页脚
        copyright: "MIT 协议 | 版权所有 © 2020-至今 Mr.Hefung",
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
        GitHub: "https://github.com/viptv-work",
        Gitlab: "https://gitlab.com/viptv",
      },
    },
    // 加密配置
    encrypt: {
      config: {
        "/vod/lunli/": ["3.1415926", "8.8888888", "9.9999999"],
        "/iptv/sm/": ["3.1415926", "8.8888888", "9.9999999"],
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
        hotReload: true, // 启用热更新
        excerpt: true,//是否生成摘要。
        excerptLength: 200,
        type: [
          getRecentUpdatedArticles({
            locales: { "/en/": "Recent Updated", "/": "最近更新" },
          }),
          getSlides({
            locales: { "/en": "Slides", "/": "幻灯片" },
          }),
        ],
      },

      copyCode: {
        showInMobile: true // 手机端显示代码复制
      },

      copyright: true,

      notice: [
        {
          path: "/",
          title: "欢迎访问VIPTV",
          content: "<b>周知：</b>原 3 个 QQ 群成员活跃状态差异较大，且分布较分散，现停止新人加群，为了方便大家的交流，请移步 QQ 频道。</div>",
          actions: [
            {
              text: "打赏作者→",
              link: "/about/donate.html",
              type: "primary",
            },
            { text: "默认动作" },

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
      shiki: {
        lineNumbers: 15,
        notationDiff: true,
        themes: {
          light: "github-light",
          dark: "one-dark-pro",
        },
      },
      watermark: {
        enabled: true,
      },
      components: {
        components: ["PDF", "Share", "Badge", "VPCard", "ArtPlayer", "VPBanner", "SiteInfo", "VidStack"]
      },
      /*  comment: {
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
      mdEnhance: {
        align: true, // 启用自定义对齐
        hint: true, // 启用提示容器info,note,tip,warning,caution,details
        vPre: true, //是否启用 v-pre 容器。
        breaks: true, //是否将段落中的 \n 转换为 <br>
        linkify: true, //是否将文字中的链接格式文字转换为链接
        attrs: true, //属性支持
        alert: true, // 启用 GFM 警告
        gfm: true, //是否支持完整的 GFM 语法
        codetabs: true,
        spoiler: true, //是否启用剧透支持。
        component: true, //Markdown 中添加组件
        figure: true, // 图像添加描述
        imgLazyload: true, // 启用图片懒加载
        imgMark: true, // 启用图片标记
        imgSize: true, // 启用图片大小
        mark: true, //是否启用标记格式支持。
        footnote: true, //是否启用脚注格式支持
        sub: true, //是否启用下角标格式支持
        sup: true, //是否启用上角标格式支持。
        tabs: true, // 添加选项卡支持
        tasklist: true, //是否启用任务列表格式支持
        include: {  //是否启用 Markdown 导入支持
          resolvePath: (file) => {
            if (file.startsWith("@src"))
              return file.replace("@src", path.resolve(__dirname, ".."));

            return file;
          },
        },
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
      sitemap: true,
      seo: true,
    },
  },
  {
    custom: true
  }
);

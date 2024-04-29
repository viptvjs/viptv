import { inject, shallowRef, unref, shallowReactive, nextTick, defineComponent, reactive, computed, h as h$2, provide, ref, watch, getCurrentInstance, watchEffect, onMounted, defineAsyncComponent, camelize, capitalize, onUnmounted, isRef, Transition, resolveComponent, toRef, TransitionGroup, readonly, customRef, useSSRContext, createSSRApp } from "vue";
import { useEventListener, useElementSize, useWindowSize as useWindowSize$1, useWindowScroll, useClipboard, useStorage, useToggle, useFullscreen, usePreferredDark, computedWithControl, useScrollLock, useThrottleFn, useMutationObserver, useSessionStorage, onClickOutside, useNow } from "@vueuse/core";
var TAGS_ALLOWED = ["link", "meta", "script", "style", "noscript", "template"];
var TAGS_UNIQUE = ["title", "base"];
var resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (TAGS_UNIQUE.includes(tag)) {
    return tag;
  }
  if (!TAGS_ALLOWED.includes(tag)) {
    return null;
  }
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([
    tag,
    Object.entries(attrs).map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? [key, ""] : null;
      }
      return [key, value];
    }).filter((item) => item != null).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
    content
  ]);
};
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (identifier && !identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
var ensureLeadingSlash = (str) => str[0] === "/" ? str : `/${str}`;
var ensureEndingSlash = (str) => str[str.length - 1] === "/" || str.endsWith(".html") ? str : `${str}/`;
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var markdownLinkRegexp = /.md((\?|#).*)?$/;
var isLinkExternal = (link, base = "/") => {
  if (isLinkHttp(link)) {
    return true;
  }
  if (link.startsWith("/") && !link.startsWith(base) && !markdownLinkRegexp.test(link)) {
    return true;
  }
  return false;
};
var isLinkWithProtocol = (link) => /^[a-z][a-z0-9+.-]*:/.test(link);
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var normalizeRoutePath = (path) => {
  const [pathname, ...queryAndHash] = path.split(/(\?|#)/);
  if (!pathname || pathname.endsWith("/"))
    return path;
  let routePath = pathname.replace(/(^|\/)README.md$/i, "$1index.html");
  if (routePath.endsWith(".md")) {
    routePath = routePath.substring(0, routePath.length - 3) + ".html";
  } else if (!routePath.endsWith(".html")) {
    routePath = routePath + ".html";
  }
  if (routePath.endsWith("/index.html")) {
    routePath = routePath.substring(0, routePath.length - 10);
  }
  return routePath + queryAndHash.join("");
};
var removeEndingSlash = (str) => str[str.length - 1] === "/" ? str.slice(0, -1) : str;
var removeLeadingSlash = (str) => str[0] === "/" ? str.slice(1) : str;
var resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a2, b2) => {
    const levelDelta = b2.split("/").length - a2.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a2.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
var isString = (val) => typeof val === "string";
const redirects$1 = JSON.parse("{}");
const routes$1 = Object.fromEntries([
  ["/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-C3Ig0wsd.js"
  ), meta: { "t": "主页", "i": "home" } }],
  ["/slide.html", { loader: () => import(
    /* webpackChunkName: "slide.html" */
    "./assets/slide.html-BgpXdUMA.js"
  ), meta: { "e": "<!-- markdownlint-disable MD024 MD051 -->\n", "r": { "minutes": 4.51, "words": 1353 }, "t": "幻灯片页", "i": "person-chalkboard", "y": "s" } }],
  ["/demo/disable.html", { loader: () => import(
    /* webpackChunkName: "disable.html" */
    "./assets/disable.html-CdQ9-0pf.js"
  ), meta: { "c": ["使用指南"], "g": ["禁用"], "e": "<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n", "r": { "minutes": 0.43, "words": 128 }, "t": "布局与功能禁用", "i": "gears", "O": 4, "y": "a" } }],
  ["/demo/encrypt.html", { loader: () => import(
    /* webpackChunkName: "encrypt.html" */
    "./assets/encrypt.html-eT6YEoEK.js"
  ), meta: { "c": ["使用指南"], "g": ["加密"], "e": "\n<p>实际的文章内容。</p>\n<p>段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。</p>\n<p>段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字。</p>\n", "r": { "minutes": 0.51, "words": 154 }, "t": "密码加密的文章", "i": "lock", "y": "a" } }],
  ["/demo/layout.html", { loader: () => import(
    /* webpackChunkName: "layout.html" */
    "./assets/layout.html-DzW4Shc0.js"
  ), meta: { "c": ["指南"], "g": ["布局"], "e": '<p>布局包括:</p>\n<ul>\n<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">导航栏</a></li>\n<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">侧边栏</a></li>\n<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">页脚</a></li>\n</ul>', "r": { "minutes": 0.53, "words": 159 }, "t": "布局", "i": "object-group", "O": 2, "y": "a" } }],
  ["/demo/markdown.html", { loader: () => import(
    /* webpackChunkName: "markdown.html" */
    "./assets/markdown.html-DStiJ0E1.js"
  ), meta: { "c": ["使用指南"], "g": ["Markdown"], "e": "<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n", "r": { "minutes": 3.08, "words": 924 }, "t": "Markdown 展示", "i": "fab fa-markdown", "O": 2, "y": "a" } }],
  ["/demo/page.html", { loader: () => import(
    /* webpackChunkName: "page.html" */
    "./assets/page.html-DOJlMNrR.js"
  ), meta: { "a": "Ms.Hope", "d": 15778368e5, "l": "2020年1月1日", "c": ["使用指南"], "g": ["页面配置", "使用指南"], "u": true, "v": "/assets/images/cover1.jpg", "e": "<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n", "r": { "minutes": 1.76, "words": 529 }, "t": "页面配置", "i": "file", "O": 3, "y": "a" } }],
  ["/demo/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-CtyFaLc_.js"
  ), meta: { "c": ["使用指南"], "r": { "minutes": 0.07, "words": 22 }, "t": "主要功能与配置演示", "i": "laptop-code", "y": "a" } }],
  ["/guide/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-cHDRhFVQ.js"
  ), meta: { "e": '<h2>功能亮点</h2>\n<h3>Bar</h3>\n<ul>\n<li><a href="/guide/bar/baz.html" target="_blank">baz</a></li>\n<li>...</li>\n</ul>\n<h3>Foo</h3>\n<ul>\n<li><a href="/guide/foo/ray.html" target="_blank">ray</a></li>\n<li>...</li>\n</ul>\n', "r": { "minutes": 0.06, "words": 17 }, "t": "指南", "i": "lightbulb", "y": "a" } }],
  ["/tv/ks.xjj.html", { loader: () => import(
    /* webpackChunkName: "ks.xjj.html" */
    "./assets/ks.xjj.html-DKXgSXXt.js"
  ), meta: { "d": 15778368e5, "l": "2020年1月1日", "c": ["影视点播"], "g": ["快手", "广场舞"], "e": '<div class="hint-container tip">\n<p class="hint-container-title">快手广场舞|福利小视频</p>\n<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>\n</div>\n', "r": { "minutes": 1.17, "words": 350 }, "t": "快手广场舞", "i": "fa-solid fa-user-graduate", "O": 4, "y": "a" } }],
  ["/tv/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-DmsqVCq2.js"
  ), meta: { "c": ["网络直播"], "r": { "minutes": 0.05, "words": 14 }, "t": "直播", "i": "tv", "y": "a" } }],
  ["/vod/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-BzFslmi8.js"
  ), meta: { "c": ["影视点播"], "r": { "minutes": 0.05, "words": 14 }, "t": "点播", "i": "video", "y": "a" } }],
  ["/guide/bar/baz.html", { loader: () => import(
    /* webpackChunkName: "baz.html" */
    "./assets/baz.html-BVEb5UcN.js"
  ), meta: { "e": "<p>功能详情...</p>\n", "r": { "minutes": 0.03, "words": 10 }, "t": "Baz", "i": "circle-info", "y": "a" } }],
  ["/guide/bar/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-DnAT8oep.js"
  ), meta: { "e": '<h2>介绍</h2>\n<p>我们支持 bar 功能，...</p>\n<h2>详情</h2>\n<ul>\n<li><a href="/guide/bar/baz.html" target="_blank">baz</a></li>\n<li>...</li>\n</ul>\n', "r": { "minutes": 0.07, "words": 21 }, "t": "Bar 功能", "i": "lightbulb", "y": "a" } }],
  ["/guide/foo/ray.html", { loader: () => import(
    /* webpackChunkName: "ray.html" */
    "./assets/ray.html-DDI9WPqv.js"
  ), meta: { "e": "<p>功能详情...</p>\n", "r": { "minutes": 0.03, "words": 10 }, "t": "Ray", "i": "circle-info", "y": "a" } }],
  ["/guide/foo/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-D3rtYlrp.js"
  ), meta: { "e": '<h2>介绍</h2>\n<p>我们支持 foo 功能，...</p>\n<h2>详情</h2>\n<ul>\n<li><a href="/guide/foo/ray.html" target="_blank">ray</a></li>\n<li>...</li>\n</ul>\n', "r": { "minutes": 0.07, "words": 21 }, "t": "Foo 功能", "i": "lightbulb", "y": "a" } }],
  ["/vod/lock/lock.movie.html", { loader: () => import(
    /* webpackChunkName: "lock.movie.html" */
    "./assets/lock.movie.html-Crp-kj8M.js"
  ), meta: { "d": 15778368e5, "l": "2020年1月1日", "c": ["影视点播"], "g": ["林正英"], "n": true, "r": { "minutes": 1.84, "words": 553 }, "t": "林正英专辑", "i": "house-lock", "O": 4, "y": "a" } }],
  ["/vod/lock/lock.vod.html", { loader: () => import(
    /* webpackChunkName: "lock.vod.html" */
    "./assets/lock.vod.html-D0iJXayS.js"
  ), meta: { "d": 15778368e5, "l": "2020年1月1日", "c": ["影视点播"], "g": ["短剧"], "n": true, "r": { "minutes": 1.45, "words": 435 }, "t": "热播短剧TOP", "i": "shop-lock", "O": 4, "y": "a" } }],
  ["/vod/lock/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-CJBpkJ1o.js"
  ), meta: { "c": ["加密"], "n": true, "r": { "minutes": 0.05, "words": 15 }, "t": "加密内容", "i": "user-lock", "y": "a" } }],
  ["/vod/open/ks.dance.html", { loader: () => import(
    /* webpackChunkName: "ks.dance.html" */
    "./assets/ks.dance.html-_Inm1VNe.js"
  ), meta: { "d": 15778368e5, "l": "2020年1月1日", "c": ["影视点播"], "g": ["小姐姐"], "e": '<div class="hint-container tip">\n<p class="hint-container-title">跳舞小姐姐|福利小视频</p>\n<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>\n</div>\n', "r": { "minutes": 1, "words": 301 }, "t": "跳舞小姐姐", "i": "fa-solid fa-user-graduate", "O": 4, "y": "a" } }],
  ["/vod/open/ks.gcw.html", { loader: () => import(
    /* webpackChunkName: "ks.gcw.html" */
    "./assets/ks.gcw.html-zAL7Hqr6.js"
  ), meta: { "d": 15778368e5, "l": "2020年1月1日", "c": ["影视点播"], "g": ["快手", "广场舞"], "e": '<div class="hint-container tip">\n<p class="hint-container-title">快手广场舞|福利小视频</p>\n<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>\n</div>\n', "r": { "minutes": 1.01, "words": 304 }, "t": "快手广场舞", "i": "fa-solid fa-user-graduate", "O": 4, "y": "a" } }],
  ["/vod/open/ks.meitui.html", { loader: () => import(
    /* webpackChunkName: "ks.meitui.html" */
    "./assets/ks.meitui.html-VNGHP2u_.js"
  ), meta: { "d": 15778368e5, "l": "2020年1月1日", "c": ["影视点播"], "g": ["小姐姐"], "e": '<div class="hint-container tip">\n<p class="hint-container-title">美腿小姐姐|福利小视频</p>\n<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>\n</div>\n', "r": { "minutes": 1.01, "words": 302 }, "t": "美腿小姐姐", "i": "fa-solid fa-user-graduate", "O": 4, "y": "a" } }],
  ["/vod/open/ks.xjj.html", { loader: () => import(
    /* webpackChunkName: "ks.xjj.html" */
    "./assets/ks.xjj.html-BDkfKxEt.js"
  ), meta: { "d": 15778368e5, "l": "2020年1月1日", "c": ["影视点播"], "g": ["小姐姐"], "e": '<div class="hint-container tip">\n<p class="hint-container-title">快手小姐姐|福利小视频</p>\n<p>赚钱累了，工作烦了，可以来看看美女视频，不仅养眼，还可以让人心情愉悦；据不知道哪里的砖家说过，每天看美女可以长寿，站长也不知真假，秉着宁可信其有不可信其无的原则，每天都来看一看，长不长寿不知道，但是养眼养心是确实的！</p>\n</div>\n', "r": { "minutes": 1.01, "words": 302 }, "t": "快手小姐姐", "i": "fa-solid fa-user-graduate", "O": 4, "y": "a" } }],
  ["/vod/open/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-DPALC1qc.js"
  ), meta: { "c": ["公开"], "r": { "minutes": 0.05, "words": 14 }, "t": "公开", "i": "book-open-reader", "y": "a" } }],
  ["/404.html", { loader: () => import(
    /* webpackChunkName: "404.html" */
    "./assets/404.html-Dl6_ejlK.js"
  ), meta: { "t": "" } }],
  ["/category/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-BMM1YoRQ.js"
  ), meta: { "t": "分类", "I": false } }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-f8NtKwte.js"
  ), meta: { "t": "使用指南 分类", "I": false } }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-BQfVGyV9.js"
  ), meta: { "t": "指南 分类", "I": false } }],
  ["/category/%E5%BD%B1%E8%A7%86%E7%82%B9%E6%92%AD/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-B4A8OZ75.js"
  ), meta: { "t": "影视点播 分类", "I": false } }],
  ["/category/%E7%BD%91%E7%BB%9C%E7%9B%B4%E6%92%AD/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-By3CLwhz.js"
  ), meta: { "t": "网络直播 分类", "I": false } }],
  ["/category/%E5%8A%A0%E5%AF%86/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-DzUz0iRc.js"
  ), meta: { "t": "加密 分类", "I": false } }],
  ["/category/%E5%85%AC%E5%BC%80/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-3GkgHC2R.js"
  ), meta: { "t": "公开 分类", "I": false } }],
  ["/tag/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-HHbJJVk3.js"
  ), meta: { "t": "标签", "I": false } }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-9WipMJO7.js"
  ), meta: { "t": "标签: 禁用", "I": false } }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-C_aL42ht.js"
  ), meta: { "t": "标签: 加密", "I": false } }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-Cty-RS39.js"
  ), meta: { "t": "标签: 布局", "I": false } }],
  ["/tag/markdown/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-rj4IV4K_.js"
  ), meta: { "t": "标签: Markdown", "I": false } }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-Bbvs771S.js"
  ), meta: { "t": "标签: 页面配置", "I": false } }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-KWtW52sv.js"
  ), meta: { "t": "标签: 使用指南", "I": false } }],
  ["/tag/%E5%BF%AB%E6%89%8B/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-BbVy5BgI.js"
  ), meta: { "t": "标签: 快手", "I": false } }],
  ["/tag/%E5%B9%BF%E5%9C%BA%E8%88%9E/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-DhqvuDEl.js"
  ), meta: { "t": "标签: 广场舞", "I": false } }],
  ["/tag/%E6%9E%97%E6%AD%A3%E8%8B%B1/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-CoLN0gAJ.js"
  ), meta: { "t": "标签: 林正英", "I": false } }],
  ["/tag/%E7%9F%AD%E5%89%A7/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-BB6AXpvK.js"
  ), meta: { "t": "标签: 短剧", "I": false } }],
  ["/tag/%E5%B0%8F%E5%A7%90%E5%A7%90/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-BrFnadGi.js"
  ), meta: { "t": "标签: 小姐姐", "I": false } }],
  ["/article/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-C3G9z0xG.js"
  ), meta: { "t": "文章", "I": false } }],
  ["/star/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-BbBXAfkN.js"
  ), meta: { "t": "星标", "I": false } }],
  ["/timeline/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-IGSpU-dK.js"
  ), meta: { "t": "时间轴", "I": false } }]
]);
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a2;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof globalThis !== "undefined" && ((_a2 = globalThis.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
    supported = true;
    perf = globalThis.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e2) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e2) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy) {
      setupFn(proxy.proxiedTarget);
    }
  }
}
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof document !== "undefined";
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const isArray$1 = Array.isArray;
function warn(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err2) {
    process.env.NODE_ENV !== "production" && warn(`Error decoding "${text}". Using original value`);
  }
  return "" + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash: decode(hash)
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function isSameRouteLocation(stringifyQuery2, a2, b2) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b2.params) && stringifyQuery2(a2.query) === stringifyQuery2(b2.query) && a2.hash === b2.hash;
}
function isSameRouteRecord(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue(a2[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a2, b2) {
  return isArray$1(a2) ? isEquivalentArray(a2, b2) : isArray$1(b2) ? isEquivalentArray(b2, a2) : a2 === b2;
}
function isEquivalentArray(a2, b2) {
  return isArray$1(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (process.env.NODE_ENV !== "production" && !from.startsWith("/")) {
    warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
    return to;
  }
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
const START = "";
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof position.el === "string") {
      if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
        try {
          const foundEl = document.querySelector(position.el);
          if (isIdSelector && foundEl) {
            warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
            return;
          }
        } catch (err2) {
          warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      }
    }
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      process.env.NODE_ENV !== "production" && warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
function createMemoryHistory(base = "") {
  let listeners = [];
  let queue2 = [START];
  let position = 0;
  base = normalizeBase(base);
  function setLocation(location2) {
    position++;
    if (position !== queue2.length) {
      queue2.splice(position);
    }
    queue2.push(location2);
  }
  function triggerListeners(to, from, { direction, delta }) {
    const info = {
      direction,
      delta,
      type: NavigationType.pop
    };
    for (const callback of listeners) {
      callback(to, from, info);
    }
  }
  const routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base,
    createHref: createHref.bind(null, base),
    replace(to) {
      queue2.splice(position--, 1);
      setLocation(to);
    },
    push(to, data) {
      setLocation(to);
    },
    listen(callback) {
      listeners.push(callback);
      return () => {
        const index = listeners.indexOf(callback);
        if (index > -1)
          listeners.splice(index, 1);
      };
    },
    destroy() {
      listeners = [];
      queue2 = [START];
      position = 0;
    },
    go(delta, shouldTrigger = true) {
      const from = this.location;
      const direction = (
        // we are considering delta === 0 going forward, but in abstract mode
        // using 0 for the delta doesn't make sense like it does in html5 where
        // it reloads the page
        delta < 0 ? NavigationDirection.back : NavigationDirection.forward
      );
      position = Math.max(0, Math.min(position + delta, queue2.length - 1));
      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction,
          delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => queue2[position]
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
const ErrorTypeMessages = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
function createRouterError(type, params) {
  if (process.env.NODE_ENV !== "production" || false) {
    return assign(new Error(ErrorTypeMessages[type](params)), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  } else {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if (to.path != null)
    return to.path;
  const location2 = {};
  for (const key of propertiesToLog) {
    if (key in to)
      location2[key] = to[key];
  }
  return JSON.stringify(location2, null, 2);
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys2 = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys2.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err2) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err2.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys2[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray$1(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray$1(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys: keys2,
    parse,
    stringify
  };
}
function compareScoreArray(a2, b2) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b2.length) {
    const diff = b2[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b2.length) {
    return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
  } else if (a2.length > b2.length) {
    return b2.length === 1 && b2[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a2, b2) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${path}" should be "/${path}".` : `Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  if (process.env.NODE_ENV !== "production") {
    const existingKeys = /* @__PURE__ */ new Set();
    for (const key of parser.keys) {
      if (existingKeys.has(key.name))
        warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
      existingKeys.add(key.name);
    }
  }
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    if (process.env.NODE_ENV !== "production") {
      checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
    }
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          // we might be the child of an alias
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (process.env.NODE_ENV !== "production" && normalizedRecord.path === "*") {
        throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (process.env.NODE_ENV !== "production" && parent && path[0] === "/")
        checkMissingParamsInAbsolutePath(matcher, parent);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        if (process.env.NODE_ENV !== "production") {
          checkSameParams(originalRecord, matcher);
        }
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
        insertMatcher(matcher);
      }
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (matcher.record.path !== matchers[i2].record.path || !isRecordChildOf(matcher, matchers[i2])))
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      if (process.env.NODE_ENV !== "production") {
        const invalidParams = Object.keys(location2.params || {}).filter((paramName) => !matcher.keys.find((k2) => k2.name === paramName));
        if (invalidParams.length) {
          warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
      }
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          matcher.keys.filter((k2) => !k2.optional).concat(matcher.parent ? matcher.parent.keys.filter((k2) => k2.optional) : []).map((k2) => k2.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k2) => k2.name))
      );
      path = matcher.stringify(params);
    } else if (location2.path != null) {
      path = location2.path;
      if (process.env.NODE_ENV !== "production" && !path.startsWith("/")) {
        warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`);
      }
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys2) {
  const newParams = {};
  for (const key of keys2) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "object" ? props[name] : props;
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isSameParam(a2, b2) {
  return a2.name === b2.name && a2.optional === b2.optional && a2.repeatable === b2.repeatable;
}
function checkSameParams(a2, b2) {
  for (const key of a2.keys) {
    if (!key.optional && !b2.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a2.record.path}" must have the exact same param named "${key.name}"`);
  }
  for (const key of b2.keys) {
    if (!key.optional && !a2.keys.find(isSameParam.bind(null, key)))
      return warn(`Alias "${b2.record.path}" and the original record: "${a2.record.path}" must have the exact same param named "${key.name}"`);
  }
}
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
  if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) {
    warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key)))
      return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray$1(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray$1(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
const viewDepthKey = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const routerKey = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const routeLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
const routerViewLocationKey = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function useCallbacks() {
  let handlers = [];
  function add(handler) {
    handlers.push(handler);
    return () => {
      const i2 = handlers.indexOf(handler);
      if (i2 > -1)
        handlers.splice(i2, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add,
    list: () => handlers.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve();
      }
    };
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, process.env.NODE_ENV !== "production" ? canOnlyBeCalledOnce(next, to, from) : next));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    if (process.env.NODE_ENV !== "production" && guard.length > 2) {
      const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:
${guard.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof guardReturn === "object" && "then" in guardReturn) {
        guardCall = guardCall.then((resolvedValue) => {
          if (!next._called) {
            warn(message);
            return Promise.reject(new Error("Invalid navigation guard"));
          }
          return resolvedValue;
        });
      } else if (guardReturn !== void 0) {
        if (!next._called) {
          warn(message);
          reject(new Error("Invalid navigation guard"));
          return;
        }
      }
    }
    guardCall.catch((err2) => reject(err2));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function() {
    if (called++ === 1)
      warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    next._called = true;
    if (called === 1)
      next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
  const guards = [];
  for (const record of matched) {
    if (process.env.NODE_ENV !== "production" && !record.components && !record.children.length) {
      warn(`Record with path "${record.path}" is either missing a "component(s)" or "children" property.`);
    }
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (process.env.NODE_ENV !== "production") {
        if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
          warn(`Component "${name}" in record with path "${record.path}" is not a valid component. Received "${String(rawComponent)}".`);
          throw new Error("Invalid route component");
        } else if ("then" in rawComponent) {
          warn(`Component "${name}" in record with path "${record.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const promise2 = rawComponent;
          rawComponent = () => promise2;
        } else if (rawComponent.__asyncLoader && // warn only once per component
        !rawComponent.__warnedDefineAsync) {
          rawComponent.__warnedDefineAsync = true;
          warn(`Component "${name}" in record with path "${record.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`);
        }
      }
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        let componentPromise = rawComponent();
        if (process.env.NODE_ENV !== "production" && !("catch" in componentPromise)) {
          warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
          componentPromise = Promise.resolve(componentPromise);
        }
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent$1(e2)) {
      return router[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop$1);
    }
    return Promise.resolve();
  }
  if ((process.env.NODE_ENV !== "production" || false) && isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h$2("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent$1(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    process.env.NODE_ENV !== "production" && warnDeprecatedUsage();
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h$2(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if ((process.env.NODE_ENV !== "production" || false) && isBrowser && component.ref) {
        const info = {
          depth: depth.value,
          name: matchedRoute.name,
          path: matchedRoute.path,
          meta: matchedRoute.meta
        };
        const internalInstances = isArray$1(component.ref) ? component.ref.map((r2) => r2.i) : [component.ref.i];
        internalInstances.forEach((instance) => {
          instance.__vrv_devtools = info;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
  if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
    const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${comp}>
    <component :is="Component" />
  </${comp}>
</router-view>`);
  }
}
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map((matched) => omit(matched, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
let routerId = 0;
function addDevtools(app, router, matcher) {
  if (router.__hasDevtools)
    return;
  router.__hasDevtools = true;
  const id = routerId++;
  setupDevtoolsPlugin({
    id: "org.vuejs.router" + (id ? "." + id : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: "Routing",
          key: "$route",
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, "Current Route")
        });
      }
    });
    api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: PINK_500
        });
      }
      if (isArray$1(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach((devtoolsData) => {
          let backgroundColor = ORANGE_400;
          let tooltip = "";
          if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = "This is exactly active";
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = "This link is active";
          }
          node.tags.push({
            label: devtoolsData.route.path,
            textColor: 0,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = "router:navigations:" + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id ? " " + id : ""} Navigations`,
      color: 4237508
    });
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "Error during Navigation",
          subtitle: to.fullPath,
          logType: "error",
          time: api.now(),
          data: { error },
          groupId: to.meta.__navigationId
        }
      });
    });
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay("beforeEach"),
        from: formatRouteLocation(from, "Current Location during this navigation"),
        to: formatRouteLocation(to, "Target location")
      };
      Object.defineProperty(to.meta, "__navigationId", {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: "Start of navigation",
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay("afterEach")
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : "",
            tooltip: "Navigation Failure",
            value: failure
          }
        };
        data.status = formatDisplay("❌");
      } else {
        data.status = formatDisplay("✅");
      }
      data.from = formatRouteLocation(from, "Current Location during this navigation");
      data.to = formatRouteLocation(to, "Target location");
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: "End of navigation",
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? "warning" : "default",
          groupId: to.meta.__navigationId
        }
      });
    });
    const routerInspectorId = "router-inspector:" + id;
    api.addInspector({
      id: routerInspectorId,
      label: "Routes" + (id ? " " + id : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function refreshRoutesView() {
      if (!activeRoutesPayload)
        return;
      const payload = activeRoutesPayload;
      let routes2 = matcher.getRoutes().filter((route) => !route.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !route.parent.record.components);
      routes2.forEach(resetMatchStateOnRouteRecord);
      if (payload.filter) {
        routes2 = routes2.filter((route) => (
          // save matches state based on the payload
          isRouteMatching(route, payload.filter.toLowerCase())
        ));
      }
      routes2.forEach((route) => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes2.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree((payload) => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes2 = matcher.getRoutes();
        const route = routes2.find((route2) => route2.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? "*" : "?";
  } else {
    return key.repeatable ? "+" : "";
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const { record } = route;
  const fields = [
    { editable: false, key: "path", value: record.path }
  ];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: "name",
      value: record.name
    });
  }
  fields.push({ editable: false, key: "regexp", value: route.re });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: "keys",
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map((key) => `${key.name}${modifierForKey(key)}`).join(" "),
          tooltip: "Param keys",
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: "redirect",
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: "aliases",
      value: route.alias.map((alias) => alias.record.path)
    });
  }
  if (Object.keys(route.record.meta).length) {
    fields.push({
      editable: false,
      key: "meta",
      value: route.record.meta
    });
  }
  fields.push({
    key: "score",
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map((score) => score.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: route.score
      }
    }
  });
  return fields;
}
const PINK_500 = 15485081;
const BLUE_600 = 2450411;
const LIME_500 = 8702998;
const CYAN_400 = 2282478;
const ORANGE_400 = 16486972;
const DARK = 6710886;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const { record } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: "alias",
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: "matches",
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: "exact",
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: "active",
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
      textColor: 16777215,
      backgroundColor: DARK
    });
  }
  let id = record.__vd_id;
  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }
  return {
    id,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some((match) => isSameRouteRecord(match, route.record));
  }
  route.children.forEach((childRoute) => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
  if (nonEndingRE.test(filter)) {
    route.children.forEach((child) => isRouteMatching(child, filter));
    if (route.record.path !== "/" || filter === "/") {
      route.__vd_match = route.re.test(filter);
      return true;
    }
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter)))
    return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter))
    return true;
  if (route.record.name && String(route.record.name).includes(filter))
    return true;
  return route.children.some((child) => isRouteMatching(child, filter));
}
function omit(obj, keys2) {
  const ret = {};
  for (const key in obj) {
    if (!keys2.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (process.env.NODE_ENV !== "production" && !routerHistory)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (process.env.NODE_ENV !== "production") {
      warn(`Cannot remove non-existent route "${String(name)}"`);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      if (process.env.NODE_ENV !== "production") {
        if (href2.startsWith("//"))
          warn(`Location "${rawLocation}" resolved to "${href2}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute2.matched.length) {
          warn(`No match found for location with path "${rawLocation}"`);
        }
      }
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if (rawLocation.path != null) {
      if (process.env.NODE_ENV !== "production" && "params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
      Object.keys(rawLocation.params).length) {
        warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
      }
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    if (process.env.NODE_ENV !== "production" && hash && !hash.startsWith("#")) {
      warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
    }
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    if (process.env.NODE_ENV !== "production") {
      if (href.startsWith("//")) {
        warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
      } else if (!matchedRoute.matched.length) {
        warn(`No match found for location with path "${rawLocation.path != null ? rawLocation.path : rawLocation}"`);
      }
    }
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      if (process.env.NODE_ENV !== "production" && newTargetLocation.path == null && !("name" in newTargetLocation)) {
        warn(`Invalid redirect found:
${JSON.stringify(newTargetLocation, null, 2)}
 when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
        throw new Error("Invalid redirect");
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          if (process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          isSameRouteLocation(stringifyQuery$1, resolve(failure2.to), toLocation) && // and we have done it a couple of times
          redirectedFrom && // @ts-expect-error: added only in dev
          (redirectedFrom._count = redirectedFrom._count ? (
            // @ts-expect-error
            redirectedFrom._count + 1
          ) : 1) > 30) {
            warn(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
            return Promise.reject(new Error("Infinite redirect in navigation guard"));
          }
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) {
        if (record.beforeEnter) {
          if (isArray$1(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err2) => isNavigationFailure(
      err2,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err2 : Promise.reject(err2));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router.listening)
        return;
      const toLocation = resolve(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            error.to,
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      if (process.env.NODE_ENV !== "production") {
        warn("uncaught error during route navigation:");
      }
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve2, reject) => {
      readyHandlers.add([resolve2, reject]);
    });
  }
  function markAsReady(err2) {
    if (!ready) {
      ready = !err2;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err2 ? reject(err2) : resolve2());
      readyHandlers.reset();
    }
    return err2;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err2) => triggerError(err2, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err2) => {
          if (process.env.NODE_ENV !== "production")
            warn("Unexpected error when starting the router:", err2);
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      if ((process.env.NODE_ENV !== "production" || false) && isBrowser) {
        addDevtools(app, router2, matcher);
      }
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise2, guard) => promise2.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
var clientDataSymbol = Symbol(
  ""
);
var useClientData = () => {
  const clientData = inject(clientDataSymbol);
  if (!clientData) {
    throw new Error("useClientData() is called without provider.");
  }
  return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageData = () => useClientData().pageData;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutes = () => useClientData().routes;
var useSiteData = () => useClientData().siteData;
var useSiteLocaleData = () => useClientData().siteLocaleData;
var redirects = shallowRef(redirects$1);
var routes = shallowRef(routes$1);
var resolveRoutePath = (path) => {
  const normalizedPath = normalizeRoutePath(path);
  if (routes.value[normalizedPath])
    return normalizedPath;
  const encodedPath = encodeURI(normalizedPath);
  if (routes.value[encodedPath])
    return encodedPath;
  return redirects.value[normalizedPath] || redirects.value[encodedPath] || normalizedPath;
};
var resolveRoute$1 = (path) => {
  const routePath = resolveRoutePath(path);
  const route = routes.value[routePath] ?? {
    ...routes.value["/404.html"],
    notFound: true
  };
  return {
    path: routePath,
    notFound: false,
    ...route
  };
};
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path)
        return pageComponent.value;
      const route = resolveRoute$1(props.path);
      return defineAsyncComponent(() => route.loader().then(({ comp }) => comp));
    });
    return () => h$2(ContentComponent.value);
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
var guardEvent = (event) => {
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
    return;
  if (event.defaultPrevented)
    return;
  if (event.button !== void 0 && event.button !== 0)
    return;
  if (event.currentTarget) {
    const target = event.currentTarget.getAttribute("target");
    if (target == null ? void 0 : target.match(/\b_blank\b/i))
      return;
  }
  event.preventDefault();
  return true;
};
var RouteLink = ({ active = false, activeClass = "route-link-active", to, ...attrs }, { slots }) => {
  var _a2;
  const router = useRouter();
  const resolvedPath = resolveRoutePath(to);
  const path = (
    // only anchor or query
    resolvedPath.startsWith("#") || resolvedPath.startsWith("?") ? resolvedPath : withBase(resolvedPath)
  );
  return h$2(
    "a",
    {
      ...attrs,
      class: ["route-link", { [activeClass]: active }],
      href: path,
      onClick: (event = {}) => {
        guardEvent(event) ? router.push(to).catch() : Promise.resolve();
      }
    },
    (_a2 = slots.default) == null ? void 0 : _a2.call(slots)
  );
};
RouteLink.displayName = "RouteLink";
RouteLink.props = {
  active: Boolean,
  activeClass: String,
  to: String
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
    const description = isString(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
    const head = [
      ...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
      ...siteLocaleDate.head,
      ["title", {}, pageHeadTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (pageData, layouts) => {
    const layoutName = isString(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
    if (!layouts[layoutName]) {
      throw new Error(`[vuepress] Cannot resolve layout: ${layoutName}`);
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (siteData2, routeLocale) => {
    var _a2;
    return {
      ...siteData2,
      ...siteData2.locales[routeLocale],
      head: [
        // when merging head, the locales head should be placed before root head
        // to get higher priority
        ...((_a2 = siteData2.locales[routeLocale]) == null ? void 0 : _a2.head) ?? [],
        ...siteData2.head ?? []
      ]
    };
  }
});
const clientConfig0 = {};
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};
const useRoutePaths = () => {
  const routes2 = useRoutes();
  return computed(() => Object.keys(routes2.value));
};
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new i32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return { b: b2, r: r2 };
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b;
var rev = new u16(32768);
for (var i$1 = 0; i$1 < 32768; ++i$1) {
  var x$3 = (i$1 & 43690) >> 1 | (i$1 & 21845) << 1;
  x$3 = (x$3 & 52428) >> 2 | (x$3 & 13107) << 2;
  x$3 = (x$3 & 61680) >> 4 | (x$3 & 3855) << 4;
  rev[i$1] = ((x$3 & 65280) >> 8 | (x$3 & 255) << 8) >> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$1 = 0; i$1 < 144; ++i$1)
  flt[i$1] = 8;
for (var i$1 = 144; i$1 < 256; ++i$1)
  flt[i$1] = 9;
for (var i$1 = 256; i$1 < 280; ++i$1)
  flt[i$1] = 7;
for (var i$1 = 280; i$1 < 288; ++i$1)
  flt[i$1] = 8;
var fdt = new u8(32);
for (var i$1 = 0; i$1 < 32; ++i$1)
  fdt[i$1] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  return new u8(v2.subarray(s2, e2));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt)
    throw e2;
  return e2;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l2);
        buf.set(dat.subarray(s2, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zls = function(d2, dict) {
  if ((d2[0] & 15) != 8 || d2[0] >> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if ((d2[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d2[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d2[1] >> 3 & 4) + 2;
};
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var te$2 = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return { s: r2, r: slc(d2, i2 - 1) };
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te$2)
    return te$2.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s2 = _a2.s, r2 = _a2.r;
    if (r2.length)
      err(8);
    return s2;
  }
}
const decodeData = (base64) => {
  const binary = Buffer.from(base64, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(binary, true)));
};
const hasGlobalComponent = (name, app) => {
  var _a2;
  const globalComponents = (_a2 = (app == null ? void 0 : app._instance) || getCurrentInstance()) == null ? void 0 : _a2.appContext.components;
  if (!globalComponents)
    return false;
  return name in globalComponents || camelize(name) in globalComponents || capitalize(camelize(name)) in globalComponents;
};
const isDef = (val) => typeof val !== "undefined";
const isNumber = (val) => typeof val === "number";
const isArray = Array.isArray;
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const endsWith = (str, suffix) => isString(str) && str.endsWith(suffix);
const entries = Object.entries;
const keys = Object.keys;
const getDate = (input) => {
  if (input) {
    if (typeof input === "number")
      return new Date(input);
    const date = Date.parse(input.toString());
    if (!Number.isNaN(date))
      return new Date(date);
  }
  return null;
};
const isLinkAbsolute = (test) => startsWith(test, "/");
const FAKE_HOST$1 = "http://.";
const resolveRoute = (path, current) => {
  if (isLinkAbsolute(path) || typeof current !== "string")
    return resolveRoute$1(path);
  const loc = current.slice(0, current.lastIndexOf("/"));
  return resolveRoute$1(new URL(`${loc}/${encodeURI(path)}`, FAKE_HOST$1).pathname);
};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function toValue(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const noop = () => {
};
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function tryOnUnmounted(fn, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onUnmounted(fn, target);
}
const defaultDocument = isClient ? window.document : void 0;
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (!el) {
      el = document2.createElement("script");
      el.type = type;
      el.async = async;
      el.src = toValue(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document2.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (el)
      document2.head.removeChild(el);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}
var m$3 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const s2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"fas fa-"}${o2.icon}`;
    return n2.push("fa-fw fa-sm"), n2.push(o2.icon.includes(" ") ? o2.icon : t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), keys(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$2("span", { key: o2.icon, class: s2.value, style: r2.value, ...{} }) : null;
} });
const t$1 = ({ type: a2 = "info", text: l2 = "", vertical: e2, color: o2 }, { slots: r2 }) => {
  var _a2;
  return h$2("span", { class: ["vp-badge", a2, { diy: o2 }], style: { verticalAlign: e2 ?? false, backgroundColor: o2 ?? false } }, ((_a2 = r2.default) == null ? void 0 : _a2.call(r2)) || l2);
};
t$1.displayName = "Badge";
const e = ({ title: i2, desc: d2 = "", logo: l2, background: t2, color: o2, link: s2 }) => {
  const c2 = [l2 ? h$2("img", { class: "vp-card-logo", src: withBase(l2), loading: "lazy", "no-view": "" }) : null, h$2("div", { class: "vp-card-content" }, [h$2("div", { class: "vp-card-title", innerHTML: i2 }), h$2("hr"), h$2("div", { class: "vp-card-desc", innerHTML: d2 })])], a2 = {};
  return t2 && (a2.background = t2), o2 && (a2.color = o2), s2 ? isLinkExternal(s2) ? h$2("a", { class: "vp-card", href: s2, target: "_blank", style: a2 }, c2) : h$2(RouteLink, { to: s2, class: "vp-card", style: a2 }, () => c2) : h$2("div", { class: "vp-card", style: a2 }, c2);
};
e.displayName = "VPCard";
const r$1 = ({ name: e2 = "", color: t2 = "currentColor" }, { slots: n2 }) => {
  var _a2;
  return h$2("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: t2, "aria-label": `${e2} icon` }, (_a2 = n2.default) == null ? void 0 : _a2.call(n2));
};
r$1.displayName = "IconBase";
const y = ({ size: e2 = 48, stroke: t2 = 4, wrapper: n2 = true, height: i2 = 2 * e2 }) => {
  const o2 = h$2("svg", { xmlns: "http://www.w3.org/2000/svg", width: e2, height: e2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h$2("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h$2("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": t2, "stroke-linecap": "round" }, [h$2("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h$2("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return n2 ? h$2("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${i2}px` }, o2) : o2;
};
y.displayName = "LoadingIcon";
const T$1 = (e2, { slots: t2 }) => {
  var _a2;
  return (_a2 = t2.default) == null ? void 0 : _a2.call(t2);
}, B$1 = (e2) => isLinkHttp(e2) ? e2 : `https://github.com/${e2}`, E$1 = (e2 = "") => !isLinkHttp(e2) || /github\.com/.test(e2) ? "GitHub" : /bitbucket\.org/.test(e2) ? "Bitbucket" : /gitlab\.com/.test(e2) ? "GitLab" : /gitee\.com/.test(e2) ? "Gitee" : null, m$2 = () => h$2(r$1, { name: "github" }, () => h$2("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
m$2.displayName = "GitHubIcon";
const d$1 = () => h$2(r$1, { name: "gitee" }, () => h$2("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
d$1.displayName = "GiteeIcon";
const h$1 = () => h$2(r$1, { name: "bitbucket" }, () => h$2("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
h$1.displayName = "BitbucketIcon";
const p = () => h$2(r$1, { name: "source" }, () => h$2("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
p.displayName = "SourceIcon";
const G$2 = ({ link: e2, type: t2 = E$1(e2 ?? "") }) => {
  if (!t2)
    return null;
  const n2 = t2.toLowerCase();
  return h$2(n2 === "bitbucket" ? h$1 : n2 === "github" ? m$2 : n2 === "gitlab" ? "GitLab" : n2 === "gitee" ? d$1 : p);
};
const M$1 = (e2, t2 = 0) => {
  let n2 = 3735928559 ^ t2, i2 = 1103547991 ^ t2;
  for (let o2 = 0, a2; o2 < e2.length; o2++)
    a2 = e2.charCodeAt(o2), n2 = Math.imul(n2 ^ a2, 2654435761), i2 = Math.imul(i2 ^ a2, 1597334677);
  return n2 = Math.imul(n2 ^ n2 >>> 16, 2246822507), n2 ^= Math.imul(i2 ^ i2 >>> 13, 3266489909), i2 = Math.imul(i2 ^ i2 >>> 16, 2246822507), i2 ^= Math.imul(n2 ^ n2 >>> 13, 3266489909), 4294967296 * (2097151 & i2) + (n2 >>> 0);
}, J$2 = (e2, t2) => M$1(e2) % t2;
let K$1 = class K {
  constructor() {
    this.messageElements = {};
    const t2 = "message-container", n2 = document.getElementById(t2);
    n2 ? this.containerElement = n2 : (this.containerElement = document.createElement("div"), this.containerElement.id = t2, document.body.appendChild(this.containerElement));
  }
  pop(t2, n2 = 2e3) {
    const i2 = document.createElement("div"), o2 = Date.now();
    return i2.className = "message move-in", i2.innerHTML = t2, this.containerElement.appendChild(i2), this.messageElements[o2] = i2, n2 > 0 && setTimeout(() => {
      this.close(o2);
    }, n2), o2;
  }
  close(t2) {
    if (t2) {
      const n2 = this.messageElements[t2];
      n2.classList.remove("move-in"), n2.classList.add("move-out"), n2.addEventListener("animationend", () => {
        n2.remove(), delete this.messageElements[t2];
      });
    } else
      keys(this.messageElements).forEach((n2) => this.close(Number(n2)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
};
const x$2 = /#.*$/u, z$3 = (e2) => {
  const t2 = x$2.exec(e2);
  return t2 ? t2[0] : "";
}, u$1 = (e2) => decodeURI(e2).replace(x$2, "").replace(/\/index\.html$/iu, "/").replace(/\.html$/iu, "").replace(/(README|index)?\.md$/iu, ""), Q$1 = (e2, t2) => {
  if (!isDef(t2))
    return false;
  const n2 = u$1(e2.path), i2 = u$1(t2), o2 = z$3(t2);
  return o2 ? o2 === e2.hash && (!i2 || n2 === i2) : n2 === i2;
};
var ee$1 = (e2) => Object.prototype.toString.call(e2) === "[object Object]", c = (e2) => typeof e2 == "string";
const L$2 = Array.isArray, A$4 = (e2) => ee$1(e2) && c(e2.name), te$1 = (e2, t2 = false) => e2 ? L$2(e2) ? e2.map((n2) => c(n2) ? { name: n2 } : A$4(n2) ? n2 : null).filter((n2) => n2 !== null) : c(e2) ? [{ name: e2 }] : A$4(e2) ? [e2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t2 ? "" : "| false"} | undefined\`, but got`, e2), []) : [], g = (e2, t2) => {
  if (e2) {
    if (L$2(e2) && e2.every(c))
      return e2;
    if (c(e2))
      return [e2];
    console.error(`Expect ${t2 || "value"} to be \`string[] | string | undefined\`, but got`, e2);
  }
  return [];
}, ne = (e2) => g(e2, "category"), ie = (e2) => g(e2, "tag");
const r = (i2) => isLinkHttp(i2) ? i2 : withBase(i2);
const h = (e2) => isString(e2) ? e2 : `${e2}px`, z$2 = (e2, u2 = 0) => {
  const o2 = shallowRef(), p2 = computed(() => h(unref(e2.width) || "100%")), a2 = ref("auto"), l2 = (r2) => {
    if (isString(r2)) {
      const [i2, s2] = r2.split(":"), m2 = Number(i2) / Number(s2);
      if (!Number.isNaN(m2))
        return m2;
    }
    return typeof r2 == "number" ? r2 : 16 / 9;
  }, d2 = (r2) => {
    const i2 = unref(e2.height), s2 = l2(unref(e2.ratio));
    return i2 ? h(i2) : `${Number(r2) / s2 + unref(u2)}px`;
  }, t2 = () => {
    o2.value && (a2.value = d2(o2.value.clientWidth));
  };
  return onMounted(() => {
    t2(), isRef(u2) && watch(u2, t2), useEventListener("orientationchange", t2), useEventListener("resize", t2);
  }), { el: o2, width: p2, height: a2, resize: t2 };
};
var define_ART_PLAYER_OPTIONS_default = { fullscreen: true, playbackRate: true, setting: true };
const S$2 = ["mp4", "mp3", "webm", "ogg"];
S$2.push("mpd", "dash"), S$2.push("m3u8", "hls"), S$2.push("ts", "flv");
const N$2 = (e2) => (e2 == null ? void 0 : e2.split(".").pop()) || "", M = async (e2, o2, r2, s2 = false, a2 = 0) => {
  {
    const y2 = (await import("dashjs")).default;
    if (y2.supportsMediaSource()) {
      const f2 = y2.MediaPlayer().create();
      f2.initialize(e2, o2, s2, a2), r2(() => f2.destroy());
    }
  }
}, b$1 = async (e2, o2, r2) => {
  {
    const s2 = (await import("mpegts.js/dist/mpegts.js")).default;
    if (s2.isSupported()) {
      const a2 = s2.createPlayer({ type: "flv", url: o2 });
      a2.attachMediaElement(e2), a2.load(), r2(() => a2.destroy());
    }
  }
}, J$1 = async (e2, o2, r2) => {
  if (e2.canPlayType("application/x-mpegURL") || e2.canPlayType("application/vnd.apple.mpegURL"))
    e2.src = o2;
  else {
    const s2 = (await import("hls.js/dist/hls.min.js")).default;
    if (s2.isSupported()) {
      const a2 = new s2();
      a2.attachMedia(e2), a2.on(s2.Events.MEDIA_ATTACHED, () => {
        a2.loadSource(o2);
      }), r2(() => a2.destroy());
    }
  }
}, k$1 = ["no-fullscreen", "no-hotkey", "no-playback-rate", "no-setting", "no-mutex", "no-plays-inline"], z$1 = ["airplay", "autoplay", "aspect-ratio", "auto-mini", "auto-size", "auto-orientation", "auto-playback", "fast-forward", "flip", "fullscreen-web", "lock", "loop", "is-live", "muted", "mini-progress-bar", "pip", "screenshot", "subtitle-offset"], H$1 = ["en", "pl", "cs", "es", "fa", "fr", "id", "ru", "tr"], R$1 = ["zh-cn", "zh-tw"], C$2 = (e2) => {
  const o2 = e2.toLowerCase(), [r2] = o2.split("-");
  return R$1.includes(o2) ? o2 : H$1.includes(r2) ? r2 : r2 === "zh" ? "zh-cn" : "en";
};
var O$2 = defineComponent({ name: "ArtPlayer", inheritAttrs: false, props: { src: { type: String, required: true }, type: { type: String, default: "" }, poster: { type: String, default: "" }, title: { type: String, default: "" }, width: { type: [String, Number], default: "100%" }, height: { type: [String, Number], default: void 0 }, ratio: { type: [String, Number], default: 16 / 9 }, config: { type: Object, default: null }, customPlayer: { type: Function, default: (e2) => e2 } }, setup(e2, { attrs: o2 }) {
  const r$12 = usePageLang(), { el: s2, width: a2, height: y$1, resize: f2 } = z$2(e2, 0), d2 = ref(false);
  let m2;
  const g2 = () => {
    var _a2, _b2, _c;
    const t2 = { theme: "#3eaf7c", ...define_ART_PLAYER_OPTIONS_default, container: s2.value, poster: e2.poster, url: r(e2.src), type: e2.type || N$2(e2.src), lang: C$2(r$12.value), ...e2.config, useSSR: false }, n2 = keys(o2);
    if (k$1.forEach((i2) => {
      n2.includes(i2) && (t2[camelize(i2.replace(/^no-/, ""))] = false);
    }), z$1.forEach((i2) => {
      n2.includes(i2) && (t2[camelize(i2)] = true);
    }), t2.type) {
      const i2 = t2.customType ?? (t2.customType = {});
      if (S$2.includes(t2.type.toLowerCase()))
        switch (t2.type.toLowerCase()) {
          case "m3u8":
          case "hls":
            i2[_a2 = t2.type] ?? (i2[_a2] = (p2, l2, u2) => J$1(p2, l2, (c2) => {
              u2.on("destroy", c2);
            }));
            break;
          case "flv":
          case "ts":
            i2[_b2 = t2.type] ?? (i2[_b2] = (p2, l2, u2) => b$1(p2, l2, (c2) => {
              u2.on("destroy", c2);
            }));
            break;
          case "mpd":
          case "dash":
            i2[_c = t2.type] ?? (i2[_c] = (p2, l2, u2) => M(p2, l2, (c2) => {
              u2.on("destroy", c2);
            }));
            break;
        }
      else
        console.warn(`[components]: ArtPlayer does not support current file type ${t2.type}!`);
    }
    return t2;
  };
  return onMounted(async () => {
    const { default: t2 } = await import("artplayer"), n2 = new t2(g2());
    m2 = await e2.customPlayer(n2) || n2, d2.value = true, f2();
  }), onUnmounted(() => {
    m2 == null ? void 0 : m2.destroy();
  }), () => [h$2("div", { ref: s2, class: "vp-artplayer", style: { width: a2.value, height: y$1.value } }), d2.value ? null : h$2(y)];
} });
const l = ({ title: c2, content: p2 = "", logo: o2 = "", background: t2 = "", color: e2 = "", actions: v2 = [] }) => {
  const a2 = {};
  return t2 && (a2.background = t2), e2 && (a2.color = e2), h$2("div", { class: "vp-banner", style: a2 }, [o2 ? h$2("img", { class: "vp-banner-logo", src: withBase(o2), loading: "lazy", "no-view": "" }) : null, h$2("div", { class: "vp-banner-body" }, [h$2("div", { class: "vp-banner-title", innerHTML: c2 }), h$2("p", { class: "vp-banner-content", innerHTML: p2 }), h$2("div", { class: "vp-banner-actions" }, [...v2.map(({ link: r2, text: i2, type: s2 = "primary" }) => isLinkExternal(r2) ? h$2("a", { class: ["vp-banner-action", s2], href: r2, target: "_blank" }, i2) : h$2(RouteLink, { class: ["vp-banner-action", s2], to: r2 }, () => i2))])])]);
};
l.displayName = "VPBanner";
var define_SITE_INFO_LOCALES_default = { "/": { source: "源代码" } };
var s$1 = defineComponent({ name: "SiteInfo", props: { name: { type: String, required: true }, desc: { type: String, default: "" }, logo: { type: String, default: "" }, url: { type: String, required: true }, preview: { type: String, required: true }, repo: { type: String, default: "" } }, setup(e2) {
  const t2 = useLocaleConfig(define_SITE_INFO_LOCALES_default);
  return () => h$2("div", { class: "vp-site-info", "data-name": e2.name }, [h$2("a", { class: "vp-site-info-navigator", title: e2.name, href: e2.url, target: "_blank" }), h$2("div", { class: "vp-site-info-preview", style: { background: `url(${withBase(e2.preview)}) center/cover no-repeat` } }), h$2("div", { class: "vp-site-info-detail" }, [e2.logo ? h$2("img", { class: "vp-site-info-logo", src: e2.logo, alt: "", loading: "lazy", "no-view": "" }) : null, h$2("div", { class: "vp-site-info-name" }, e2.name), h$2("div", { class: "vp-site-info-desc" }, e2.desc)]), e2.repo ? h$2("div", { class: "vp-site-info-source-wrapper" }, h$2("a", { class: "vp-site-info-source", href: e2.repo, "aria-label": t2.value.source, "data-balloon-pos": "left", title: t2.value.source, target: "_blank" }, h$2(G$2, { link: e2.repo }))) : null]);
} });
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!hasGlobalComponent("FontIcon"))
      app.component("FontIcon", m$3);
    if (!hasGlobalComponent("Badge"))
      app.component("Badge", t$1);
    if (!hasGlobalComponent("VPCard"))
      app.component("VPCard", e);
    if (!hasGlobalComponent("ArtPlayer"))
      app.component("ArtPlayer", O$2);
    if (!hasGlobalComponent("VPBanner"))
      app.component("VPBanner", l);
    if (!hasGlobalComponent("SiteInfo"))
      app.component("SiteInfo", s$1);
  },
  setup: () => {
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
    useScriptTag(
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
      () => {
      },
      { attrs: { "data-auto-replace-svg": "nest" } }
    );
  },
  rootComponents: []
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
let catalogGetter = (meta) => isString(meta.title) ? { title: meta.title } : null;
const catalogInfoSymbol = Symbol("");
const defineCatalogInfoGetter = (getter) => {
  catalogGetter = getter;
};
const useCatalogInfoGetter = () => inject(catalogInfoSymbol);
const injectCatalogInfoGetter = (app) => {
  app.provide(catalogInfoSymbol, catalogGetter);
};
var define_CATALOG_LOCALES_default = { "/": { title: "目录", empty: "暂无目录" } };
const Catalog = defineComponent({
  name: "Catalog",
  props: {
    /**
     * Catalog Base
     *
     * 目录的基础路径
     *
     * @default current route base
     */
    base: {
      type: String,
      default: ""
    },
    /**
     * Max level of catalog
     *
     * @description only 1,2,3 are supported
     *
     * Catalog 的最大层级
     *
     * @description 目前仅支持 1,2,3
     *
     * @default 3
     */
    level: {
      type: Number,
      default: 3
    },
    /**
     * Whether show index for catalog
     *
     * 目录是否显示索引
     */
    index: Boolean,
    /**
     * Whether hide `Category` title
     *
     * 是否隐藏 `目录` 标题
     *
     * @default false
     */
    hideHeading: Boolean
  },
  setup(props) {
    const catalogInfoGetter = useCatalogInfoGetter();
    const locale = useLocaleConfig(define_CATALOG_LOCALES_default);
    const page = usePageData();
    const routes2 = useRoutes();
    const siteData2 = useSiteData();
    const getCatalogData = () => entries(routes2.value).map(([path, { meta }]) => {
      const info = catalogInfoGetter(meta);
      if (!info)
        return null;
      const level = path.split("/").length;
      return {
        level: endsWith(path, "/") ? level - 2 : level - 1,
        base: path.replace(/\/[^/]+\/?$/, "/"),
        path,
        ...info
      };
    }).filter((item) => isPlainObject(item) && isString(item.title));
    const catalogInfo = shallowRef(getCatalogData());
    const catalogData = computed(() => {
      const base = props.base ? ensureLeadingSlash(ensureEndingSlash(props.base)) : page.value.path.replace(/\/[^/]+$/, "/");
      const baseDepth = base.split("/").length - 2;
      const result = [];
      catalogInfo.value.filter(({ level, path }) => {
        if (!startsWith(path, base) || path === base)
          return false;
        if (base === "/") {
          const otherLocales = keys(siteData2.value.locales).filter((item) => item !== "/");
          if (path === "/404.html" || otherLocales.some((localePath) => startsWith(path, localePath)))
            return false;
        }
        return (
          // level is less than or equal to max level
          level - baseDepth <= props.level
        );
      }).sort(({ title: titleA, level: levelA, order: orderA }, { title: titleB, level: levelB, order: orderB }) => {
        const level = levelA - levelB;
        if (level)
          return level;
        if (!isNumber(orderA)) {
          if (!isNumber(orderB))
            return titleA.localeCompare(titleB);
          return orderB;
        }
        if (!isNumber(orderB))
          return orderA;
        if (orderA > 0) {
          if (orderB > 0)
            return orderA - orderB;
          return -1;
        }
        if (orderB < 0)
          return orderA - orderB;
        return 1;
      }).forEach((info) => {
        var _a2;
        const { base: base2, level } = info;
        switch (level - baseDepth) {
          case 1: {
            result.push(info);
            break;
          }
          case 2: {
            const parent = result.find((item) => item.path === base2);
            if (parent)
              (parent.children ?? (parent.children = [])).push(info);
            break;
          }
          default: {
            const grandParent = result.find((item) => item.path === base2.replace(/\/[^/]+\/$/, "/"));
            if (grandParent) {
              const parent = (_a2 = grandParent.children) == null ? void 0 : _a2.find((item) => item.path === base2);
              if (parent)
                (parent.children ?? (parent.children = [])).push(info);
            }
          }
        }
      });
      return result;
    });
    return () => {
      const isDeep = catalogData.value.some((item) => item.children);
      return h$2("div", { class: ["vp-catalog-wrapper", { index: props.index }] }, [
        props.hideHeading ? null : h$2("h2", { class: "vp-catalog-main-title" }, locale.value.title),
        catalogData.value.length ? h$2(props.index ? "ol" : "ul", { class: ["vp-catalogs", { deep: isDeep }] }, catalogData.value.map(({ children = [], title, path, content }) => {
          const childLink = h$2(RouteLink, { class: "vp-catalog-title", to: path }, () => content ? h$2(content) : title);
          return h$2("li", { class: "vp-catalog" }, isDeep ? [
            h$2("h3", {
              id: title,
              class: [
                "vp-catalog-child-title",
                { "has-children": children.length }
              ]
            }, [
              h$2("a", {
                "href": `#${title}`,
                "class": "vp-catalog-header-anchor",
                "aria-hidden": true
              }, "#"),
              childLink
            ]),
            children.length ? h$2(props.index ? "ol" : "ul", { class: "vp-child-catalogs" }, children.map(({ children: children2 = [], content: content2, path: path2, title: title2 }) => h$2("li", { class: "vp-child-catalog" }, [
              h$2("div", {
                class: [
                  "vp-catalog-sub-title",
                  {
                    "has-children": children2.length
                  }
                ]
              }, [
                h$2("a", {
                  href: `#${title2}`,
                  class: "vp-catalog-header-anchor"
                }, "#"),
                h$2(RouteLink, {
                  class: "vp-catalog-title",
                  to: path2
                }, () => content2 ? h$2(content2) : title2)
              ]),
              children2.length ? h$2(props.index ? "ol" : "div", {
                class: props.index ? "vp-sub-catalogs" : "vp-sub-catalogs-wrapper"
              }, children2.map(({ content: content3, path: path3, title: title3 }) => props.index ? h$2("li", {
                class: "vp-sub-catalog"
              }, h$2(RouteLink, { to: path3 }, () => content3 ? h$2(content3) : title3)) : h$2(RouteLink, {
                class: "vp-sub-catalog-link",
                to: path3
              }, () => content3 ? h$2(content3) : title3))) : null
            ]))) : null
          ] : h$2("div", { class: "vp-catalog-child-title" }, childLink));
        })) : h$2("p", { class: "vp-empty-catalog" }, locale.value.empty)
      ]);
    };
  }
});
const clientConfig3 = defineClientConfig({
  enhance: ({ app }) => {
    injectCatalogInfoGetter(app);
    if (!hasGlobalComponent("Catalog", app))
      app.component("Catalog", Catalog);
  }
});
var define_BACK_TO_TOP_LOCALES_default = { "/": { backToTop: "返回顶部" } };
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const pageFrontmatter = usePageFrontmatter();
    const locale = useLocaleConfig(define_BACK_TO_TOP_LOCALES_default);
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = useWindowSize$1();
    const { y: y2 } = useWindowScroll();
    const show = computed(() => pageFrontmatter.value.backToTop !== false && y2.value > 100);
    const progress = computed(() => y2.value / (bodyHeight.value - windowHeight.value) * 100);
    onMounted(() => {
      body.value = document.body;
    });
    return () => h$2(Transition, { name: "back-to-top" }, () => show.value ? h$2("button", {
      "type": "button",
      "class": "vp-back-to-top-button",
      "aria-label": locale.value.backToTop,
      "onClick": () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [
      h$2("span", {
        "class": "vp-scroll-progress",
        "role": "progressbar",
        "aria-labelledby": "loadinglabel",
        "aria-valuenow": progress.value
      }, h$2("svg", h$2("circle", {
        "cx": "26",
        "cy": "26",
        "r": "24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": "4",
        "stroke-dasharray": `${Math.PI * progress.value * 0.48} ${Math.PI * (100 - progress.value) * 0.48}`
      }))),
      h$2("div", { class: "back-to-top-icon" })
    ]) : null);
  }
});
const clientConfig4 = defineClientConfig({
  rootComponents: [BackToTop]
});
const svg = h$2("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$2("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$2("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$2("span", [
      svg,
      h$2("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
var define_EXTERNAL_LINK_ICON_LOCALES_default = {};
const locales$2 = define_EXTERNAL_LINK_ICON_LOCALES_default;
const clientConfig5 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$2(ExternalLinkIcon, { locales: locales$2 }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress.isStarted();
    n2 = clamp(n2, nprogress.settings.minimum, 1);
    nprogress.status = n2 === 1 ? null : n2;
    const progress = nprogress.render(!started);
    const bar = progress.querySelector(nprogress.settings.barSelector);
    const speed = nprogress.settings.speed;
    const ease = nprogress.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.status === "number",
  start: () => {
    if (!nprogress.status)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.status)
          return;
        nprogress.trickle();
        work();
      }, nprogress.settings.trickleSpeed);
    };
    if (nprogress.settings.trickle)
      work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.status)
      return nprogress;
    return nprogress.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress.status;
    if (!n2) {
      return nprogress.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress.set(n2);
  },
  trickle: () => nprogress.inc(Math.random() * nprogress.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress.settings.template;
    const bar = progress.querySelector(nprogress.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress.status || 0);
    const parent = document.querySelector(nprogress.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = /* @__PURE__ */ function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = /* @__PURE__ */ function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] ?? (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const clientConfig6 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse('{"encrypt":{"config":{"/vod/lock/":["$2a$10$etPClhnSM2YsqYAGATPltO6WNF3YAMPAjT9ljKJbIcm.GCllP/AE6"],"/tv/lock/":["$2a$10$eEPSpq9SHyjg5mjAIK8AmeHx5sIbJcLVNKuJ5.893ky1gwKTya036"]}},"author":{"name":"Mr.Hefung","url":"https://viptv.work"},"logo":"https://img.viptv.work/viptv/VIP-TV-LOGO-FINAL-360x360.png","repo":"viptv-work","docsDir":"src","footer":"viptv.work","copyright":"MIT Licensed | Copyright © 2024-present Mr.Hefung","displayFooter":true,"editLink":false,"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/","/vod/","/tv/",{"text":"小说","icon":"book","link":"https://theme-hope.vuejs.press/zh/"}],"sidebar":{"/":[""],"/vod/":[{"text":"案例分享","icon":"lock-open","prefix":"open/","children":"structure","collapsible":true},{"text":"案例分享","icon":"lock","prefix":"lock/","collapsible":true,"children":"structure"}],"/tv/":[{"text":"案例分享","icon":"fa-solid fa-house-lock","children":"structure"}]}}}}');
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
};
const clientConfig7 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const clientData = app._context.provides[clientDataSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, clientData.routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const MOBILE_USERAGENT_REGEXP = /\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i;
const isMobile = () => typeof window !== "undefined" && window.navigator && "userAgent" in window.navigator && MOBILE_USERAGENT_REGEXP.test(navigator.userAgent);
const useCopyCode = ({ delay: delay2 = 500, duration: duration2 = 2e3, locales: locales2, selector: selector2, showInMobile: showInMobile2 }) => {
  const { copy, copied } = useClipboard({
    legacy: true,
    copiedDuring: duration2
  });
  const locale = useLocaleConfig(locales2);
  const page = usePageData();
  const insertCopyButton = (codeBlockElement) => {
    if (!codeBlockElement.hasAttribute("copy-code-registered")) {
      const copyElement = document.createElement("button");
      copyElement.type = "button";
      copyElement.classList.add("vp-copy-code-button");
      copyElement.innerHTML = '<div class="vp-copy-icon" />';
      copyElement.setAttribute("aria-label", locale.value.copy);
      copyElement.setAttribute("data-copied", locale.value.copied);
      if (codeBlockElement.parentElement)
        codeBlockElement.parentElement.insertBefore(copyElement, codeBlockElement);
      codeBlockElement.setAttribute("copy-code-registered", "");
    }
  };
  const appendCopyButton = () => {
    nextTick().then(() => wait(delay2)).then(() => {
      selector2.forEach((item) => {
        document.querySelectorAll(item).forEach(insertCopyButton);
      });
    });
  };
  const copyContent = (codeContainer, codeContent, button) => {
    let { innerText: text = "" } = codeContent;
    if (
      // is shell
      /language-(shellscript|shell|bash|sh|zsh)/.test(codeContainer.classList.toString())
    )
      text = text.replace(/^ *(\$|>) /gm, "");
    copy(text).then(() => {
      button.classList.add("copied");
      watch(copied, () => {
        button.classList.remove("copied");
        button.blur();
      }, { once: true });
    });
  };
  onMounted(() => {
    const enabled = !isMobile() || showInMobile2;
    if (enabled)
      appendCopyButton();
    useEventListener("click", (event) => {
      const el = event.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const codeContainer = el.parentElement;
        const preBlock = el.nextElementSibling;
        if (preBlock)
          copyContent(codeContainer, preBlock, el);
      } else if (el.matches('div[class*="language-"] div.vp-copy-icon')) {
        const buttonElement = el.parentElement;
        const codeContainer = buttonElement.parentElement;
        const preBlock = buttonElement.nextElementSibling;
        if (preBlock)
          copyContent(codeContainer, preBlock, buttonElement);
      }
    });
    watch(() => page.value.path, () => {
      if (enabled)
        appendCopyButton();
    });
  });
};
var define_CC_LOCALES_default = { "/": { copy: "复制代码", copied: "已复制" } };
var define_CC_SELECTOR_default = ['.theme-hope-content div[class*="language-"] pre'];
const delay$1 = 500;
const duration = 2e3;
const locales$1 = define_CC_LOCALES_default;
const selector$1 = define_CC_SELECTOR_default;
const showInMobile = false;
const clientConfig8 = defineClientConfig({
  setup: () => {
    useCopyCode({
      selector: selector$1,
      locales: locales$1,
      duration,
      delay: delay$1,
      showInMobile
    });
  }
});
const i = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var A$3 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a2, { slots: r2 }) {
  const l2 = ref(a2.active), u2 = shallowRef([]), n2 = () => {
    a2.tabId && (i.value[a2.tabId] = a2.data[l2.value].id);
  }, s2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, b2 = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), s2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), a2.tabId && (i.value[a2.tabId] = a2.data[l2.value].id);
  }, p2 = () => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ id: t2 }) => i.value[a2.tabId] === t2);
      if (e2 !== -1)
        return e2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => i.value[a2.tabId], (e2, t2) => {
      if (a2.tabId && e2 !== t2) {
        const d2 = a2.data.findIndex(({ id: v2 }) => v2 === e2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => a2.data.length ? h$2("div", { class: "vp-code-tabs" }, [h$2("div", { class: "vp-code-tabs-nav", role: "tablist" }, a2.data.map(({ id: e2 }, t2) => {
    const d2 = t2 === l2.value;
    return h$2("button", { type: "button", ref: (v2) => {
      v2 && (u2.value[t2] = v2);
    }, class: ["vp-code-tab-nav", { active: d2 }], role: "tab", "aria-controls": `codetab-${a2.id}-${t2}`, "aria-selected": d2, onClick: () => {
      l2.value = t2, n2();
    }, onKeydown: (v2) => b2(v2, t2) }, r2[`title${t2}`]({ value: e2, isActive: d2 }));
  })), a2.data.map(({ id: e2 }, t2) => {
    const d2 = t2 === l2.value;
    return h$2("div", { class: ["vp-code-tab", { active: d2 }], id: `codetab-${a2.id}-${t2}`, role: "tabpanel", "aria-expanded": d2 }, [h$2("div", { class: "vp-code-tab-title" }, r2[`title${t2}`]({ value: e2, isActive: d2 })), r2[`tab${t2}`]({ value: e2, isActive: d2 })]);
  })]) : null;
} });
const q$1 = () => h$2(r$1, { name: "back" }, () => h$2("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), a$1 = () => h$2(r$1, { name: "home" }, () => h$2("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" })), o$2 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$1 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';
var define_CODE_DEMO_OPTIONS_default = { useBabel: false, jsLib: [], cssLib: [], codepenLayout: "left", codepenEditors: "101", babel: "https://unpkg.com/@babel/standalone/babel.min.js", vue: "https://unpkg.com/vue/dist/vue.global.prod.js", react: "https://unpkg.com/react/umd/react.production.min.js", reactDOM: "https://unpkg.com/react-dom/umd/react-dom.production.min.js" };
const L$1 = define_CODE_DEMO_OPTIONS_default, $ = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, H = (e2, s2, t2) => {
  const l2 = document.createElement(e2);
  return isPlainObject(s2) && keys(s2).forEach((n2) => {
    if (n2.indexOf("data"))
      l2[n2] = s2[n2];
    else {
      const r2 = n2.replace("data", "");
      l2.dataset[r2] = s2[n2];
    }
  }), t2 && t2.forEach((n2) => {
    l2.appendChild(n2);
  }), l2;
}, S$1 = (e2) => ({ ...L$1, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L$1.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L$1.cssLib || [], ...e2.cssLib || []])) }), u = (e2, s2) => {
  if (isDef(e2[s2]))
    return e2[s2];
  const t2 = new Promise((l2) => {
    var _a2;
    const n2 = document.createElement("script");
    n2.src = s2, (_a2 = document.querySelector("body")) == null ? void 0 : _a2.appendChild(n2), n2.onload = () => {
      l2();
    };
  });
  return e2[s2] = t2, t2;
}, I$1 = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = H("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, J = (e2, s2, t2) => {
  const l2 = t2.getScript();
  if (l2 && Array.from(s2.childNodes).every((n2) => n2.nodeName !== "SCRIPT")) {
    const n2 = document.createElement("script");
    n2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .vp-code-demo-display').shadowRoot;
${l2}}`)), s2.appendChild(n2);
  }
}, q = (e2) => {
  const s2 = keys(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((l2) => {
    const n2 = s2.filter((r2) => $[l2].types.includes(r2));
    if (n2.length) {
      const r2 = n2[0];
      t2[l2] = [e2[r2].replace(/^\n|\n$/g, ""), $[l2].map[r2] || r2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, x$1 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), O$1 = (e2) => `<div id="app">
${x$1(e2)}
</div>`, F$1 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, G$1 = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), A$2 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, Y = (e2, s2) => {
  const t2 = S$1(s2), l2 = e2.js[0] || "";
  return { ...t2, html: x$1(e2.html[0] || ""), js: l2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var _a2;
    return t2.useBabel ? ((_a2 = window.Babel.transform(l2, { presets: ["es2015"] })) == null ? void 0 : _a2.code) || "" : l2;
  } };
}, K2 = /<template>([\s\S]+)<\/template>/u, U$1 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u, W = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u, z = (e2, s2) => {
  const t2 = S$1(s2), l2 = e2.html[0] || "", n2 = K2.exec(l2), r2 = U$1.exec(l2), p2 = W.exec(l2), i2 = n2 ? n2[1].replace(/^\n|\n$/g, "") : "", [d2 = "", c2 = ""] = r2 ? [r2[4].replace(/^\n|\n$/g, ""), r2[3]] : [], [a2 = "", v2 = ""] = p2 ? [p2[4].replace(/^\n|\n$/g, ""), p2[3]] : [], f2 = c2 === "" && (v2 === "" || v2 === "css");
  return { ...t2, html: O$1(i2), js: G$1(d2), css: a2, isLegal: f2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var _a2, _b2;
    const g2 = s2.useBabel ? ((_b2 = (_a2 = window.Babel) == null ? void 0 : _a2.transform(d2, { presets: ["es2015"] })) == null ? void 0 : _b2.code) || "" : d2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${A$2(g2)};appOptions.template=\`${i2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, Q = (e2, s2) => {
  const t2 = S$1(s2);
  return { ...t2, html: O$1(""), js: F$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var _a2, _b2;
    const l2 = ((_b2 = (_a2 = window.Babel) == null ? void 0 : _a2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : _b2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${A$2(l2)}))`;
  } };
}, m$1 = {}, X = (e2) => Promise.all([u(m$1, e2.babel), u(m$1, e2.react), u(m$1, e2.reactDOM)]), Z = (e2) => {
  const s2 = [u(m$1, e2.vue)];
  return e2.useBabel && s2.push(u(m$1, e2.babel)), Promise.all(s2);
}, ee = (e2) => e2.useBabel ? u(m$1, e2.babel) : Promise.resolve();
var te = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, slots: Object, setup(e2, { slots: s2 }) {
  const [t2, l2] = useToggle(false), n2 = shallowRef(), r2 = shallowRef(), p2 = ref("0"), i2 = ref(false), d2 = computed(() => JSON.parse(e2.config ? decodeData(e2.config) : "{}")), c2 = computed(() => {
    const y2 = JSON.parse(decodeData(e2.code));
    return q(y2);
  }), a2 = computed(() => e2.type === "react" ? Q(c2.value, d2.value) : e2.type === "vue" ? z(c2.value, d2.value) : Y(c2.value, d2.value)), v2 = computed(() => a2.value.isLegal), f2 = (y2 = false) => {
    const b2 = n2.value.attachShadow({ mode: "open" }), j2 = document.createElement("div");
    j2.classList.add("code-demo-app"), b2.appendChild(j2), v2.value ? (y2 && (j2.innerHTML = a2.value.html), I$1(b2, a2.value), J(e2.id, b2, a2.value), p2.value = "0") : p2.value = "auto", i2.value = true;
  }, g2 = () => {
    switch (e2.type) {
      case "react":
        return X(a2.value).then(() => f2());
      case "vue":
        return Z(a2.value).then(() => f2());
      default:
        return ee(a2.value).then(() => f2(true));
    }
  };
  return useEventListener("beforeprint", () => {
    l2(true);
  }), onMounted(() => {
    setTimeout(() => {
      g2();
    }, 800);
  }), () => {
    var _a2;
    return h$2("div", { class: "vp-code-demo", id: e2.id }, [h$2("div", { class: "vp-code-demo-header" }, [a2.value.isLegal ? h$2("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-code-demo-toggle-button", t2.value ? "down" : "end"], onClick: () => {
      p2.value = t2.value ? "0" : `${r2.value.clientHeight + 13.8}px`, l2();
    } }) : null, e2.title ? h$2("span", { class: "vp-code-demo-title" }, decodeURIComponent(e2.title)) : null, a2.value.isLegal && a2.value.jsfiddle !== false ? h$2("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$2("input", { type: "hidden", name: "html", value: a2.value.html }), h$2("input", { type: "hidden", name: "js", value: a2.value.js }), h$2("input", { type: "hidden", name: "css", value: a2.value.css }), h$2("input", { type: "hidden", name: "wrap", value: "1" }), h$2("input", { type: "hidden", name: "panel_js", value: "3" }), h$2("input", { type: "hidden", name: "resources", value: [...a2.value.cssLib, ...a2.value.jsLib].join(",") }), h$2("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$1, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !a2.value.isLegal || a2.value.codepen !== false ? h$2("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$2("input", { type: "hidden", name: "data", value: JSON.stringify({ html: a2.value.html, js: a2.value.js, css: a2.value.css, js_external: a2.value.jsLib.join(";"), css_external: a2.value.cssLib.join(";"), layout: a2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : a2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: a2.value.codepenEditors }) }), h$2("button", { type: "submit", innerHTML: o$2, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), i2.value ? null : h$2(y, { class: "vp-code-demo-loading" }), h$2("div", { ref: n2, class: "vp-code-demo-display", style: { display: v2.value && i2.value ? "block" : "none" } }), h$2("div", { class: "vp-code-demo-code-wrapper", style: { height: p2.value } }, h$2("div", { ref: r2, class: "vp-code-demo-codes" }, (_a2 = s2.default) == null ? void 0 : _a2.call(s2)))]);
  };
} });
var v = defineComponent({ name: "MdDemo", props: { id: { type: String, required: true }, title: { type: String, default: "" } }, slots: Object, setup(t2, { slots: d2 }) {
  const [o2, l2] = useToggle(false), i2 = shallowRef(), s2 = ref("0");
  return useEventListener("beforeprint", () => {
    l2(true);
  }), () => {
    var _a2, _b2;
    return h$2("div", { class: "vp-md-demo", id: t2.id }, [h$2("div", { class: "vp-md-demo-header" }, [h$2("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["vp-md-demo-toggle-button", o2.value ? "down" : "end"], onClick: () => {
      s2.value = o2.value ? "0" : `${i2.value.clientHeight + 13.8}px`, l2();
    } }), t2.title ? decodeURIComponent(t2.title) : null]), h$2("div", { class: "vp-md-demo-display" }, (_a2 = d2.default) == null ? void 0 : _a2.call(d2)), h$2("div", { class: "vp-md-demo-code-wrapper", style: { height: s2.value } }, h$2("div", { ref: i2, class: "vp-md-demo-codes" }, (_b2 = d2.code) == null ? void 0 : _b2.call(d2)))]);
  };
} });
const o$1 = () => {
  useEventListener("beforeprint", () => {
    document.querySelectorAll("details").forEach((e2) => {
      e2.open = true;
    });
  });
};
const useRevealJs = () => [
  import(
    /* webpackChunkName: "reveal" */
    "./assets/reveal.esm-BlBvDzl9.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/markdown.esm-BfxnFdzv.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/highlight.esm-D--a3FQb.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/math.esm-DXHTQzdr.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/search.esm-DiaPBzBJ.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/notes.esm-ShiEiTnm.js"
  ),
  import(
    /* webpackChunkName: "reveal" */
    "./assets/zoom.esm-CDaiP6uy.js"
  )
];
let o = {};
const s = Symbol(""), t = () => inject(s), a = (e2) => {
  e2.provide(s, o);
};
var N$1 = defineComponent({ name: "RevealJs", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(r2) {
  const o2 = t(), t$12 = usePageFrontmatter(), l2 = ref(""), s2 = ref(true), n2 = shallowRef();
  let u2 = null;
  const p2 = async (e2) => {
    const v2 = [new Promise((i2) => setTimeout(i2, 800)), ...useRevealJs()], [, c2, ...f2] = await Promise.all(v2), d2 = new c2.default(e2, { backgroundTransition: "slide", hash: t$12.value.layout === "Slide", mouseWheel: t$12.value.layout === "Slide", transition: "slide", slideNumber: true, ...o2, ...t$12.value.revealJs || {}, embedded: t$12.value.layout !== "Slide", markdown: { separator: `^\r?\\n---\r?
$`, verticalSeparator: `^\r?
--\r?
$` }, plugins: [...f2.map(({ default: i2 }) => i2), ...o2.plugins ?? []] });
    return await d2.initialize(), d2;
  };
  return onMounted(async () => {
    const e2 = n2.value;
    e2 && (l2.value = decodeData(r2.code), e2.setAttribute("id", r2.id), e2.setAttribute("data-theme", r2.theme), u2 = await p2(e2), s2.value = false);
  }), onUnmounted(() => {
    u2 == null ? void 0 : u2.destroy();
  }), () => h$2("div", { class: "vp-reveal" }, [h$2("div", { ref: n2, class: ["reveal", "reveal-viewport"] }, h$2("div", { class: "slides", innerHTML: `<section data-markdown><script type="text/template">${l2.value}<\/script></section>` })), s2.value ? h$2(y, { class: "reveal-loading", height: 400 }) : null]);
} });
const n = useStorage("VUEPRESS_TAB_STORE", {});
var A$1 = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, slots: Object, setup(a2, { slots: d2 }) {
  const l2 = ref(a2.active), u2 = shallowRef([]), s2 = () => {
    a2.tabId && (n.value[a2.tabId] = a2.data[l2.value].id);
  }, o2 = (e2 = l2.value) => {
    l2.value = e2 < u2.value.length - 1 ? e2 + 1 : 0, u2.value[l2.value].focus();
  }, c2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, b2 = (e2, t2) => {
    e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = t2) : e2.key === "ArrowRight" ? (e2.preventDefault(), o2()) : e2.key === "ArrowLeft" && (e2.preventDefault(), c2()), s2();
  }, p2 = () => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ id: t2 }) => n.value[a2.tabId] === t2);
      if (e2 !== -1)
        return e2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = p2(), watch(() => n.value[a2.tabId], (e2, t2) => {
      if (a2.tabId && e2 !== t2) {
        const i2 = a2.data.findIndex(({ id: v2 }) => v2 === e2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => a2.data.length ? h$2("div", { class: "vp-tabs" }, [h$2("div", { class: "vp-tabs-nav", role: "tablist" }, a2.data.map(({ id: e2 }, t2) => {
    const i2 = t2 === l2.value;
    return h$2("button", { type: "button", ref: (v2) => {
      v2 && (u2.value[t2] = v2);
    }, class: ["vp-tab-nav", { active: i2 }], role: "tab", "aria-controls": `tab-${a2.id}-${t2}`, "aria-selected": i2, onClick: () => {
      l2.value = t2, s2();
    }, onKeydown: (v2) => b2(v2, t2) }, d2[`title${t2}`]({ value: e2, isActive: i2 }));
  })), a2.data.map(({ id: e2 }, t2) => {
    const i2 = t2 === l2.value;
    return h$2("div", { class: ["vp-tab", { active: i2 }], id: `tab-${a2.id}-${t2}`, role: "tabpanel", "aria-expanded": i2 }, [h$2("div", { class: "vp-tab-title" }, d2[`title${t2}`]({ value: e2, isActive: i2 })), d2[`tab${t2}`]({ value: e2, isActive: i2 })]);
  })]) : null;
} });
const clientConfig9 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", A$3);
    app.component("CodeDemo", te);
    app.component("MdDemo", v);
    a(app);
    app.component("RevealJs", N$1);
    app.component("Tabs", A$1);
  },
  setup: () => {
    o$1();
  }
});
let photoswipeOptions = {};
const photoswipeSymbol = Symbol("");
const usePhotoSwipeOptions = () => inject(photoswipeSymbol);
const injectPhotoSwipeConfig = (app) => {
  app.provide(photoswipeSymbol, photoswipeOptions);
};
const LOADING_ICON = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';
const getImages = (selector2) => isString(selector2) ? Array.from(document.querySelectorAll(selector2)) : selector2.map((item) => Array.from(document.querySelectorAll(item))).flat();
const getImageElementInfo = (image) => new Promise((resolve, reject) => {
  if (image.complete) {
    resolve({
      type: "image",
      element: image,
      src: image.src,
      width: image.naturalWidth,
      height: image.naturalHeight,
      alt: image.alt,
      msrc: image.src
    });
  } else {
    image.onload = () => resolve(getImageElementInfo(image));
    image.onerror = (err2) => reject(err2);
  }
});
const initPhotoSwipe = (photoSwipe) => {
  const { isSupported, toggle } = useFullscreen();
  photoSwipe.on("uiRegister", () => {
    if (isSupported.value)
      photoSwipe.ui.registerElement({
        name: "fullscreen",
        order: 7,
        isButton: true,
        html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',
        onClick: () => {
          toggle();
        }
      });
    photoSwipe.ui.registerElement({
      name: "download",
      order: 8,
      isButton: true,
      tagName: "a",
      // SVG with outline
      html: {
        isCustomSVG: true,
        inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',
        outlineID: "pswp__icn-download"
      },
      onInit: (el, photoSwipe2) => {
        el.setAttribute("download", "");
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
        photoSwipe2.on("change", () => {
          el.setAttribute("href", photoSwipe2.currSlide.data.src);
        });
      }
    });
    photoSwipe.ui.registerElement({
      name: "bulletsIndicator",
      className: "photo-swipe-bullets-indicator",
      appendTo: "wrapper",
      onInit: (el, photoSwipe2) => {
        const bullets = [];
        let prevIndex = -1;
        for (let i2 = 0; i2 < photoSwipe2.getNumItems(); i2++) {
          const bullet = document.createElement("div");
          bullet.className = "photo-swipe-bullet";
          bullet.onclick = (event) => {
            photoSwipe2.goTo(bullets.indexOf(event.target));
          };
          bullets.push(bullet);
          el.appendChild(bullet);
        }
        photoSwipe2.on("change", () => {
          if (prevIndex >= 0)
            bullets[prevIndex].classList.remove("active");
          bullets[photoSwipe2.currIndex].classList.add("active");
          prevIndex = photoSwipe2.currIndex;
        });
      }
    });
  });
};
const registerPhotoSwipe = (images, photoSwipeOptions, scrollToClose2 = true) => import(
  /* webpackChunkName: "photo-swipe" */
  "./assets/photoswipe.esm-vxo03HUV.js"
).then(({ default: PhotoSwipe }) => {
  let currentPhotoSwipe = null;
  const dataSource = images.map((image) => ({
    html: LOADING_ICON,
    element: image,
    msrc: image.src
  }));
  images.forEach((image, index) => {
    const handler = () => {
      currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.destroy();
      currentPhotoSwipe = new PhotoSwipe({
        preloaderDelay: 0,
        showHideAnimationType: "zoom",
        ...photoSwipeOptions,
        dataSource,
        index,
        ...scrollToClose2 ? { closeOnVerticalDrag: true, wheelToZoom: false } : {}
      });
      initPhotoSwipe(currentPhotoSwipe);
      currentPhotoSwipe.addFilter("thumbEl", () => image);
      currentPhotoSwipe.addFilter("placeholderSrc", () => image.src);
      currentPhotoSwipe.init();
    };
    if (!image.getAttribute("photo-swipe")) {
      image.style.cursor = "zoom-in";
      image.addEventListener("click", () => {
        handler();
      });
      image.addEventListener("keypress", ({ key }) => {
        if (key === "Enter")
          handler();
      });
      image.setAttribute("photo-swipe", "");
    }
    getImageElementInfo(image).then((data) => {
      dataSource.splice(index, 1, data);
      currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.refreshSlideContent(index);
    });
  });
  return scrollToClose2 ? useEventListener("wheel", () => {
    currentPhotoSwipe == null ? void 0 : currentPhotoSwipe.close();
  }) : () => {
  };
});
const usePhotoSwipe = ({ selector: selector2, locales: locales2, delay: delay2 = 500, scrollToClose: scrollToClose2 = true }) => {
  const photoSwipeOptions = usePhotoSwipeOptions();
  const locale = useLocaleConfig(locales2);
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  let destroy = null;
  const setupPhotoSwipe = () => {
    const { photoSwipe } = frontmatter.value;
    if (photoSwipe !== false)
      nextTick().then(() => wait(delay2)).then(async () => {
        const imageSelector = isString(photoSwipe) ? photoSwipe : selector2;
        destroy = await registerPhotoSwipe(getImages(imageSelector), {
          ...photoSwipeOptions,
          ...locale.value
        }, scrollToClose2);
      });
  };
  onMounted(() => {
    setupPhotoSwipe();
    watch(() => page.value.path, () => {
      destroy == null ? void 0 : destroy();
      setupPhotoSwipe();
    });
  });
  onUnmounted(() => {
    destroy == null ? void 0 : destroy();
  });
};
var define_PS_LOCALES_default = { "/": { closeTitle: "关闭", downloadTitle: "下载图片", fullscreenTitle: "切换全屏", zoomTitle: "缩放", arrowPrevTitle: "上一个 (左箭头)", arrowNextTitle: "下一个 (右箭头)" } };
const selector = ".theme-hope-content :not(a) > img:not([no-view])";
const locales = define_PS_LOCALES_default;
const delay = 800;
const scrollToClose = true;
const clientConfig10 = defineClientConfig({
  enhance: ({ app }) => {
    injectPhotoSwipeConfig(app);
  },
  setup: () => {
    usePhotoSwipe({
      selector,
      delay,
      locales,
      scrollToClose
    });
  }
});
const HopeIcon = (props) => {
  const { icon = "", color, size } = props;
  const style = color || size ? {} : null;
  if (color)
    style["color"] = color;
  if (size)
    style["height"] = Number.isNaN(Number(size)) ? size : `${size}px`;
  return isLinkHttp(icon) ? h$2("img", {
    class: "icon",
    src: icon,
    alt: "",
    "no-view": "",
    style
  }) : isLinkAbsolute(icon) ? h$2("img", {
    class: "icon",
    src: withBase(icon),
    alt: "",
    "aria-hidden": "",
    "no-view": "",
    style
  }) : h$2(resolveComponent("FontIcon"), props);
};
HopeIcon.displayName = "HopeIcon";
const FAKE_HOST = "http://.";
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url)
      if (isLinkAbsolute(url)) {
        if (route.path !== url)
          void router.push(url);
      } else if (isLinkWithProtocol(url)) {
        if (window)
          window.open(url);
      } else {
        const loc = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(new URL(`${loc}/${encodeURI(url)}`, FAKE_HOST).pathname);
      }
  };
};
const useReadingTimeData = () => {
  const page = usePageData();
  return computed(() => page.value.readingTime ?? null);
};
const getReadingTimeLocale = (readingTime, locale) => {
  const { minutes, words } = readingTime;
  const { less1Minute, word, time } = locale;
  return {
    time: minutes < 1 ? less1Minute : time.replace("$time", Math.round(minutes).toString()),
    words: word.replace("$word", words.toString())
  };
};
var define_READING_TIME_LOCALES_default = { "/": { word: "约 $word 字", less1Minute: "小于 1 分钟", time: "大约 $time 分钟" } };
const DEFAULT_LOCALE = { words: "", time: "" };
const readingTimeLocales = typeof define_READING_TIME_LOCALES_default === "undefined" ? null : define_READING_TIME_LOCALES_default;
const useReadingTimeLocaleConfig = () => readingTimeLocales ? useLocaleConfig(readingTimeLocales) : computed(() => null);
const useReadingTimeLocale = () => {
  if (typeof readingTimeLocales === "undefined")
    return computed(() => DEFAULT_LOCALE);
  const readingTime = useReadingTimeData();
  const readingTimeLocale = useReadingTimeLocaleConfig();
  return computed(() => readingTime.value && readingTimeLocale.value ? getReadingTimeLocale(readingTime.value, readingTimeLocale.value) : DEFAULT_LOCALE);
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return te$1(author);
    if (author === false)
      return [];
    return te$1(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  const categoryMap = inject(Symbol.for("categoryMap"));
  return computed(() => ne(frontmatter.value.category).map((name) => {
    var _a2;
    return {
      name,
      path: ((_a2 = categoryMap == null ? void 0 : categoryMap.value.map[name]) == null ? void 0 : _a2.path) || ""
    };
  }));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  const tagMap = inject(Symbol.for("tagMap"));
  return computed(() => ie(frontmatter.value.tag).map((name) => {
    var _a2;
    return {
      name,
      path: ((_a2 = tagMap == null ? void 0 : tagMap.value.map[name]) == null ? void 0 : _a2.path) || ""
    };
  }));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page = usePageData();
  return computed(() => {
    const date = getDate(frontmatter.value.date);
    if (date)
      return date;
    const { createdTime } = page.value.git || {};
    if (createdTime)
      return new Date(createdTime);
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category = usePageCategory();
  const tag = usePageTag();
  const date = usePageDate();
  const readingTimeData = useReadingTimeData();
  const readingTimeLocale = useReadingTimeLocale();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: page.value.localizedDate,
    tag: tag.value,
    isOriginal: frontmatter.value.isOriginal || false,
    readingTime: readingTimeData.value,
    readingTimeLocale: readingTimeLocale.value,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : true
  }));
  const items = computed(() => "pageInfo" in frontmatter.value ? frontmatter.value.pageInfo : "pageInfo" in themeLocale.value ? themeLocale.value.pageInfo : null);
  return { info, items };
};
const usePure = () => {
  const themeData2 = useThemeData();
  return computed(() => Boolean(themeData2.value.pure));
};
const mobileBreakPoint$1 = "719px";
const pcBreakPoint$1 = "1440px";
const enableThemeColor$1 = "false";
const cssVariables = {
  mobileBreakPoint: mobileBreakPoint$1,
  pcBreakPoint: pcBreakPoint$1,
  enableThemeColor: enableThemeColor$1
};
const { mobileBreakPoint, pcBreakPoint } = cssVariables;
const getPixels = (length) => length.endsWith("px") ? Number(length.slice(0, -2)) : null;
const useWindowSize = () => {
  const isMobile2 = ref(false);
  const isPC = ref(false);
  const windowSizeHandler = () => {
    isMobile2.value = window.innerWidth <= (getPixels(mobileBreakPoint) ?? 719);
    isPC.value = window.innerWidth >= (getPixels(pcBreakPoint) ?? 1440);
  };
  useEventListener("resize", windowSizeHandler, false);
  useEventListener("orientationchange", windowSizeHandler, false);
  onMounted(() => {
    windowSizeHandler();
  });
  return {
    isMobile: isMobile2,
    isPC
  };
};
const darkModeSymbol = Symbol("");
const useDarkmode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode)
    throw new Error("useDarkmode() is called without provider.");
  return darkmode;
};
const injectDarkmode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const config = computed(() => themeData2.value.darkmode || "switch");
  const status = useStorage("vuepress-theme-hope-scheme", "auto");
  const isDarkmode = computed(() => {
    const darkmode = config.value;
    return darkmode === "disable" ? false : (
      // Force darkmode
      darkmode === "enable" ? true : (
        // Auto
        darkmode === "auto" ? isDarkPreferred.value : (
          // Toggle
          darkmode === "toggle" ? status.value === "dark" : (
            // Switch
            status.value === "dark" || status.value === "auto" && isDarkPreferred.value
          )
        )
      )
    );
  });
  const canToggle = computed(() => {
    const darkmode = config.value;
    return darkmode === "switch" || darkmode === "toggle";
  });
  app.provide(darkModeSymbol, {
    canToggle,
    config,
    isDarkmode,
    status
  });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkmode: { get: () => isDarkmode.value }
  });
};
const setupDarkmode = () => {
  const { config, isDarkmode, status } = useDarkmode();
  watchEffect(() => {
    if (config.value === "disable")
      status.value = "light";
    else if (config.value === "enable")
      status.value = "dark";
    else if (config.value === "toggle" && status.value === "auto")
      status.value = "light";
  });
  onMounted(() => {
    watch(isDarkmode, (isDarkmode2) => document.documentElement.setAttribute("data-theme", isDarkmode2 ? "dark" : "light"), { immediate: true });
  });
};
const isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch, "u").test(route.path);
  if (Q$1(route, item.link))
    return true;
  if ("children" in item && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && Q$1(route, item.prefix);
  return false;
};
const sidebarData = { "/vod/open/": ["ks.gcw", "ks.xjj", "ks.meitui", "ks.dance"], "/vod/lock/": ["lock.movie", "lock.vod"], "/tv/": ["ks.xjj"] };
const getAncestorLinks = (path, routeLocale) => {
  const routePaths = path.replace(routeLocale, "/").split("/");
  const result = [];
  let link = removeEndingSlash(routeLocale);
  routePaths.forEach((name, index) => {
    if (index !== routePaths.length - 1) {
      link += `${name}/`;
      result.push({ link, name: name || "Home" });
    } else if (name !== "") {
      link += name;
      result.push({ link, name });
    }
  });
  return result;
};
const isLinkInternal = (link) => !isLinkExternal(link) && !isLinkWithProtocol(link);
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => {
      promiseResolve = resolve;
    });
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
var PageInfo$1;
(function(PageInfo2) {
  PageInfo2["title"] = "t";
  PageInfo2["shortTitle"] = "s";
  PageInfo2["icon"] = "i";
  PageInfo2["index"] = "I";
  PageInfo2["order"] = "O";
  PageInfo2["breadcrumbExclude"] = "b";
})(PageInfo$1 || (PageInfo$1 = {}));
var ArticleInfo;
(function(ArticleInfo2) {
  ArticleInfo2["type"] = "y";
  ArticleInfo2["author"] = "a";
  ArticleInfo2["date"] = "d";
  ArticleInfo2["localizedDate"] = "l";
  ArticleInfo2["category"] = "c";
  ArticleInfo2["tag"] = "g";
  ArticleInfo2["isEncrypted"] = "n";
  ArticleInfo2["isOriginal"] = "o";
  ArticleInfo2["readingTime"] = "r";
  ArticleInfo2["excerpt"] = "e";
  ArticleInfo2["sticky"] = "u";
  ArticleInfo2["cover"] = "v";
})(ArticleInfo || (ArticleInfo = {}));
var PageType;
(function(PageType2) {
  PageType2["article"] = "a";
  PageType2["home"] = "h";
  PageType2["slide"] = "s";
  PageType2["page"] = "p";
})(PageType || (PageType = {}));
const resolveLinkInfo = (item, preferFull = false, current) => {
  const { meta, path, notFound } = resolveRoute(item, current);
  return notFound ? { text: path, link: path } : {
    text: !preferFull && meta[PageInfo$1.shortTitle] ? meta[PageInfo$1.shortTitle] : meta[PageInfo$1.title] || path,
    link: path,
    ...meta[PageInfo$1.icon] ? { icon: meta[PageInfo$1.icon] } : {}
  };
};
const resolvePrefix = (prefix = "", path = "") => isLinkAbsolute(path) || isLinkWithProtocol(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const resolveArraySidebarItems = ({ config, prefix = "" }) => {
  const handleChildItem = (item, pathPrefix = prefix) => {
    const childItem = isString(item) ? resolveLinkInfo(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...isLinkInternal(item.link) ? {
        link: resolveRoute$1(resolvePrefix(pathPrefix, item.link)).path
      } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem
    };
  };
  return config.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = ({ config, page, headerDepth }) => {
  const sidebarRoutes = keys(config).sort((x2, y2) => y2.length - x2.length);
  for (const base of sidebarRoutes)
    if (startsWith(decodeURI(page.path), base)) {
      const matched = config[base];
      return matched ? resolveArraySidebarItems({
        config: matched === "structure" ? sidebarData[base] : matched,
        page,
        headerDepth,
        prefix: base
      }) : [];
    }
  console.warn(`${page.path} is missing sidebar config.`);
  return [];
};
const resolveSidebarItems = ({ config, routeLocale, page, headerDepth }) => (
  // Resolve sidebar items according to the config
  config === "structure" ? resolveArraySidebarItems({
    config: sidebarData[routeLocale],
    page,
    headerDepth,
    prefix: routeLocale
  }) : isArray(config) ? resolveArraySidebarItems({ config, page, headerDepth }) : isPlainObject(config) ? resolveMultiSidebarItems({ config, page, headerDepth }) : []
);
const sidebarItemsSymbol = Symbol("");
const setupSidebarItems = () => {
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const routeLocale = useRouteLocale();
  const sidebarConfig = computed(() => frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure");
  const headerDepth = computed(() => frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2);
  const sidebarItems = computedWithControl(() => [
    sidebarConfig.value,
    headerDepth.value,
    page.value.path,
    null
  ], () => resolveSidebarItems({
    config: sidebarConfig.value,
    routeLocale: routeLocale.value,
    page: page.value,
    headerDepth: headerDepth.value
  }));
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems)
    throw new Error("useSidebarItems() is called without provider.");
  return sidebarItems;
};
const PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer } = frontmatter.value;
      return footer !== false && Boolean(copyright2 || footer || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer } = frontmatter.value;
      return footer === false ? false : isString(footer) ? footer : themeLocale.value.footer || "";
    });
    const authorText = computed(() => author.value.map(({ name }) => name).join(", "));
    const getCopyrightText = (license) => `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} ${authorText.value} ${license ? `${license} Licensed` : ""}`;
    const copyright = computed(() => {
      const { copyright: copyright2, license = "" } = frontmatter.value;
      const { license: globalLicense } = themeData2.value;
      const { copyright: globalCopyright } = themeLocale.value;
      return copyright2 ?? (license ? getCopyrightText(license) : isString(globalCopyright) ? globalCopyright : authorText.value || globalLicense ? getCopyrightText(globalLicense) : false);
    });
    return () => enable.value ? h$2("footer", { class: "vp-footer-wrapper" }, [
      content.value ? h$2("div", { class: "vp-footer", innerHTML: content.value }) : null,
      copyright.value ? h$2("div", {
        class: "vp-copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
const noopComponent = () => null;
const AutoLink = defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    /**
     * @description Autolink config
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * @description Whether it's active only when exact match
     */
    exact: Boolean,
    /**
     * @description Whether to hide externalLinkIcon
     */
    noExternalLinkIcon: Boolean
  },
  emits: ["focusout"],
  slots: Object,
  setup(props, { attrs, emit, slots }) {
    const route = useRoute();
    const siteData2 = useSiteData();
    const config = toRef(props, "config");
    const isHttp = computed(() => isLinkHttp(config.value.link));
    const withProtocol = computed(() => !isHttp.value && isLinkWithProtocol(config.value.link));
    const linkTarget = computed(() => config.value.target || (isHttp.value ? "_blank" : void 0));
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const renderRouteLink = computed(() => !isHttp.value && !withProtocol.value && !isBlankTarget.value);
    const linkRel = computed(() => config.value.rel || (isBlankTarget.value ? "noopener noreferrer" : null));
    const linkAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      if (props.exact)
        return false;
      const localeKeys = keys(siteData2.value.locales);
      return localeKeys.length ? (
        // Check all the locales
        localeKeys.every((key) => key !== config.value.link)
      ) : (
        // Check root
        config.value.link !== "/"
      );
    });
    const isActive = computed(() => renderRouteLink.value ? config.value.activeMatch ? new RegExp(config.value.activeMatch, "u").test(route.path) : (
      // If this link is active in subpath
      shouldBeActiveInSubpath.value ? startsWith(route.path, config.value.link) : route.path === config.value.link
    ) : false);
    return () => {
      const { before, after, default: defaultSlot } = slots;
      const { text, icon, link } = config.value;
      return renderRouteLink.value ? h$2(RouteLink, {
        to: link,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // Class needs to be merged manually
        class: ["nav-link", { active: isActive.value }, attrs["class"]],
        onFocusout: () => emit("focusout")
      }, () => defaultSlot ? defaultSlot() : [before ? before() : h$2(HopeIcon, { icon }), text, after == null ? void 0 : after()]) : h$2("a", {
        href: link,
        rel: linkRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // Class needs to be merged manually
        class: ["nav-link", attrs["class"]],
        onFocusout: () => emit("focusout")
      }, defaultSlot ? defaultSlot() : [
        before ? before() : h$2(HopeIcon, { icon }),
        text,
        props.noExternalLinkIcon ? null : h$2(ExternalLinkIcon),
        after == null ? void 0 : after()
      ]);
    };
  }
});
const DropdownLink = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const page = usePageData();
    const config = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
    const open = ref(false);
    watch(() => page.value.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a2;
      return h$2("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h$2("button", {
          type: "button",
          class: "dropdown-title",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) || h$2("span", { class: "title" }, [
            h$2(HopeIcon, { icon: config.value.icon }),
            props.config.text
          ]),
          h$2("span", { class: "arrow" }),
          h$2("ul", { class: "nav-dropdown" }, config.value.children.map((child, index) => {
            const isLastChild = index === config.value.children.length - 1;
            return h$2("li", { class: "dropdown-item" }, "children" in child ? [
              h$2("h4", { class: "dropdown-subtitle" }, child.link ? h$2(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (
                    // No children
                    child.children.length === 0 && isLastChild
                  )
                    open.value = false;
                }
              }) : h$2("span", child.text)),
              h$2("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => h$2("li", { class: "dropdown-subitem" }, h$2(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (
                    // Last item of grandchild
                    grandIndex === child.children.length - 1 && isLastChild
                  )
                    open.value = false;
                }
              }))))
            ] : h$2(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const I18nIcon = () => h$2(r$1, { name: "i18n" }, () => [
  h$2("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const resolveNavbarItem = (item, prefix = "") => {
  if (isString(item))
    return resolveLinkInfo(resolvePrefix(prefix, item));
  if ("children" in item)
    return {
      ...item,
      ...item.link && isLinkInternal(item.link) ? { link: resolveRoute$1(resolvePrefix(prefix, item.link)).path } : {},
      children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix)))
    };
  return {
    ...item,
    link: isLinkInternal(item.link) ? resolveRoute$1(resolvePrefix(prefix, item.link)).path : item.link
  };
};
const useNavbarItems = () => {
  const themeLocaleData = useThemeLocaleData();
  const getNavbarItems = () => (themeLocaleData.value.navbar || []).map((item) => resolveNavbarItem(item));
  const navbarItems = computedWithControl(() => themeLocaleData.value.navbar, () => getNavbarItems());
  return navbarItems;
};
const useNavbarLanguageDropdown = () => {
  const routePaths = useRoutePaths();
  const route = useRoute();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computedWithControl(() => route.path, () => {
    const localePaths = keys(siteLocale.value.locales);
    const extraLocales = entries(themeData2.value.extraLocales ?? {});
    if (localePaths.length < 2 && !extraLocales.length)
      return null;
    const { path, fullPath } = route;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: [
        ...localePaths.map((targetLocalePath) => {
          var _a2, _b2, _c;
          const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
          const targetThemeLocale = ((_b2 = themeData2.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
          const targetLang = targetSiteLocale.lang || "";
          const text = ((_c = targetThemeLocale.navbarLocales) == null ? void 0 : _c.langName) ?? targetLang;
          let link;
          if (targetLang === siteLocale.value.lang) {
            link = path;
          } else {
            const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
            link = routePaths.value.some((item) => item === targetLocalePage) ? (
              // try to keep current hash across languages
              fullPath.replace(path, targetLocalePage)
            ) : (
              // Or fallback to homepage
              targetThemeLocale.home ?? targetLocalePath
            );
          }
          return {
            text,
            link
          };
        }),
        ...extraLocales.map(([text, path2]) => ({
          text,
          link: path2.replace(":route", route.path.replace(routeLocale.value, ""))
        }))
      ]
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo || null);
  const repoLink = computed(() => repo.value ? B$1(repo.value) : null);
  const repoType = computed(() => repo.value ? E$1(repo.value) : null);
  const repoLabel = computed(() => repoLink.value ? themeLocale.value.repoLabel ?? (repoType.value === null ? "Source" : repoType.value) : null);
  return computed(() => {
    if (!repoLink.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink.value
    };
  });
};
defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h$2("div", { class: "vp-nav-item" }, h$2(DropdownLink, { config: dropdown.value }, {
      title: () => {
        var _a2;
        return h$2(I18nIcon, {
          "aria-label": (_a2 = dropdown.value) == null ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
const NavScreenDropdown = defineComponent({
  name: "NavScreenDropdown",
  props: {
    /**
     * Navbar Screen Dropdown list config
     *
     * 导航栏下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const page = usePageData();
    const config = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
    const open = ref(false);
    watch(() => page.value.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h$2("button", {
        type: "button",
        class: ["nav-screen-dropdown-title", { active: open.value }],
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h$2("span", { class: "title" }, [
          h$2(HopeIcon, { icon: config.value.icon }),
          props.config.text
        ]),
        h$2("span", { class: ["arrow", open.value ? "down" : "end"] })
      ]),
      h$2("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config.value.children.map((child) => h$2("li", { class: "dropdown-item" }, "children" in child ? [
        h$2("h4", { class: "dropdown-subtitle" }, child.link ? h$2(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h$2("span", child.text)),
        h$2("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h$2("li", { class: "dropdown-subitem" }, h$2(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config.value.children))
              open.value = false;
          }
        }))))
      ] : h$2(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
const NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarItems();
    return () => navbarConfig.value.length ? h$2("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config) => h$2("div", { class: "navbar-links-item" }, "children" in config ? h$2(NavScreenDropdown, { config }) : h$2(AutoLink, { config })))) : null;
  }
});
const DarkIcon = () => h$2(r$1, { name: "dark" }, () => h$2("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h$2(r$1, { name: "light" }, () => h$2("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h$2(r$1, { name: "auto" }, () => h$2("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => h$2(r$1, { name: "enter-fullscreen" }, () => h$2("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => h$2(r$1, { name: "cancel-fullscreen" }, () => h$2("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => h$2(r$1, { name: "outlook" }, () => [
  h$2("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
const AppearanceSwitch = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const { config, isDarkmode, status } = useDarkmode();
    const pure = usePure();
    const updateDarkmodeStatus = () => {
      if (config.value === "switch")
        status.value = {
          light: "dark",
          dark: "auto",
          auto: "light"
        }[status.value];
      else
        status.value = status.value === "light" ? "dark" : "light";
    };
    const toggleDarkmode = async (event) => {
      const useViewTransition = (
        // @ts-expect-error
        document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !pure.value
      );
      if (!useViewTransition || !event) {
        updateDarkmodeStatus();
        return;
      }
      const x2 = event.clientX;
      const y2 = event.clientY;
      const endRadius = Math.hypot(Math.max(x2, innerWidth - x2), Math.max(y2, innerHeight - y2));
      const oldStatus = isDarkmode.value;
      const transition = document.startViewTransition(async () => {
        updateDarkmodeStatus();
        await nextTick();
      });
      await transition.ready;
      if (isDarkmode.value !== oldStatus)
        document.documentElement.animate({
          clipPath: isDarkmode.value ? [
            `circle(${endRadius}px at ${x2}px ${y2}px)`,
            `circle(0px at ${x2}px ${y2}px)`
          ] : [
            `circle(0px at ${x2}px ${y2}px)`,
            `circle(${endRadius}px at ${x2}px ${y2}px)`
          ]
        }, {
          duration: 400,
          pseudoElement: isDarkmode.value ? "::view-transition-old(root)" : "::view-transition-new(root)"
        });
    };
    return () => h$2("button", {
      type: "button",
      id: "appearance-switch",
      onClick: toggleDarkmode
    }, [
      h$2(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h$2(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h$2(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
const AppearanceMode = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { canToggle } = useDarkmode();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    return () => canToggle.value ? h$2("div", { class: "appearance-wrapper" }, [
      h$2("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h$2(AppearanceSwitch)
    ]) : null;
  }
});
const THEME_COLOR_KEY = "VUEPRESS_THEME_COLOR";
defineComponent({
  name: "ThemeColorPicker",
  props: {
    /**
     * Theme color picker config
     *
     * 主题色选择器配置
     */
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = keys(props.themeColor);
      if (!theme) {
        localStorage.removeItem(THEME_COLOR_KEY);
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeColorClass) => themeColorClass !== theme));
      classes.add(theme);
      localStorage.setItem(THEME_COLOR_KEY, theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem(THEME_COLOR_KEY);
      if (theme)
        setThemeColor(theme);
    });
    return () => h$2("ul", { id: "theme-color-picker" }, [
      h$2("li", h$2("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      entries(props.themeColor).map(([color, value]) => h$2("li", h$2("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
const enableThemeColor = cssVariables["enableThemeColor"] === "true";
defineComponent({
  name: "ThemeColor",
  setup() {
    const themeLocale = useThemeLocaleData();
    computed(() => themeLocale.value.outlookLocales.themeColor);
    return () => null;
  }
});
const ToggleFullScreenButton = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h$2("div", { class: "full-screen-wrapper" }, [
      h$2("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h$2("button", {
        type: "button",
        id: "full-screen-switch",
        class: "full-screen",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h$2(CancelFullScreenIcon) : h$2(EnterFullScreenIcon))
    ]) : null;
  }
});
const OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    return () => h$2(ClientOnly, () => [
      null,
      h$2(AppearanceMode),
      enableFullScreen.value ? h$2(ToggleFullScreenButton) : null
    ]);
  }
});
const NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    /**
     * Whether to show the screen
     *
     * 是否显示
     */
    show: Boolean
  },
  emits: ["close"],
  slots: Object,
  setup(props, { emit, slots }) {
    const page = usePageData();
    const { isMobile: isMobile2 } = useWindowSize();
    const body = shallowRef();
    const isLocked = useScrollLock(body);
    onMounted(() => {
      body.value = document.body;
      watch(isMobile2, (value) => {
        if (!value && props.show) {
          isLocked.value = false;
          emit("close");
        }
      });
      watch(() => page.value.path, () => {
        isLocked.value = false;
        emit("close");
      });
    });
    onUnmounted(() => {
      isLocked.value = false;
    });
    return () => h$2(Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a2, _b2;
      return props.show ? h$2("div", { id: "nav-screen" }, h$2("div", { class: "vp-nav-screen-container" }, [
        (_a2 = slots.before) == null ? void 0 : _a2.call(slots),
        h$2(NavScreenLinks),
        h$2("div", { class: "vp-outlook-wrapper" }, h$2(OutlookSettings)),
        (_b2 = slots.after) == null ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
const NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteTitle = computed(() => siteLocale.value.title);
    const siteBrandTitle = computed(() => themeLocale.value.navTitle ?? siteTitle.value);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h$2(RouteLink, { to: siteBrandLink.value, class: "vp-brand" }, () => [
      siteBrandLogo.value ? h$2("img", {
        class: [
          "vp-nav-logo",
          { light: Boolean(siteBrandLogoDark.value) }
        ],
        src: siteBrandLogo.value,
        alt: ""
      }) : null,
      siteBrandLogoDark.value ? h$2("img", {
        class: ["vp-nav-logo dark"],
        src: siteBrandLogoDark.value,
        alt: ""
      }) : null,
      siteBrandTitle.value ? h$2("span", {
        class: [
          "vp-site-name",
          {
            "hide-in-pad": siteBrandLogo.value && themeLocale.value.hideSiteNameOnMobile !== false
          }
        ]
      }, siteBrandTitle.value) : null
    ]);
  }
});
const NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarItems();
    return () => navbarConfig.value.length ? h$2("nav", { class: "vp-nav-links" }, navbarConfig.value.map((config) => h$2("div", { class: "vp-nav-item hide-in-mobile" }, "children" in config ? h$2(DropdownLink, { config }) : h$2(AutoLink, { config })))) : null;
  }
});
const RepoLink = defineComponent({
  name: "RepoLink",
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h$2("div", { class: "vp-nav-item vp-action" }, h$2("a", {
      class: "vp-action-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, h$2(G$2, {
      type: repo.value.type,
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const ToggleNavbarButton = ({ active = false }, { emit }) => h$2("button", {
  type: "button",
  class: ["vp-toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h$2("span", [
  h$2("span", { class: "vp-top" }),
  h$2("span", { class: "vp-middle" }),
  h$2("span", { class: "vp-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
const ToggleSidebarButton = (_2, { emit }) => h$2("button", {
  type: "button",
  class: "vp-toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h$2("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
const OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = useFullscreen();
    const themeData2 = useThemeData();
    const pure = usePure();
    const page = usePageData();
    const { canToggle } = useDarkmode();
    const open = ref(false);
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen && isSupported);
    watch(() => page.value.path, () => {
      open.value = false;
    });
    return () => canToggle.value || enableFullScreen.value || enableThemeColor ? h$2(
      "div",
      { class: "vp-nav-item hide-in-mobile" },
      // Only AppearanceSwitch is enabled
      canToggle.value && !enableFullScreen.value && !enableThemeColor ? h$2(AppearanceSwitch) : (
        // Only FullScreen is enabled
        enableFullScreen.value && !canToggle.value && !enableThemeColor ? h$2(ToggleFullScreenButton) : h$2("button", {
          type: "button",
          class: ["outlook-button", { open: open.value }],
          tabindex: "-1",
          "aria-hidden": true
        }, [
          h$2(OutlookIcon),
          h$2("div", { class: "outlook-dropdown" }, h$2(OutlookSettings))
        ])
      )
    ) : null;
  }
});
const Navbar = defineComponent({
  name: "NavBar",
  emits: ["toggleSidebar"],
  slots: Object,
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const { isMobile: isMobile2 } = useWindowSize();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide = "mobile" } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile2.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout || {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"]
    });
    const navbarComponentMap = {
      Brand: NavbarBrand,
      Language: noopComponent,
      Links: NavbarLinks,
      Repo: RepoLink,
      Outlook: OutlookButton,
      Search: hasGlobalComponent("Docsearch") ? resolveComponent("Docsearch") : hasGlobalComponent("SearchBox") ? resolveComponent("SearchBox") : noopComponent
    };
    const getNavbarComponent = (component) => navbarComponentMap[component] ?? (hasGlobalComponent(component) ? resolveComponent(component) : noopComponent);
    return () => {
      var _a2, _b2, _c, _d, _e, _f;
      return [
        h$2("header", {
          key: "navbar",
          id: "navbar",
          class: [
            "vp-navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": themeLocale.value.navbarIcon === false
            }
          ]
        }, [
          h$2("div", { class: "vp-navbar-start" }, [
            h$2(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggleSidebar");
              }
            }),
            (_a2 = slots.startBefore) == null ? void 0 : _a2.call(slots),
            (navbarLayout.value.start || []).map((item) => h$2(getNavbarComponent(item))),
            (_b2 = slots.startAfter) == null ? void 0 : _b2.call(slots)
          ]),
          h$2("div", { class: "vp-navbar-center" }, [
            (_c = slots.centerBefore) == null ? void 0 : _c.call(slots),
            (navbarLayout.value.center || []).map((item) => h$2(getNavbarComponent(item))),
            (_d = slots.centerAfter) == null ? void 0 : _d.call(slots)
          ]),
          h$2("div", { class: "vp-navbar-end" }, [
            (_e = slots.endBefore) == null ? void 0 : _e.call(slots),
            (navbarLayout.value.end || []).map((item) => h$2(getNavbarComponent(item))),
            (_f = slots.endAfter) == null ? void 0 : _f.call(slots),
            h$2(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h$2(NavScreen, {
          show: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots.screenTop) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots.screenBottom) == null ? void 0 : _a3.call(slots);
          }
        })
      ];
    };
  }
});
const SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    /**
     * Sidebar item config
     *
     * 侧边栏项目配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return () => isString(props.config.link) ? (
      // If the item has link, render it as `<AutoLink>`
      h$2(AutoLink, {
        class: [
          "vp-sidebar-link",
          `vp-sidebar-page`,
          { active: isActiveSidebarItem(route, props.config, true) }
        ],
        exact: true,
        config: props.config
      })
    ) : (
      // If the item only has text, render it as `<p>`
      h$2("p", props, [
        h$2(HopeIcon, { icon: props.config.icon }),
        props.config.text
      ])
    );
  }
});
const SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = useRoute();
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsible, children = [], icon, prefix, link, text } = props.config;
      return h$2("section", { class: "vp-sidebar-group" }, [
        h$2(collapsible ? "button" : "p", {
          class: [
            "vp-sidebar-header",
            {
              clickable: collapsible || link,
              exact: exact.value,
              active: active.value
            }
          ],
          ...collapsible ? {
            type: "button",
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}
        }, [
          // Icon
          h$2(HopeIcon, { icon }),
          // Title
          link ? h$2(AutoLink, {
            class: "vp-sidebar-title",
            config: { text, link },
            noExternalLinkIcon: true
          }) : h$2("span", { class: "vp-sidebar-title" }, text),
          // Arrow
          collapsible ? h$2("span", { class: ["vp-arrow", props.open ? "down" : "end"] }) : null
        ]),
        props.open || !collapsible ? h$2(SidebarLinks, { key: prefix, config: children }) : null
      ]);
    };
  }
});
const SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index) => {
      openGroupIndex.value = index === openGroupIndex.value ? -1 : index;
    };
    watch(() => route.path, () => {
      const index = props.config.findIndex((item) => isMatchedSidebarItem(route, item));
      openGroupIndex.value = index;
    }, { immediate: true, flush: "post" });
    return () => h$2("ul", { class: "vp-sidebar-links" }, props.config.map((config, index) => h$2("li", config.type === "group" ? h$2(SidebarGroup, {
      config,
      open: index === openGroupIndex.value,
      onToggle: () => toggleGroup(index)
    }) : h$2(SidebarChild, { config }))));
  }
});
const Sidebar = defineComponent({
  name: "SideBar",
  slots: Object,
  setup(_props, { slots }) {
    const route = useRoute();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const sidebar = shallowRef();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      }, { immediate: true });
    });
    return () => {
      var _a2, _b2, _c;
      return h$2("aside", {
        ref: sidebar,
        id: "sidebar",
        class: [
          "vp-sidebar",
          { "hide-icon": themeLocale.value.sidebarIcon === false }
        ],
        key: "sidebar"
      }, [
        (_a2 = slots.top) == null ? void 0 : _a2.call(slots),
        ((_b2 = slots.default) == null ? void 0 : _b2.call(slots)) || h$2(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots.bottom) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    /**
     * Extra class of container
     *
     * 容器额外类名
     */
    containerClass: { type: String, default: "" },
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: Boolean,
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: Boolean,
    /**
     * Whether disable toc
     */
    noToc: Boolean
  },
  slots: Object,
  setup(props, { slots }) {
    const router = useRouter();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isMobile: isMobile2, isPC } = useWindowSize();
    const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);
    const [isDesktopSidebarCollapsed, toggleDesktopSidebar] = useToggle(false);
    const sidebarItems = useSidebarItems();
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.noNavbar)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const enableSidebar = computed(() => {
      if (props.noSidebar)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const enableToc = computed(() => props.noToc || frontmatter.value.home ? false : frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (
        // Horizontal swipe
        Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40
      )
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
    };
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = getScrollTop();
      if (distance <= 58 || distance < lastDistance)
        hideNavbar.value = false;
      else if (lastDistance + 200 < distance && !isMobileSidebarOpen.value)
        hideNavbar.value = true;
      lastDistance = distance;
    }, 300, true));
    watch(isMobile2, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      const isLocked = useScrollLock(document.body);
      watch(isMobileSidebarOpen, (value) => {
        isLocked.value = value;
      });
      const unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
      onUnmounted(() => {
        isLocked.value = false;
        unregisterRouterHook();
      });
    });
    return () => h$2(hasGlobalComponent("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : T$1, () => h$2("div", {
      class: [
        "theme-container",
        // Classes
        {
          "no-navbar": !enableNavbar.value,
          "no-sidebar": !enableSidebar.value && !(slots.sidebar || slots.sidebarTop || slots.sidebarBottom),
          "has-toc": enableToc.value,
          "hide-navbar": hideNavbar.value,
          "sidebar-collapsed": !isMobile2.value && !isPC.value && isDesktopSidebarCollapsed.value,
          "sidebar-open": isMobile2.value && isMobileSidebarOpen.value
        },
        props.containerClass,
        frontmatter.value.containerClass || ""
      ],
      onTouchStart,
      onTouchEnd
    }, [
      // Navbar
      enableNavbar.value ? h$2(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, {
        startBefore: () => {
          var _a2;
          return (_a2 = slots.navbarStartBefore) == null ? void 0 : _a2.call(slots);
        },
        startAfter: () => {
          var _a2;
          return (_a2 = slots.navbarStartAfter) == null ? void 0 : _a2.call(slots);
        },
        centerBefore: () => {
          var _a2;
          return (_a2 = slots.navbarCenterBefore) == null ? void 0 : _a2.call(slots);
        },
        centerAfter: () => {
          var _a2;
          return (_a2 = slots.navbarCenterAfter) == null ? void 0 : _a2.call(slots);
        },
        endBefore: () => {
          var _a2;
          return (_a2 = slots.navbarEndBefore) == null ? void 0 : _a2.call(slots);
        },
        endAfter: () => {
          var _a2;
          return (_a2 = slots.navbarEndAfter) == null ? void 0 : _a2.call(slots);
        },
        screenTop: () => {
          var _a2;
          return (_a2 = slots.navScreenTop) == null ? void 0 : _a2.call(slots);
        },
        screenBottom: () => {
          var _a2;
          return (_a2 = slots.navScreenBottom) == null ? void 0 : _a2.call(slots);
        }
      }) : null,
      // Sidebar mask
      h$2(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h$2("div", {
        class: "vp-sidebar-mask",
        onClick: () => toggleMobileSidebar(false)
      }) : null),
      // Toggle sidebar button
      h$2(Transition, { name: "fade" }, () => isMobile2.value ? null : h$2("div", {
        class: "toggle-sidebar-wrapper",
        onClick: () => toggleDesktopSidebar()
      }, h$2("span", {
        class: [
          "arrow",
          isDesktopSidebarCollapsed.value ? "end" : "start"
        ]
      }))),
      // Sidebar
      h$2(Sidebar, {}, {
        ...slots.sidebar ? { default: () => slots.sidebar() } : {},
        top: () => {
          var _a2;
          return (_a2 = slots.sidebarTop) == null ? void 0 : _a2.call(slots);
        },
        bottom: () => {
          var _a2;
          return (_a2 = slots.sidebarBottom) == null ? void 0 : _a2.call(slots);
        }
      }),
      slots.default(),
      h$2(PageFooter)
    ]));
  }
});
const FeaturePanel = (props, { slots }) => {
  var _a2, _b2;
  const { bgImage, bgImageDark, bgImageStyle, color, description, image, imageDark, header, features = [] } = props;
  return h$2("div", {
    class: "vp-feature-wrapper"
  }, [
    bgImage ? h$2("div", {
      class: ["vp-feature-bg", { light: bgImageDark }],
      style: [{ "background-image": `url(${bgImage})` }, bgImageStyle]
    }) : null,
    bgImageDark ? h$2("div", {
      class: "vp-feature-bg dark",
      style: [
        { "background-image": `url(${bgImageDark})` },
        bgImageStyle
      ]
    }) : null,
    h$2("div", {
      class: "vp-feature",
      style: color ? { color } : {}
    }, [
      ((_a2 = slots.image) == null ? void 0 : _a2.call(slots, props)) || [
        image ? h$2("img", {
          class: ["vp-feature-image", { light: imageDark }],
          src: withBase(image),
          alt: ""
        }) : null,
        imageDark ? h$2("img", {
          class: "vp-feature-image dark",
          src: withBase(imageDark),
          alt: ""
        }) : null
      ],
      ((_b2 = slots.info) == null ? void 0 : _b2.call(slots, props)) || [
        header ? h$2("h2", { class: "vp-feature-header" }, header) : null,
        description ? h$2("p", {
          class: "vp-feature-description",
          innerHTML: description
        }) : null
      ],
      features.length ? h$2("div", { class: "vp-features" }, features.map(({ icon, title, details, link }) => {
        const children = [
          h$2("h3", { class: "vp-feature-title" }, [
            h$2(HopeIcon, { icon }),
            h$2("span", { innerHTML: title })
          ]),
          h$2("p", {
            class: "vp-feature-details",
            innerHTML: details
          })
        ];
        return link ? isLinkExternal(link) ? h$2("a", {
          class: "vp-feature-item link",
          href: link,
          "aria-label": title,
          target: "_blank"
        }, children) : h$2(RouteLink, {
          class: "vp-feature-item link",
          to: link,
          "aria-label": title
        }, () => children) : h$2("div", { class: "vp-feature-item" }, children);
      })) : null
    ])
  ]);
};
FeaturePanel.displayName = "FeaturePanel";
const DropTransition = defineComponent({
  name: "DropTransition",
  props: {
    /**
     * @description Transition type
     */
    type: {
      type: String,
      default: "single"
    },
    /**
     * @description Transition delay
     */
    delay: { type: Number, default: 0 },
    /**
     * @description Transition duration
     */
    duration: { type: Number, default: 0.25 },
    /**
     * @description appear
     */
    appear: Boolean
  },
  slots: Object,
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => h$2(
      // @ts-ignore
      props.type === "single" ? Transition : TransitionGroup,
      {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      },
      () => slots.default()
    );
  }
});
const FadeSlideY = (_props, { slots }) => h$2(Transition, {
  name: "fade-slide-y",
  mode: "out-in",
  // Handle scrollBehavior with transition
  onBeforeEnter: scrollPromise.resolve,
  onBeforeLeave: scrollPromise.pending
}, () => {
  var _a2;
  return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
});
FadeSlideY.displayName = "FadeSlideY";
const HeroInfo = defineComponent({
  name: "HeroInfo",
  slots: Object,
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isFullScreen = computed(() => frontmatter.value.heroFullScreen ?? false);
    const heroInfo = computed(() => {
      const { heroText, tagline } = frontmatter.value;
      return {
        text: heroText ?? siteLocale.value.title ?? "Hello",
        tagline: tagline ?? siteLocale.value.description ?? "",
        isFullScreen: isFullScreen.value
      };
    });
    const heroImage = computed(() => {
      const { heroText, heroImage: heroImage2, heroImageDark, heroAlt, heroImageStyle } = frontmatter.value;
      return {
        image: heroImage2 ? withBase(heroImage2) : null,
        imageDark: heroImageDark ? withBase(heroImageDark) : null,
        style: heroImageStyle,
        alt: heroAlt || heroText || "",
        isFullScreen: isFullScreen.value
      };
    });
    const bgInfo = computed(() => {
      const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
      return {
        image: isString(bgImage) ? withBase(bgImage) : null,
        imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
        bgStyle: bgImageStyle,
        isFullScreen: isFullScreen.value
      };
    });
    const actions = computed(() => frontmatter.value.actions ?? []);
    return () => {
      var _a2, _b2, _c;
      return h$2("header", { class: ["vp-hero-info-wrapper", { fullscreen: isFullScreen.value }] }, [
        ((_a2 = slots.heroBg) == null ? void 0 : _a2.call(slots, bgInfo.value)) || [
          bgInfo.value.image ? h$2("div", {
            class: ["vp-hero-mask", { light: bgInfo.value.imageDark }],
            style: [
              { "background-image": `url(${bgInfo.value.image})` },
              bgInfo.value.bgStyle
            ]
          }) : null,
          bgInfo.value.imageDark ? h$2("div", {
            class: "vp-hero-mask dark",
            style: [
              {
                "background-image": `url(${bgInfo.value.imageDark})`
              },
              bgInfo.value.bgStyle
            ]
          }) : null
        ],
        h$2("div", { class: "vp-hero-info" }, [
          ((_b2 = slots.heroImage) == null ? void 0 : _b2.call(slots, heroImage.value)) || h$2(DropTransition, { appear: true, type: "group" }, () => [
            heroImage.value.image ? h$2("img", {
              key: "light",
              class: [
                "vp-hero-image",
                { light: heroImage.value.imageDark }
              ],
              style: heroImage.value.style,
              src: heroImage.value.image,
              alt: heroImage.value.alt
            }) : null,
            heroImage.value.imageDark ? h$2("img", {
              key: "dark",
              class: "vp-hero-image dark",
              style: heroImage.value.style,
              src: heroImage.value.imageDark,
              alt: heroImage.value.alt
            }) : null
          ]),
          ((_c = slots.heroInfo) == null ? void 0 : _c.call(slots, heroInfo.value)) ?? h$2("div", { class: "vp-hero-infos" }, [
            heroInfo.value.text ? h$2(DropTransition, { appear: true, delay: 0.04 }, () => h$2("h1", { id: "main-title" }, heroInfo.value.text)) : null,
            heroInfo.value.tagline ? h$2(DropTransition, { appear: true, delay: 0.08 }, () => h$2("p", {
              id: "main-description",
              innerHTML: heroInfo.value.tagline
            })) : null,
            actions.value.length ? h$2(DropTransition, { appear: true, delay: 0.12 }, () => h$2("p", { class: "vp-hero-actions" }, actions.value.map((action) => h$2(AutoLink, {
              class: [
                "vp-hero-action",
                action.type || "default"
              ],
              config: action,
              noExternalLinkIcon: true
            }, action.icon ? {
              before: () => h$2(HopeIcon, { icon: action.icon })
            } : {})))) : null
          ])
        ])
      ]);
    };
  }
});
const HighlightPanel = (props, { slots }) => {
  var _a2, _b2, _c;
  const { bgImage, bgImageDark, bgImageStyle, color, description, image, imageDark, header, highlights = [], type = "un-order" } = props;
  return h$2("div", {
    class: "vp-highlight-wrapper",
    style: color ? { color } : {}
  }, [
    bgImage ? h$2("div", {
      class: ["vp-highlight-bg", { light: bgImageDark }],
      style: [{ "background-image": `url(${bgImage})` }, bgImageStyle]
    }) : null,
    bgImageDark ? h$2("div", {
      class: "vp-highlight-bg dark",
      style: [
        { "background-image": `url(${bgImageDark})` },
        bgImageStyle
      ]
    }) : null,
    h$2("div", { class: "vp-highlight" }, [
      ((_a2 = slots.image) == null ? void 0 : _a2.call(slots, props)) || [
        image ? h$2("img", {
          class: ["vp-highlight-image", { light: imageDark }],
          src: withBase(image),
          alt: ""
        }) : null,
        imageDark ? h$2("img", {
          class: "vp-highlight-image dark",
          src: withBase(imageDark),
          alt: ""
        }) : null
      ],
      ((_b2 = slots.info) == null ? void 0 : _b2.call(slots, props)) || [
        h$2("div", { class: "vp-highlight-info-wrapper" }, h$2("div", { class: "vp-highlight-info" }, [
          header ? h$2("h2", {
            class: "vp-highlight-header",
            innerHTML: header
          }) : null,
          description ? h$2("p", {
            class: "vp-highlight-description",
            innerHTML: description
          }) : null,
          ((_c = slots.highlights) == null ? void 0 : _c.call(slots, highlights)) || h$2(type === "order" ? "ol" : type === "no-order" ? "dl" : "ul", { class: "vp-highlights" }, highlights.map(({ icon, title, details, link }) => {
            const children = [
              h$2(type === "no-order" ? "dt" : "h3", { class: "vp-highlight-title" }, [
                icon ? h$2(HopeIcon, {
                  class: "vp-highlight-icon",
                  icon
                }) : null,
                h$2("span", { innerHTML: title })
              ]),
              details ? h$2(type === "no-order" ? "dd" : "p", {
                class: "vp-highlight-details",
                innerHTML: details
              }) : null
            ];
            return h$2(type === "no-order" ? "div" : "li", {
              class: ["vp-highlight-item-wrapper", { link }]
            }, link ? isLinkExternal(link) ? h$2("a", {
              class: "vp-highlight-item link",
              href: link,
              "aria-label": title,
              target: "_blank"
            }, children) : h$2(RouteLink, {
              class: "vp-highlight-item link",
              to: link,
              "aria-label": title
            }, () => children) : h$2("div", { class: "vp-highlight-item" }, children));
          }))
        ]))
      ]
    ])
  ]);
};
HighlightPanel.displayName = "HighlightPanel";
const MarkdownContent = ({ custom }) => h$2(Content, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
const HomePage = defineComponent({
  name: "HomePage",
  slots: Object,
  setup(_props, { slots }) {
    const pure = usePure();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      const { features: features2 } = frontmatter.value;
      return isArray(features2) ? features2 : null;
    });
    const highlights = computed(() => {
      const { highlights: highlights2 } = frontmatter.value;
      if (isArray(highlights2))
        return highlights2;
      return null;
    });
    return () => {
      var _a2, _b2, _c, _d;
      return h$2("main", {
        id: "main-content",
        class: ["vp-project-home ", { pure: pure.value }],
        "aria-labelledby": frontmatter.value.heroText === null ? "" : "main-title"
      }, [
        (_a2 = slots.top) == null ? void 0 : _a2.call(slots),
        h$2(HeroInfo),
        ((_b2 = highlights.value) == null ? void 0 : _b2.map((highlight) => "features" in highlight ? h$2(FeaturePanel, highlight) : h$2(HighlightPanel, highlight))) || (features.value ? h$2(DropTransition, { appear: true, delay: 0.24 }, () => h$2(FeaturePanel, { features: features.value })) : null),
        (_c = slots.center) == null ? void 0 : _c.call(slots),
        h$2(DropTransition, {
          appear: true,
          delay: 0.32
        }, () => h$2(MarkdownContent)),
        (_d = slots.bottom) == null ? void 0 : _d.call(slots)
      ]);
    };
  }
});
const BreadCrumb = defineComponent({
  name: "BreadCrumb",
  setup() {
    const page = usePageData();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config = shallowRef([]);
    const enable = computed(() => (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config.value.length > 1);
    const iconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const breadcrumbConfig = getAncestorLinks(page.value.path, routeLocale.value).map(({ link, name }) => {
        const { path, meta, notFound } = resolveRoute$1(link);
        if (notFound || meta[PageInfo$1.breadcrumbExclude])
          return null;
        return {
          title: meta[PageInfo$1.shortTitle] || meta[PageInfo$1.title] || name,
          icon: meta[PageInfo$1.icon],
          path
        };
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config.value = breadcrumbConfig;
    };
    onMounted(() => {
      watch(() => page.value.path, getBreadCrumbConfig, { immediate: true });
    });
    return () => h$2("nav", { class: ["vp-breadcrumb", { disable: !enable.value }] }, enable.value ? h$2("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config.value.map((item, index) => h$2("li", {
      class: { "is-active": config.value.length - 1 === index },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h$2(RouteLink, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        // Icon
        iconEnable.value ? h$2(HopeIcon, { icon: item.icon }) : null,
        // Text
        h$2("span", { property: "name" }, item.title || "Unknown")
      ]),
      // Meta
      h$2("meta", { property: "position", content: index + 1 })
    ]))) : []);
  }
});
const resolveFromFrontmatterConfig = (config, current) => config === false || isPlainObject(config) ? config : isString(config) ? resolveLinkInfo(config, true, current) : null;
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if ("children" in item) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
const PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const page = usePageData();
    const navigate = useNavigate();
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, route.path);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page.value.path, -1));
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, route.path);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page.value.path, 1));
    });
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? h$2("nav", { class: "vp-page-nav" }, [
      prevNavLink.value ? h$2(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$2("div", { class: "hint" }, [
            h$2("span", { class: "arrow start" }),
            themeLocale.value.metaLocales.prev
          ]),
          h$2("div", { class: "link" }, [
            h$2(HopeIcon, {
              icon: (_a2 = prevNavLink.value) == null ? void 0 : _a2.icon
            }),
            (_b2 = prevNavLink.value) == null ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h$2(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$2("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h$2("span", { class: "arrow end" })
          ]),
          h$2("div", { class: "link" }, [
            (_a2 = nextNavLink.value) == null ? void 0 : _a2.text,
            h$2(HopeIcon, {
              icon: (_b2 = nextNavLink.value) == null ? void 0 : _b2.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const AuthorIcon = () => h$2(r$1, { name: "author" }, () => h$2("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h$2(r$1, { name: "calendar" }, () => h$2("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon$1 = () => h$2(r$1, { name: "category" }, () => h$2("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon$1.displayName = "CategoryIcon";
const EyeIcon = () => h$2(r$1, { name: "eye" }, () => h$2("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h$2(r$1, { name: "fire" }, () => h$2("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h$2(r$1, { name: "print" }, () => h$2("path", {
  d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
}));
PrintIcon.displayName = "PrintIcon";
const TagIcon$1 = () => h$2(r$1, { name: "tag" }, () => h$2("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon$1.displayName = "TagIcon";
const TimerIcon = () => h$2(r$1, { name: "timer" }, () => h$2("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h$2(r$1, { name: "word" }, () => [
  h$2("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h$2("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a2 = page.value.git) == null ? void 0 : _a2.contributors) ?? null;
  });
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = E$1(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/u, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/u, docsBranch).replace(/:path/u, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const AuthorInfo = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    /**
     * Author information
     *
     * 作者信息
     */
    author: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? h$2("span", {
      class: "page-author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "🖊"}`,
      ...props.pure ? {} : { "data-balloon-pos": "up" }
    }, [
      h$2(AuthorIcon),
      h$2("span", props.author.map((item) => item.url ? h$2("a", {
        class: "page-author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h$2("span", { class: "page-author-item" }, item.name))),
      h$2("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
const CategoryInfo = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    /**
     * Category information
     *
     * 分类信息
     */
    category: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const navigate = useNavigate();
    return () => props.category.length ? h$2("span", {
      class: "page-category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "🌈"}`,
      ...props.pure ? {} : { "data-balloon-pos": "up" }
    }, [
      h$2(CategoryIcon$1),
      props.category.map(({ name, path }) => h$2("span", {
        class: [
          "page-category-item",
          {
            // TODO: magic number 9 is tricky here
            [`category${J$2(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: () => {
          if (path)
            navigate(path);
        }
      }, name)),
      h$2("meta", {
        property: "articleSection",
        content: props.category.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const DateInfo = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object,
      default: null
    },
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: ""
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    return () => props.date ? h$2("span", {
      class: "page-date-info",
      "aria-label": `${metaLocale.value.date}${props.pure ? "" : "📅"}`,
      ...props.pure ? {} : { "data-balloon-pos": "up" }
    }, [
      h$2(CalendarIcon),
      h$2("span", h$2(ClientOnly, () => props.localizedDate || props.date.toLocaleDateString(lang.value))),
      h$2("meta", {
        property: "datePublished",
        // ISO Format Date string
        content: props.date.toISOString() || ""
      })
    ]) : null;
  }
});
const OriginalInfo = defineComponent({
  name: "OriginalInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h$2("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
  }
});
const PageViewInfo = defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const pageviewElement = shallowRef();
    const pageViews = ref(0);
    useMutationObserver(pageviewElement, () => {
    }, { childList: true });
    return () => props.pageview ? h$2("span", {
      class: "page-pageview-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "🔢"}`,
      ...props.pure ? {} : { "data-balloon-pos": "up" }
    }, [
      h$2(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h$2("span", {
        ref: pageviewElement,
        id: "ArtalkPV",
        class: "vp-pageview waline-pageview-count",
        "data-path": isString(props.pageview) ? props.pageview : route.path,
        "data-page-key": isString(props.pageview) ? props.pageview : route.path
      }, "...")
    ]) : null;
  }
});
const ReadingTimeInfo = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Reading time locale
     *
     * 阅读时间语言环境
     */
    readingTimeLocale: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeMeta = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? "PT1M" : `PT${Math.round(minutes)}M`;
    });
    return () => {
      var _a2, _b2;
      return ((_a2 = props.readingTimeLocale) == null ? void 0 : _a2.time) ? h$2("span", {
        class: "page-reading-time-info",
        "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "⌛"}`,
        ...props.pure ? {} : { "data-balloon-pos": "up" }
      }, [
        h$2(TimerIcon),
        h$2("span", (_b2 = props.readingTimeLocale) == null ? void 0 : _b2.time),
        h$2("meta", {
          property: "timeRequired",
          content: readingTimeMeta.value
        })
      ]) : null;
    };
  }
});
const TagInfo = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
      type: Array,
      default: () => []
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const navigate = useNavigate();
    return () => props.tag.length ? h$2("span", {
      class: "page-tag-info",
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
      ...props.pure ? {} : { "data-balloon-pos": "up" }
    }, [
      h$2(TagIcon$1),
      props.tag.map(({ name, path }) => h$2("span", {
        class: [
          "page-tag-item",
          {
            // TODO: magic number 9 is tricky here
            [`tag${J$2(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: () => {
          if (path)
            navigate(path);
        }
      }, name)),
      h$2("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const WordInfo = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Reading time locale
     *
     * 阅读时间语言环境
     */
    readingTimeLocale: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => {
      var _a2, _b2, _c;
      return ((_a2 = props.readingTimeLocale) == null ? void 0 : _a2.words) ? h$2("span", {
        class: "page-word-info",
        "aria-label": `${metaLocale.value.words}${props.pure ? "" : "🔠"}`,
        ...props.pure ? {} : { "data-balloon-pos": "up" }
      }, [
        h$2(WordIcon),
        h$2("span", (_b2 = props.readingTimeLocale) == null ? void 0 : _b2.words),
        h$2("meta", {
          property: "wordCount",
          content: (_c = props.readingTime) == null ? void 0 : _c.words
        })
      ]) : null;
    };
  }
});
const PageInfo = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag"
      ]
    },
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? h$2("div", { class: "page-info" }, props.items.map((item) => h$2(resolveComponent(`${item}Info`), {
      ...props.info,
      pure: pure.value
    }))) : null;
  }
});
const PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { info, items } = usePageInfo();
    return () => h$2("div", { class: "vp-page-title" }, [
      h$2("h1", [
        themeLocale.value.titleIcon === false ? null : h$2(HopeIcon, { icon: frontmatter.value.icon }),
        page.value.title
      ]),
      h$2(PageInfo, {
        info: info.value,
        ...items.value === null ? {} : { items: items.value }
      }),
      h$2("hr")
    ]);
  }
});
const EditIcon = () => h$2(r$1, { name: "edit" }, () => [
  h$2("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h$2("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h$2("footer", { class: "vp-page-meta" }, [
        editLink.value ? h$2("div", { class: "vp-meta-item edit-link" }, h$2(AutoLink, { class: "vp-meta-label", config: editLink.value }, { before: () => h$2(EditIcon) })) : null,
        h$2("div", { class: "vp-meta-item git-info" }, [
          updateTime.value ? h$2("div", { class: "update-time" }, [
            h$2("span", { class: "vp-meta-label" }, `${metaLocales.lastUpdated}: `),
            h$2(ClientOnly, () => h$2("span", { class: "vp-meta-info" }, updateTime.value))
          ]) : null,
          contributors.value && contributors.value.length ? h$2("div", { class: "contributors" }, [
            h$2("span", { class: "vp-meta-label" }, `${metaLocales.contributors}: `),
            contributors.value.map(({ email, name }, index) => [
              h$2("span", { class: "vp-meta-info", title: `email: ${email}` }, name),
              index !== contributors.value.length - 1 ? "," : ""
            ])
          ]) : null
        ])
      ]);
    };
  }
});
const PrintButton = defineComponent({
  name: "PrintButton",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    return () => themeData2.value.print === false ? null : h$2("button", {
      type: "button",
      class: "print-button",
      title: themeLocale.value.metaLocales.print,
      onClick: () => {
        window.print();
      }
    }, h$2(PrintIcon));
  }
});
const TOC = defineComponent({
  name: "TOC",
  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const route = useRoute();
    const page = usePageData();
    const metaLocale = useMetaLocale();
    const [isExpanded, toggleExpanded] = useToggle();
    const toc = shallowRef();
    const tocMarkerTop = ref("-1.7rem");
    const scrollTo = (top) => {
      var _a2;
      (_a2 = toc.value) == null ? void 0 : _a2.scrollTo({ top, behavior: "smooth" });
    };
    const updateTocMarker = () => {
      if (toc.value) {
        const activeTocItem = document.querySelector(".vp-toc-item.active");
        if (activeTocItem)
          tocMarkerTop.value = `${// Active toc item top
          activeTocItem.getBoundingClientRect().top - // Toc top
          toc.value.getBoundingClientRect().top + // Toc scroll top
          toc.value.scrollTop}px`;
        else
          tocMarkerTop.value = "-1.7rem";
      } else {
        tocMarkerTop.value = "-1.7rem";
      }
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
      watch(() => route.fullPath, updateTocMarker, {
        flush: "post",
        immediate: true
      });
    });
    return () => {
      var _a2, _b2;
      const renderHeader = ({ title, level, slug }) => h$2(RouteLink, {
        to: `#${slug}`,
        class: ["vp-toc-link", `level${level}`],
        onClick: () => {
          toggleExpanded();
        }
      }, () => title);
      const renderChildren = (headers, headerDepth) => headers.length && headerDepth > 0 ? h$2("ul", { class: "vp-toc-list" }, headers.map((header) => {
        const children = renderChildren(header.children, headerDepth - 1);
        return [
          h$2("li", {
            class: [
              "vp-toc-item",
              { active: route.hash === `#${header.slug}` }
            ]
          }, renderHeader(header)),
          children ? h$2("li", children) : null
        ];
      })) : null;
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page.value.headers ? renderChildren(page.value.headers, props.headerDepth) : null;
      return tocHeaders ? h$2("div", { class: "vp-toc-placeholder" }, [
        h$2("aside", { id: "toc" }, [
          (_a2 = slots.before) == null ? void 0 : _a2.call(slots),
          h$2("div", {
            class: "vp-toc-header",
            onClick: () => {
              toggleExpanded();
            }
          }, [
            metaLocale.value.toc,
            h$2(PrintButton),
            h$2("div", {
              class: ["arrow", isExpanded.value ? "down" : "end"]
            })
          ]),
          h$2("div", {
            class: ["vp-toc-wrapper", isExpanded.value ? "open" : ""],
            ref: toc
          }, [
            tocHeaders,
            h$2("div", {
              class: "vp-toc-marker",
              style: {
                top: tocMarkerTop.value
              }
            })
          ]),
          (_b2 = slots.after) == null ? void 0 : _b2.call(slots)
        ])
      ]) : null;
    };
  }
});
const NormalPage = defineComponent({
  name: "NormalPage",
  slots: Object,
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkmode } = useDarkmode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => h$2("main", { id: "main-content", class: "vp-page" }, h$2(hasGlobalComponent("LocalEncrypt") ? resolveComponent("LocalEncrypt") : T$1, () => {
      var _a2, _b2, _c, _d;
      return [
        (_a2 = slots.top) == null ? void 0 : _a2.call(slots),
        frontmatter.value.cover ? h$2("div", { class: "page-cover" }, h$2("img", {
          src: withBase(frontmatter.value.cover),
          alt: "",
          "no-view": ""
        })) : null,
        h$2(BreadCrumb),
        h$2(PageTitle),
        tocEnable.value ? h$2(TOC, {
          headerDepth: frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots.tocBefore) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots.tocAfter) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        (_b2 = slots.contentBefore) == null ? void 0 : _b2.call(slots),
        h$2(MarkdownContent),
        (_c = slots.contentAfter) == null ? void 0 : _c.call(slots),
        h$2(PageMeta),
        h$2(PageNav),
        hasGlobalComponent("CommentService") ? h$2(resolveComponent("CommentService"), {
          darkmode: isDarkmode.value
        }) : null,
        (_d = slots.bottom) == null ? void 0 : _d.call(slots)
      ];
    }));
  }
});
const SkipLink = defineComponent({
  name: "SkipLink",
  props: {
    /** @description Content ID */
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const page = usePageData();
    const themeLocale = useThemeLocaleData();
    const skipToMainContent = shallowRef();
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    onMounted(() => {
      watch(() => page.value.path, () => skipToMainContent.value.focus());
    });
    return () => [
      h$2("span", {
        ref: skipToMainContent,
        tabindex: "-1"
      }),
      h$2("a", {
        href: `#${props.content}`,
        class: "vp-skip-link sr-only",
        onClick: focusMainContent
      }, themeLocale.value.routeLocales.skipToContent)
    ];
  }
});
const Layout = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  slots: Object,
  setup(_props, { slots }) {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const { isMobile: isMobile2 } = useWindowSize();
    const sidebarDisplay = computed(() => {
      var _a2, _b2;
      return ((_a2 = themeLocale.value.blog) == null ? void 0 : _a2.sidebarDisplay) || ((_b2 = themeData2.value.blog) == null ? void 0 : _b2.sidebarDisplay) || "mobile";
    });
    return () => [
      h$2(SkipLink),
      h$2(CommonWrapper, {}, {
        default: () => {
          var _a2;
          return ((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || (frontmatter.value.home ? h$2(HomePage) : h$2(FadeSlideY, () => h$2(NormalPage, { key: page.value.path }, {
            top: () => {
              var _a3;
              return (_a3 = slots.top) == null ? void 0 : _a3.call(slots);
            },
            bottom: () => {
              var _a3;
              return (_a3 = slots.bottom) == null ? void 0 : _a3.call(slots);
            },
            contentBefore: () => {
              var _a3;
              return (_a3 = slots.contentBefore) == null ? void 0 : _a3.call(slots);
            },
            contentAfter: () => {
              var _a3;
              return (_a3 = slots.contentAfter) == null ? void 0 : _a3.call(slots);
            },
            tocBefore: () => {
              var _a3;
              return (_a3 = slots.tocBefore) == null ? void 0 : _a3.call(slots);
            },
            tocAfter: () => {
              var _a3;
              return (_a3 = slots.tocAfter) == null ? void 0 : _a3.call(slots);
            }
          })));
        },
        ...sidebarDisplay.value === "none" ? {} : { navScreenBottom: () => h$2(resolveComponent("BloggerInfo")) },
        ...!isMobile2.value && sidebarDisplay.value === "always" ? { sidebar: () => h$2(resolveComponent("BloggerInfo")) } : {}
      })
    ];
  }
});
const NotFoundHint = defineComponent({
  name: "NotFoundHint",
  setup() {
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["notFoundMsg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    return () => h$2("div", { class: "not-found-hint" }, [
      h$2("p", { class: "error-code" }, "404"),
      h$2("h1", { class: "error-title" }, themeLocale.value.routeLocales["notFoundTitle"]),
      h$2("p", { class: "error-hint" }, getMsg())
    ]);
  }
});
const NotFound = defineComponent({
  name: "NotFound",
  slots: Object,
  setup(_props, { slots }) {
    const router = useRouter();
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    return () => [
      h$2(SkipLink),
      h$2(CommonWrapper, { noSidebar: true }, () => {
        var _a2;
        return h$2("main", { id: "main-content", class: "vp-page not-found" }, ((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || [
          h$2(NotFoundHint),
          h$2("div", { class: "actions" }, [
            h$2("button", {
              type: "button",
              class: "action-button",
              onClick: () => {
                window.history.go(-1);
              }
            }, themeLocale.value.routeLocales.back),
            h$2("button", {
              type: "button",
              class: "action-button",
              onClick: () => {
                void router.push(themeLocale.value.home ?? routeLocale.value);
              }
            }, themeLocale.value.routeLocales.home)
          ])
        ]);
      })
    ];
  }
});
const icons = {};
const categoriesMap = { "category": { "/": { "path": "/category/", "map": { "使用指南": { "path": "/category/使用指南/", "indexes": [0, 1, 2, 3, 4] }, "指南": { "path": "/category/指南/", "indexes": [5] }, "影视点播": { "path": "/category/影视点播/", "indexes": [6, 7, 8, 9, 10, 11, 12, 13] }, "网络直播": { "path": "/category/网络直播/", "indexes": [14] }, "加密": { "path": "/category/加密/", "indexes": [15] }, "公开": { "path": "/category/公开/", "indexes": [16] } } } }, "tag": { "/": { "path": "/tag/", "map": { "禁用": { "path": "/tag/禁用/", "indexes": [1] }, "加密": { "path": "/tag/加密/", "indexes": [2] }, "布局": { "path": "/tag/布局/", "indexes": [5] }, "Markdown": { "path": "/tag/markdown/", "indexes": [3] }, "页面配置": { "path": "/tag/页面配置/", "indexes": [0] }, "使用指南": { "path": "/tag/使用指南/", "indexes": [0] }, "快手": { "path": "/tag/快手/", "indexes": [6, 10] }, "广场舞": { "path": "/tag/广场舞/", "indexes": [6, 10] }, "林正英": { "path": "/tag/林正英/", "indexes": [7] }, "短剧": { "path": "/tag/短剧/", "indexes": [8] }, "小姐姐": { "path": "/tag/小姐姐/", "indexes": [9, 11, 12] } } } } };
const store = ["/demo/page.html", "/demo/disable.html", "/demo/encrypt.html", "/demo/markdown.html", "/demo/", "/demo/layout.html", "/tv/ks.xjj.html", "/vod/lock/lock.movie.html", "/vod/lock/lock.vod.html", "/vod/open/ks.dance.html", "/vod/open/ks.gcw.html", "/vod/open/ks.meitui.html", "/vod/open/ks.xjj.html", "/vod/", "/tv/", "/vod/lock/", "/vod/open/", "/slide.html", "/guide/", "/guide/bar/baz.html", "/guide/bar/", "/guide/foo/ray.html", "/guide/foo/"];
const categoryMapRef = shallowRef(categoriesMap);
readonly(categoryMapRef);
const useBlogCategory = (key) => {
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  const routeLocale = useRouteLocale();
  return computed(() => {
    var _a2;
    const mapKey = key ?? ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.key) ?? "";
    if (!mapKey) {
      console.warn(`useBlogCategory: key not found`);
      return { path: "/", map: {} };
    }
    if (!categoryMapRef.value[mapKey])
      throw new Error(`useBlogCategory: key ${mapKey} is invalid`);
    const currentMap = categoryMapRef.value[mapKey][routeLocale.value];
    const result = {
      path: currentMap.path,
      map: {}
    };
    for (const category in currentMap.map) {
      const categoryMap = currentMap.map[category];
      result.map[category] = { path: categoryMap.path, items: [] };
      for (const index of categoryMap.indexes) {
        const { path, meta } = resolveRoute$1(store[index]);
        result.map[category].items.push({
          path,
          info: meta
        });
      }
      if (page.value.path === categoryMap.path)
        result.currentItems = result.map[category].items;
    }
    return result;
  });
};
const typesMap = { "article": { "/": { "path": "/article/", "indexes": [0, 6, 7, 8, 9, 10, 11, 12, 17, 1, 2, 5, 3, 4, 18, 14, 13, 19, 20, 21, 22, 15, 16] } }, "star": { "/": { "path": "/star/", "indexes": [0] } }, "timeline": { "/": { "path": "/timeline/", "indexes": [0, 6, 7, 8, 9, 10, 11, 12] } } };
const typeMapRef = shallowRef(typesMap);
readonly(typeMapRef);
const useBlogType = (key) => {
  const frontmatter = usePageFrontmatter();
  const routeLocale = useRouteLocale();
  return computed(() => {
    var _a2;
    const mapKey = key ?? ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.key) ?? "";
    if (!mapKey) {
      console.warn(`useBlogType: key not found`);
      return { path: "/", items: [] };
    }
    if (!typeMapRef.value[mapKey])
      throw new Error(`useBlogType: key ${key} is invalid`);
    const configMap = typeMapRef.value[mapKey][routeLocale.value];
    const result = {
      path: configMap.path,
      items: []
    };
    for (const index of configMap.indexes) {
      const { path, meta } = resolveRoute$1(store[index]);
      result.items.push({
        path,
        info: meta
      });
    }
    return result;
  });
};
const timelineSymbol = Symbol("");
const useTimeline = () => {
  const timeline = inject(timelineSymbol);
  if (!timeline)
    throw new Error("useTimeline() is called without provider.");
  return timeline;
};
const setupTimeline = () => {
  const timeline = useBlogType("timeline");
  const timelineItems = computed(() => {
    const timelineItems2 = [];
    timeline.value.items.forEach(({ info, path }) => {
      const result = getDate(info[ArticleInfo.date]);
      if (result) {
        const year = result.getFullYear();
        const month = result.getMonth() + 1;
        const day = result.getDate();
        if (!timelineItems2[0] || timelineItems2[0].year !== year)
          timelineItems2.unshift({ year, items: [] });
        timelineItems2[0].items.push({
          date: `${month}/${day}`,
          info,
          path
        });
      }
    });
    return {
      ...timeline.value,
      config: timelineItems2.reverse()
    };
  });
  provide(timelineSymbol, timelineItems);
};
const articlesSymbol = Symbol("");
const useArticles = () => {
  const articles = inject(articlesSymbol);
  if (!articles)
    throw new Error("useArticles() is called without provider.");
  return articles;
};
const setupArticles = () => {
  const articles = useBlogType("article");
  provide(articlesSymbol, articles);
};
const categoryMapSymbol = Symbol.for("categoryMap");
const useCategoryMap = () => {
  const categoryMap = inject(categoryMapSymbol);
  if (!categoryMap)
    throw new Error("useCategoryMap() is called without provider.");
  return categoryMap;
};
const setupCategoryMap = () => {
  const categoryMap = useBlogCategory("category");
  provide(categoryMapSymbol, categoryMap);
};
const starsSymbol = Symbol("");
const useStars = () => {
  const stars = inject(starsSymbol);
  if (!stars)
    throw new Error("useStars() is called without provider.");
  return stars;
};
const setupStars = () => {
  const stars = useBlogType("star");
  provide(starsSymbol, stars);
};
const tagMapSymbol = Symbol.for("tagMap");
const useTagMap = () => {
  const tagMap = inject(tagMapSymbol);
  if (!tagMap)
    throw new Error("useTagMap() is called without provider.");
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = useBlogCategory("tag");
  provide(tagMapSymbol, tagMap);
};
const setupBlog = () => {
  setupArticles();
  setupCategoryMap();
  setupStars();
  setupTagMap();
  setupTimeline();
};
const useBlogOptions = () => {
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => ({
    ...themeData2.value.blog,
    ...themeLocale.value.blog
  }));
};
const useArticleAuthor = (info) => {
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const { [ArticleInfo.author]: author } = info.value;
    if (author)
      return te$1(author);
    if (author === false)
      return [];
    return te$1(themeLocale.value.author, false);
  });
};
const useArticleCategory = (info) => {
  const categoryMap = useCategoryMap();
  return computed(() => ne(info.value[ArticleInfo.category]).map((name) => ({
    name,
    path: categoryMap.value.map[name].path
  })));
};
const useArticleTag = (info) => {
  const tagMap = useTagMap();
  return computed(() => ie(info.value[ArticleInfo.tag]).map((name) => ({
    name,
    path: tagMap.value.map[name].path
  })));
};
const useArticleDate = (info) => computed(() => {
  const { [ArticleInfo.date]: timestamp } = info.value;
  return getDate(timestamp);
});
const useArticleInfo = (props) => {
  const articleInfo = toRef(props, "info");
  const blogOptions = useBlogOptions();
  const author = useArticleAuthor(articleInfo);
  const category = useArticleCategory(articleInfo);
  const tag = useArticleTag(articleInfo);
  const date = useArticleDate(articleInfo);
  const readingTimeLocaleConfig = useReadingTimeLocaleConfig();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: articleInfo.value[ArticleInfo.localizedDate] || "",
    tag: tag.value,
    isOriginal: articleInfo.value[ArticleInfo.isOriginal] || false,
    readingTime: articleInfo.value[ArticleInfo.readingTime] || null,
    readingTimeLocale: articleInfo.value[ArticleInfo.readingTime] && readingTimeLocaleConfig.value ? getReadingTimeLocale(articleInfo.value[ArticleInfo.readingTime], readingTimeLocaleConfig.value) : null,
    pageview: props.path
  }));
  const items = computed(() => blogOptions.value.articleInfo);
  return { info, items };
};
const SocialMedia = defineComponent({
  name: "SocialMedia",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => {
      const config = blogOptions.value.medias;
      return config ? entries(config).map(([media, url]) => ({
        name: media,
        icon: icons[media],
        url
      })) : [];
    });
    return () => mediaLinks.value.length ? h$2("div", { class: "vp-social-medias" }, mediaLinks.value.map(({ name, icon, url }) => h$2("a", {
      class: "vp-social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name,
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: icon
    }))) : null;
  }
});
const BloggerInfo = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimeline();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a2;
      return blogOptions.value.name || ((_a2 = te$1(themeLocale.value.author)[0]) == null ? void 0 : _a2.name) || siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => {
      const { article, category, tag, timeline } = locale.value;
      const countItems = [
        [articles.value.path, articles.value.items.length, article],
        [categoryMap.value.path, keys(categoryMap.value.map).length, category],
        [tagMap.value.path, keys(tagMap.value.map).length, tag],
        [timelines.value.path, timelines.value.items.length, timeline]
      ];
      return h$2("div", {
        class: "vp-blogger-info",
        vocab: "https://schema.org/",
        typeof: "Person"
      }, [
        h$2("div", {
          class: "vp-blogger",
          ...intro.value ? {
            style: { cursor: "pointer" },
            "aria-label": locale.value.intro,
            "data-balloon-pos": "down",
            role: "link",
            onClick: () => navigate(intro.value)
          } : {}
        }, [
          bloggerAvatar.value ? h$2("img", {
            class: [
              "vp-blogger-avatar",
              { round: blogOptions.value.roundAvatar }
            ],
            src: withBase(bloggerAvatar.value),
            property: "image",
            alt: "Blogger Avatar",
            loading: "lazy"
          }) : null,
          bloggerName.value ? h$2("div", { class: "vp-blogger-name", property: "name" }, bloggerName.value) : null,
          blogOptions.value.description ? h$2("div", {
            class: "vp-blogger-description",
            innerHTML: blogOptions.value.description
          }) : null,
          intro.value ? h$2("meta", { property: "url", content: withBase(intro.value) }) : null
        ]),
        h$2("div", { class: "vp-blog-counts" }, countItems.map(([path, count, locale2]) => h$2(RouteLink, { class: "vp-blog-count", to: path }, () => [
          h$2("div", { class: "count" }, count),
          h$2("div", locale2)
        ]))),
        h$2(SocialMedia)
      ]);
    };
  }
});
const CategoryIcon = () => h$2(r$1, { name: "category" }, () => h$2("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => h$2(r$1, { name: "tag" }, () => h$2("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => h$2(r$1, { name: "timeline" }, () => h$2("path", {
  d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"
}));
TimelineIcon.displayName = "TimelineIcon";
const SlideIcon = () => h$2(r$1, { name: "slides" }, () => h$2("path", {
  d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"
}));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => h$2(r$1, { name: "sticky" }, () => [
  h$2("path", {
    d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"
  })
]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => h$2(r$1, { name: "article" }, () => h$2("path", {
  d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"
}));
ArticleIcon.displayName = "ArticleIcon";
const BookIcon = () => h$2(r$1, { name: "book" }, () => h$2("path", {
  d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"
}));
BookIcon.displayName = "BookIcon";
const LinkIcon = () => h$2(r$1, { name: "link" }, () => h$2("path", {
  d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"
}));
LinkIcon.displayName = "LinkIcon";
const ProjectIcon = () => h$2(r$1, { name: "project" }, () => h$2("path", {
  d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"
}));
ProjectIcon.displayName = "ProjectIcon";
const FriendIcon = () => h$2(r$1, { name: "friend" }, () => h$2("path", {
  d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"
}));
FriendIcon.displayName = "FriendIcon";
const SlideDownIcon = () => h$2(r$1, { name: "slide-down" }, () => h$2("path", {
  d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"
}));
SlideDownIcon.displayName = "SlideDownIcon";
const EmptyIcon = () => h$2("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  class: "empty-icon",
  viewBox: "0 0 1024 1024",
  innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
});
EmptyIcon.displayName = "EmptyIcon";
const LockIcon = () => h$2(r$1, { name: "lock" }, () => h$2("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
const ArticleItem = defineComponent({
  name: "ArticleItem",
  props: {
    /**
     * Article information
     *
     * 文章信息
     */
    info: {
      type: Object,
      required: true
    },
    /**
     * Article path
     *
     * 文章路径
     */
    path: { type: String, required: true }
  },
  slots: Object,
  setup(props, { slots }) {
    const articleInfo = toRef(props, "info");
    const { info: pageInfo, items } = useArticleInfo(props);
    return () => {
      var _a2, _b2, _c;
      const { [PageInfo$1.title]: title, [ArticleInfo.type]: type, [ArticleInfo.isEncrypted]: isEncrypted = false, [ArticleInfo.cover]: cover, [ArticleInfo.excerpt]: excerpt, [ArticleInfo.sticky]: sticky } = articleInfo.value;
      const info = pageInfo.value;
      return h$2("div", { class: "vp-article-wrapper" }, h$2("article", {
        class: "vp-article-item",
        vocab: "https://schema.org/",
        typeof: "Article"
      }, [
        ((_a2 = slots.cover) == null ? void 0 : _a2.call(slots, { cover })) || (cover ? [
          h$2("img", {
            class: "vp-article-cover",
            src: withBase(cover),
            alt: "",
            loading: "lazy"
          }),
          h$2("meta", {
            property: "image",
            content: withBase(cover)
          })
        ] : []),
        sticky ? h$2(StickyIcon) : null,
        h$2(RouteLink, { to: props.path }, () => {
          var _a3;
          return ((_a3 = slots.title) == null ? void 0 : _a3.call(slots, { title, isEncrypted, type })) || h$2("header", { class: "vp-article-title" }, [
            isEncrypted ? h$2(LockIcon) : null,
            type === PageType.slide ? h$2(SlideIcon) : null,
            h$2("span", { property: "headline" }, title)
          ]);
        }),
        ((_b2 = slots.excerpt) == null ? void 0 : _b2.call(slots, { excerpt })) || (excerpt ? h$2("div", {
          class: "vp-article-excerpt",
          innerHTML: excerpt
        }) : null),
        h$2("hr", { class: "vp-article-hr" }),
        ((_c = slots.info) == null ? void 0 : _c.call(slots, { info })) || h$2(PageInfo, {
          info,
          ...items.value ? { items: items.value } : {}
        })
      ]));
    };
  }
});
const Pagination = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: {
    /**
     * Number of total items
     *
     * 项目总数
     */
    total: { type: Number, default: 10 },
    /**
     * Items per page
     *
     * 每页项目数
     */
    perPage: { type: Number, default: 10 },
    /**
     * Current page number
     *
     * 当前页面
     */
    current: { type: Number, default: 1 }
  },
  emits: ["updateCurrentPage"],
  setup(props, { emit }) {
    let message;
    const themeLocale = useThemeLocaleData();
    const input = ref("");
    const locale = computed(() => themeLocale.value.paginationLocales);
    const totalPages = computed(() => Math.ceil(props.total / props.perPage));
    const enable = computed(() => Boolean(totalPages.value) && totalPages.value !== 1);
    const displayLeftEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current > 4;
    });
    const displayRightEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current < totalPages.value - 3;
    });
    const indexes = computed(() => {
      const { current: currentPage } = props;
      let min = 1;
      let max2 = totalPages.value;
      const arr = [];
      if (totalPages.value >= 7) {
        if (currentPage <= 4 && currentPage < totalPages.value - 3) {
          min = 1;
          max2 = 5;
        } else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
          max2 = totalPages.value;
          min = totalPages.value - 4;
        } else if (totalPages.value > 7) {
          min = currentPage - 2;
          max2 = currentPage + 2;
        }
      }
      for (let i2 = min; i2 <= max2; i2++)
        arr.push(i2);
      return arr;
    });
    const navigate = (page) => emit("updateCurrentPage", page);
    const jumpPage = (index) => {
      const pageNum = parseInt(index, 10);
      if (pageNum <= totalPages.value && pageNum > 0)
        navigate(pageNum);
      else
        message.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${locale.value.errorText.replace(/\$page/gu, totalPages.value.toString())}`);
    };
    onMounted(() => {
      message = new K$1();
    });
    return () => h$2("div", { class: "vp-pagination" }, enable.value ? h$2("nav", { class: "vp-pagination-list" }, [
      h$2("div", { class: "vp-pagination-number " }, [
        // Prev button
        props.current > 1 ? h$2("div", {
          class: "prev",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current - 1)
        }, locale.value.prev) : null,
        // Left ellipsis
        displayLeftEllipsis.value ? [
          h$2("div", {
            role: "navigation",
            onClick: () => navigate(1)
          }, 1),
          h$2("div", { class: "ellipsis" }, "...")
        ] : null,
        // Numbers
        indexes.value.map((num) => h$2("div", {
          key: num,
          class: { active: props.current === num },
          role: "navigation",
          onClick: () => navigate(num)
        }, num)),
        // Right ellipsis
        displayRightEllipsis.value ? [
          h$2("div", { class: "ellipsis" }, "..."),
          h$2("div", {
            role: "navigation",
            onClick: () => navigate(totalPages.value)
          }, totalPages.value)
        ] : null,
        // Next button
        props.current < totalPages.value ? h$2("div", {
          class: "next",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current + 1)
        }, locale.value.next) : null
      ]),
      h$2("div", { class: "vp-pagination-nav" }, [
        h$2("label", { for: "navigation-text" }, `${locale.value.navigate}: `),
        h$2("input", {
          id: "navigation-text",
          value: input.value,
          onInput: ({ target }) => {
            input.value = target.value;
          },
          onKeydown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              jumpPage(input.value);
            }
          }
        }),
        h$2("button", {
          class: "vp-pagination-button",
          type: "button",
          role: "navigation",
          title: locale.value.action,
          onClick: () => jumpPage(input.value)
        }, locale.value.action)
      ])
    ]) : []);
  }
});
const ArticleList = defineComponent({
  name: "ArticleList",
  props: {
    /**
     * Articles
     *
     * 文章项目
     */
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const blogOptions = useBlogOptions();
    const currentPage = ref(1);
    const articlePerPage = computed(() => blogOptions.value.articlePerPage || 10);
    const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
    const updatePage = async (page) => {
      currentPage.value = page;
      const query = { ...route.query };
      const needUpdate = !(query["page"] === page.toString() || // Page equal as query
      // Page is 1 and query is empty
      page === 1 && !query["page"]);
      if (needUpdate) {
        if (page === 1)
          delete query["page"];
        else
          query["page"] = page.toString();
        await router.push({ path: route.path, query });
      }
    };
    onMounted(() => {
      const { page } = route.query;
      void updatePage(page ? Number(page) : 1);
      watch(currentPage, () => {
        const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
        setTimeout(() => {
          window.scrollTo(0, distance);
        }, 100);
      });
    });
    return () => h$2("div", { id: "article-list", class: "vp-article-list", role: "feed" }, currentArticles.value.length ? [
      ...currentArticles.value.map(({ info, path }, index) => h$2(DropTransition, { appear: true, delay: index * 0.04 }, () => h$2(ArticleItem, { key: path, info, path }))),
      h$2(Pagination, {
        current: currentPage.value,
        perPage: articlePerPage.value,
        total: props.items.length,
        onUpdateCurrentPage: updatePage
      })
    ] : h$2(EmptyIcon));
  }
});
const CategoryList = defineComponent({
  name: "CategoryList",
  setup() {
    const page = usePageData();
    const categoryMap = useCategoryMap();
    return () => h$2("ul", { class: "vp-category-list" }, entries(categoryMap.value.map).sort(([, a2], [, b2]) => b2.items.length - a2.items.length).map(([category, { path, items }]) => h$2("li", {
      class: [
        "vp-category",
        // TODO: magic number 9 is tricky here
        `vp-category${J$2(category, 9)}`,
        { active: path === page.value.path }
      ]
    }, h$2(RouteLink, { to: path }, () => [
      category,
      h$2("span", { class: "count" }, items.length)
    ]))));
  }
});
const TagList = defineComponent({
  name: "TagList",
  setup() {
    const frontmatter = usePageFrontmatter();
    const tagMap = useTagMap();
    const isActive = (name) => {
      var _a2;
      return name === ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.name);
    };
    return () => h$2("ul", { class: "tag-list-wrapper" }, entries(tagMap.value.map).sort(([, a2], [, b2]) => b2.items.length - a2.items.length).map(([tag, { path, items }]) => h$2("li", {
      class: [
        "tag",
        // TODO: magic number 9 is tricky here
        `tag${J$2(tag, 9)}`,
        { active: isActive(tag) }
      ]
    }, h$2(RouteLink, { to: path }, () => [
      tag,
      h$2("span", { class: "tag-num" }, items.length)
    ]))));
  }
});
const TimelineList = defineComponent({
  name: "TimelineList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const timelines = useTimeline();
    const navigate = useNavigate();
    const hint = computed(() => themeLocale.value.blogLocales.timeline);
    return () => h$2("div", { class: "timeline-list-wrapper" }, [
      h$2("div", {
        class: "timeline-list-title",
        onClick: () => navigate(timelines.value.path)
      }, [
        h$2(TimelineIcon),
        h$2("span", { class: "num" }, timelines.value.items.length),
        hint.value
      ]),
      h$2("hr"),
      h$2("div", { class: "timeline-content" }, h$2("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index) => h$2(DropTransition, { appear: true, delay: 0.08 * (index + 1) }, () => h$2("li", [
        h$2("h3", { class: "timeline-year" }, year),
        h$2("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h$2("li", { class: "timeline-item" }, [
          h$2("span", { class: "timeline-date" }, date),
          h$2(RouteLink, { class: "timeline-title", to: path }, () => info[PageInfo$1.title])
        ])))
      ])))))
    ]);
  }
});
const buttons = {
  article: ArticleIcon,
  category: CategoryIcon,
  tag: TagIcon,
  timeline: TimelineIcon
};
const InfoList = defineComponent({
  name: "InfoList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap = useCategoryMap();
    const categoryNumber = computed(() => keys(categoryMap.value.map).length);
    const stars = useStars();
    const tagMap = useTagMap();
    const tagNumber = computed(() => keys(tagMap.value.map).length);
    const navigate = useNavigate();
    const activeType = ref("article");
    const locale = computed(() => themeLocale.value.blogLocales);
    return () => h$2("div", { class: "vp-blog-infos" }, [
      h$2("div", { class: "vp-blog-type-switcher" }, entries(buttons).map(([key, Icon]) => h$2("button", {
        type: "button",
        class: "vp-blog-type-button",
        onClick: () => {
          activeType.value = key;
        }
      }, h$2("div", {
        class: [
          "icon-wrapper",
          { active: activeType.value === key }
        ],
        "aria-label": locale.value[key],
        "data-balloon-pos": "up"
      }, h$2(Icon))))),
      h$2(DropTransition, () => (
        // Star articles
        activeType.value === "article" ? h$2("div", { class: "vp-star-article-wrapper" }, [
          h$2("div", {
            class: "title",
            onClick: () => navigate(articles.value.path)
          }, [
            h$2(ArticleIcon),
            h$2("span", { class: "num" }, articles.value.items.length),
            locale.value.article
          ]),
          h$2("hr"),
          stars.value.items.length ? h$2("ul", { class: "vp-star-articles" }, stars.value.items.map(({ info, path }, index) => h$2(DropTransition, { appear: true, delay: 0.08 * (index + 1) }, () => h$2("li", { class: "vp-star-article" }, h$2(RouteLink, { to: path }, () => info[PageInfo$1.title]))))) : h$2("div", { class: "vp-star-article-empty" }, locale.value.empty.replace("$text", locale.value.star))
        ]) : activeType.value === "category" ? h$2("div", { class: "vp-category-wrapper" }, [
          categoryNumber.value ? [
            h$2("div", {
              class: "title",
              onClick: () => navigate(categoryMap.value.path)
            }, [
              h$2(CategoryIcon),
              h$2("span", { class: "num" }, categoryNumber.value),
              locale.value.category
            ]),
            h$2("hr"),
            h$2(DropTransition, { delay: 0.04 }, () => h$2(CategoryList))
          ] : h$2("div", { class: "vp-category-empty" }, locale.value.empty.replace("$text", locale.value.category))
        ]) : activeType.value === "tag" ? h$2("div", { class: "vp-tag-wrapper" }, [
          tagNumber.value ? [
            h$2("div", {
              class: "title",
              onClick: () => navigate(tagMap.value.path)
            }, [
              h$2(TagIcon),
              h$2("span", { class: "num" }, tagNumber.value),
              locale.value.tag
            ]),
            h$2("hr"),
            h$2(DropTransition, { delay: 0.04 }, () => h$2(TagList))
          ] : h$2("div", { class: "vp-tag-empty" }, locale.value.empty.replace("$text", locale.value.tag))
        ]) : h$2(DropTransition, () => h$2(TimelineList))
      ))
    ]);
  }
});
const BlogWrapper = defineComponent({
  name: "BlogWrapper",
  slots: Object,
  setup(_props, { slots }) {
    const { isMobile: isMobile2 } = useWindowSize();
    return () => [
      h$2(SkipLink),
      h$2(CommonWrapper, { noSidebar: true, noToc: true }, {
        default: () => slots.default(),
        navScreenBottom: () => h$2(BloggerInfo),
        ...isMobile2.value ? { sidebar: () => h$2(InfoList) } : {}
      })
    ];
  }
});
const InfoPanel = () => h$2("aside", { class: "vp-blog-info-wrapper" }, [
  h$2(DropTransition, () => h$2(BloggerInfo)),
  h$2(DropTransition, { delay: 0.04 }, () => h$2(InfoList))
]);
InfoPanel.displayName = "InfoPanel";
const BlogCategory = defineComponent({
  name: "BlogPage",
  setup() {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const categoryMap = useCategoryMap();
    const tagMap = useTagMap();
    return () => {
      const { key = "", name = "" } = frontmatter.value.blog || {};
      const items = name ? key === "category" ? categoryMap.value.map[name].items : key === "tag" ? tagMap.value.map[name].items : [] : [];
      return h$2(BlogWrapper, () => h$2("div", { class: "vp-page vp-blog" }, h$2("div", { class: "blog-page-wrapper" }, [
        h$2("main", { id: "main-content", class: "vp-blog-main" }, [
          h$2(DropTransition, () => key === "category" ? h$2(CategoryList) : key === "tag" ? h$2(TagList) : null),
          name ? h$2(DropTransition, { appear: true, delay: 0.24 }, () => h$2(ArticleList, {
            key: page.value.path,
            items
          })) : null
        ]),
        h$2(DropTransition, { delay: 0.16 }, () => h$2(InfoPanel, { key: "blog" }))
      ])));
    };
  }
});
const DEFAULT_HERO = "//theme-hope-assets.vuejs.press/hero/default.jpg";
const BlogHero = defineComponent({
  name: "BlogHero",
  slots: Object,
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const hero = shallowRef();
    const isFullScreen = computed(() => frontmatter.value.heroFullScreen ?? false);
    const heroInfo = computed(() => {
      const { heroText, heroImage, heroImageDark, heroAlt, heroImageStyle, tagline } = frontmatter.value;
      return {
        text: heroText ?? siteLocale.value.title ?? "Hello",
        tagline: tagline ?? "",
        image: heroImage ? withBase(heroImage) : null,
        imageDark: heroImageDark ? withBase(heroImageDark) : null,
        alt: heroAlt || heroText || "",
        style: heroImageStyle,
        isFullScreen: isFullScreen.value
      };
    });
    const bgInfo = computed(() => {
      const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
      return {
        image: isString(bgImage) ? withBase(bgImage) : bgImage === false ? null : DEFAULT_HERO,
        imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
        bgStyle: bgImageStyle,
        isFullScreen: isFullScreen.value
      };
    });
    return () => {
      var _a2, _b2;
      return frontmatter.value.hero === false ? null : h$2("div", {
        ref: hero,
        class: [
          "vp-blog-hero",
          {
            fullscreen: isFullScreen.value,
            "no-bg": !bgInfo.value.image
          }
        ]
      }, [
        ((_a2 = slots.heroBg) == null ? void 0 : _a2.call(slots, bgInfo.value)) || [
          bgInfo.value.image ? h$2("div", {
            class: [
              "vp-blog-mask",
              { light: bgInfo.value.imageDark }
            ],
            style: [
              {
                background: `url(${bgInfo.value.image}) center/cover no-repeat`
              },
              bgInfo.value.bgStyle
            ]
          }) : null,
          bgInfo.value.imageDark ? h$2("div", {
            class: "vp-blog-mask dark",
            style: [
              {
                background: `url(${bgInfo.value.imageDark}) center/cover no-repeat`
              },
              bgInfo.value.bgStyle
            ]
          }) : null
        ],
        ((_b2 = slots.heroInfo) == null ? void 0 : _b2.call(slots, heroInfo.value)) || [
          h$2(DropTransition, { appear: true, type: "group", delay: 0.04 }, () => [
            heroInfo.value.image ? h$2("img", {
              key: "light",
              class: [
                "vp-blog-hero-image",
                { light: heroInfo.value.imageDark }
              ],
              style: heroInfo.value.style,
              src: heroInfo.value.image,
              alt: heroInfo.value.alt
            }) : null,
            heroInfo.value.imageDark ? h$2("img", {
              key: "dark",
              class: "vp-blog-hero-image dark",
              style: heroInfo.value.style,
              src: heroInfo.value.imageDark,
              alt: heroInfo.value.alt
            }) : null
          ]),
          h$2(DropTransition, { appear: true, delay: 0.08 }, () => heroInfo.value.text ? h$2("h1", { class: "vp-blog-hero-title" }, heroInfo.value.text) : null),
          h$2(DropTransition, { appear: true, delay: 0.12 }, () => heroInfo.value.tagline ? h$2("p", {
            class: "vp-blog-hero-description",
            innerHTML: heroInfo.value.tagline
          }) : null)
        ],
        heroInfo.value.isFullScreen ? h$2("button", {
          type: "button",
          class: "slide-down-button",
          onClick: () => {
            window.scrollTo({
              top: hero.value.clientHeight,
              behavior: "smooth"
            });
          }
        }, [h$2(SlideDownIcon), h$2(SlideDownIcon)]) : null
      ]);
    };
  }
});
const AVAILABLE_PROJECT_TYPES = [
  "link",
  "article",
  "book",
  "project",
  "friend"
];
const ProjectPanel = defineComponent({
  name: "ProjectPanel",
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  props: {
    /** 项目列表 */
    items: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    const navigate = useNavigate();
    const renderIcon = (icon = "", alt = "icon") => {
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return h$2(resolveComponent(`${icon}-icon`));
      if (isLinkHttp(icon))
        return h$2("img", { class: "vp-project-image", src: icon, alt });
      if (isLinkAbsolute(icon))
        return h$2("img", {
          class: "vp-project-image",
          src: withBase(icon),
          alt
        });
      return h$2(HopeIcon, { icon });
    };
    return () => h$2("div", { class: "vp-project-panel" }, props.items.map(({ icon, link, name, desc }, index) => h$2("div", {
      class: [
        "vp-project-card",
        // TODO: magic number 9 is tricky here
        { [`project${index % 9}`]: !pure.value }
      ],
      onClick: () => navigate(link)
    }, [
      renderIcon(icon, name),
      h$2("div", { class: "vp-project-name" }, name),
      h$2("div", { class: "vp-project-desc" }, desc)
    ])));
  }
});
const BlogHome = defineComponent({
  name: "BlogHome",
  setup() {
    const articles = useArticles();
    const frontmatter = usePageFrontmatter();
    const projects = computed(() => frontmatter.value.projects ?? []);
    return () => h$2("div", { class: "vp-page vp-blog" }, [
      h$2(BlogHero),
      h$2("div", { class: "blog-page-wrapper" }, [
        h$2("main", { id: "main-content", class: "vp-blog-main" }, [
          projects.value.length ? h$2(DropTransition, { appear: true, delay: 0.16 }, () => h$2(ProjectPanel, { items: projects.value })) : null,
          h$2(DropTransition, { appear: true, delay: 0.24 }, () => h$2(ArticleList, { items: articles.value.items }))
        ]),
        h$2(DropTransition, { appear: true, delay: 0.16 }, () => h$2(InfoPanel, { key: "blog" }))
      ]),
      h$2(DropTransition, { appear: true, delay: 0.28 }, () => h$2(MarkdownContent))
    ]);
  }
});
const BlogHomeLayout = () => h$2(BlogWrapper, () => h$2(BlogHome));
BlogHomeLayout.displayName = "BlogHomeLayout";
var define_BLOG_TYPE_INFO_default = [];
const ArticleType = defineComponent({
  name: "ArticleType",
  setup() {
    const page = usePageData();
    const localePath = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const stars = useStars();
    const types = computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        ...define_BLOG_TYPE_INFO_default.map(({ key, path }) => ({
          text: locale[key],
          path: path.replace(/^\//, localePath.value)
        }))
      ];
    });
    return () => h$2("ul", { class: "vp-article-type-wrapper" }, types.value.map((type) => h$2("li", {
      class: [
        "vp-article-type",
        { active: type.path === page.value.path }
      ]
    }, h$2(RouteLink, { to: type.path }, () => type.text))));
  }
});
const BlogType = defineComponent({
  name: "BlogPage",
  setup() {
    const blogType = useBlogType();
    const frontmatter = usePageFrontmatter();
    const page = usePageData();
    const articles = useArticles();
    const stars = useStars();
    const items = computed(() => {
      const { key = "", type } = frontmatter.value.blog || {};
      return key === "star" ? stars.value.items : type === "type" && key ? blogType.value.items : articles.value.items;
    });
    return () => h$2(BlogWrapper, () => h$2("div", { class: "vp-page vp-blog" }, h$2("div", { class: "blog-page-wrapper" }, [
      h$2("main", { id: "main-content", class: "vp-blog-main" }, [
        h$2(DropTransition, () => h$2(ArticleType)),
        h$2(DropTransition, { appear: true, delay: 0.24 }, () => h$2(ArticleList, { key: page.value.path, items: items.value }))
      ]),
      h$2(DropTransition, { delay: 0.16 }, () => h$2(InfoPanel, { key: "blog" }))
    ])));
  }
});
const TimelineItems = defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimeline();
    const hint = computed(() => blogOptions.value.timeline || themeLocale.value.blogLocales.timelineTitle);
    const items = computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => h$2("div", { class: "timeline-wrapper" }, h$2("ul", { class: "timeline-content" }, [
      h$2(DropTransition, () => h$2("li", { class: "motto" }, hint.value)),
      h$2(TOC, { items: items.value }),
      timelines.value.config.map(({ year, items: items2 }, index) => h$2(DropTransition, { appear: true, delay: 0.08 * (index + 1), type: "group" }, () => [
        h$2("h3", { key: "title", id: year, class: "timeline-year-title" }, h$2("span", year)),
        h$2("li", { key: "content", class: "timeline-year-list" }, [
          h$2("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => h$2("li", { class: "timeline-item" }, [
            h$2("span", { class: "timeline-date" }, date),
            h$2(RouteLink, {
              class: "timeline-title",
              to: path
            }, () => info[PageInfo$1.title])
          ])))
        ])
      ]))
    ]));
  }
});
const Timeline = () => h$2(BlogWrapper, () => h$2("div", { class: "vp-page vp-blog" }, h$2("div", { class: "blog-page-wrapper" }, [
  h$2("main", { id: "main-content", class: "vp-blog-main" }, [
    h$2(DropTransition, { appear: true, delay: 0.24 }, () => h$2(TimelineItems))
  ]),
  h$2(DropTransition, { delay: 0.16 }, () => h$2(InfoPanel, { key: "blog" }))
])));
Timeline.displayName = "Timeline";
const PasswordModal = defineComponent({
  name: "PasswordModal",
  props: {
    /**
     * Whether is fullscreen
     *
     * 是否是全屏
     */
    full: Boolean
  },
  emits: ["verify"],
  setup(props, { emit }) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const password = ref("");
    const hasTried = ref(false);
    const remember = ref(false);
    const locale = computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value, remember.value);
      void nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => h$2("div", {
      class: [
        "vp-decrypt-layer",
        { expand: props.full || frontmatter.value["home"] }
      ]
    }, h$2("div", { class: "vp-decrypt-modal" }, [
      h$2("div", { class: ["vp-decrypt-hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : h$2(LockIcon, { "aria-label": locale.value.iconLabel })),
      h$2("div", { class: "vp-decrypt-input" }, [
        h$2("input", {
          type: "password",
          value: password.value,
          placeholder: locale.value.placeholder,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        })
      ]),
      h$2("div", { class: "vp-remember-password" }, [
        h$2("input", {
          type: "checkbox",
          value: remember.value,
          onChange: () => remember.value = !remember.value
        }),
        locale.value.remember
      ]),
      h$2("button", {
        type: "button",
        class: "vp-decrypt-submit",
        onClick: () => verify()
      }, "OK")
    ]));
  }
});
const useEncryptData = () => {
  const themeData2 = useThemeData();
  return computed(() => themeData2.value.encrypt || {});
};
const A = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), I = Array.from({ length: 64 }, (n2, r2) => r2), f = (n2) => Array(n2).fill(-1), E = [...f(46), 0, 1, ...I.slice(54, 64), ...f(7), ...I.slice(2, 28), ...f(6), ...I.slice(28, 54), ...f(5)], L = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], b = [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946, 1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055, 3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504, 976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462], C$1 = [1332899944, 1700884034, 1701343084, 1684370003, 1668446532, 1869963892], S = (n2, r2) => {
  if (r2 <= 0 || r2 > n2.length)
    throw Error(`Illegal len: ${r2}`);
  let o2 = 0, t2, e2;
  const l2 = [];
  for (; o2 < r2; ) {
    if (t2 = n2[o2++] & 255, l2.push(A[t2 >> 2 & 63]), t2 = (t2 & 3) << 4, o2 >= r2) {
      l2.push(A[t2 & 63]);
      break;
    }
    if (e2 = n2[o2++] & 255, t2 |= e2 >> 4 & 15, l2.push(A[t2 & 63]), t2 = (e2 & 15) << 2, o2 >= r2) {
      l2.push(A[t2 & 63]);
      break;
    }
    e2 = n2[o2++] & 255, t2 |= e2 >> 6 & 3, l2.push(A[t2 & 63]), l2.push(A[e2 & 63]);
  }
  return l2.join("");
}, O = (n2, r2) => {
  if (r2 <= 0)
    throw Error(`Illegal len: ${r2}`);
  const o2 = n2.length;
  let t2 = 0, e2 = 0, l2, s2, h2, u2, i2, p2;
  const g2 = [];
  for (; t2 < o2 - 1 && e2 < r2 && (p2 = n2.charCodeAt(t2++), l2 = p2 < E.length ? E[p2] : -1, p2 = n2.charCodeAt(t2++), s2 = p2 < E.length ? E[p2] : -1, !(l2 == -1 || s2 == -1 || (i2 = l2 << 2 >>> 0, i2 |= (s2 & 48) >> 4, g2.push(String.fromCharCode(i2)), ++e2 >= r2 || t2 >= o2) || (p2 = n2.charCodeAt(t2++), h2 = p2 < E.length ? E[p2] : -1, h2 == -1) || (i2 = (s2 & 15) << 4 >>> 0, i2 |= (h2 & 60) >> 2, g2.push(String.fromCharCode(i2)), ++e2 >= r2 || t2 >= o2))); )
    p2 = n2.charCodeAt(t2++), u2 = p2 < E.length ? E[p2] : -1, i2 = (h2 & 3) << 6 >>> 0, i2 |= u2, g2.push(String.fromCharCode(i2)), ++e2;
  return g2.map((c2) => c2.charCodeAt(0));
}, D = (n2, r2) => {
  let o2 = null;
  for (typeof n2 == "number" && (o2 = n2, n2 = () => null); o2 !== null || (o2 = n2()) !== null; )
    o2 < 128 ? r2(o2 & 127) : o2 < 2048 ? (r2(o2 >> 6 & 31 | 192), r2(o2 & 63 | 128)) : o2 < 65536 ? (r2(o2 >> 12 & 15 | 224), r2(o2 >> 6 & 63 | 128), r2(o2 & 63 | 128)) : (r2(o2 >> 18 & 7 | 240), r2(o2 >> 12 & 63 | 128), r2(o2 >> 6 & 63 | 128), r2(o2 & 63 | 128)), o2 = null;
}, B = (n2, r2) => {
  let o2, t2 = null;
  for (; (o2 = t2 !== null ? t2 : n2()) !== null; ) {
    if (o2 >= 55296 && o2 <= 57343 && (t2 = n2()) !== null && t2 >= 56320 && t2 <= 57343) {
      r2((o2 - 55296) * 1024 + t2 - 56320 + 65536), t2 = null;
      continue;
    }
    r2(o2);
  }
  t2 !== null && r2(t2);
}, j = (n2, r2) => {
  B(n2, function(o2) {
    D(o2, r2);
  });
}, w = typeof process == "object" && process.env.NEXT_RUNTIME === "edge" ? setTimeout : typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : setTimeout, k = (n2) => {
  const r2 = [];
  let o2 = 0;
  return j(() => o2 >= n2.length ? null : n2.charCodeAt(o2++), (t2) => {
    r2.push(t2);
  }), r2;
}, _ = (n2, r2, o2, t2) => {
  let e2, l2 = n2[r2], s2 = n2[r2 + 1];
  return l2 ^= o2[0], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[1], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[2], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[3], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[4], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[5], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[6], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[7], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[8], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[9], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[10], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[11], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[12], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[13], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[14], e2 = t2[l2 >>> 24], e2 += t2[256 | l2 >> 16 & 255], e2 ^= t2[512 | l2 >> 8 & 255], e2 += t2[768 | l2 & 255], s2 ^= e2 ^ o2[15], e2 = t2[s2 >>> 24], e2 += t2[256 | s2 >> 16 & 255], e2 ^= t2[512 | s2 >> 8 & 255], e2 += t2[768 | s2 & 255], l2 ^= e2 ^ o2[16], n2[r2] = s2 ^ o2[17], n2[r2 + 1] = l2, n2;
}, T = (n2, r2) => {
  let o2 = 0;
  for (let t2 = 0; t2 < 4; ++t2)
    o2 = o2 << 8 | n2[r2] & 255, r2 = (r2 + 1) % n2.length;
  return { key: o2, offp: r2 };
}, N = (n2, r2, o2) => {
  const t2 = r2.length, e2 = o2.length;
  let l2 = 0, s2 = [0, 0], h2;
  for (let u2 = 0; u2 < t2; u2++)
    h2 = T(n2, l2), l2 = h2.offp, r2[u2] = r2[u2] ^ h2.key;
  for (let u2 = 0; u2 < t2; u2 += 2)
    s2 = _(s2, 0, r2, o2), r2[u2] = s2[0], r2[u2 + 1] = s2[1];
  for (let u2 = 0; u2 < e2; u2 += 2)
    s2 = _(s2, 0, r2, o2), o2[u2] = s2[0], o2[u2 + 1] = s2[1];
}, F = (n2, r2, o2, t2) => {
  const e2 = o2.length, l2 = t2.length;
  let s2 = 0, h2 = [0, 0], u2;
  for (let i2 = 0; i2 < e2; i2++)
    u2 = T(r2, s2), s2 = u2.offp, o2[i2] = o2[i2] ^ u2.key;
  s2 = 0;
  for (let i2 = 0; i2 < e2; i2 += 2)
    u2 = T(n2, s2), s2 = u2.offp, h2[0] ^= u2.key, u2 = T(n2, s2), s2 = u2.offp, h2[1] ^= u2.key, h2 = _(h2, 0, o2, t2), o2[i2] = h2[0], o2[i2 + 1] = h2[1];
  for (let i2 = 0; i2 < l2; i2 += 2)
    u2 = T(n2, s2), s2 = u2.offp, h2[0] ^= u2.key, u2 = T(n2, s2), s2 = u2.offp, h2[1] ^= u2.key, h2 = _(h2, 0, o2, t2), t2[i2] = h2[0], t2[i2 + 1] = h2[1];
}, R = (n2, r2, o2, t2, e2) => {
  const l2 = C$1.slice(), s2 = l2.length;
  if (o2 < 4 || o2 > 31) {
    const c2 = new Error(`Illegal number of rounds (4-31): ${o2}`);
    if (t2 === false)
      return Promise.reject(c2);
    throw c2;
  }
  if (r2.length !== 16) {
    const c2 = new Error(`Illegal salt length: ${r2.length} != 16`);
    if (t2 === false)
      return Promise.reject(c2);
    throw c2;
  }
  o2 = 1 << o2 >>> 0;
  let h2, u2, i2 = 0, p2;
  Int32Array ? (h2 = new Int32Array(L), u2 = new Int32Array(b)) : (h2 = L.slice(), u2 = b.slice()), F(r2, n2, h2, u2);
  const g2 = () => {
    if (e2 && e2(i2 / o2), i2 < o2) {
      const c2 = Date.now();
      for (; i2 < o2 && (i2 = i2 + 1, N(n2, h2, u2), N(r2, h2, u2), !(Date.now() - c2 > 100)); )
        ;
    } else {
      for (i2 = 0; i2 < 64; i2++)
        for (p2 = 0; p2 < s2 >> 1; p2++)
          _(l2, p2 << 1, h2, u2);
      const c2 = [];
      for (i2 = 0; i2 < s2; i2++)
        c2.push((l2[i2] >> 24 & 255) >>> 0), c2.push((l2[i2] >> 16 & 255) >>> 0), c2.push((l2[i2] >> 8 & 255) >>> 0), c2.push((l2[i2] & 255) >>> 0);
      return t2 === false ? Promise.resolve(c2) : c2;
    }
    if (t2 === false)
      return new Promise((c2) => w(() => {
        g2().then(c2);
      }));
  };
  if (t2 === false)
    return g2();
  {
    let c2;
    for (; ; )
      if (typeof (c2 = g2()) < "u")
        return c2 || [];
  }
}, G = (n2) => {
  try {
    let r2;
    typeof window < "u" ? r2 = window.crypto ?? window.msCrypto : r2 = globalThis.crypto;
    const o2 = new Uint32Array(n2);
    return r2 == null || r2.getRandomValues(o2), Array.from(o2);
  } catch {
    throw Error("WebCryptoAPI is not available");
  }
}, m = (n2 = 10) => {
  if (typeof n2 != "number")
    throw Error("Illegal arguments: " + typeof n2);
  n2 < 4 ? n2 = 4 : n2 > 31 && (n2 = 31);
  const r2 = [];
  return r2.push("$2a$"), n2 < 10 && r2.push("0"), r2.push(n2.toString()), r2.push("$"), r2.push(S(G(16), 16)), r2.join("");
};
function d(n2, r2, o2, t2) {
  if (typeof n2 != "string" || typeof r2 != "string") {
    const a2 = new Error("Invalid string / salt: Not a string");
    if (o2 === false)
      return Promise.reject(a2);
    throw a2;
  }
  let e2, l2;
  if (r2.charAt(0) !== "$" || r2.charAt(1) !== "2") {
    const a2 = new Error("Invalid salt version: " + r2.substring(0, 2));
    if (o2 === false)
      return Promise.reject(a2);
    throw a2;
  }
  if (r2.charAt(2) === "$")
    e2 = "\0", l2 = 3;
  else {
    if (e2 = r2.charAt(2), e2 !== "a" && e2 !== "b" && e2 !== "y" || r2.charAt(3) !== "$") {
      const a2 = Error("Invalid salt revision: " + r2.substring(2, 4));
      if (o2 === false)
        return Promise.reject(a2);
      throw a2;
    }
    l2 = 4;
  }
  if (r2.charAt(l2 + 2) > "$") {
    const a2 = new Error("Missing salt rounds");
    if (o2 === false)
      return Promise.reject(a2);
    throw a2;
  }
  const s2 = parseInt(r2.substring(l2, l2 + 1), 10) * 10, h2 = parseInt(r2.substring(l2 + 1, l2 + 2), 10), u2 = s2 + h2, i2 = r2.substring(l2 + 3, l2 + 25);
  n2 += e2 >= "a" ? "\0" : "";
  const p2 = k(n2), g2 = O(i2, 16), c2 = (a2) => {
    const y2 = [];
    return y2.push("$2"), e2 >= "a" && y2.push(e2), y2.push("$"), u2 < 10 && y2.push("0"), y2.push(u2.toString()), y2.push("$"), y2.push(S(g2, g2.length)), y2.push(S(a2, C$1.length * 4 - 1)), y2.join("");
  };
  return o2 === false ? R(p2, g2, u2, false, t2).then((a2) => c2(a2)) : c2(R(p2, g2, u2, true, t2));
}
const U = (n2, r2 = 10) => {
  if (typeof r2 == "number" && (r2 = m(r2)), typeof n2 != "string" || typeof r2 != "string")
    throw Error("Illegal arguments: " + typeof n2 + ", " + typeof r2);
  return d(n2, r2, true);
}, x = (n2, r2) => {
  if (typeof n2 != "string" || typeof r2 != "string")
    throw Error("Illegal arguments: " + typeof n2 + ", " + typeof r2);
  return r2.length !== 60 ? false : U(n2, r2.substring(0, r2.length - 31)) === r2;
};
const STORAGE_KEY$1 = "VUEPRESS_HOPE_GLOBAL_TOKEN";
const useGlobalEncrypt = () => {
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY$1, "");
  const sessionToken = useSessionStorage(STORAGE_KEY$1, "");
  const isEncrypted = computed(() => {
    const { global = false, admin = [] } = encryptData.value;
    return global && admin.length > 0;
  });
  const isDecrypted = computed(() => {
    if (isEncrypted.value) {
      if (localToken.value)
        return encryptData.value.admin.some((hash) => x(localToken.value, hash));
      if (sessionToken.value)
        return encryptData.value.admin.some((hash) => x(sessionToken.value, hash));
    }
    return false;
  });
  const validate = (inputToken, keep = false) => {
    (keep ? localToken : sessionToken).value = inputToken;
  };
  return {
    isEncrypted,
    isDecrypted,
    validate
  };
};
const isTokenMatched = (token = "", hash) => Boolean(token) && x(token, hash);
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
const usePathEncrypt = () => {
  const page = usePageData();
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY, {});
  const sessionToken = useSessionStorage(STORAGE_KEY, {});
  const getPathMatchedKeys = (path) => isPlainObject(encryptData.value.config) ? keys(encryptData.value.config).filter((key) => startsWith(decodeURI(path), key)).sort((a2, b2) => b2.length - a2.length) : [];
  const getStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length > 0) {
      const { config = {} } = encryptData.value;
      return {
        isEncrypted: true,
        isDecrypted: matchedKeys.some((key) => localToken.value[key] && config[key].some((token) => isTokenMatched(localToken.value[key], token)) || sessionToken.value[key] && config[key].some((token) => isTokenMatched(sessionToken.value[key], token)))
      };
    }
    return {
      isDecrypted: false,
      isEncrypted: false
    };
  };
  const status = computed(() => getStatus(page.value.path));
  const validate = (inputToken, keep = false) => {
    const { config = {} } = encryptData.value;
    const matchedKeys = getPathMatchedKeys(page.value.path);
    for (const hitKey of matchedKeys)
      if (config[hitKey].filter((token) => isTokenMatched(inputToken, token))) {
        (keep ? localToken : sessionToken).value[hitKey] = inputToken;
        break;
      }
  };
  return {
    status,
    getStatus,
    validate
  };
};
const GlobalEncrypt = defineComponent({
  name: "GlobalEncrypt",
  slots: Object,
  setup(_props, { slots }) {
    const { isDecrypted, isEncrypted, validate } = useGlobalEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => h$2(FadeSlideY, () => isEncrypted.value ? isMounted.value ? isDecrypted.value ? slots.default() : h$2(PasswordModal, { full: true, onVerify: validate }) : null : slots.default());
  }
});
const LocalEncrypt = defineComponent({
  name: "LocalEncrypt",
  slots: Object,
  setup(_props, { slots }) {
    const { status, validate } = usePathEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      const { isEncrypted, isDecrypted } = status.value;
      return isEncrypted ? isMounted.value ? isDecrypted ? slots.default() : h$2(PasswordModal, { full: true, onVerify: validate }) : null : slots.default();
    };
  }
});
var C = defineComponent({ name: "SlidePage", setup() {
  const n2 = useRouter(), u2 = useRouteLocale(), t2 = ref(false), a2 = shallowRef(), s2 = () => {
    t2.value = !t2.value;
  }, o2 = () => {
    t2.value = false;
  }, l2 = () => {
    o2(), window.history.go(-1);
  }, i2 = () => {
    o2(), n2.push(u2.value);
  };
  return onClickOutside(a2, o2), () => h$2("div", { class: "vp-reveal-page" }, [h$2(Content), h$2("div", { ref: a2, class: ["vp-reveal-menu", { active: t2.value }] }, [h$2("button", { type: "button", class: "menu-button", onClick: () => s2() }, h$2("span", { class: "icon" })), h$2("button", { type: "button", class: "back-button", onClick: () => l2() }, h$2(q$1)), h$2("button", { type: "button", class: "home-button", onClick: () => i2() }, h$2(a$1))])]);
} });
defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;
  return shouldIndex ? {
    title,
    content: icon ? () => [h$2(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I
  } : null;
});
const clientConfig11 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();
      return scrollBehavior(...args);
    };
    injectDarkmode(app);
    app.component("HopeIcon", HopeIcon);
    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome: BlogHomeLayout,
    BlogType,
    Timeline,
    Slide: C
  }
});
const millisecondPerDay = 1e3 * 60 * 60 * 24;
const setupRunningTimeFooter = (date, locales2 = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "/": "Running time: :day days :hour hours :minute minutes :second seconds"
}, preserveContent = false) => {
  const initialTimeStamp = (date instanceof Date ? date : new Date(date)).getTime();
  let prevTimeText = "";
  const page = usePageData();
  const now2 = useNow();
  const routeLocale = useRouteLocale();
  const pastedTime = computed(() => {
    const passedTime = now2.value.getTime() - initialTimeStamp;
    const restDate = new Date(passedTime % millisecondPerDay);
    return {
      day: Math.floor(passedTime / millisecondPerDay),
      hour: restDate.getHours(),
      minute: restDate.getMinutes(),
      second: restDate.getSeconds()
    };
  });
  onMounted(() => {
    watch(() => [page.value.path, pastedTime.value], () => {
      const footer = document.querySelector(".vp-footer");
      if (footer) {
        const { day, hour, minute, second } = pastedTime.value;
        const localeText = (locales2[routeLocale.value] || locales2["/"]).replace(":day", day.toString()).replace(":hour", hour.toString()).replace(":minute", minute.toString()).replace(":second", second.toString());
        footer.innerHTML = `${preserveContent ? `${footer.innerHTML.replace(`<br>${prevTimeText}`, "")}<br>` : ""}${localeText}`;
        prevTimeText = localeText;
      }
    }, {
      flush: "post",
      immediate: true
    });
  });
};
const clientConfig12 = defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      /* @__PURE__ */ new Date("2020-01-01"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒"
      },
      true
    );
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  clientConfig10,
  clientConfig11,
  clientConfig12
];
const siteData$1 = JSON.parse('{"base":"/","lang":"zh-CN","title":"VIPTV - 云视听","description":"简单,快捷,高效，打造最佳的视听链","head":[],"locales":{}}');
var siteData = shallowRef(siteData$1);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: [
      {
        name: "vuepress-route",
        path: "/:catchAll(.*)",
        components: {}
      }
    ],
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      const route = resolveRoute$1(to.path);
      if (route.path !== to.path) {
        return route.path;
      }
      const pageChunk = await route.loader();
      to.meta = {
        // attach route meta
        ...route.meta,
        // attach page chunk route meta
        _pageChunk: pageChunk
      };
    } else if (to.path === from.path) {
      to.meta = from.meta;
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
  app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageChunk = customRef((track, trigger) => ({
    get() {
      track();
      return router.currentRoute.value.meta._pageChunk;
    },
    set(value) {
      router.currentRoute.value.meta._pageChunk = value;
      trigger();
    }
  }));
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageComponent = computed(() => pageChunk.value.comp);
  const pageData = computed(() => pageChunk.value.data);
  const pageFrontmatter = computed(() => pageData.value.frontmatter);
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  const clientData = {
    layouts,
    pageData,
    pageComponent,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    redirects,
    routeLocale,
    routePath,
    routes,
    siteData,
    siteLocaleData
  };
  app.provide(clientDataSymbol, clientData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return clientData;
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "Vuepress",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      const rootComponents = clientConfigs.flatMap(
        ({ rootComponents: rootComponents2 = [] }) => rootComponents2.map((component) => h$2(component))
      );
      const pageLayout = usePageLayout();
      return () => [h$2(pageLayout.value), rootComponents];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  createVueApp
};

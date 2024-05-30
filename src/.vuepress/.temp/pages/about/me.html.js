import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/about/me.html.vue"
const data = JSON.parse("{\"path\":\"/about/me.html\",\"title\":\"档案主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"档案主页\",\"icon\":\"user-tag\",\"welcome\":\"👋 你好，我是\",\"name\":\"何锋\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"善于学习\",\"积极向上\",\"团结友爱\"],\"footer\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://DESKTOP-BB2QNSK/about/me.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"档案主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hefung\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"档案主页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.13,\"words\":40},\"filePathRelative\":\"about/me.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

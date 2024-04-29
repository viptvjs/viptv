import comp from "D:/Administrator/Desktop/viptv/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"containerClass\":\"home\",\"home\":true,\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"https://img.viptv.work/viptv/VIP-TV-LOGO-FINAL-600x600.png\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/4-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/4-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"VIPTV - 云视听\",\"tagline\":\"简单,快捷,高效，打造最佳的视听链。\",\"actions\":[{\"text\":\"使用指南\",\"icon\":\"lightbulb\",\"link\":\"./demo/\",\"type\":\"primary\"},{\"text\":\"文档\",\"link\":\"./guide/\"}],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.netlify.app/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hefung\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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

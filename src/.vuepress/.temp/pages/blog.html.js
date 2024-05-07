import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/blog.html.vue"
const data = JSON.parse("{\"path\":\"/blog.html\",\"title\":\"博客首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"blog\",\"title\":\"博客首页\",\"heroImage\":\"https://img.viptv.work/viptv/VIP-TV-LOGO-FINAL-600x600.png\",\"heroText\":\"VIPTV - 云视听\",\"heroFullScreen\":true,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://DESKTOP-BB2QNSK/blog.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客首页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"博客首页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.08,\"words\":25},\"filePathRelative\":\"blog.md\",\"excerpt\":\"\"}")
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

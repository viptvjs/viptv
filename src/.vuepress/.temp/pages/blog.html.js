import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/blog.html.vue"
const data = JSON.parse("{\"path\":\"/blog.html\",\"title\":\"博客首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"blog\",\"title\":\"博客首页\",\"heroText\":\"Mr. HeFung\",\"tagline\":\"Where there is light, there is HeFung\",\"heroImage\":\"/logo.svg\",\"heroFullScreen\":true,\"head\":[[\"meta\",{\"name\":\"baidu-site-verification\",\"content\":\"codeva-4N5cviFcWA\"}],[\"meta\",{\"name\":\"msvalidate.01\",\"content\":\"60990E7826770BD82AE9B5EFB468E0BB\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/blog.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客首页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hefung\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"博客首页\\\"}\"]],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.13,\"words\":40},\"filePathRelative\":\"blog.md\",\"excerpt\":\"\"}")
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

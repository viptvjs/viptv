import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"containerClass\":\"home\",\"home\":true,\"icon\":\"home\",\"title\":\"首页\",\"heroImage\":\"/logo.svg\",\"heroFullScreen\":true,\"bgImage\":\"/assets/svg/6-light.svg\",\"bgImageDark\":\"/assets/svg/6-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"actions\":[{\"text\":\"热门短剧\",\"icon\":\"file-video\",\"link\":\"./vod/duanju/remen\",\"type\":\"primary\"},{\"text\":\"动作片\",\"icon\":\"photo-film\",\"link\":\"./vod/movie/dzp\",\"type\":\"primary\"}],\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://DESKTOP-BB2QNSK/en/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://DESKTOP-BB2QNSK/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"首页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hefung\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"首页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.16,\"words\":47},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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

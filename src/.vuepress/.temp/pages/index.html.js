import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"containerClass\":\"home\",\"home\":true,\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"/logo.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"VIPTV - 云视听\",\"tagline\":\"打造简捷 , 高效 , 最有价值的视听链。\",\"actions\":[{\"text\":\"热门短剧\",\"icon\":\"video\",\"link\":\"./vod/duanju/remen\",\"type\":\"primary\"},{\"text\":\"央视频直播\",\"link\":\"./iptv/ysp\",\"icon\":\"tv\"}],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://DESKTOP-BB2QNSK/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.19,\"words\":57},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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

import comp from "D:/Administrator/Desktop/viptv/docs/.vuepress/.temp/pages/vod/index.html.vue"
const data = JSON.parse("{\"path\":\"/vod/\",\"title\":\"点播\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"点播\",\"index\":false,\"icon\":\"video\",\"category\":[\"影视点播\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.netlify.app/vod/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"点播\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hefung\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"点播\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hefung\\\",\\\"url\\\":\\\"https://viptv.work\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"vod/README.md\",\"excerpt\":\"\"}")
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

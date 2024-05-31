import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/vod/index.html.vue"
const data = JSON.parse("{\"path\":\"/vod/\",\"title\":\"影视\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"影视\",\"icon\":\"file-video\",\"date\":\"2020-01-01T00:00:00.000Z\",\"order\":1,\"category\":[\"影视点播\"],\"tag\":[\"影视\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/vod/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"影视\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hefung\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"影视\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-01-01T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"影视\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hefung\\\",\\\"url\\\":\\\"/\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"vod/README.md\",\"localizedDate\":\"2020年1月1日\",\"excerpt\":\"\"}")
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

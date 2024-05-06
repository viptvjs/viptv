import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/vod/open/index.html.vue"
const data = JSON.parse("{\"path\":\"/vod/open/\",\"title\":\"公开视频\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"公开视频\",\"index\":true,\"icon\":\"book-open-reader\",\"category\":[\"公开\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"vod/open/README.md\",\"excerpt\":\"\"}")
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

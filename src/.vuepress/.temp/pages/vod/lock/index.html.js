import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/vod/lock/index.html.vue"
const data = JSON.parse("{\"path\":\"/vod/lock/\",\"title\":\"密藏视频\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"密藏视频\",\"index\":false,\"icon\":\"user-lock\",\"category\":[\"密藏\"],\"feed\":false,\"seo\":false,\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"canonical\",\"href\":\"https://viptv.work/vod/lock/\"}]]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"vod/lock/README.md\"}")
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

import comp from "D:/Administrator/Desktop/viptv/docs/.vuepress/.temp/pages/vod/lock/index.html.vue"
const data = JSON.parse("{\"path\":\"/vod/lock/\",\"title\":\"加密内容\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"加密内容\",\"index\":false,\"icon\":\"user-lock\",\"category\":[\"加密\"],\"feed\":false,\"seo\":false,\"gitInclude\":[],\"head\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"vod/lock/README.md\"}")
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

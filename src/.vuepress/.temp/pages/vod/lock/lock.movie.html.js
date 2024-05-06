import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/vod/lock/lock.movie.html.vue"
const data = JSON.parse("{\"path\":\"/vod/lock/lock.movie.html\",\"title\":\"魔豆视频\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"魔豆视频\",\"date\":\"2020-01-01T00:00:00.000Z\",\"order\":4,\"category\":[\"影视点播\"],\"tag\":[\"魔豆\"],\"feed\":false,\"seo\":false,\"gitInclude\":[],\"head\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.2,\"words\":361},\"filePathRelative\":\"vod/lock/lock.movie.md\",\"localizedDate\":\"2020年1月1日\"}")
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

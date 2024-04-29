import comp from "D:/Administrator/Desktop/viptv/docs/.vuepress/.temp/pages/vod/lock/lock.vod.html.vue"
const data = JSON.parse("{\"path\":\"/vod/lock/lock.vod.html\",\"title\":\"热播短剧TOP\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"热播短剧TOP\",\"icon\":\"shop-lock\",\"date\":\"2020-01-01T00:00:00.000Z\",\"order\":4,\"category\":[\"影视点播\"],\"tag\":[\"短剧\"],\"feed\":false,\"seo\":false,\"gitInclude\":[],\"head\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.45,\"words\":435},\"filePathRelative\":\"vod/lock/lock.vod.md\",\"localizedDate\":\"2020年1月1日\"}")
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

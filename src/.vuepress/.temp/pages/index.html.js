import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"containerClass\":\"home\",\"home\":true,\"icon\":\"home\",\"title\":\"首页\",\"heroImage\":\"logo.svg\",\"heroFullScreen\":true,\"bgImage\":\"./assets/svg/6-light.svg\",\"bgImageDark\":\"./assets/svg/6-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"actions\":[{\"text\":\"热门短剧\",\"icon\":\"file-video\",\"link\":\"./vod/duanju/remen\",\"type\":\"primary\"},{\"text\":\"动作大片\",\"icon\":\"photo-film\",\"link\":\"./vod/movie/dzp\"}],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.15,\"words\":46},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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

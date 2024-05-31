import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/about/me.html.vue"
const data = JSON.parse("{\"path\":\"/about/me.html\",\"title\":\"档案主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"档案主页\",\"icon\":\"home\",\"welcome\":\"👋 你好，我是\",\"name\":\"VIPTV 云视听\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"善于学习\",\"积极向上\",\"团结友爱\"],\"medias\":[{\"icon\":\"envelope\",\"name\":\"微软邮箱\",\"link\":\"mailto:qq2236639958@iis.u-tokyo.ac.jp\"},{\"icon\":\"envelope\",\"name\":\"QQ 邮箱\",\"link\":\"mailto:2236639958@qq.com\"}],\"description\":\"简介\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"简介\",\"slug\":\"简介\",\"link\":\"#简介\",\"children\":[]}],\"readingTime\":{\"minutes\":0.21,\"words\":62},\"filePathRelative\":\"about/me.md\",\"excerpt\":\"\",\"autoDesc\":true}")
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

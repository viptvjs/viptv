import comp from "D:/Administrator/Desktop/viptv-private/src/.vuepress/.temp/pages/about/notced.html.vue"
const data = JSON.parse("{\"path\":\"/about/notced.html\",\"title\":\"公告\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"公告\",\"icon\":\"xmarks-lines\",\"category\":[\"功能\"],\"tag\":[\"功能\",\"公告\"],\"watermark\":true,\"description\":\"VuePress Theme Hope 允许你通过 [@vuepress/plugin-notice][notice] 添加公告。\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]}],\"readingTime\":{\"minutes\":1.97,\"words\":591},\"filePathRelative\":\"about/notced.md\",\"excerpt\":\"<p>VuePress Theme Hope 允许你通过 [<code>@vuepress/plugin-notice</code>][notice] 添加公告。</p>\\n\",\"autoDesc\":true}")
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

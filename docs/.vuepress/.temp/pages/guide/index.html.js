import comp from "D:/Administrator/Desktop/viptv/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"指南\",\"icon\":\"lightbulb\",\"description\":\"功能亮点 Bar ... Foo ...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.netlify.app/guide/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"指南\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"功能亮点 Bar ... Foo ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hefung\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"指南\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hefung\\\",\\\"url\\\":\\\"https://viptv.work\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"功能亮点\",\"slug\":\"功能亮点\",\"link\":\"#功能亮点\",\"children\":[{\"level\":3,\"title\":\"Bar\",\"slug\":\"bar\",\"link\":\"#bar\",\"children\":[]},{\"level\":3,\"title\":\"Foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"guide/README.md\",\"excerpt\":\"<h2>功能亮点</h2>\\n<h3>Bar</h3>\\n<ul>\\n<li><a href=\\\"/guide/bar/baz.html\\\" target=\\\"_blank\\\">baz</a></li>\\n<li>...</li>\\n</ul>\\n<h3>Foo</h3>\\n<ul>\\n<li><a href=\\\"/guide/foo/ray.html\\\" target=\\\"_blank\\\">ray</a></li>\\n<li>...</li>\\n</ul>\\n\",\"autoDesc\":true}")
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

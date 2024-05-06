import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/ubuntu/lang.html.vue"
const data = JSON.parse("{\"path\":\"/linux/ubuntu/lang.html\",\"title\":\"语言切换\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"language\",\"date\":\"2019-11-22T00:00:00.000Z\",\"category\":\"Linux\",\"description\":\"语言切换 查看当前语言包: locale -a 中文语言是: zh_CN.utf8 安装中文语言包 之后修改 /etc/default/locale，将 LANG 改为 zh_CN.utf8\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/ubuntu/lang.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"语言切换\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"语言切换 查看当前语言包: locale -a 中文语言是: zh_CN.utf8 安装中文语言包 之后修改 /etc/default/locale，将 LANG 改为 zh_CN.utf8\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-11-22T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"语言切换\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-11-22T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"安装中文语言包\",\"slug\":\"安装中文语言包\",\"link\":\"#安装中文语言包\",\"children\":[]}],\"readingTime\":{\"minutes\":0.18,\"words\":53},\"filePathRelative\":\"linux/ubuntu/lang.md\",\"localizedDate\":\"2019年11月22日\",\"excerpt\":\"\\n<p>查看当前语言包: <code>locale -a</code></p>\\n<p>中文语言是: <code>zh_CN.utf8</code></p>\\n<h2>安装中文语言包</h2>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token function\\\">sudo</span> <span class=\\\"token function\\\">apt-get</span> <span class=\\\"token function\\\">install</span> language-pack-zh-hans\\n</code></pre></div>\",\"autoDesc\":true}")
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

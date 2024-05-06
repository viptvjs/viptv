import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/command/file.html.vue"
const data = JSON.parse("{\"path\":\"/linux/command/file.html\",\"title\":\"文件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文件\",\"icon\":\"file\",\"date\":\"2019-11-19T00:00:00.000Z\",\"category\":\"Linux\",\"description\":\"touch 命令 需要注意的是，touch 命令不光可以用来创建文件(当指定操作文件不存在时，该命令会在当前位置建立一个空文件)，此命令更重要的功能是修改文件的时间参数(但当文件存在时，会修改此文件的时间参数)。 Linux 系统中，每个文件主要拥有 3 个时间参数(通过 stat 命令进行查看)，分别是文件的访问时间、数据修改时间以及状态修改时间: ...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/command/file.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文件\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"touch 命令 需要注意的是，touch 命令不光可以用来创建文件(当指定操作文件不存在时，该命令会在当前位置建立一个空文件)，此命令更重要的功能是修改文件的时间参数(但当文件存在时，会修改此文件的时间参数)。 Linux 系统中，每个文件主要拥有 3 个时间参数(通过 stat 命令进行查看)，分别是文件的访问时间、数据修改时间以及状态修改时间: ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-11-19T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"文件\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-11-19T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"touch 命令\",\"slug\":\"touch-命令\",\"link\":\"#touch-命令\",\"children\":[]},{\"level\":2,\"title\":\"ln 命令\",\"slug\":\"ln-命令\",\"link\":\"#ln-命令\",\"children\":[{\"level\":3,\"title\":\"ln 扩展介绍\",\"slug\":\"ln-扩展介绍\",\"link\":\"#ln-扩展介绍\",\"children\":[]}]}],\"readingTime\":{\"minutes\":4.3,\"words\":1289},\"filePathRelative\":\"linux/command/file.md\",\"localizedDate\":\"2019年11月19日\",\"excerpt\":\"<h2>touch 命令</h2>\\n<p>需要注意的是，touch 命令不光可以用来创建文件(当指定操作文件不存在时，该命令会在当前位置建立一个空文件)，此命令更重要的功能是修改文件的时间参数(但当文件存在时，会修改此文件的时间参数)。</p>\\n<p>Linux 系统中，每个文件主要拥有 3 个时间参数(通过 stat 命令进行查看)，分别是文件的访问时间、数据修改时间以及状态修改时间:</p>\\n<ul>\\n<li>访问时间 (Access Time，简称 atime): 只要文件的内容被读取，访问时间就会更新。例如，使用 <code>cat</code> 命令可以查看文件的内容，此时文件的访问时间就会发生改变。</li>\\n<li>数据修改时间 (Modify Time，简称 mtime): 当文件的内容数据发生改变，此文件的数据修改时间就会跟着相应改变。</li>\\n<li>状态修改时间 (Change Time，简称 ctime): 当文件的状态发生变化，就会相应改变这个时间。比如说，如果文件的权限或者属性发生改变，此时间就会相应改变。</li>\\n</ul>\",\"autoDesc\":true}")
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

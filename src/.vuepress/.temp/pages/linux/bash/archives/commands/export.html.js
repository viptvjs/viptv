import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/commands/export.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/commands/export.html\",\"title\":\"export\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"export export 命令用于向子 Shell 输出变量。 然后执行下面的命令，新建一个子 Shell。 上面命令的执行结果会进入 hotellogs 变量指向的目录。 export 命令还可以显示所有环境变量。 如果想查看单个变量，使用 echo $VARIABLE_NAME。\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/commands/export.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"export\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"export export 命令用于向子 Shell 输出变量。 然后执行下面的命令，新建一个子 Shell。 上面命令的执行结果会进入 hotellogs 变量指向的目录。 export 命令还可以显示所有环境变量。 如果想查看单个变量，使用 echo $VARIABLE_NAME。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"export\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.34,\"words\":102},\"filePathRelative\":\"linux/bash/archives/commands/export.md\",\"excerpt\":\"\\n<p><code>export</code> 命令用于向子 Shell 输出变量。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token builtin class-name\\\">export</span> <span class=\\\"token assign-left variable\\\">hotellogs</span><span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"/workspace/hotel-api/storage/logs\\\"</span>\\n</code></pre></div>\",\"autoDesc\":true}")
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

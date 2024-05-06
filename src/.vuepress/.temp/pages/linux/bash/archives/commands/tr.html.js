import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/commands/tr.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/commands/tr.html\",\"title\":\"tr\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"tr tr 命令用于按照给定模式转换文本。 下面是 example.txt 文件的内容。 tr 命令可以将所有小写字母转换为大写字母。 tr 命令还可以将所有空格转为换行符。\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/commands/tr.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"tr\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"tr tr 命令用于按照给定模式转换文本。 下面是 example.txt 文件的内容。 tr 命令可以将所有小写字母转换为大写字母。 tr 命令还可以将所有空格转为换行符。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"tr\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.3,\"words\":89},\"filePathRelative\":\"linux/bash/archives/commands/tr.md\",\"excerpt\":\"\\n<p><code>tr</code> 命令用于按照给定模式转换文本。</p>\\n<p>下面是 <code>example.txt</code> 文件的内容。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>Hello World Foo Bar Baz<span class=\\\"token operator\\\">!</span>\\n</code></pre></div><p><code>tr</code> 命令可以将所有小写字母转换为大写字母。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ <span class=\\\"token function\\\">cat</span> example.txt <span class=\\\"token operator\\\">|</span> <span class=\\\"token function\\\">tr</span> <span class=\\\"token string\\\">'a-z'</span> <span class=\\\"token string\\\">'A-Z'</span>\\nHELLO WORLD FOO BAR BAZ<span class=\\\"token operator\\\">!</span>\\n</code></pre></div>\",\"autoDesc\":true}")
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

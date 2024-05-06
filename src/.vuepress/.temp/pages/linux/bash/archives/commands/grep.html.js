import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/bash/archives/commands/grep.html.vue"
const data = JSON.parse("{\"path\":\"/linux/bash/archives/commands/grep.html\",\"title\":\"grep\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"grep grep 命令用于文件内容的搜索，返回所有匹配的行。 下面是一个例子。 一般情况下，应该使用 grep -R，递归地找出当前目录下符合 someVar 的文件。 別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。 也可以用 grep -l 光打印出符合条件的文件名而非文件内容选段。 如果您写的脚本或批处理任务需要上面的输出内容，...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/bash/archives/commands/grep.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"grep\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"grep grep 命令用于文件内容的搜索，返回所有匹配的行。 下面是一个例子。 一般情况下，应该使用 grep -R，递归地找出当前目录下符合 someVar 的文件。 別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。 也可以用 grep -l 光打印出符合条件的文件名而非文件内容选段。 如果您写的脚本或批处理任务需要上面的输出内容，...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"grep\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"参数\",\"slug\":\"参数\",\"link\":\"#参数\",\"children\":[]}],\"readingTime\":{\"minutes\":1.34,\"words\":401},\"filePathRelative\":\"linux/bash/archives/commands/grep.md\",\"excerpt\":\"\\n<p><code>grep</code> 命令用于文件内容的搜索，返回所有匹配的行。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token function\\\">grep</span> pattern filename\\n</code></pre></div><p>下面是一个例子。</p>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ <span class=\\\"token function\\\">grep</span> admin /etc/passwd\\n_kadmin_admin:*:218:-2:Kerberos Admin Service:/var/empty:/usr/bin/false\\n_kadmin_changepw:*:219:-2:Kerberos Change Password Service:/var/empty:/usr/bin/false\\n_krb_kadmin:*:231:-2:Open Directory Kerberos Admin Service:/var/empty:/usr/bin/false\\n</code></pre></div>\",\"autoDesc\":true}")
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

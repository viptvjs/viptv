import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/centos.html.vue"
const data = JSON.parse("{\"path\":\"/linux/centos.html\",\"title\":\"CentOS 教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CentOS 教程\",\"icon\":\"centos\",\"date\":\"2019-11-23T00:00:00.000Z\",\"category\":\"Linux\",\"description\":\"管理工具 yum (Centos 7) dnf (Centos 8) yarn 测试是否安装成功:\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/centos.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"CentOS 教程\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"管理工具 yum (Centos 7) dnf (Centos 8) yarn 测试是否安装成功:\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-11-23T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"CentOS 教程\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-11-23T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"管理工具\",\"slug\":\"管理工具\",\"link\":\"#管理工具\",\"children\":[]},{\"level\":2,\"title\":\"yarn\",\"slug\":\"yarn\",\"link\":\"#yarn\",\"children\":[]}],\"readingTime\":{\"minutes\":0.17,\"words\":52},\"filePathRelative\":\"linux/centos.md\",\"localizedDate\":\"2019年11月23日\",\"excerpt\":\"<h2>管理工具</h2>\\n<ul>\\n<li>yum (Centos 7)</li>\\n<li>dnf (Centos 8)</li>\\n</ul>\\n<h2>yarn</h2>\\n<div class=\\\"language-bash\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token function\\\">curl</span> <span class=\\\"token parameter variable\\\">--silent</span> <span class=\\\"token parameter variable\\\">--location</span> https://dl.yarnpkg.com/rpm/yarn.repo <span class=\\\"token operator\\\">|</span> <span class=\\\"token function\\\">sudo</span> <span class=\\\"token function\\\">tee</span> /etc/yum.repos.d/yarn.repo\\n\\n<span class=\\\"token function\\\">sudo</span> yum <span class=\\\"token function\\\">install</span> <span class=\\\"token function\\\">yarn</span>\\n<span class=\\\"token comment\\\">## OR ##</span>\\n<span class=\\\"token function\\\">sudo</span> dnf <span class=\\\"token function\\\">install</span> <span class=\\\"token function\\\">yarn</span>\\n</code></pre></div>\",\"autoDesc\":true}")
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

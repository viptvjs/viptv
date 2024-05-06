import comp from "D:/Administrator/Desktop/viptv-private/docs/.vuepress/.temp/pages/linux/file/mount.html.vue"
const data = JSON.parse("{\"path\":\"/linux/file/mount.html\",\"title\":\"Linux 挂载\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"mount\",\"date\":\"2019-11-17T00:00:00.000Z\",\"category\":\"Linux\",\"description\":\"Linux 挂载 前面讲过，Linux 系统中“一切皆文件”，所有文件都放置在以根目录为树根的树形目录结构中。在 Linux 看来，任何硬件设备也都是文件，它们各有自己的一套文件系统(文件目录结构)。 因此产生的问题是，当在 Linux 系统中使用这些硬件设备时，只有将 Linux 本身的文件目录与硬件设备的文件目录合二为一，硬件设备才能为我们所用。合...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://viptv.work/linux/file/mount.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Linux 挂载\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Linux 挂载 前面讲过，Linux 系统中“一切皆文件”，所有文件都放置在以根目录为树根的树形目录结构中。在 Linux 看来，任何硬件设备也都是文件，它们各有自己的一套文件系统(文件目录结构)。 因此产生的问题是，当在 Linux 系统中使用这些硬件设备时，只有将 Linux 本身的文件目录与硬件设备的文件目录合二为一，硬件设备才能为我们所用。合...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"VIPTV - 云视听\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-11-17T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Linux 挂载\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-11-17T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"VIPTV - 云视听\\\",\\\"url\\\":\\\"/about\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Linux 硬件设备文件名称\",\"slug\":\"linux-硬件设备文件名称\",\"link\":\"#linux-硬件设备文件名称\",\"children\":[]}],\"readingTime\":{\"minutes\":2.1,\"words\":630},\"filePathRelative\":\"linux/file/mount.md\",\"localizedDate\":\"2019年11月17日\",\"excerpt\":\"\\n<p>前面讲过，Linux 系统中“一切皆文件”，所有文件都放置在以根目录为树根的树形目录结构中。在 Linux 看来，任何硬件设备也都是文件，它们各有自己的一套文件系统(文件目录结构)。</p>\\n<p>因此产生的问题是，当在 Linux 系统中使用这些硬件设备时，只有将 Linux 本身的文件目录与硬件设备的文件目录合二为一，硬件设备才能为我们所用。合二为一的过程称为“挂载”。</p>\\n<p>如果不挂载，通过 Linux 系统中的图形界面系统可以查看找到硬件设备，但命令行方式无法找到。</p>\\n<p>挂载，指的就是将设备文件中的顶级目录连接到 Linux 根目录下的某一目录(最好是空目录)，访问此目录就等同于访问设备文件。</p>\",\"autoDesc\":true}")
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

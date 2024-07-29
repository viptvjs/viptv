---
title: "使用Bing API提交网站URL"
icon: "tool"
subtitle: "python"
date: 2023-03-24 10:52:27
isOriginal: true
category:
  - python
tag:
  - 工具脚本
---

:::tip
最近在做 SEO，因为链接没有做同步，需要清除之前旧站的链接，重新提交，让搜索引擎尽快索引，google search console 的已经基本做差不多了

bing 最近因为 _New Bing_ 的原因也用的比较多，所以做了一些工作，很方便的是，它可以直接同步 GSC 的站点数据，不过就只是域数据，URL 还是要自己提交

为了尽快索引，只提交 sitemap 是不够的，还需要调用 API 手动提交 URL
:::

### 官方示例

![bing example](https://s3.bmp.ovh/imgs/2023/03/24/25889c6c306381f8.png)

### python 代码

::: code-tabs

@tab python

```py
#!/usr/bin/python3
# -*- coding: UTF-8 -*-

import requests
import xml.etree.ElementTree as ET

# 指定Sitemap的URL
sitemap_url = "https://example.com/sitemap.xml"

# 提取Sitemap中的URL
response = requests.get(sitemap_url)
sitemap_xml = response.content
sitemap_root = ET.fromstring(sitemap_xml)

urls = []
for child in sitemap_root:
    url = child[0].text
    urls.append(url)

# 调用Bing API提交URL
bing_api_key = "your's API Key"
bing_api_url = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=" + bing_api_key

headers = {"Content-Type": "application/json"}

data = {
    "siteUrl": "https://example.me",
    "urlList": urls
}

response = requests.post(bing_api_url, json=data, headers=headers)
if response.status_code == 200:
    print("URLs submitted successfully!")
else:
    print("Error submitting URLs: ", response.content)
```

:::

### 解读

在上面的脚本中，我们首先指定了 Sitemap 的 URL。然后，我们使用 Python 中的 requests 库获取 Sitemap 的内容，并使用 Python 中的 xml.etree.ElementTree 库解析 Sitemap 中的 URL。

接下来，我们使用 Bing API 提交 URL。我们首先指定 Bing API 的密钥和 API URL，并设置请求头。然后，我们将 Sitemap 中提取的 URL 列表作为数据，将其作为 JSON 格式发送到 Bing API。最后，我们检查响应的状态码，以确保 URL 已成功提交。

注意：在使用 Bing API 提交 URL 之前，需要先注册 Bing Webmaster 工具，并获取 Bing API 密钥。还需要将"https://example.com"替换为自己的站点URL。

API 密钥生成 ↘️

1. 访问[Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. 右上角设置

![API密钥生成](https://s3.bmp.ovh/imgs/2023/03/24/6fb703876007f6b6.png =500x)

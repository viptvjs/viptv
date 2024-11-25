---
title: Telegraph
icon: "indent"
lang: zh-CN
description: Telegraph是由Telegram推出的一个极简的匿名内容发布工具。本文介绍了Telegraph的几种使用方法，希望能够帮助到您。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegraph,Telegraph简介,Telegraph发布,Telegraph修改,Telegraph排版,Telegraph发布文章,Telegraph修改文章,Telegraph使用方法,Telegrah使用技巧,Telegram功能, TGwiki, Telegram知识库
---

# Telegraph

Telegraph 是一个极简的匿名内容发布工具。

如果内容侵权了，例如使用有版权的图片，可能文章会被投诉下架。

## 用法一

此法不需要注册账号与下载软件。

1. 打开[Telegraph](https://telegra.ph/)
2. 写文章
3. 发布（Publish）

::: warning

内容发布之后，只要清除浏览器缓存，便无法再编辑文章，也不能追溯到文章作者。

:::

## 用法二（推荐）

通过 Telegraph 机器人[@telegraph](https://t.me/telegraph)管理文章：

- 能看到你发了多少篇文章，多少人看了（但是读者依旧看不到作者是谁）。
- 在任意聊天窗口输入`@telegraph`，即可弹出你发布的所有文章。

### 发布流程

1. 在 Telegram 打开 [@telegraph](https://t.me/telegraph)
2. 根据提示配置账号
3. 写文章：作者（Author）可以写频道或者群组的公开链接
4. 发布（Publish）

### 修改流程

在任何一个设备都可以再次编辑文章的标题、作者和正文（除了文章链接）：

1. `Log in as *** on this device`
2. 返回 @telegraph
3. 选择`My posts`，点击文章的标题

- 电脑：自动跳转到浏览器打开，然后在右上角找到 `EDIT`
- 手机：点击界面的右上角 3 个点，选择 `Open in…` 用浏览器打开，滑倒文章底部即可看到 `EDIT`

::: details 操作演示

![telegraph.jpg](https://s2.loli.net/2024/01/27/5K3RqDXf4YhlGS8.jpg)

:::

## 使用技巧

### 让文章链接更美观

Telegraph 默认 URL = `https://telegra.ph`/`首次输入的标题`-`首次发表时的月份`-`首次发表时的日期`

如果你用中文撰写标题，例如《选择 Telegraph 的 10 个理由》，那么文章链接会变得又臭又长，且不能从链接获得文章主题，而通过如下方法即可获得一个更美观的 Telegraph 链接：

1. 首次编辑请使用英文标题：
   - 英文单词全部小写：`10 reasons to choose the telegraph`
   - 把 the、a、an 等去掉：`10 reasons to choose telegraph`
   - 用连字符 `-` 代替标点和空格：`10-reasons-to-choose-telegraph；
   - 是否可以精简或者采用另外一种翻译：`why-telegraph`
2. 再用 `Edit` 功能修改标题为中文：`选择Telegraph的10个理由`

### 让文章排版更美观

1. 使用 Markdown 写文章，[点击此处查看 Markdown 基本语法](https://markdown.com.cn/basic-syntax/)
2. 复制 Markdown 预览（不是源代码）
3. 粘贴到`Telegraph`，即可快速排出精美的文章（不支持某些格式，例如多级项目列表）

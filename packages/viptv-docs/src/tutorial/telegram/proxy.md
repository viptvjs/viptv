---
title: 代理设置
icon: "server"
description: Telegram连接失败？本文提供了Telegram代理设置的有关说明，向您介绍如何修改Telegram代理设置，添加内置代理。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegram代理设置,Telegram代理,Telegram内置代理,Telegram自定义代理,TG代理设置,TG代理,TG内置代理,TG自定义代理,电报代理设置,电报代理,电报内置代理,电报自定义代理,Telegram设置,TGwiki,Telegram知识库
---

# 代理设置

## Telegram Desktop

Telegram Desktop 默认并没有勾选"使用系统代理"， 所以很多人觉得需要开全局才能用， 其实不然， 可以手动勾选"使用系统代理"或使用自定义代理。

**步骤：**

- 未登录账号：界面左下角按钮

- 已登录账号：Telegram Desktop 客户端->左上角三短线->`设置`->`高级`->`网络和代理`->`代理类型-`>勾选`使用系统代理`或`使用自定义代理`

使用自定义代理添加方法： `添加代理`（Add proxy）->`SOCKS5/HTTP`->服务器： `127.0.0.1`， 端口：端口需查看你的代理软件，不需要填写用户名和密码。

::: details 操作演示

![proxy.jpg](https://s2.loli.net/2024/01/27/hDALxbZoXgUQWEr.jpg)

:::

**代理软件查看本地端口的方法：**

- Clash for Windows：主界面->`General`->`Port`（默认是`7890`）
- Clash.NET：主界面->右侧->`混合端口`（Mixe-Port）
- SS/SSD->右键状态栏 SS/SSD 图标->`服务器`->`编辑服务器`->`本地端口`（默认是`1080`）
- SSR->右键状态栏 SSR 图标->`选项设置`->`本地端口`（默认是 `1080`）
- V2RayN：主界面->左下角->`SOCKS5`（或者`参数设置`->`本地监听端口`）（默认是`10808`）
- Trojan-Qt5：打开 Trojan-Qt5 主界面->双击一个节点->`本地端口`（默认是`1080`）
- Netch：打开 Netch 主界面->`设置`->`本地端口SOCKS5`（默认是`2801`）

有可能你或你用的规则修改了代理软件的本地 SOCKS5/HTTP 端口， 具体以你的代理客户端为准。

::: danger

不能乱设置乱猜测，乱设置可能导致 Telegram Desktop 连不上网络。

:::

::: tip

Windows，macOS，Linux 系统的电脑都可以使用 Telegram Desktop 版本客户端。（macOS 上 Mac App Store 中的"Telegram Desktop"已更名为"Telegram Lite" ）

:::

## Telegram macOS

Telegram macOS 客户端不遵从系统代理，所以需要设置自定义代理，也可以用 Surge/ClashX Pro 开启"增强模式"

（Surge/ClashX Pro 的"增强模式"就是针对这类不遵从系统代理的软件做的功能）

**自定义代理设置步骤：**

- 未登录账号：界面右上角按钮->`Use Proxy`

- 已登录账号：Telegram macOS 客户端->`设置`->`数据`->`使用代理`

添加代理->SOCKS5/HTTP->服务器（Server）： `127.0.0.1`， 端口（Port）：端口需查看你的代理软件，不需要填写用户名和密码。

**代理软件查看本地端口的方法：**

- Surge：点击状态栏 Surge 图标->显示主界面->`SOCKS5`（默认是`6153`）
- Clash for Windows：主界面->`General`->`Port`（默认是`7890`）
- ClashX：点击状态栏 ClashX 图标->`帮助`->`端口`->`Socks Port`（默认是`7891`）
- ShadowsocksX：点击状态栏 ShadowsocksX 图标->`高级设置`->`本地Socks5监听端口`（默认是`1086`）
- V2RayX：点击状态栏 V2RayX 图标->`Configure`->`Local Socks5 Port`（默认是`1081`）
- V2rayU：点击状态栏 V2rayU 图标->`偏好设置`->`Advance`->`本机 Sock 监听端口`（默认是`1080`）

::: warning

设置完成保存后，记得重启 Telegram macOS 客户端！

:::

::: tip

有可能你或你用的规则修改了代理软件的本地 SOCKS5/HTTP 端口，具体以你的代理客户端为准。

:::

::: danger

不能乱设置乱猜测，乱设置可能导致 Telegram macOS 连不上网络。

:::

## Telegram iOS/Android

iOS/Android 设备上开启代理软件即可，不需要单独在 Telegram 中设置代理。

Telegram iOS 端是 IP 直连访问服务器的，所以需要代理软件做单独的规则处理才行；

iOS 上有些代理软件并没有针对性的对此做处理，所以即使开启了这类代理软件，Telegram iOS 也会提示无网络链接，比如"Wingy"， [点击查看代理软件](https://congcong0806.github.io/2018/04/20/SS) 。

## 其他

也可以自建 SOCKS5/HTTP/MTProto 代理，只用于 Telegram 上使用，网络也有很多公开的 SOCKS5/HTTP/MTProto 代理，个人不建议使用这种方式，依然建议用代理软件。

::: warning

不建议使用某些内置代理的 Telegram 第三方客户端软件，可能存在安全隐患。

:::

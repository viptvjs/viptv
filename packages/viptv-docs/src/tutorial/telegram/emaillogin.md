---
title: 邮箱登录
icon: "envelope-open-text"
description: 邮箱登录就是通过电子邮件获取验证码来登录Telegram账户，此功能可以在把验证码发送到Telegram客户端的情况下同时向邮箱发送一份验证码。本文介绍了如何开启Telegram邮箱登录，以及有关注意事项。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegram邮箱登录,Telegram绑定邮箱,Telegram开启邮箱登录,Telegram设置登录邮箱,TG邮箱登录,TG绑定邮箱,TG开启邮箱登录,TG设置登录邮箱,电报邮箱登录,电报绑定邮箱,电报开源邮箱登录,电报设置登录邮箱,TGwiki,Telegram知识库
---

# Telegram 邮箱登录

## 简介

顾名思义，邮箱登录就是通过电子邮件获取验证码来登录 Telegram 账户，此功能可以在把验证码发送到 Telegram 客户端的情况下同时向邮箱发送一份验证码，而不是通过短信发送验证码，极大减少了 Telegram 官方的短信费用支出。对于使用接码的用户来说，再也不怕没客户端也没手机号的情况下收不到验证码了！

## 开启邮箱登录

::: tip

+888 匿名号码或 Telegram Premium 用户无法开启邮箱登录！

:::

根据官方文档来看，当你的登录频率足够高时，Telegram 服务器会要求客户端设置邮箱登录。简单说就是让 Durov 认为你在浪费他的短信钱。

**具体方法：**

1. 使用 Telegram 官方移动客户端登录，登录时选择`使用短信验证码登录`（`Tap to get a code via SMS`）

2. 短信验证码和 Telegram 客户端验证码一致，任选其一输入即可，**不要输入 2FA 密码**，直接返回。

3. 重新上面的步骤，刷短信验证码。

4. 如果过程中出现`尝试次数过多，请稍后再试`（`Too many attemps, please try again later`），则需要休息一段时间（通常是 24 小时）再刷。

5. 当页面出现`选择登录邮箱`（`Choose a login email`），根据提示输入完成邮箱验证码后会向你的账号绑定手机号码发送短信验证码，输入完即可开启邮箱登录。

   ::: warning

   此步骤中的验证码只能以短信的形式发送，验证码不会发送到已登录的客户端！也就是说，如果您想要开启邮箱登录，您绑定的号码需要可以接收短信验证码。

   :::

   ::: details 操作演示

   ![emaillogin1.jpg](https://s2.loli.net/2024/01/28/1dbItKPDlwXB9TL.jpg)

   :::

6. 开启邮箱登录后，在`隐私设置`中会新增一个`登录邮箱`字段。

   ::: details 界面截图

   ![emaillogin2.jpg](https://s2.loli.net/2024/01/28/Dx4nktmlVPgZ8ao.jpg)

   :::

## 注意

- +888 匿名号码或 Telegram Premium 用户无法开启邮箱登录。
- 开启邮箱登录以后通过手机验证码重置邮箱需要开通大会员（888 匿名号码除外）。

- 任何人知道知道你的手机号就能请求重置邮箱登录（需要等待 7 天）。重置邮箱登录之后你的账号会回归为未设置邮箱登录的状态。

  ::: danger

  请求重置邮箱登录是无法取消的！Telegram 官方也不会给你发送通知！

  :::

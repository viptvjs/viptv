---
title: 解除私聊限制
icon: "user-lock"
description: Telegram 给某人发送私聊消息时遇到如下提示：Sorry, you can only send messages to mutual contacts at the momet.本文介绍了Telegram如何解除私聊限制。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。
head:
  - - meta
    - name: keywords
      content: Telegram解除私聊限制,Telegram无法私聊,Telegram双向限制,Telegram垃圾号码限制,Telegram私聊限制,TG解除私聊限制,TG无法私聊,TG垃圾号码限制,TG私聊限制,电报解除私聊限制,电报无法私聊,电报双向限制,电报垃圾号码限制,电报私聊限制,Telegram Spam,TGwiki,Telegram知识库
---

# Telegram 解除私聊限制

Telegram 给某人发送私聊消息时遇到如下提示：
`Sorry, you can only send messages to mutual contacts at the momet.`
中文：
`抱歉，目前您被限制无法主动发起私聊消息。`或`抱歉，您现在只能给双向联系人发送消息。`

Telegram 私聊限制通常分为以下几种，请先判断限制类型，然后按照教程操作。

## +86 双向限制

如果您注册时使用的是+86 的手机号码，向 Telegram 官方机器人 [@SpamBot](https://t.me/spambot) 发送消息，回复是`You're free as a bird!`

### 具体原因

之前币圈利用 Telegram 的便利，大量发广告和拉人进群。Telegram 限制了+86 大陆手机号绑定的账号的私聊。

**限制情况：**

- +86 的账号不能给非+86 的账号主动发起私聊；
- +86 的账号能给+86 主动发起私聊的；
- 如果是别人给你发起的私聊，你是可以回复交流的；
- 刚刚注册的+86 账号也不能发起私聊的，过段时间就 OK 了；
- Bot 是不会回复你+86 的这个限制信息的, 不能仅从 Bot 回复看你是否是+86 限制。

### 操作方式

- 向 Telegram 官方机器人 [@SpamBot](https://t.me/spambot) 发送消息申请（跟着提示操作就行），忽略回复的`You're free as a bird!`(这个说的是你没有被全局限制，和私聊限制没关系，不能仅从 Bot 回复看你是否是被限制);
  1. 点击选项`But I can't message non-contacts!`;
  2. 点击选项`No I'll never do any of this!`；
  3. 输入内容`accident`，发送。
- 通常 24 小时内即可解除限制，24 小时仍然未解除的可以再次提交；
- Bot 不会回复你结果，自己找人私聊测试。

## 垃圾号码限制

向 Telegram 官方机器人 [@SpamBot](https://t.me/spambot) 发送消息，如果 Bot 回复是：`Unfortunately, some phone numbers may trigger a harsh response from our anti-spam systems. If you think this is the case with you, you can submit a complaint to our moderators or subscribe to Telegram Premium to get less strict limits.`

**原因**：您注册的手机号码可能被 Telegram 反垃圾系统识别为垃圾号码，需要提交申诉。

**解决**：向 Telegram 申诉，说明情况，保证不会进行违规操作。申诉后等待 24 小时即可。

::: details 操作演示

![spam1.jpg](https://s2.loli.net/2024/01/27/2VpYNwmG4yuZP6J.jpg)

![spam2.jpg](https://s2.loli.net/2024/01/27/R1fXvp2VY8T4s73.jpg)

:::

## 私聊限制

如果你收到的通知是`你的账号被Telegram官方限制了, 不能在公开群和(或)主动私聊发送消息`。

### 具体原因

- 一般是在群里和私聊发消息被人多次举报就有可能被限制（私聊举报和群里管理员的举报+ban 的权重比较大）；
- 无法查到被谁举报的，也无法查到是因为哪条消息举报的；
- 这个限制和哪个号码注册没有关系，所有号码注册都有可能被如此限制。
- 也可能是被 Telegram 群组的强力反垃圾功能误杀（该功能误杀率极高，强烈建议群主将其关闭）。

### 操作方法

向 Telegram 官方机器人 [@SpamBot](https://t.me/spambot) 发送消息。

1. 如果 Bot 回复的消息里有说明了解封时间，到时间会自动解封，耐心等待即可，不能提前解封。

   ::: tip

   注意，是 UTC 时间，比北京时间晚 8 小时，[点击查看 UTC 时间](https://time.is/zh/UTC) 。
   :::

2. 如果 Bot 回复的消息里没有说明解封时间，则您可能被 Telegram 群组的强力反垃圾功能误杀了，需要提交申诉，说明情况，通常 24 小时可解。

## 其他

开通 Telegram Premium 可以在一定程度上降低被限制的风险（但这并不意味着您不会被限制！）。

::: tip

关于 Telegram Premium，请参阅 [此处](/tgwiki/premium) 。

:::

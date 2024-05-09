<template><div><p>VuePress Theme Hope 允许你通过 <a href="https://ecosystem.vuejs.press/zh/plugins/notice.html" target="_blank" rel="noopener noreferrer"><code v-pre>@vuepress/plugin-notice</code><ExternalLinkIcon/></a> 添加公告。</p>
<!-- more -->
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2>
<p>你可以通过主题选项的 <code v-pre>plugins.notice</code>为站点的不同路径设置多个公告。</p>
<p>每个公告配置需要包含一个 <code v-pre>path</code> 或 <code v-pre>match</code> 选项，用于匹配路径。<code v-pre>path</code> 选项为字符串，匹配所有以此开头的路径，<code v-pre>match</code> 选项为正则表达式以和所有路由测试匹配。</p>
<p>一个公告配置包括:</p>
<ul>
<li>
<p><code v-pre>title</code>: 通知标题，支持文本和 HTMLString</p>
</li>
<li>
<p><code v-pre>content</code>: 通知内容，支持文本和 HTMLString</p>
</li>
<li>
<p><code v-pre>actions</code>: 通知操作</p>
<p>应该是包含以下内容的对象数组:</p>
<ul>
<li>
<p><code v-pre>text</code>: 动作文本</p>
</li>
<li>
<p><code v-pre>link</code> (可选): 操作链接。</p>
<p>绝对路径会被当作内部路处理，完整 URL 被当作外部链接在新窗口打。</p>
</li>
<li>
<p><code v-pre>type</code> (可选): <code v-pre>&quot;default&quot;</code> 或 <code v-pre>&quot;primary&quot;</code></p>
<p>默认值为 <code v-pre>&quot;default&quot;</code>。</p>
</li>
</ul>
</li>
</ul>
<p>这是一个例子:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title=".vuepress/config.js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">notice</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Notice Title"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"Notice Content"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Primary Action"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"https://theme-hope.vuejs.press/"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Default Action"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/zh/"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Notice Title"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"Notice Content"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Primary Action"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"https://theme-hope.vuejs.press/"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Default Action"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，我们还为你提供了一些高级选项来控制通知显示。</p>
<div class="hint-container info">
<p class="hint-container-title">通知显示控件</p>
<p>默认情况下，每当用户进入网站时都会显示该通知，如果用户关闭该网站，该通知将在此期间保持关闭状态。</p>
<p>为了防止在用户关闭通知后下次访问时再次显示通知，你可以在公告配置中设置 <code v-pre>showOnce: true</code>。</p>
<p>另外，通知记忆是根据通知标题和通知内容来记忆的，你可以设置 <code v-pre>key</code> 选项来使用你想要的记忆键值，这样你就可以编辑通知而不会打扰已经确认过的用户。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">全屏</p>
<p>如果要显示全屏弹出窗口，可以在公告配置中使用 <code v-pre>fullscreen: true</code>。我们建议你将它与 <code v-pre>confirm: true</code> 一起使用。</p>
<p>通知将显示在屏幕中央，其他地方将被模糊遮罩覆盖。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">关闭逻辑</p>
<p>默认情况下，通知右侧会有一个关闭按钮，用户可以点击关闭。</p>
<p>但是，如果你希望用户确认通知，你可以设置 <code v-pre>confirm: true</code>，这样用户只能通过点击操作按钮来关闭通知。</p>
</div>
</div></template>



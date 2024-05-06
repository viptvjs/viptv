<template><div><p>使用 <code v-pre>Ctrl + Space</code> 触发智能提示组件。</p>
<figure><img src="@source/software/vscode/guide/assets/intellisense.gif" alt="智能提示组件" tabindex="0" loading="lazy"><figcaption>智能提示组件</figcaption></figure>
<p>您可以查看可用的方法，参数提示，简短文档等。</p>
<h2 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转"><span>跳转</span></a></h2>
<p>选择一个符号然后输入 <code v-pre>Alt + F12</code>，您就可以使用上下文菜单了。</p>
<figure><img src="@source/software/vscode/guide/assets/context-menu.gif" alt="上下文菜单" tabindex="0" loading="lazy"><figcaption>上下文菜单</figcaption></figure>
<h2 id="跳转到定义" tabindex="-1"><a class="header-anchor" href="#跳转到定义"><span>跳转到定义</span></a></h2>
<p>选择一个符号然后输入 <code v-pre>F12</code>，您也可以使用上下文菜单或 <code v-pre>Ctrl + Click</code></p>
<figure><img src="@source/software/vscode/guide/assets/goto-definition.gif" alt="跳转到定义" tabindex="0" loading="lazy"><figcaption>跳转到定义</figcaption></figure>
<p>您可以使用 <strong>转到 &gt; 返回</strong> 命令或快捷键 <code v-pre>Alt + ←</code> 来返回您的上个位置。</p>
<h2 id="跳转到引用" tabindex="-1"><a class="header-anchor" href="#跳转到引用"><span>跳转到引用</span></a></h2>
<p>选择一个符号输入 <code v-pre>Shift + F12</code>，即可打开上下文菜单查看所有引用。</p>
<h2 id="查看所有引用" tabindex="-1"><a class="header-anchor" href="#查看所有引用"><span>查看所有引用</span></a></h2>
<p>选择一个符号，然后按 <code v-pre>Shift + Alt + F12</code> 打开 <strong>引用</strong> 视图，在专用视图中显示文件的所有符号。</p>
<h2 id="重命名符号" tabindex="-1"><a class="header-anchor" href="#重命名符号"><span>重命名符号</span></a></h2>
<p>选择一个符号，然后按下 <code v-pre>F2</code>。或者，您可以使用上下文菜单。</p>
<figure><img src="@source/software/vscode/guide/assets/rename.gif" alt="重命名符号" tabindex="0" loading="lazy"><figcaption>重命名符号</figcaption></figure>
<h2 id="搜索和修改" tabindex="-1"><a class="header-anchor" href="#搜索和修改"><span>搜索和修改</span></a></h2>
<p>除了搜索和替换表达式之外，您还可以使用带有捕获组的正则表达式搜索和重用匹配的部分。通过单击 <strong>使用正则表达式</strong> <code v-pre>.*</code> 按钮(<code v-pre>Alt + R</code>)在搜索框中启用正则表达式，然后编写正则表达式并使用括号定义组。然后，您可以在替换字段使用 <code v-pre>$1</code>，<code v-pre>$2</code> 等来输入每个组中匹配的内容。</p>
<figure><img src="@source/software/vscode/guide/assets/replace.png" alt="搜索和修改" tabindex="0" loading="lazy"><figcaption>搜索和修改</figcaption></figure>
<h2 id="eslintrc-json" tabindex="-1"><a class="header-anchor" href="#eslintrc-json"><span>.eslintrc.json</span></a></h2>
<p>安装 ESLint 扩展，并根据您的需要配置。请查阅 ESLint 规范以获取有关其格式化规则和选项的详细信息。</p>
<p>这是使用 ES6 的配置。</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"browser"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"commonjs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"node"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"parserOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ecmaVersion"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">"sourceType"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
    <span class="token property">"ecmaFeatures"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"jsx"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"classes"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"defaultParams"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"no-const-assign"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"no-extra-semi"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"semi"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"no-fallthrough"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"no-empty"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"no-mixed-spaces-and-tabs"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"no-redeclare"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"no-this-before-super"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"no-undef"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"no-unreachable"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"no-use-before-define"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"constructor-super"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"curly"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"eqeqeq"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"func-names"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"valid-typeof"</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json"><span>package.json</span></a></h2>
<p>IntelliSense 会为 package.json 文件提供智能提示。</p>
<h2 id="emmet-语法" tabindex="-1"><a class="header-anchor" href="#emmet-语法"><span>Emmet 语法</span></a></h2>
<p>支持 <RouteLink to="/code/website/emmet/">Emmet 语法</RouteLink>。</p>
</div></template>



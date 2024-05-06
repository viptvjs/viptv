<template><div><h2 id="自动检测任务" tabindex="-1"><a class="header-anchor" href="#自动检测任务"><span>自动检测任务</span></a></h2>
<p>从顶层菜单中选择<strong>终端</strong>，运行命令<strong>配置任务</strong>，然后选择您要运行的任务类型。这将生成一个 <code v-pre>tasks.json</code> 文件。有关更多详细信息，请参见 <a href="https://code.visualstudio.com/docs/editor/debugging" target="_blank" rel="noopener noreferrer">任务文档<ExternalLinkIcon/></a>。</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// See &lt;https://go.microsoft.com/fwlink/?LinkId=733558></span>
  <span class="token comment">// for the documentation about the tasks.json format</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"2.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"tasks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"npm"</span><span class="token punctuation">,</span>
      <span class="token property">"script"</span><span class="token operator">:</span> <span class="token string">"install"</span><span class="token punctuation">,</span>
      <span class="token property">"group"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"kind"</span><span class="token operator">:</span> <span class="token string">"build"</span><span class="token punctuation">,</span>
        <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动生成有时会出现问题。请查阅文档，以确保一切正常。</p>
<h2 id="从终端菜单运行任务" tabindex="-1"><a class="header-anchor" href="#从终端菜单运行任务"><span>从终端菜单运行任务</span></a></h2>
<p>从顶层菜单中选择 <strong>终端 &gt; 运行任务</strong>，然后选择要运行的任务。通过运行命令 <strong>终止任务</strong> 终止正在运行的任务</p>
<figure><img src="@source/software/vscode/guide/assets/task-runner.gif" alt="任务执行器" tabindex="0" loading="lazy"><figcaption>任务执行器</figcaption></figure>
<h2 id="定义任务的键盘快捷键" tabindex="-1"><a class="header-anchor" href="#定义任务的键盘快捷键"><span>定义任务的键盘快捷键</span></a></h2>
<p>您可以为任何任务定义键盘快捷键。从命令面板(<code v-pre>Ctrl + Shift + P</code>)中，选择 <strong>首选项: 打开键盘快捷方式文件</strong>，将所需的快捷方式绑定到 <code v-pre>workbench.action.tasks.runTask</code> 命令，然后将 任务 定义为 <code v-pre>args</code>。</p>
<p>例如，要将 <code v-pre>Ctrl + H</code> 绑定到 <strong>运行任务</strong>，请添加以下内容:</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"ctrl+h"</span><span class="token punctuation">,</span>
  <span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"workbench.action.tasks.runTask"</span><span class="token punctuation">,</span>
  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token string">"Run tests"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从资源管理器中将-npm-脚本作为任务运行" tabindex="-1"><a class="header-anchor" href="#从资源管理器中将-npm-脚本作为任务运行"><span>从资源管理器中将 npm 脚本作为任务运行</span></a></h2>
<p>使用该设置 <code v-pre>npm.enableScriptExplorer</code>，您可以启用一个浏览器，该浏览器显示在工作空间中定义的脚本。</p>
<p>在资源管理器中，您可以在编辑器中打开脚本，将其作为任务运行，然后使用节点调试器启动它(当脚本定义了诸如 <code v-pre>--inspect-brk</code> 的调试选项时)。单击时的默认操作是打开脚本。要单击运行脚本，请设置 <code v-pre>npm.scriptExplorerAction</code> 为 <strong>运行</strong>。使用 <code v-pre>npm.exclude</code> 设置可以排除 <code v-pre>package.json</code> 特定文件夹中包含的文件中的脚本。</p>
<p>通过设置 <code v-pre>npm.enableRunFromFolder</code>，您可以启用从文件资源管理器的上下文菜单中为文件夹运行 npm 脚本的功能。选择文件夹后，该设置将启用命令 <strong>在文件夹中运行 npm 脚本...</strong>。该命令显示此文件夹中包含的 npm 脚本的快速选择列表，您可以选择要作为任务执行的脚本。</p>
</div></template>



<template><div><h1 id="语言切换" tabindex="-1"><a class="header-anchor" href="#语言切换"><span>语言切换</span></a></h1>
<p>查看当前语言包: <code v-pre>locale -a</code></p>
<p>中文语言是: <code v-pre>zh_CN.utf8</code></p>
<h2 id="安装中文语言包" tabindex="-1"><a class="header-anchor" href="#安装中文语言包"><span>安装中文语言包</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> language-pack-zh-hans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后修改 <code v-pre>/etc/default/locale</code>，将 <code v-pre>LANG</code> 改为 <code v-pre>zh_CN.utf8</code></p>
</div></template>



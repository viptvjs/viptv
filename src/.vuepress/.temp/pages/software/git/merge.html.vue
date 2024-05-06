<template><div><h2 id="squash-merge" tabindex="-1"><a class="header-anchor" href="#squash-merge"><span>Squash merge</span></a></h2>
<p>通过使用 <code v-pre>--squash</code> 选项，你可以在合并中将多个 commit 合并为一个。</p>
<p>也就是对于以下的例子</p>
<div class="language-git-graph line-numbers-mode" data-ext="git-graph" data-title="git-graph"><pre v-pre class="language-git-graph"><code>commit id:&quot;main1&quot;
branch feature
commit id:&quot;feature1&quot;
checkout main
commit id:&quot;main2&quot;
checkout feature
commit id:&quot;feature2&quot;
checkout main
merge feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>git merge feature</code> 得到的结果为:</p>
<div class="language-git-graph line-numbers-mode" data-ext="git-graph" data-title="git-graph"><pre v-pre class="language-git-graph"><code>commit id:&quot;main1&quot;
commit id:&quot;feature1&quot;
commit id:&quot;main2&quot;
commit id:&quot;feature2&quot;
commit id:&quot;merge commit&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果 <code v-pre>feature</code> 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 <code v-pre>git merge --squash feature</code> 得到:</p>
<div class="language-git-graph line-numbers-mode" data-ext="git-graph" data-title="git-graph"><pre v-pre class="language-git-graph"><code>commit id:&quot;main1&quot;
commit id:&quot;main2&quot;
commit id:&quot;squash merge result&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick"><span>Cherry pick</span></a></h2>
<p>有些时候，我们可能需要提取其他分支的某个 commit，这个时候我们可以用 cherry pick 进行操作。</p>
<div class="language-git-graph line-numbers-mode" data-ext="git-graph" data-title="git-graph"><pre v-pre class="language-git-graph"><code>commit
branch mrhope
commit id:&quot;featureA 20%&quot;
commit id:&quot;featureA 40%&quot;
commit id:&quot;bug fix&quot;
commit id:&quot;featureA 60%&quot;
commit id:&quot;featureA 80%&quot;
checkout main
cherry-pick id:&quot;bug fix&quot;
checkout mrhope
commit id:&quot;featureA 100%&quot;
checkout main
merge mrhope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，我们可以回到 main 分支，执行 <code v-pre>git cherry-pick &lt;commit id&gt;</code> 来挑拣某个提交，当然，你可以一并在命令中提交挑拣多个 commit。</p>
<div class="language-git-graph line-numbers-mode" data-ext="git-graph" data-title="git-graph"><pre v-pre class="language-git-graph"><code>commit
branch mrhope
commit id:&quot;featureA 20%&quot;
commit id:&quot;featureA 40%&quot;
commit id:&quot;bug fix1&quot;
commit id:&quot;featureA 60%&quot;
commit id:&quot;bug fix2&quot;
commit id:&quot;featureA 80%&quot;
checkout main
cherry-pick id:&quot;bug fix1&quot;
cherry-pick id:&quot;bug fix2&quot;
checkout mrhope
commit id:&quot;featureA 100%&quot;
checkout main
merge mrhope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>git cherry-pick &lt;commit id 1&gt; &lt;commit id 2&gt;</code> 表示挑拣 commit id 1 和 commit id 2</li>
<li><code v-pre>git cherry-pick &lt;commit id 1&gt;...&lt;commit id 2&gt;</code> 表示挑拣 commit id 1 与 commit id 2 之间 (包括两者) 的所有提交</li>
<li><code v-pre>git cherry-pick &lt;branch&gt;</code> 表示挑拣该分支最新的提交</li>
</ul>
</div></template>



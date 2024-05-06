<template><div><p>这是 Mr.Hope 个人使用的 VS Code 设置，部分设置是<RouteLink to="/software/vscode/extension.html">这里</RouteLink>的插件配置</p>
<p>将下面内容拷贝至 setting.json 以更改 VS Code 设置</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 编辑器配置</span>
  <span class="token property">"editor.accessibilitySupport"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.bracketPairColorization.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.bracketPairColorization.independentColorPoolPerBracketType"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.cursorSmoothCaretAnimation"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.detectIndentation"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"editor.fontFamily"</span><span class="token operator">:</span> <span class="token string">"'Fira Code', Consolas, 'Courier New', monospace"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.fontLigatures"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnPaste"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.guides.bracketPairs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.inlineSuggest.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"explorer.incrementalNaming"</span><span class="token operator">:</span> <span class="token string">"smart"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.mouseWheelZoom"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.rulers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"editor.quickSuggestions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"comments"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"strings"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"other"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"editor.renderControlCharacters"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.renderWhitespace"</span><span class="token operator">:</span> <span class="token string">"boundary"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.smoothScrolling"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.stickyScroll.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"first"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"editor.wordWrap"</span><span class="token operator">:</span> <span class="token string">"on"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.experimental.pasteActions.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// emmet 包含 wxml 视为 html</span>
  <span class="token property">"emmet.includeLanguages"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"wxml"</span><span class="token operator">:</span> <span class="token string">"html"</span><span class="token punctuation">,</span>
    <span class="token property">"axml"</span><span class="token operator">:</span> <span class="token string">"xml"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"emmet.variables"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"lang"</span><span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span>
    <span class="token property">"charset"</span><span class="token operator">:</span> <span class="token string">"UTF-8"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 文件相关</span>
  <span class="token property">"explorer.confirmDelete"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"explorer.confirmDragAndDrop"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"explorer.fileNesting.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"files.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*.cjson"</span><span class="token operator">:</span> <span class="token string">"jsonc"</span><span class="token punctuation">,</span>
    <span class="token property">"*.wxss"</span><span class="token operator">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span>
    <span class="token property">"*.wxs"</span><span class="token operator">:</span> <span class="token string">"javascript"</span><span class="token punctuation">,</span>
    <span class="token property">"*.wxml"</span><span class="token operator">:</span> <span class="token string">"wxml"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
  <span class="token property">"files.eol"</span><span class="token operator">:</span> <span class="token string">"\n"</span><span class="token punctuation">,</span>
  <span class="token property">"files.exclude"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"**/.classpath"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.project"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.settings"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.factorypath"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"files.maxMemoryForLargeFilesMB"</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
  <span class="token comment">// 编辑器窗口设置</span>
  <span class="token property">"window.closeWhenEmpty"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"window.commandCenter"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"window.dialogStyle"</span><span class="token operator">:</span> <span class="token string">"custom"</span><span class="token punctuation">,</span>
  <span class="token property">"window.newWindowDimensions"</span><span class="token operator">:</span> <span class="token string">"inherit"</span><span class="token punctuation">,</span>
  <span class="token property">"breadcrumbs.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 工作台设置</span>
  <span class="token property">"workbench.activityBar.visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.colorTheme"</span><span class="token operator">:</span> <span class="token string">"One Dark Pro"</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.commandPalette.preserveInput"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.editor.scrollToSwitchTabs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.iconTheme"</span><span class="token operator">:</span> <span class="token string">"material-icon-theme"</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.startupEditor"</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>
  <span class="token property">"security.workspace.trust.untrustedFiles"</span><span class="token operator">:</span> <span class="token string">"open"</span><span class="token punctuation">,</span>

  <span class="token property">"material-icon-theme.folders.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"global-components"</span><span class="token operator">:</span> <span class="token string">"Global"</span><span class="token punctuation">,</span>
    <span class="token property">"node"</span><span class="token operator">:</span> <span class="token string">"Node"</span><span class="token punctuation">,</span>
    <span class="token property">"about"</span><span class="token operator">:</span> <span class="token string">"Command"</span><span class="token punctuation">,</span>
    <span class="token property">"intro"</span><span class="token operator">:</span> <span class="token string">"Command"</span><span class="token punctuation">,</span>
    <span class="token property">"file"</span><span class="token operator">:</span> <span class="token string">"Public"</span><span class="token punctuation">,</span>
    <span class="token property">"github"</span><span class="token operator">:</span> <span class="token string">"GitHub"</span><span class="token punctuation">,</span>
    <span class="token property">"composables"</span><span class="token operator">:</span> <span class="token string">"Include"</span><span class="token punctuation">,</span>
    <span class="token property">"service-worker"</span><span class="token operator">:</span> <span class="token string">"config"</span><span class="token punctuation">,</span>
    <span class="token property">"store"</span><span class="token operator">:</span> <span class="token string">"Vuex-store"</span><span class="token punctuation">,</span>
    <span class="token property">"demo"</span><span class="token operator">:</span> <span class="token string">"Examples"</span><span class="token punctuation">,</span>
    <span class="token property">"basic"</span><span class="token operator">:</span> <span class="token string">"Helper"</span><span class="token punctuation">,</span>
    <span class="token property">"vuex"</span><span class="token operator">:</span> <span class="token string">"Vuex-store"</span><span class="token punctuation">,</span>
    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"plugin"</span><span class="token punctuation">,</span>
    <span class="token property">"router"</span><span class="token operator">:</span> <span class="token string">"Routes"</span><span class="token punctuation">,</span>
    <span class="token property">".vuepress"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token property">"vuepress"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token property">"node-js"</span><span class="token operator">:</span> <span class="token string">"Node"</span><span class="token punctuation">,</span>
    <span class="token property">"react"</span><span class="token operator">:</span> <span class="token string">"React-components"</span><span class="token punctuation">,</span>
    <span class="token property">"workflows"</span><span class="token operator">:</span> <span class="token string">"Ci"</span><span class="token punctuation">,</span>
    <span class="token property">"guide"</span><span class="token operator">:</span> <span class="token string">"content"</span><span class="token punctuation">,</span>
    <span class="token property">"git"</span><span class="token operator">:</span> <span class="token string">"Git"</span><span class="token punctuation">,</span>
    <span class="token property">"mysql"</span><span class="token operator">:</span> <span class="token string">"DataBase"</span><span class="token punctuation">,</span>
    <span class="token property">"software"</span><span class="token operator">:</span> <span class="token string">"App"</span><span class="token punctuation">,</span>
    <span class="token property">"tool"</span><span class="token operator">:</span> <span class="token string">"Tools"</span><span class="token punctuation">,</span>
    <span class="token property">"vscode"</span><span class="token operator">:</span> <span class="token string">"VSCode"</span><span class="token punctuation">,</span>
    <span class="token property">"en"</span><span class="token operator">:</span> <span class="token string">"I18n"</span><span class="token punctuation">,</span>
    <span class="token property">"zh"</span><span class="token operator">:</span> <span class="token string">"I18n"</span><span class="token punctuation">,</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token string">"typescript"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 提示设置</span>
  <span class="token property">"vsintellicode.modify.editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"automaticallyOverrodeDefaultValue"</span><span class="token punctuation">,</span>
  <span class="token property">"problems.showCurrentInStatus"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 在线服务设置</span>
  <span class="token property">"telemetry.telemetryLevel"</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
  <span class="token comment">// 终端设置</span>
  <span class="token property">"terminal.external.linuxExec"</span><span class="token operator">:</span> <span class="token string">"bash"</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.confirmOnExit"</span><span class="token operator">:</span> <span class="token string">"hasChildProcesses"</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.copyOnSelection"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.enableBell"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.defaultProfile.windows"</span><span class="token operator">:</span> <span class="token string">"PowerShell"</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.defaultProfile.linux"</span><span class="token operator">:</span> <span class="token string">"bash"</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.env.linux"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"NODE_OPTIONS"</span><span class="token operator">:</span> <span class="token string">"--max_old_space_size=4096"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.env.windows"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"NODE_OPTIONS"</span><span class="token operator">:</span> <span class="token string">"--max_old_space_size=4096"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.profiles.windows"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"PowerShell"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"PowerShell"</span><span class="token punctuation">,</span>
      <span class="token property">"overrideName"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"terminal-powershell"</span><span class="token punctuation">,</span>
      <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"-NoLogo"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.shellIntegration.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.smoothScrolling"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.tabs.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// git</span>
  <span class="token property">"diffEditor.ignoreTrimWhitespace"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"diffEditor.renderSideBySide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"git.autofetch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"git.confirmSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"git.enableSmartCommit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"git.mergeEditor"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"merge-conflict.autoNavigateNextConflict.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// npm 设置</span>
  <span class="token property">"npm.enableRunFromFolder"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"npm.packageManager"</span><span class="token operator">:</span> <span class="token string">"pnpm"</span><span class="token punctuation">,</span>
  <span class="token property">"npm.scriptExplorerAction"</span><span class="token operator">:</span> <span class="token string">"run"</span><span class="token punctuation">,</span>
  <span class="token property">"npm-intellisense.importQuotes"</span><span class="token operator">:</span> <span class="token string">"\""</span><span class="token punctuation">,</span>
  <span class="token property">"npm-intellisense.packageSubfoldersIntellisense"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"npm-intellisense.scanDevDependencies"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"npm-intellisense.showBuildInLibs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 特定格式文件设置</span>
  <span class="token property">"[cpp]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"ms-vscode.cpptools"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[css]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[dart]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.formatOnType"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"editor.selectionHighlight"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"editor.suggest.snippetsPreventQuickSuggestions"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"recentlyUsed"</span><span class="token punctuation">,</span>
    <span class="token property">"editor.tabCompletion"</span><span class="token operator">:</span> <span class="token string">"on"</span><span class="token punctuation">,</span>
    <span class="token property">"editor.wordBasedSuggestions"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[html]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[latex]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"James-Yu.latex-workshop"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[javascript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[json]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[jsonc]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[matlab]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"files.encoding"</span><span class="token operator">:</span> <span class="token string">"gb2312"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[markdown]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[svelte]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"svelte.svelte-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[scss]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[typescript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[typescriptreact]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[vue]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[xml]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"DotJoshJohnson.xml"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[yaml]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// typescript 配置</span>
  <span class="token property">"javascript.format.semicolons"</span><span class="token operator">:</span> <span class="token string">"insert"</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.referencesCodeLens.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.suggest.completeFunctionCalls"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.preferences.quoteStyle"</span><span class="token operator">:</span> <span class="token string">"double"</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.locale"</span><span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.enablePromptUseWorkspaceTsdk"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.format.semicolons"</span><span class="token operator">:</span> <span class="token string">"insert"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.preferences.quoteStyle"</span><span class="token operator">:</span> <span class="token string">"double"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.referencesCodeLens.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.suggest.completeFunctionCalls"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span>

  <span class="token comment">// php 设置</span>
  <span class="token property">"php.validate.enable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"php.validate.run"</span><span class="token operator">:</span> <span class="token string">"onType"</span><span class="token punctuation">,</span>

  <span class="token comment">// c++ 设置</span>
  <span class="token property">"C_Cpp.default.cppStandard"</span><span class="token operator">:</span> <span class="token string">"c++23"</span><span class="token punctuation">,</span>
  <span class="token comment">// 需要根据自己情况设置</span>
  <span class="token property">"C_Cpp.default.includePath"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// "C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include",</span>
    <span class="token comment">// "C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include-fixed",</span>
    <span class="token comment">// "C:/Program Files/mingw-w64/x86_64-w64-mingw32/include"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"C_Cpp.clang_format_fallbackStyle"</span><span class="token operator">:</span> <span class="token string">"Google"</span><span class="token punctuation">,</span>

  <span class="token comment">// dart</span>
  <span class="token property">"dart.debugSdkLibraries"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"dart.openDevTools"</span><span class="token operator">:</span> <span class="token string">"flutter"</span><span class="token punctuation">,</span>
  <span class="token property">"java.jdt.ls.java.home"</span><span class="token operator">:</span> <span class="token string">"c:\\Program Files\\Java\\jdk-18.0.1"</span><span class="token punctuation">,</span>
  <span class="token property">"python.languageServer"</span><span class="token operator">:</span> <span class="token string">"Pylance"</span><span class="token punctuation">,</span>

  <span class="token comment">// css颜色提示配置</span>
  <span class="token property">"colorInfo.fields"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"hex"</span><span class="token punctuation">,</span> <span class="token string">"rgb"</span><span class="token punctuation">,</span> <span class="token string">"alpha"</span><span class="token punctuation">,</span> <span class="token string">"css-color-name"</span><span class="token punctuation">,</span> <span class="token string">"preview"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"colorInfo.languages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"sass"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"scss"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"less"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// eslint</span>
  <span class="token property">"eslint.packageManager"</span><span class="token operator">:</span> <span class="token string">"pnpm"</span><span class="token punctuation">,</span>
  <span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"javascript"</span><span class="token punctuation">,</span>
    <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>
    <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token string">"typescript"</span><span class="token punctuation">,</span>
    <span class="token string">"typescriptreact"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Git Lens 设置</span>
  <span class="token property">"gitlens.defaultDateFormat"</span><span class="token operator">:</span> <span class="token string">"YYYY-MM-DD HH:mm"</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.defaultDateShortFormat"</span><span class="token operator">:</span> <span class="token string">"YYYY-MM-DD"</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.defaultTimeFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm"</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.gitCommands.closeOnFocusOut"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.views.repositories.branches.layout"</span><span class="token operator">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.advanced.messages"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"suppressCommitNotFoundWarning"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"suppressRebaseSwitchToTextWarning"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// markdown 设置</span>
  <span class="token property">"markdown.extension.orderedList.marker"</span><span class="token operator">:</span> <span class="token string">"one"</span><span class="token punctuation">,</span>
  <span class="token property">"markdown.validate.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"markdown.extension.print.imgToBase64"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// markdownlint 设置</span>
  <span class="token property">"markdownlint.config"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"default"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"MD003"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"atx"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"MD004"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"dash"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"MD013"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"MD024"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"allow_different_nesting"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"MD035"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"---"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 根据自己情况设置</span>
  <span class="token property">"markdown-pdf.executablePath"</span><span class="token operator">:</span> <span class="token string">"C:/Users/mister-hope/AppData/Local/Google/Chrome/Application/chrome.exe"</span><span class="token punctuation">,</span>

  <span class="token comment">// XML工具设置</span>
  <span class="token property">"xmlTools.enforcePrettySelfClosingTagOnFormat"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"xmlTools.removeCommentsOnMinify"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 微信小程序</span>
  <span class="token property">"minapp-vscode.disableAutoConfig"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"minapp-vscode.wxmlFormatter"</span><span class="token operator">:</span> <span class="token string">"prettier"</span><span class="token punctuation">,</span>
  <span class="token property">"minapp-vscode.prettier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"parser"</span><span class="token operator">:</span> <span class="token string">"html"</span><span class="token punctuation">,</span>
    <span class="token property">"printWidth"</span><span class="token operator">:</span> <span class="token number">80</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// liveshare 设置</span>
  <span class="token property">"liveshare.audio.joinCallBehavior"</span><span class="token operator">:</span> <span class="token string">"accept"</span><span class="token punctuation">,</span>
  <span class="token comment">// 项目管理器</span>
  <span class="token property">"projectManager.sortList"</span><span class="token operator">:</span> <span class="token string">"Saved"</span><span class="token punctuation">,</span>
  <span class="token property">"projectManager.ignoreProjectsWithinProjects"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"projectManager.any.ignoredFolders"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"dist"</span><span class="token punctuation">,</span>
    <span class="token string">"node_modules"</span><span class="token punctuation">,</span>
    <span class="token string">"out"</span><span class="token punctuation">,</span>
    <span class="token string">"typings"</span><span class="token punctuation">,</span>
    <span class="token string">"test"</span><span class="token punctuation">,</span>
    <span class="token string">"__tests__"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"projectManager.git.baseFolders"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"C:/Projects/"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// TODO Highlight 配置</span>
  <span class="token property">"todohighlight.keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"WARNING: "</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// stylelint 设置</span>
  <span class="token property">"stylelint.packageManager"</span><span class="token operator">:</span> <span class="token string">"pnpm"</span><span class="token punctuation">,</span>
  <span class="token comment">// Java</span>
  <span class="token property">"redhat.telemetry.enabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// github copilot</span>
  <span class="token property">"github.copilot.enable"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"yaml"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"plaintext"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"markdown"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用鼠标在对应属性值上悬停时，VS Code 会自动给出属性的说明。</p>
</div></template>



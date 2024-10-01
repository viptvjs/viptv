// precomputed scope
const scopeComplete = require('child_process')
  .execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')
  .find((r) => ~r.indexOf('M  packages'))
  ?.replace(/(\/)/g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1];

/** @type {import('cz-git').CommitizenGitOptions} */
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: {
      f: 'docs(core): fix typos',
      b: 'chore(repo): bump dependencies',
    },
    defaultScope: scopeComplete,
    maxSubjectLength: 100,
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      generatingByAI: '正在通过 AI 生成你的提交简短描述...',
      generatedSelectByAI: '选择一个 AI 生成的简短描述:',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: '特性', name: '特性:     ✨  新增功能', emoji: ":sparkles:" },
      { value: '修复', name: '修复:     🐛  修复缺陷', emoji: ":bug:" },
      { value: '文档', name: '文档:     📝  文档变更', emoji: ":memo:" },
      { value: '格式', name: '格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）', emoji: ":lipstick:" },
      { value: '重构', name: '重构:     ♻️  代码重构（不包括 bug 修复、功能新增）', emoji: ":recycle:" },
      { value: '性能', name: '性能:     ⚡️  性能优化', emoji: ":zap:" },
      { value: '测试', name: '测试:     ✅  添加疏漏测试或已有测试改动', emoji: ":white_check_mark:" },
      { value: '构建', name: '构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）', emoji: ":package:" },
      { value: '集成', name: '集成:     🎡  修改 CI 配置、脚本', emoji: ":ferris_wheel:" },
      { value: '回退', name: '回退:     🔨  回滚 commit', emoji: ":hammer:" },
      { value: '其他', name: '其他:     ⏪️  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）', emoji: ":rewind:" },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [
      { value: 'angular', name: 'angular:               anything Angular specific' },
      { value: 'core', name: 'core:                  anything Nx core specific' },
      { value: 'bundling', name: 'bundling:              anything bundling specific (e.g. rollup, webpack, etc.)' },
      { value: 'detox', name: 'detox:                 anything Detox specific' },
      { value: 'devkit', name: 'devkit:                devkit-related changes' },
      { value: 'express', name: 'express:               anything Express specific' },
      { value: 'graph', name: 'graph:                 anything graph app specific' },
      { value: 'js', name: 'js:                    anything TS->JS specific' },
      { value: 'linter', name: 'linter:                anything Linter specific' },
      { value: 'misc', name: 'misc:                  misc stuff' },
      { value: 'nest', name: 'nest:                  anything Nest specific' },
      { value: 'nextjs', name: 'nextjs:                anything Next specific' },
      { value: 'node', name: 'node:                  anything Node specific' },
      { value: 'nuxt', name: 'nuxt:                  anything Nuxt specific' },
      { value: 'nx-cloud', name: 'nx-cloud:              anything Nx Cloud specific' },
      { value: 'nx-plugin', name: 'nx-plugin:             anything Nx Plugin specific' },
      { value: 'nx-dev', name: 'nx-dev:                anything related to docs infrastructure' },
      { value: 'react', name: 'react:                 anything React specific' },
      { value: 'react-native', name: 'react-native:          anything React Native specific' },
      { value: 'remix', name: 'remix:                 anything Remix specific' },
      { value: 'rspack', name: 'rspack:               anything Rspack specific' },
      { value: 'expo', name: 'expo:                  anything Expo specific' },
      { value: 'release', name: 'release:               anything related to nx release' },
      { value: 'repo', name: 'repo:                  anything related to managing the repo itself' },
      { value: 'storybook', name: 'storybook:             anything Storybook specific' },
      { value: 'testing', name: 'testing:               anything testing specific (e.g. jest or cypress)' },
      { value: 'vite', name: 'vite:                  anything Vite specific' },
      { value: 'vue', name: 'vue:                   anything Vue specific' },
      { value: 'web', name: 'web:                   anything Web specific' },
      { value: 'webpack', name: 'webpack:               anything Webpack specific' },
      { value: 'gradle', name: 'gradle:                anything Gradle specific' },
      { value: 'module-federation', name: 'module-federation:     anything Module Federation specific' },
    ],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: '以上都不是？我要自定义',
    emptyScopesAlias: '跳过',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' }
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: '跳过',
    customIssuePrefixAlias: '自定义前缀',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
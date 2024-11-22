const { execSync } = require('child_process');
const { defineConfig } = require('cz-git')
const fs = require('node:fs')
const path = require('node:path')

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))
const scopeComplete = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')
  .find((r) => ~r.indexOf('M  src'))
  ?.replace(/(\/)/g, '%%')
  ?.match(/src%%((\w|-)*)/)?.[1];

const gitStatus = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')

const subjectComplete = gitStatus
  .find((r) => ~r.indexOf('M  packages/components'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%components%%((\w|-)*)/)?.[1]

module.exports = defineConfig({
  rules: {
    'scope-enum': [2, 'always', ['cz-git', 'site', 'cli', ...packages]],
    'subject-min-length': [2, 'always', 2],
    'subject-empty': [2, 'never'],
  },
  prompt: {
    alias: {
      'b': 'chore: bump dependencies',
      'c': 'chore: update config files',
      'f': 'docs: fix typos',
      ':': 'docs: update README',
      'schema': 'chore: update czrc configure JSON schema',
      'table:data': 'chore: :hammer: update project using table data',
      'table:docs': 'docs: update project using table',
    },
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
      { value: 'feat', name: 'feat:    ✨  新增功能 | A new feature', emoji: ":sparkles:" },
      { value: 'fix', name: 'fix:     🐛  修复缺陷 | A bug fix', emoji: ":bug:" },
      { value: 'docs', name: 'docs:     📝  文档更新 | Documentation only changes', emoji: ":memo:" },
      { value: 'style', name: 'style:     💄  代码格式 | Changes that do not affect the meaning of the code', emoji: ":lipstick:" },
      { value: 'refactor', name: 'refactor:     ♻️  代码重构 | A code change that neither fixes a bug nor adds a feature', emoji: ":recycle:" },
      { value: 'perf', name: 'perf:     ⚡️  性能提升 | A code change that improves performance', emoji: ":zap:" },
      { value: 'test', name: 'test:     ✅  测试相关 | Adding missing tests or correcting existing tests', emoji: ":white_check_mark:" },
      { value: 'build', name: 'build:     📦️  构建相关 | Changes that affect the build system or external dependencies', emoji: ":package:" },
      { value: 'ci', name: 'ci:     🎡  持续集成 | Changes to our CI configuration files and scripts', emoji: ":ferris_wheel:" },
      { value: 'revert', name: 'revert:     🔨  回退代码 | Revert to a commit', emoji: ":hammer:" },
      { value: 'chore', name: 'chore:     ⏪️  其他修改 | Other changes that do not modify src or test files', emoji: ":rewind:" },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '38;5;043',
    scopes: [...packages],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: !scopeComplete ? 'top-bottom' : 'bottom',
    customScopesAlias: '以上都不是？我要自定义',
    emptyScopesAlias: '跳过',
    upperCaseSubject: false,
    markBreakingChangeMode: true,
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
    defaultScope: scopeComplete,
    defaultSubject: subjectComplete && `[${subjectComplete}] `
  }
})
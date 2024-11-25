"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.THIRD_PARTY_THEMES = exports.THIRD_PARTY_PLUGINS = exports.DEPRECATED_PACKAGES = exports.REMOVED_PACKAGES = exports.OFFICIAL_PLUGINS_AND_THEMES_REGEXP = exports.OFFICIAL_PACKAGES = exports.VUE_RELATED_PACKAGES = void 0;
exports.VUE_RELATED_PACKAGES = [
    '@vue/compiler-core',
    '@vue/compiler-dom',
    '@vue/compiler-sfc',
    '@vue/compiler-ssr',
    '@vue/devtools-api',
    '@vue/reactivity',
    '@vue/reactivity-transform',
    '@vue/runtime-core',
    '@vue/runtime-dom',
    '@vue/server-renderer',
    '@vue/shared',
    'vue',
    'vue-router',
];
exports.OFFICIAL_PACKAGES = [
    '@vuepress/bundler-vite',
    '@vuepress/bundler-webpack',
    'vuepress',
];
exports.OFFICIAL_PLUGINS_AND_THEMES_REGEXP = /^@vuepress\/(?:plugin|theme)-/;
exports.REMOVED_PACKAGES = ['vuepress-webpack', 'vuepress-vite'];
exports.DEPRECATED_PACKAGES = [
    '@vuepress/cli',
    '@vuepress/client',
    '@vuepress/core',
    '@vuepress/markdown',
    '@vuepress/shared',
    '@vuepress/utils',
];
exports.THIRD_PARTY_PLUGINS = /^(@.*\/)?vuepress-plugin-/;
exports.THIRD_PARTY_THEMES = /^(@.*\/)?vuepress-theme-/;

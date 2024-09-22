<script setup lang="ts">
import { computed } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import type { ThemeBlogHomePageFrontmatter } from "vuepress-theme-hope/client";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";

import MarkdownContent from "vuepress-theme-hope/components/MarkdownContent.js";
import { DropTransition } from "vuepress-theme-hope/components/transitions/index.js";
import ArticleList from "vuepress-theme-hope/modules/blog/components/ArticleList.js";
import BlogHero from "vuepress-theme-hope/modules/blog/components/BlogHero.js";
import BlogWrapper from "vuepress-theme-hope/modules/blog/components/BlogWrapper.js";
import InfoPanel from "vuepress-theme-hope/modules/blog/components/InfoPanel.js";
import ProjectPanel from "vuepress-theme-hope/modules/blog/components/ProjectPanel.js";
import { useArticles } from "vuepress-theme-hope/modules/blog/composables/index.js";

const articles = useArticles();
const frontmatter = usePageFrontmatter<ThemeBlogHomePageFrontmatter>();
const projects = computed(() => frontmatter.value.projects ?? []);
</script>

<template>
  <BlogWrapper>
    <div class="vp-blog vp-page">
      <BlogHero>
        <template #info="info">
          <HitokotoBlogHero v-bind="info" />
        </template>

        <template #bg>
          <BingHeroBackground />
        </template>
      </BlogHero>

      <div class="blog-page-wrapper custom">
        <main id="main-content" class="vp-blog-home">
          <DropTransition appear :delay="0.16">
            <ProjectPanel :items="projects" />
          </DropTransition>

          <DropTransition appear :delay="0.24">
            <ArticleList :items="articles.items" />
          </DropTransition>
        </main>

        <DropTransition appear :delay="0.16">
          <InfoPanel />
        </DropTransition>
      </div>

      <DropTransition appear :delay="0.28">
        <MarkdownContent />
      </DropTransition>
    </div>
  </BlogWrapper>
</template>

<style lang="scss">
.vp-page.vp-blog {
  .vp-blog-home {
    flex: 1;
    width: 0;
    max-width: 780px;
  }

  .theme-hope-content:empty {
    padding: 0;
  }
}
</style>
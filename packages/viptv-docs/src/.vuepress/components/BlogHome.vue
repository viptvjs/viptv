<script setup lang="ts">
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
</script>

<template>
  <BlogHero>
    <template #info="info">
      <HitokotoBlogHero v-bind="info" />
    </template>

    <template #bg>
      <BingHeroBackground />
    </template>
  </BlogHero>
</template>

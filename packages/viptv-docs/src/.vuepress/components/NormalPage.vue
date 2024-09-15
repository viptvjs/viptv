<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
</script>
<template>
  <NormalPage>
    <template #contentAfter>
      <div style="text-align: center; "><img src="/assets/png/VIPTV-LOGO-1001x251.png" alt="红杏IEPL专线机场" width="100%">
      </div>
    </template>
    <template #tocBefore>
      <a href="/about/donate" target="_blank">
        <div style="text-align: center; "><img src="/assets/jpg/zanzhu.jpg" alt="红杏IEPL专线机场" width="100%">
        </div>
      </a>
    </template>
    <template #tocAfter>

      <div class="flip-wrapper">
        <div class="flip-content">
          <div class="face"></div>
          <div class="back face"></div>
        </div>
      </div>
    </template>
  </NormalPage>

</template>

<style lang="scss" scoped>
.flip-wrapper {
  position: relative;
  width: 160px;
  height: 160px;
  z-index: 1;
  margin-top: 40px;
}


.flip-content {
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: cubic-bezier(0, 0, 0, 1.29) 0.5s;
}

.flip-wrapper:hover .flip-content {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: url(/assets/png/wxpay.png) no-repeat center/cover;
  background-size: 100%;
  border-radius: 6px;
}

.back.face {
  display: block;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  box-sizing: border-box;
  background: url(/assets/png/wxpay.png) no-repeat center/cover;
  background-size: 100%;
}
</style>

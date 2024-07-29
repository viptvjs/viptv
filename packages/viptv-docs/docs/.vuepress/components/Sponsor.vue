<template>
  <a href="/about/donate">
        <div id="flip-wrapper">
          <div id="flip-content">
            <div class="face"></div>
            <div class="back face"></div>
          </div>
        </div>
      </a>
</template>
<style lang="scss" scoped>
#flip-wrapper {
  position: relative;
  height: 310px;
  z-index: 1;
}


#flip-content {
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: cubic-bezier(0, 0, 0, 1.29) 0.5s;
}

#flip-wrapper:hover #flip-content {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: url(/assets/jpg/zanzhu.jpg) center center
    no-repeat;
}

.back.face {
  display: block;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  box-sizing: border-box;
  background: url(/assets/jpg/zanzhu.jpg) center center
    no-repeat;
}
</style>
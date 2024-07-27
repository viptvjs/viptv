<script setup lang="ts">
import 'aplayer/dist/APlayer.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { useRouter } from 'vue-router';
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';

let APlayer: any;
const IsShow = ref(false);
let GlobalMusicList = [];

const props = defineProps({
  spin: Boolean
})

const SwitchStatus = () => {
  IsShow.value = !IsShow.value;
};

const CloseStatus = () => {
  if (IsShow.value) {
    IsShow.value = false;
  }
};

const InsertMenu = () => {
  const navCenterElm = document.querySelector('.vp-navbar-end');

  if (!navCenterElm) {
    return;
  }

  if (!document.querySelector('#MyMusic_Menu')) {
    const elm = document.createElement('div');
    elm.id = 'MyMusic_Menu';
    elm.classList.add('nav-item');
    elm.innerHTML = `<div id="MyMusic_icon" class="btnImg"></div>`;
    navCenterElm.appendChild(elm);
  }

  const Menu = document.querySelector('#MyMusic_Menu') as HTMLElement;
  Menu.onclick = (event) => {
    SwitchStatus();
    event.stopPropagation();
  };

  const MyMusicWrapper = document.querySelector('.MyMusic') as HTMLElement;
  MyMusicWrapper.onclick = (event) => {
    event.stopPropagation();
  };
};

const NewPlayer = () => {
  if (!APlayer) {
    return;
  }

  const Win: any = window;

  // 如果不存在盒子 则 终止
  const playElm = document.getElementById('GlobalAPlayer');

  if (!playElm) {
    return;
  }

  if (GlobalMusicList.length < 1) {
    return;
  }

  AddBtnSpin();

  // 判断是否被 APlayer 接管
  const playExist = playElm.classList.contains('aplayer');
  if (playExist) {
    return;
  }

  Win.GlobalAPlayer = new APlayer({
    element: document.getElementById('GlobalAPlayer'),
    audio: GlobalMusicList,
    theme: `#${((Math.random() * 0xffffff) << 0).toString(16)}`,
    lrcType: 3,//歌词类型0或3
    volume: 0.9,//音量，100%
    preload: 'auto',//预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true,//阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    fixed: false,//吸底模式,左下角播放器样式
    theme: '#FFF9C4',//播放器主题色
    autoplay: true,//打开自动播放，关闭改成false
    order: 'list',//顺序播放，随机播放改成random
    listFolded: false,//列表默认折叠true
    loop: 'all',
    listFolded: false,
    listMaxHeight: '324px',
    mini: false,
    storageName: 'GlobalAPlayer',
  });

  // 让按钮旋转
  Win.GlobalAPlayer.on('play', function () {
    AddBtnSpin();
  });
  Win.GlobalAPlayer.on('pause', function () {
    AddBtnSpin();
  });
};

function AddBtnSpin() {
  const Win: any = window;
  if (Win.GlobalAPlayer && Win.GlobalAPlayer.mode) {
    if (Win.GlobalAPlayer.paused) {
      document.getElementById('MyMusic_icon')?.setAttribute('spin', 'false');
    } else {
      document.getElementById('MyMusic_icon')?.setAttribute('spin', 'true');
    }
  }
}

const LoadMusicList = (callback) => {
  axios({
    method: 'get',
    url: 'https://cfss.cc/mp3/kg.php?ss=%E6%8A%96%E9%9F%B3',
    params: {},
  }).then((response) => {
    const listData = response.data.Data;
    if (listData && listData.length > 0) {
      GlobalMusicList = listData
    }
    callback && callback();
  });
};

onMounted(() => {
  const router = useRouter();

  LoadMusicList(() => {
    import('aplayer').then((res) => {
      nextTick(() => {
        APlayer = res.default;
        InsertMenu();
        NewPlayer();
        // 在这里插入全局事件监听
        window.document.body.onclick = () => {
          CloseStatus();
        };
      });
      router.beforeEach(() => {
        setTimeout(() => {
          InsertMenu();
          NewPlayer();
        }, 50);
      });
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="MyMusic">
      <div class="MyMusic_Play" :class="{ hide: !IsShow }">
        <div class="close" @click="CloseStatus">
          <font-awesome-icon :icon="['fas', 'xmark']" :spin="true" />
        </div>
        <div id="GlobalAPlayer">
          <h1>加载中..</h1>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.MyMusic {
  position: fixed;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 100;
  cursor: pointer;
  user-select: none;
}

.MyMusic_Play {
  background-color: #fff;
  user-select: none;
  position: fixed;
  width: 280px;
  height: 392px;
  top: 50%;
  right: 50%;
  margin-right: -140px;
  margin-top: -217px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  transition: 0.3s;
  transform: scale(1);
  opacity: 1;

  &.hide {
    top: 0;
    right: 0;
    opacity: 0;
    transform: scale(0);
    visibility: hidden;
  }

  .aplayer {
    margin: 0;
  }

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    user-select: none;
    cursor: pointer;
    font-size: 18px;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}

#MyMusic_Menu {
  top: 1px;
  user-select: none;
  cursor: pointer;
  opacity: 0.7;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(69, 7, 136, 0.2);

  .icon {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }

  height: 1.6rem;
  width: 1.6rem;

  .btnImg {
    background-image: url('/assets/png/music.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
</style>
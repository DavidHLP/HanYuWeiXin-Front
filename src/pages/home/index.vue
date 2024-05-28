<template>
  <!-- #ifndef APP-NVUE || MP-TOUTIAO -->
  <view class="u-demo-block" 
        style="margin-top: 2%; height: 200px; margin-left: 1%; margin-right: 1%;">
    <up-swiper
      :list="listswiper"
      previousMargin="30"
      nextMargin="30"
      circular
      :autoplay="true"
      radius="5"
      bgColor="#ffffff"
      :height="200"
      keyName="image"
      showTitle
    ></up-swiper>
  </view>
  <!-- #endif -->

  <midbar></midbar>

  <view style="margin-left: 1%; margin-right: 1%;">
    <u-scroll-list @right="right" @left="left">
      <view class="scroll-list" style="flex-direction: row;">
        <view
          class="scroll-list__goods-item"
          v-for="(item, index) in list"
          :key="index"
          :class="[(index === 9) && 'scroll-list__goods-item--no-margin-right', item.active && 'scroll-list__goods-item--active']"
          @click="handleClick(item, index)"
          style="margin-left: 1%;"
        >
          <image class="scroll-list__goods-item__image" :src="item.thumb"></image>
          <text style="font-size: 10px;">{{ item.price }}</text>
        </view>
        <view class="scroll-list__show-more">
          <text class="scroll-list__show-more__text">查看更多</text>
          <u-icon name="arrow-leftward" color="#f56c6c" size="12"></u-icon>
        </view>
      </view>
    </u-scroll-list>
  </view>

  <waterfall></waterfall>

  <view>
    <tarb :name='"home"'></tarb>
  </view>
</template>

<script setup lang="ts">
import tarb from "@/components/tabbar/tabbar.vue";
import { reactive } from "vue";
import type { imageUrl } from '@/pages/home/type';
import midbar from "@/components/midtar/midbar.vue";
import waterfall from "@/components/Waterfall/Waterfall.vue";

const listswiper = reactive<imageUrl[]>([
  {
    image: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66542bd795522.png',
    title: '昨夜星辰昨夜风，画楼西畔桂堂东'
  },
  {
    image: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66542bc978155.png',
    title: '身无彩凤双飞翼，心有灵犀一点通'
  },
  {
    image: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66542bb7ed12e.png',
    title: '疏影横斜水清浅，暗香浮动月黄昏'
  },
  {
    image: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66542a8237b84.png',
    title: '月落乌啼霜满天，江枫渔火对愁眠'
  }
]);

const list = reactive([
  {
    price: '实用中文专区',
    thumb: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66546afa83b0f.jpg',
    active: false
  },
  {
    price: '成人英语专区',
    thumb: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66546b06742ba.jpg',
    active: false
  },
  {
    price: '学术专区',
    thumb: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66546b06d5d41.jpg',
    active: false
  },
  {
    price: '国际中文专区',
    thumb: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66546b08bdd11.jpg',
    active: false
  },
  {
    price: '中文课程专区',
    thumb: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/66546f67ea368.jpg',
    active: false
  },
  {
    price: '中文教材专区',
    thumb: 'http://114.132.222.183:5244/p/HLP/images/2024/05/27/665471c14a3e2.jpg',
    active: false
  }
]);

const left = () => {
  console.log('left');
};

const right = () => {
  console.log('right');
};

const handleClick = (item: any, index: number) => {
  console.log(item, index);
};
</script>

<style lang="scss" scoped>
/* 添加样式 */
.circle-image {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* 将边角设为圆形 */
  overflow: hidden; /* 隐藏超出部分，保持形状为圆 */
}

.tabbarclass {
  height: 75px;
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 5%;
  background-color: #ffffff;
}

.intabbarclass {
  margin-top: 7%;
}

.scroll-list {
  display: flex;
  flex-direction: column;

  &__goods-item {
    margin-right: 20px;
    transition: background-color 0.3s; /* 添加过渡效果 */

    &__image {
      width: 60px;
      height: 60px;
      border-radius: 4px;
    }

    &__text {
      color: #f56c6c;
      text-align: center;
      font-size: 12px;
      margin-top: 5px;
    }

    &--active {
      background-color: #f0f0f0; /* 被点击时的背景颜色 */
    }
  }

  &__show-more {
    background-color: #fff0f0;
    border-radius: 3px;
    padding: 3px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      font-size: 12px;
      width: 12px;
      color: #f56c6c;
      line-height: 16px;
    }
  }
}
</style>

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
      keyName="url"
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
          <image class="scroll-list__goods-item__image" :src="item.url"></image>
          <text style="font-size: 10px;">{{ item.text }}</text>
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
import { onMounted } from "vue";
import {GetImageUrlAndTitle} from "@/pages/home/api"

const listswiper = reactive<imageUrl[]>([]);

const list = reactive<imageUrl[]>([]);

onMounted(async()=>{
  try {
    GetImageUrlAndTitle(1).then((res:any) => {
      listswiper.push(...res.data) ;
      for(let mid of listswiper){
        mid.title = mid.text;
      }
    });
    GetImageUrlAndTitle(2).then((res:any) => {
      list.push(...res.data) ;
    });
  } catch (error) {
    console.log(error);
  }
})

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
</style>@/pages/home/api

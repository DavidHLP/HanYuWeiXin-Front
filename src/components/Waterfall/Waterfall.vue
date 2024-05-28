<template>
  <view class="waterview">
    <view v-for="(item , index) in items" :key="index" class="item-container">
      <image :src="item.url" class="imageclass"></image>
      <view class="text-container">
        <up-text :text="item.title" :size="16"></up-text>
        <up-text :text="item.nexttitle" type="info" :size="12" style="margin-top: 1%;"></up-text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { Item } from "@/components/Waterfall/type";

const items: Item[] = reactive([
  {
    url: 'http://114.132.222.183:5244/p/HLP/images/2024/05/28/6655470128740.webp',
    title: 'HSK一级小白班|考季立减40元',
    nexttitle: '超100节直播+录播课手把手教学',
  },
  {
    url:'http://114.132.222.183:5244/p/HLP/images/2024/05/28/6655470128740.webp',
    title: "HSK二级进阶班 | 考季立减50元",
    nexttitle: "超150节直播+录播课全程辅导"
  },
  {
    url:'http://114.132.222.183:5244/p/HLP/images/2024/05/28/6655470128740.webp',
    title: "HSK三级精英班 | 报名立减60元",
    nexttitle: "200+节课程配备专项练习"
  },
  {
    url:'http://114.132.222.183:5244/p/HLP/images/2024/05/28/6655470128740.webp',
    title: "HSK四级高手班 | 新用户立减70元",
    nexttitle: "超300节直播+录播课深度解析"
  },
  {
    url:'http://114.132.222.183:5244/p/HLP/images/2024/05/28/6655470128740.webp',
    title: "HSK五级菁英班 | 限时立减80元",
    nexttitle: "专属教师团队+丰富的课程资源"
  },
  {
    url:'http://114.132.222.183:5244/p/HLP/images/2024/05/28/6655470128740.webp',
    title: "HSK六级大师班 | 注册立减100元",
    nexttitle: "超400节直播+录播课全方位教学"
  }
]);
</script>

<style>
/* page不能写带scope的style标签中，否则无效 */
page {
  background-color: rgb(240, 240, 240);
}
</style>

<style lang="scss" scoped>
.waterview {
  background-color: white;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.item-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.imageclass {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.text-container {
  display: flex;
  flex-direction: column;
}
</style>

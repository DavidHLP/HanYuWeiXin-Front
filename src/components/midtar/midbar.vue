<template>
    <view class="tabbarclass">
        <view>
        <up-tabbar
            :value="value4"
            @change="(name: number) => value4 = name"
            :fixed="false"
            :placeholder="false"
            activeColor="#d81e06"
        >
            <view class="intabbarclass" v-for="(item , index) in imageUrls">
            <up-tabbar-item :text="item.title">
                <template #active-icon>
                <image
                    class="circle-image"
                    :src="item.image"
                ></image>
                </template>
                <template #inactive-icon>
                <image
                    class="circle-image"
                    :src="item.image"
                ></image>
                </template>
            </up-tabbar-item>
            </view>
        </up-tabbar>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { onShow } from '@dcloudio/uni-app';  // 确保引入 onShow 钩子
import type { imageUrl } from "@/components/midtar/type";
import { GetImageUrlAndTitle } from "@/components/midtar/index";

const value4 = ref(0);
const imageUrls = reactive<imageUrl[]>([]);

const fetchImageUrls = async () => {
  try {
    const res: any = await GetImageUrlAndTitle(4);
    imageUrls.splice(0, imageUrls.length, ...res.data.map((mid: any) => ({
      image: mid.url,
      title: mid.text
    })));
  } catch (error) {
    console.error("数据获取失败", error);
  }
};

onMounted(() => {
  fetchImageUrls();
});

onShow(() => {
  fetchImageUrls();
});

</script>

<style lang="scss" scoped>

    .circle-image {
        margin-top: 35%;
        width: 75px;
        height: 75px;
        border-radius: 50%; /* 将边角设为圆形 */
        overflow: hidden; /* 隐藏超出部分，保持形状为圆 */
    }

    .tabbarclass{
        height: 100px;
        margin-top: 1%;
        margin-left: 1%;
        margin-right: 1%;
        border-radius: 5%;
        background-color: #ffffff;
    }

    .intabbarclass{
        margin-top: 7%;
    }
</style>

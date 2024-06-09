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
import { ref, reactive, onMounted } from "vue";
import { onShow } from "@dcloudio/uni-app"; // 引入 onShow 钩子
import type { Item } from "@/components/Waterfall/type";
import { GetImageUrlAndTitle } from "@/components/Waterfall/api";

const items = reactive<Item[]>([]);

const fetchItems = async () => {
  try {
    const res:any = await GetImageUrlAndTitle(3);
    items.splice(0, items.length, ...res.data.map((item: any) => ({
      url: item.url,
      title: item.text,
      nexttitle: item.nextText
    })));
  } catch (error) {
    console.error("数据获取失败", error);
  }
};

onMounted(() => {
  fetchItems();
});

onShow(() => {
  fetchItems();
});

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

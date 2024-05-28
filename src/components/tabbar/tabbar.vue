<!-- src/App.vue -->
<template>
  <view>
    <router-view></router-view>
    <up-tabbar
      :value="value6"
      @change="handleChange"
      :fixed="true"
      :placeholder="true"
      :safeAreaInsetBottom="true"
    >
      <up-tabbar-item text="首页" icon="home" name="home"></up-tabbar-item>
      <up-tabbar-item text="课程" icon="photo" name="classb"></up-tabbar-item>
      <up-tabbar-item text="写作" icon="play-right" name="writeb"></up-tabbar-item>
      <up-tabbar-item text="我的" icon="account" name="my"></up-tabbar-item>
    </up-tabbar>
  </view>
</template>

<script setup lang="ts">
import { ref ,defineProps} from 'vue';
import type { url } from '@/components/tabbar/type.ts';

const props = defineProps({
  name:String
});
const value6 = ref(props.name);
const url : url={
  "home":"/pages/home/index",
  "classb":"/pages/classb/index",
  "writeb":"/pages/writeb/index",
  "my":"/pages/my/index"
  }
const handleChange = (name: string) => {
  if(name == props.name) return ;
  // console.log(url[name]);
  uni.switchTab({
    url: url[name]
  });
};

</script>

<style lang="scss" scoped>
/* 添加样式 */
</style>
@/components/tabbar/api@/components/tabbar
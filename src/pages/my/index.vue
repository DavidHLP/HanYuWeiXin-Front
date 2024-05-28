<template>

  <view class="headimage">
    <up-avatar :src="src" :size="125" ></up-avatar>
  </view>
  <view class="itemstyle" style="margin-top: 5%;">
    <up-cell-group >
      <up-cell icon="rmb-circle" title="支付"></up-cell>
	  </up-cell-group>
  </view>
  <view class="itemstyle">
    <up-cell-group >
      <up-cell icon="star" title="收藏"></up-cell>
      <up-cell icon="coupon" title="卡券"></up-cell>
      <up-cell icon="heart" title="关注"></up-cell>
	  </up-cell-group>
  </view>
  <view class="itemstyle">
    <up-cell-group>
      <up-cell icon="integral" title="会员等级" value="会员信息" isLink></up-cell>
      <up-cell icon="setting" title="个人设置" value="详细" isLink></up-cell>
	  </up-cell-group>
  </view>
  <view>
    <tarb :name='"my"'></tarb>
  </view>
</template>

<script setup lang="ts">
import tarb from "@/components/tabbar/tabbar.vue";
import { ref } from "vue";
const src = ref('')
const	text = ref('无头像')
</script>

<style lang="scss">
page{
  background-color: #ededed;
}
.headimage {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  display: flex; /* 使容器成为 flex 容器 */
  justify-content: center; /* 水平居中内容 */
  background-color: #ededed;
}
.itemstyle{
  margin-top: 2%;
  background-color: #fff;
}
</style>

<style lang="scss">
  page {
    background-color: $u-bg-color;
  }
</style>

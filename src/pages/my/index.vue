<template>
  <view class="headimage">
    <up-avatar :src="src" :size="125" @click="UpLoad" :key="src"></up-avatar>
  </view>
  <view class="itemstyle" style="margin-top: 5%;">
    <up-cell-group>
      <up-cell icon="rmb-circle" title="支付"></up-cell>
    </up-cell-group>
  </view>
  <view class="itemstyle">
    <up-cell-group>
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
    <tarb :name="'my'"></tarb>
  </view>
</template>

<script setup lang="ts">
import tarb from "@/components/tabbar/tabbar.vue";
import { ref } from "vue";
import { uploadAvatar } from "@/pages/my/api";
import { onShow } from "@dcloudio/uni-app";

const src = ref("");
const text = ref("无头像");

onShow(() => {
  const userInfo = uni.getStorageSync("userInfo");
  if (userInfo) {
    console.log(userInfo);
    src.value = userInfo.avatar;
  }
});

const UpLoad = () => {
  uni.chooseImage({
    count: 1,
    sizeType: ["compressed"],
    sourceType: ["album", "camera"],
    success: async (res) => {
      const tempFilePath = res.tempFilePaths[0];
      src.value = tempFilePath;
      // 上传头像
      try {
        const response:any = await uploadAvatar(tempFilePath);
        if (response) {
          src.value = JSON.parse(response).data; // 假设服务器返回新的头像 URL

          // 更新本地缓存
          const userInfo = uni.getStorageSync("userInfo");
          userInfo.avatar = JSON.parse(response).data;
          uni.setStorageSync("userInfo", userInfo);


          uni.showToast({
            title: "头像上传成功",
            icon: "success",
          });
        } else {
          uni.showToast({
            title: "上传失败，请重试",
            icon: "none",
          });
        }
      } catch (error) {
        console.error("头像上传失败", error);
        uni.showToast({
          title: "上传失败，请重试",
          icon: "none",
        });
      }
    },
  });
};
</script>

<style lang="scss">
page {
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
.itemstyle {
  margin-top: 2%;
  background-color: #fff;
}
</style>

<style lang="scss">
page {
  background-color: $u-bg-color;
}
</style>

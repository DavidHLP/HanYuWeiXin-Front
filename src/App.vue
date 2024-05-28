<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
  uni.hideTabBar({
              animation:false
           });
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
  @import "uview-plus/index.scss";
  /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
  page{
    background-color: #ffffff;
  }
</style>

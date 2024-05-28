<template>
    <view>
        <swiper
                :indicator-dots="true"
                class="swiper"
        >
            <swiper-item>
                <up-grid :border="true">
                    <up-grid-item
                            :customStyle="{width:220+'rpx',height:220+'rpx'}"
                            v-for="(item, index) in swiperList"
                            :index="index"
                            :key="index"
                    >
                        <up-icon
                                :customStyle="{paddingTop:20+'rpx'}"
                                :name="item"
                                :size="22"
                        ></up-icon>
                        <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
                    </up-grid-item>
                </up-grid>
            </swiper-item>
            <swiper-item>
                <up-grid :border="true">
                    <up-grid-item
                            :customStyle="{width:220+'rpx',height:220+'rpx'}"
                            v-for="(item, index) in swiperList"
                            :index="index + 9"
                            :key="index"
                    >
                        <up-icon
                                :customStyle="{paddingTop:20+'rpx'}"
                                :name="item"
                                :size="22"
                        ></up-icon>
                        <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
                    </up-grid-item>
                </up-grid>
            </swiper-item>
            <swiper-item>
                <up-grid :border="true">
                    <up-grid-item
                            :customStyle="{width:220+'rpx',height:220+'rpx'}"
                            v-for="(item, index) in swiperList"
                            :index="index + 18"
                            :key="index"
                    >
                        <up-icon
                                :customStyle="{paddingTop:20+'rpx'}"
                                :name="item"
                                :size="22"
                        ></up-icon>
                        <text class="grid-text">{{ "宫格" + (index + 1) }}</text>
                    </up-grid-item>
                </up-grid>
            </swiper-item>
        </swiper>
    </view>
</template>

<script setup lang="ts">  
import { ref } from 'vue';
const swiperList = ref(
    ['integral', 
    'kefu-ermai', 
    'coupon', 'gift',
     'scan', 
     'pause-circle', 
     'wifi', 
     'email', 
     'list']);  

</script>

<style lang="scss" scoped>
    .swiper {        
        height: 720rpx;
    }
    .grid-text {
        font-size: 14px;
        color: #909399;
        padding: 10rpx 0 20rpx 0rpx;
        /* #ifndef APP-PLUS */
        box-sizing: border-box;
        /* #endif */
    }
</style>
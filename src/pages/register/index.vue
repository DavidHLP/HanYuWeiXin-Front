<template>
    <view class="content">
      <view class="row-input">
        <image mode="aspectFit"></image>
        <input placeholder="账号或邮箱" maxlength="18" v-model="registerUser.userName" />
      </view>
      <view class="row-input">
        <image mode="aspectFit"></image>
        <input placeholder="请输入您的密码" maxlength="18" type="password" v-model="registerUser.password" />
        <!-- <input placeholder="请再次输入您的密码" maxlength="18" type="password" v-model="confirmPassword" -->
        <!-- @blur="validatePassword"/> -->
      </view>
      <view class="login-btn" @click="register">
        注册
      </view>
      <!-- <view class="function-link">
        <text @click="backlogin">返回登录</text>
      </view> -->
    </view>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue';
  import type { RegisterUser } from '@/pages/register/type';
  import { RegisterTo } from '@/pages/register/api';
  
  const registerUser: RegisterUser = reactive<RegisterUser>({
    userName: '',
    password: ''
  });
  
  // const confirmPassword = ref('');
  
    //   const backlogin = () => {
    //     uni.navigateBack({ delta: 1 });
    //   };
  
  const register = async () => {
    try {
      const res: any = await RegisterTo(registerUser);
      if (res.statusCode === 200) {
        uni.showToast({
          title: '注册成功',
          icon: 'success'
        });
        setTimeout(() => {
            uni.switchTab({
                url: '/pages/login/index'
            });
        }, 1500);
      } else {
        uni.showToast({
          title: res.msg || '注册失败',
          icon: 'none'
        });
      }
    } catch (error) {
      uni.showToast({
        title: '注册失败，请重试',
        icon: 'none'
      });
    }
  };
  
  // const validatePassword = () => {
  //   if (registerUser.password !== confirmPassword.value) {
  //     uni.showToast({
  //       title: '两次输入的密码不一致',
  //       icon: 'none'
  //     });
  //   }
  // };
  </script>
  
  <style lang="scss">
  .content {
    padding: 100rpx 60rpx;
    display: flex;
    flex-direction: column;
  }
  
  .row-input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 30rpx;
    height: 100rpx;
    border-bottom: 1rpx solid #818181;
  
    image {
      width: 45rpx;
      height: 45rpx;
    }
  
    input {
      font-size: 30rpx;
      padding-left: 30rpx;
      width: 100%;
    }
  }
  
  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rpx;
    margin-top: 80rpx;
    height: 80rpx;
    font-size: 30rpx;
    background-color: #fd661f;
    color: #FFFFFF;
    cursor: pointer;
  }
  
  .function-link {
    margin: 0 20rpx;
    height: 70rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26rpx;
    color: #fd661f;
    cursor: pointer;
  }
  </style>
  
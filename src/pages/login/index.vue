<template>
	<view class="content">
		<view class="row-input">
			<image mode="aspectFit"></image>
			<input placeholder="账号或邮箱" maxlength="18" v-model="loginUser.username"/>
		</view>
		<view class="row-input">
			<image mode="aspectFit"></image>
			<input placeholder="请输入您的密码" maxlength="18" type="password" v-model="loginUser.password"/>
		</view>
		<view class="login-btn" @click="login()">
			确认登录
		</view>
		<view class="function-link">
			<text @click="register">新用户注册</text>
			<text @click="forget">忘记密码</text>
		</view>
	</view>
</template>


<script setup lang="ts">
import { ref, reactive } from 'vue';
import type {LoginUser} from '@/pages/login/type';
import {loginTo} from '@/pages/login/api';
 
const loginUser: LoginUser = reactive<LoginUser>({
  username: '',
  password: ''
});

const login = async() => {
  const res = await loginTo(loginUser);
  
};

const register = () => {
};

const forget = () => {
};
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

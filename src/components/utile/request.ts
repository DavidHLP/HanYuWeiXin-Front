import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';

// 创建一个 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 替换为你的API基础URL
  timeout: 10000, // 请求超时设置为10秒
  headers: {
    'Content-Type': 'application/json',
    // 在这里添加任何其他的默认请求头
  }
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如，添加认证令牌
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做些什么
    return response;
  },
  (error) => {
    // 对响应错误做些什么
    if (error.response && error.response.status === 401) {
      // 处理未授权错误
      console.log('未授权，请登录');
    }
    return Promise.reject(error);
  }
);

export default service;
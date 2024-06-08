const baseURL = 'http://localhost:8088/';
const SC_UNAUTHORIZED = 401;

const request = (options: any) => {
  return new Promise((resolve, reject) => {
    // 获取认证令牌
    const token = uni.getStorageSync('token');

    // 未登录且请求URL不是以 'api/login' 开头
    if (!token && !options.url.startsWith('api/login')) {
      console.log('未登录，请登录');
      uni.switchTab({
        url: '/pages/login/index'
      });
      return reject(new Error('Unauthorized'));
    }

    // 配置请求头
    const headers: any = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token && !options.url.startsWith('api/login')) {
      headers['Authorization'] = `Bearer ${token}`;
    }else{
      uni.removeStorageSync('token');
    }

    const requestUrl = baseURL + options.url;

    // 处理登录请求的逻辑
    const handleLoginRequest = (response: any) => {
      if (response.statusCode === 200) {
        // 将响应头中的内容保存到本地存储
        const newToken = response.header['Authorization'] || response.header['authorization'];
        if (newToken) {
          uni.setStorageSync('token', newToken);
        }
        uni.switchTab({
          url: '/pages/home/index'
        });
        resolve(response.data);
      } else {
        console.error('响应错误', response);
        reject(new Error(response.errMsg || 'Request failed'));
      }
    };

    // 处理非登录请求的逻辑
    const handleNonLoginRequest = (response: any) => {
      if (response.statusCode === 200) {
        // 将响应头中的内容保存到本地存储
        const newToken = response.header['Authorization'] || response.header['authorization'];
        if (newToken) {
          uni.setStorageSync('token', newToken);
        }
        resolve(response.data);
      } else if (response.statusCode === SC_UNAUTHORIZED) {
        console.log('未授权，请登录');
        uni.switchTab({
          url: '/pages/login/index'
        });
        reject(new Error('Unauthorized'));
      } else {
        console.error('响应错误', response);
        reject(new Error(response.errMsg || 'Request failed'));
      }
    };

    // 发起请求
    uni.request({
      url: requestUrl,
      method: options.method || 'GET',
      data: options.data || {},
      header: headers,
      timeout: options.timeout || 10000,
      success: (response) => {
        if (options.url.startsWith('api/login')) {
          handleLoginRequest(response);
        } else {
          handleNonLoginRequest(response);
        }
      },
      fail: (error) => {
        console.error('请求失败', error);
        reject(error);
      }
    });
  });
};

export default request;

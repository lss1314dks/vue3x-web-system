//进行axios二次封装 使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
//第一步利用axios对象的create方法，去创建axios实例
const request = axios.create({
    //基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API,
    //请求超时时间
    timeout: 5000
})

//请求拦截器
request.interceptors.request.use((config) => {
    //config:配置对象，对象里面有一个属性很重要，headers请求头，给服务器端携带参数
    //请求头携带公共参数token
    //返回配置对象
    return config;
})


//响应拦截器
request.interceptors.response.use((response) => {
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    //简化数据
    return response.data;
}, (error) => {
    //响应失败的回调函数：处理http网络错误
    //定义一个变量：存储网络错误信息
    let message = '';
    const status = error.response.status;
    switch (status) {
        case 401: message = 'TOKEN过期'; break;
        case 403: message = '无权访问'; break;
        case 404: message = '请求地址错误'; break;
        case 500: message = '服务器出现问题'; break;
        default: message = '网络出现问题'; break;
    }
    //提示信息
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error);
})

//对外暴露
export default request;
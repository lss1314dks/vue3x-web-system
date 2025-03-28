//创建用户相关的小仓库
import { defineStore } from 'pinia'

// 引入接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginForm } from '@/api/user/type'

// 创建用户小创库
const useUserStore = defineStore('User', {
    // 小仓库存储数据的地方
    state: () => {
        return {
            token: localStorage.getItem("TOKEN") //用户唯一标识token
        }
    },
    // 计算属性，用于封装处理数据的函数
    getters: {

    },
    // 异步|逻辑的地方
    actions: {
        //用户登录方法
        async userLogin(data: loginForm) {
            const result = await reqLogin(data);
            //登录请求：200-》token
            //登录请求：201-》用户名或密码错误
            if (result.data.code == 200) {
                //pinaia仓库存储token
                this.token = result.data.token;
                //本地存储持久化存储一份
                localStorage.setItem('TOKEN', result.data.token);
                return 'ok';
            } else {
                return Promise.reject(new Error(result.data.message))
            }
        }
    }
})
//暴露
export default useUserStore;
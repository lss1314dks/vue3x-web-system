//统一管理咱们项目用户相关接口
import request from "@/utils/requests";
import type { loginForm, loginResponseData, userResponseData } from "./type";
//登录接口
enum API {
    //登录接口
    LOGIN_URL = '/user/login',
    //获取用户信息接口
    USERINFO_URL = '/user/info'
}


// 对外暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data);

// 获取用户信息接口方法
export const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL);


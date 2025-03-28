//登录接口需要携带参数ts类型
export interface loginForm {
    username: string,
    password: string
}


//服务器返回用户登录响应体数据类型
interface dataType {
    token: string
}

//登录接口返回的类型
export interface loginResponseData {
    code: number,
    data: dataType,
    message: string,
}


//获取用户信息接口相关的 数据类型

interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}

interface user {
    userList: userInfo,
}

export interface userResponseData {
    code: number,
    data: user
}

//封装本地存储存储数据与数据读取数据方法
export const SET_TOKEN = (token: string) => {
    return localStorage.setItem('TOKEN', token)
}

//读取本地存储数据方法
export const GET_TOKEN = () => {
    return localStorage.getItem('TOKEN') || '' 
}
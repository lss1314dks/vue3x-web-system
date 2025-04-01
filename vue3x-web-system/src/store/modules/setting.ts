//关于layout组件相关配置创库
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore("SettingStore", {
    state: () => {
        return {
            fold: false, //用户控制菜单折叠还是收齐控制
            refresh: false
        }
    }
})

export default useLayOutSettingStore
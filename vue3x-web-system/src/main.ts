import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//挂载svg
import 'virtual:svg-icons-register'

//引入自定义插件对象：注册全局组件
import globalComponent from '@/components/index.ts'

//引入自定义插件对象：注册全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'

//引入模板的全局样式
import '@/style/index.scss'

//引入路由
import router from './router'

//引入pinia
import pinia from './store'


//引入路由守卫
import './permission';

import 'element-plus/theme-chalk/dark/css-vars.css'
//获取应用实例对象
const app = createApp(App)
//将应用挂载到挂载点上
app.use(ElementPlus)
//全局配置element-plus国际化，中文
app.use(ElementPlus, {
    locale: zhCn,
})


app.component('svg-icon', SvgIcon)
//安装自定义插件
app.use(globalComponent)
//注册路由
app.use(router)
//注册pinia
app.use(pinia)

app.mount('#app')

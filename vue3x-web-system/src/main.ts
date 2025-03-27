import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'


//获取应用实例对象
const app = createApp(App)
//将应用挂载到挂载点上
app.use(ElementPlus)
//全局配置element-plus国际化，中文
app.use(ElementPlus, {
    locale: zhCn,
})
//挂载svg
import 'virtual:svg-icons-register'
//引入自定义插件对象：注册全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('svg-icon', SvgIcon)
createApp(App).mount('#app')

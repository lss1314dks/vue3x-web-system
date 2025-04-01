import SvgIcon from '@/components/SvgIcon/index.vue'
import PageInation from '@/components/Pagination/index.vue'

//引入Element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



//全局对象
const allGlobalComponents = { SvgIcon, PageInation }

export default {
    //务必要做install方法
    install(app: any) {
        //注册全局组件
        Object.keys(allGlobalComponents).forEach((key: string) => {
            //注册为全局组件
            app.component(
                key,
                allGlobalComponents[key as keyof typeof allGlobalComponents] as import('vue').Component
            )
        })

        //将element-plus提供图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}
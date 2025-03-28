import SvgIcon from '@/components/SvgIcon/index.vue'
import PageInation from '@/components/Pagination/index.vue'

const allGlobalComponents = { SvgIcon, PageInation }

export default {
    //务必要做install方法
    install(app) {
        //注册全局组件
        Object.keys(allGlobalComponents).forEach((key: string) => {
            //注册为全局组件
            app.component(
                key,
                allGlobalComponents[key as keyof typeof allGlobalComponents] as import('vue').Component
            )
        })
    }
}
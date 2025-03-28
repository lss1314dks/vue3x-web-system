
//对外暴露配置路由(常量路由)
export const constantRouter = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',//命名路由
    },
    {
        //配置layout组件
        //配置首页
        //登录成功以后展示的数据路由
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'layout',
        children: [
            {
                path: '/user',//首页
                component: () => import('@/views/user/index.vue'),
                name: 'user',//命名路由
                meta: { title: '用户', icon: 'HomeFilled' }
            }
        ]
        // redirect: '/home',//重定向
    }, {
        //配置404页面
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404'
    },
    {
        //其他路由
        path: '/:pathMatch(.*)*',
        //重定向到404页面
        redirect: '/404',
        name: 'Any'
    }
]

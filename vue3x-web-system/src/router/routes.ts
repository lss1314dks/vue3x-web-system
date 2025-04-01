import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';

//对外暴露配置路由(常量路由)
export const constantRouter = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',//命名路由
        meta:
        {
            title: '登录',
            hidden: true, //是否在菜单中隐藏
            icon: 'Promotion' //菜单左侧图标，支持element-plus的icon图标
        }
    },
    {
        //配置layout组件
        //配置首页
        //登录成功以后展示的数据路由
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        meta: {
            hidden: false, //是否在菜单中隐藏
        },
        redirect: '/home',//重定向
        children: [
            {
                path: '/home',//首页
                component: () => import('@/views/home/index.vue'),
                name: 'home',//命名路由
                meta: {
                    title: '首页',
                    hidden: false, //是否在菜单中隐藏
                    icon: 'HomeFilled',

                }
            }
        ]
        // redirect: '/home',//重定向
    }, {
        //配置404页面
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true, //是否在菜单中隐藏
            icon: 'Rank'
        }
    },
    {
        //其他路由
        path: '/:pathMatch(.*)*',
        //重定向到404页面
        redirect: '/404',
        name: 'Any',
        meta: {
            title: '任意',
            hidden: true, //是否在菜单中隐藏
            icon: 'Expand'
        },
    },
    //数据大屏
    {
        path: '/screen',
        name: 'Screen',
        component: () => import('@/views/screen/index.vue'),
        meta: {
            title: '数据大屏',
            hidden: false, //是否在菜单中隐藏
            icon: 'DataAnalysis'
        }
    },
    //权限管理
    {
        path: '/acl',
        name: 'Acl',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '权限管理',
            hidden: false, //是否在菜单中隐藏
            icon: 'Lock'
        },
        redirect: '/acl/user',
        children: [
            {
                path: '/acl/user',
                component: () => import('@/views/acl/user/index.vue'),
                name: 'User',
                meta:
                {
                    title: '用户管理', hidden: false, icon: 'User'

                }
            }, {
                path: '/acl/role',
                component: () => import('@/views/acl/role/index.vue'),
                name: 'Role',
                meta: { title: '角色管理', hidden: false, icon: 'UserFilled' }
            }, {
                path: '/acl/permission',
                component: () => import('@/views/acl/permission/index.vue'),
                name: 'Permission',
                meta: { title: '菜单管理', hidden: false, icon: 'Monitor' }
            }
        ]
    },

    //以下根据需求进行增加（如商品管理模块）
    {
        path: '/product',
        component: () => import('@/layout/index.vue'),
        name: "Product",
        meta: {
            title: '商品管理',
            icon: 'Goods',
            hidden: false, //是否在菜单中隐藏
        },
        redirect: '/product/trademark',
        children: [
            {
                path: '/product/trademark',
                component: () => import('@/views/product/trademark/index.vue'),
                name: 'Trademark',
                meta: {
                    title: '品牌管理',
                    icon: 'ShoppingCartFull'
                }
            },
            {
                path: '/product/attr',
                component: () => import('@/views/product/attr/index.vue'),
                name: 'Attr',
                meta: {
                    title: '属性管理',
                    icon: 'ShoppingBag'
                }
            },
            {
                path: '/product/spu',
                component: () => import('@/views/product/spu/index.vue'),
                name: 'Spu',
                meta: {
                    title: 'SPU管理',
                    icon: 'Shop'
                }
            },
            {
                path: '/product/sku',
                component: () => import('@/views/product/sku/index.vue'),
                name: 'Sku',
                meta: {
                    title: 'SKU管理',
                    icon: 'ChromeFilled'
                }
            }
        ]
    }
]

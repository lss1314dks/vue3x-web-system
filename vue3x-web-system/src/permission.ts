//路由鉴权 鉴权项目中的路由能不能被访问全写的设置（某一个路由什么条件可以下可以访问，什么条件下不可以访问）
import router from "./router";
import nprogress from 'nprogress';
import setting from "./setting";
// 引入样式
import 'nprogress/nprogress.css'

// 获取用户相关小创库内部token数据，去判断用户是否登录成功
import useUserStore from "./store/modules/user";
import pinia from './store';

let userStore = useUserStore(pinia);
nprogress.configure({ showSpinner: false });
//全局守卫 项目当中任意路由切换都会触发的钩子


//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
    document.title = setting.title + '-' + to.meta.title
    // 访问某一个路由之前守卫
    // to:您将要访问那个路由
    // from： 你从那个路由而来
    // next 路由的放心函数
    nprogress.start();

    //获取token
    let token = userStore.token;
    // 获取用户的名字
    let username = userStore.username;
    // 用户登录判断
    if (token) {
        if (to.path == '/login') {
            next({ path: '/' })
        } else {
            // 登录成功访问其余6个路由
            //有用户信息
            if (username) {
                next();
            } else {
                try {
                    //如果没有路由信息则发送请求获得用户信息
                    await userStore.userInfo();
                    next();
                } catch (error) {
                    //token过期
                    //退出登录
                    userStore.userLogout();
                    next({ path: '/login', query: { redirect: to.path } });
                    // 用户手动修改本地存储token
                }

            }
        }
    }//用户未登录
    else {
        if (to.path == '/login') {
            next();
        } else {
            next({ path: '/login', query: { redirect: to.path } })
        }
    }
})

//全局后置守卫
router.afterEach((to: any, from: any) => {
    //进度条消失
    nprogress.done();
})


// 任意路由切换实现进度条业务 --nprogress
// 路由鉴权（路由组件访问权限的设置）
//全部路由组件


//用户未登录 可以访问login 其余指向login
// 用户登录成功 不可以访问login 其余的路由可以访问

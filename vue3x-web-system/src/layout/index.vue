<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Logo></Logo>
            <!-- 展示菜单 -->
            <el-scrollbar class="scrollbar">
                <el-menu :collapse="LayOutSettingStore.fold" :default-active="$route" background-color="#001529"
                    text-color="#fff" router>
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabber" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Tabber></Tabber>
        </div>
        <!-- 内容区域 -->
        <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Main></Main>
        </div>
    </div>
</template>
<script setup lang='ts'>
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
//引入路由组件
import Menu from './menu/index.vue'
//引入内容区域组件
import Main from './main/index.vue'
//引入tabber组件
import Tabber from './tabber/index.vue'

//获取路由对象
import { useRoute } from 'vue-router'

//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
const userStore = useUserStore();


import useLayOutSettingStore from '@/store/modules/setting'
//获取layout配置相关仓库
let LayOutSettingStore = useLayOutSettingStore();



//获取路由对象
let $route = useRoute();

</script>
<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    // background-color: red;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        color: white;
        background: $base-menu-bg-color;
        transition: all .3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabber {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabber-height;
        top: 0px;
        left: $base-menu-width;
        transition: all .3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width );
        height: calc(100vh - $base-tabber-height);
        // background-color: white;
        left: $base-menu-width;
        top: $base-tabber-height;
        padding: 20px;
        overflow: auto;
        transition: all .3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>

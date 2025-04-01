<template>
    <el-button type="" size="small" icon="Refresh" circle @click="updateRefresh" />
    <el-button type="" size="small" icon="FullScreen" circle @click="fullScreen" />
    <el-button type="" size="small" icon="Setting" circle />
    <!-- 头像 -->
    <img :src="userStore.avatar" style="width: 40px; height: 40px; margin: 0 10px; border-radius: 50%;">
    <!-- 下拉菜单 -->
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ userStore.username }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>

            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script setup lang='ts'>
//获取骨架的小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();
//获取路由对象
import { useRouter, useRoute } from 'vue-router';
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user';
import { onMounted } from 'vue';
let userStore = useUserStore();
//获取路由对象
let $router = useRouter();
//获取路由对象
let $route = useRoute();
onMounted(() => {
    userStore.userInfo()
})

//刷新按钮点击事件
const updateRefresh = () => {
    LayOutSettingStore.refresh = !LayOutSettingStore.refresh;
}

//全屏按钮点击图标回调
const fullScreen = () => {
    //Dom对象的一个属性：可以用来判断当期那是不是全屏模式【true，false】
    let full = document.fullscreenElement;
    if (!full) {
        //利用文档根结点的方法实现全屏模式
        document.documentElement.requestFullscreen();
    } else {
        // 变为不是全屏模式
        document.exitFullscreen();
    }
}

//退出登录
const logout = () => {
    // 发送请求
    // 关于token，username，avatar全部清空
    //跳转登录页
    userStore.userLogout();
    $router.push({
        path: '/login', query: {
            redirect: $route.path
        }
    });
}

</script>
<style scoped></style>

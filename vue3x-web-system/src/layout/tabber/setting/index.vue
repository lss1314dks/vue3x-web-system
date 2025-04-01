<template>
    <el-button type="" size="small" icon="Refresh" circle @click="updateRefresh" />
    <el-button type="" size="small" icon="FullScreen" circle @click="fullScreen" />


    <el-popover placement="bottom" title="主题设置" :width="200" trigger="hover">
        <el-form>
            <el-form-item label="主题颜色">
                <el-color-picker :teleported="false" @change="setColor" size="small" v-model="color" show-alpha />
            </el-form-item>
            <el-form-item label="暗黑模式">
                <el-switch @change="changeDark" v-model="dark" size="default" active-text="Open" inactive-text="Close"
                    active-icon="MoonNight" inline-prompt inactive-icon="Sunny" />
            </el-form-item>
        </el-form>
        <template #reference>
            <el-button type="" size="small" icon="Setting" circle />
        </template>
    </el-popover>



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

//手机开关数据
let dark = ref(false);

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



import { ref } from 'vue'

const color = ref('rgba(255, 69, 0, 0.68)')
// Switch开关的change事件
const changeDark = () => {
    //获取HTML根节点
    let html = document.documentElement;
    // 判断是否有类名dark
    dark.value ? html.className = 'dark' : html.className = ''
}

// 主题颜色设置
const setColor = () => {
    //通过js修改根节点样式对象
    const html = document.documentElement;
    html.style.setProperty('--el-color-primary', color.value);
}

</script>
<style scoped></style>

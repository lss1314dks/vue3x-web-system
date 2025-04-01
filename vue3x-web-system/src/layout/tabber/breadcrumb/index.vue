<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right: 10px;" @click="changIcon">
        <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.icon"
            :to="item.path">
            <el-icon style="margin: 0px 2px; ">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup lang='ts'>
//定义一个响应式数据控制图标转换
import { ref } from 'vue';
import useLayOutSettingStore from '@/store/modules/setting'
//获取layout配置相关仓库
let LayOutSettingStore = useLayOutSettingStore();
//获取到匹配的路由对象
import { useRoute } from 'vue-router';

//获取路由对象
let $route = useRoute();

//点击图标的方法
const changIcon = () => {
    //图标进行切换
    LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>
<style scoped></style>

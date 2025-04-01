<template>
    <!-- <p>{{ menuList }}</p> -->
    <template v-for="(item, index) in menuList" :key="item.path">
        <template v-if="!item.children">
            <el-menu-item v-if="!item.meta.hidden" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>
                        {{ item.meta.title }}
                    </span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有孩子只有一个 -->

        <template v-if="item.children && item.children.length == 1">

            <el-menu-item text-color="#fff" v-if="!item.children[0].meta.hidden" :index="item.children[0].path">
                <template #title>
                    <el-icon>
                        <component :is="item.children[0].meta.icon"></component>
                    </el-icon>

                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 有子路由有多个 -->
        <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>

                <span>{{ item.meta.title }}</span>
            </template>
            <!-- 递归组件 -->
            <Menu :menuList="item.children"></Menu>
        </el-sub-menu>

    </template>
</template>
<script setup lang='ts'>
import Menu from './index.vue'
//获取父组件传递的全部路由数组
defineProps(['menuList'])


</script>

<script lang="ts">
export default {
    name: 'Menu'
}
</script>

<style scoped lang="scss"></style>

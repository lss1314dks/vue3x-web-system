<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo></Logo>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabber">345</div>
        <!-- 内容区域 -->
        <div class="layout_main">123</div>
    </div>
</template>
<script setup lang='ts'>
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
</script>
<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background-color: red;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-bg-color;
    }

    .layout_tabber {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabber-height;
        background: aqua;
        top: 0px;
        left: $base-menu-width;
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width );
        height: calc(100vh - $base-tabber-height);
        background-color: yellow;
        left: $base-menu-width;
        top: $base-tabber-height;
        padding: 20px;
    }
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- <h1>svg测试</h1> -->
        <svg :style="width, height">
            <!-- xlink:href -->
            <use :xlink:href="prefix + name" :fill="color"></use>
        </svg>
    </div>
</template>
<script setup lang='ts'>
//接受组件传入的参数
defineProps({
    //图标前缀
    prefix: {
        type: String,
        default: "#icon-"
    },
    //图标名称
    name: {
        type: String,
    },
    color: {
        type: String,
        default: "#000"
    },
    width: {
        type: String
    },
    height: {
        type: String
    }
})
</script>
<style scoped></style>

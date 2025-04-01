<template>
    <!-- 路由组件出口的位置 -->
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag" />
        </transition>
    </router-view>
</template>
<script setup lang='ts'>
import useLayOutSettingStore from '@/store/modules/setting';
import { watch, ref, nextTick } from 'vue';
let LayOutSettingStore = useLayOutSettingStore();

// 控制当期那㢟是否销毁重建
let flag = ref(true);

//监听仓库数据是否发生变化
watch(() => LayOutSettingStore.refresh, () => {
    //监听到数据发生变化，销毁main组件
    flag.value = false;
    //实现刷新功能
    nextTick(() => {
        flag.value = true;
    })
})


</script>
<style scoped>
.fade-enter-form {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {

    transition: all .3s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>

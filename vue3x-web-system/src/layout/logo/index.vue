<template>
    <div class="logo" v-if="setting.logoShowHidden">
        <img :src="setting.logo" alt="">
        <p v-show="!LayOutSettingStore.fold">{{ setting.title }}</p>
    </div>
</template>
<script setup lang='ts'>
import setting from '@/setting';

import useLayOutSettingStore from '@/store/modules/setting'
//获取layout配置相关仓库
let LayOutSettingStore = useLayOutSettingStore();
</script>
<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: 20px;

    img {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: $base-logo-title-fontSize;
        margin-left: 10px;
        color: white;
        white-space: nowrap;
        // display: none;
    }
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue'
import SvgIcon from './components/SvgIcon/index.vue'
import { reqLogin } from './api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: '123456' })
})
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss"></style>

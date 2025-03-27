<script setup lang="ts">
import { onMounted } from 'vue'
import SvgIcon from './components/SvgIcon/index.vue'
onMounted(() => {
  console.log(import.meta.env)
})
</script>

<template>
  <div>
    <h1>svg测试</h1>
    <svg-icon name="phone" width="100px" height="100px"></svg-icon>
  </div>
</template>

<style scoped></style>

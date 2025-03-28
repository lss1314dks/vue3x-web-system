import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
//引入svg配置
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
//引入mock插件
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      vueDevTools(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      //调用mock插件
      viteMockServe({
        enable: command === 'serve',
      })
    ],
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url))
        '@': path.resolve(__dirname, './src')
      },
    },
    //配置scss scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/style/variable.scss" as *;`
        },
      },
    }
  }
})



//说明.vue是组件
declare module '*.vue' {
    import { Component } from 'vue';
    const component: Component;
    export default component;
}
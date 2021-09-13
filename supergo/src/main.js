import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import lazyPlugin from 'vue3-lazy'

//import moment from 'moment'
//将moment挂载到vue上
//createApp(App).config.globalProperties.$moment = moment

//解决移动端的300ms延迟
FastClick.attach(document.body)
    // createApp(App).mount('#app')

createApp(App).use(store).use(router).use(lazyPlugin, { loading: require('assets/img/common/twowen.png') }).mount('#app')
    //Vue.config.productionTip = false
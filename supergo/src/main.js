import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import moment from 'moment'

//将moment挂载到vue上

//createApp(App).config.globalProperties.$moment = moment

createApp(App).use(store).use(router).mount('#app')
    //Vue.config.productionTip = false
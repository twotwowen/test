import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Vue.prototype.$bus = new Vue() 

createApp(App).use(store).use(router).mount('#app')
    //Vue.config.productionTip = false

// new Vue({
//     render: h => h(App),
// }).$mount('#app')
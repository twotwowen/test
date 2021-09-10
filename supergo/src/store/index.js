import { createStore } from 'vuex'
//import Vue from 'vue'

//Vue.use(createStore)
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import getters from './getters'

const state = {
    cartList: []
}

export default createStore({
    state,
    mutations,
    getters,
    actions,
    modules
})
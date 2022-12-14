//该文件用于创建vuex中最为核心的store

import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

//使用Vue插件
Vue.use(Vuex)

//准备actions，用于相应组件中的动作
const actions = {
}
//准备mutations，用于操作数据(state)
const mutations = {    
}
//准备state，用于存储数据
const state = {
}
//准备getters，用于将states中的数据进行加工
const getters = {
}

//创建store
const store = new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

//暴露store
export default store
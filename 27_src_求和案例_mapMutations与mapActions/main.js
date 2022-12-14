//引入Vue
import Vue from 'vue'
//引入App
import App from './App'
//引入插件
// import plugins from './plugins'
//关闭Vue的生产提示
Vue.config.productionTip = false
//引入vue-resource
import vueResource from 'vue-resource'

import store from './store'

Vue.use(vueResource)
//应用（使用）插件
// Vue.use(plugins,1,2,3)
//创建vm
new Vue({
    el:'#app',
    render:h => h(App),
    store,      //对象的简写形式
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})
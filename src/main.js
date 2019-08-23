import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from "vue-router"
Vue.use(VueRouter)
//mintUi
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//引入vuex
// import Vuex from "vuex"
// //注册vuex
// Vue.use(Vuex)

//注册首页路由
import router from "./router"

import axios from 'axios'
Vue.prototype.$axios=axios



Vue.config.productionTip = false



// var store=new Vuex.store({
// 	state:{
// 		count:0
// 	}
// })

new Vue({
  el:"#app",
  router,//$router $route
  // store,
  axios,
  render: h => h(App),
})

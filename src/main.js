import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from "vue-router"
Vue.use(VueRouter)
//mintUi
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

Vue.config.productionTip = false
//注册首页路由
import router from "./router"
import axios from 'axios'
Vue.prototype.$axios=axios


new Vue({
  el:"#app",
  router,//$router $route
  axios,
  // store,
  render: h => h(App),
})

import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from "vue-router"
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.use(VueRouter)
//mintUi
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)







//注册首页路由
import router from "./router"


Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,//$router $route
  render: h => h(App),
})

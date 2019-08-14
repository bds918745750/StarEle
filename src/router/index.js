import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

//首页模块
// import HomePage from '../views/HomePage.vue';
import Myis from '../views/Myis.vue';


let router = new VueRouter({
    routes:[
        // {path:"/",component:HomePage},
        {path:"/",component:Myis},
    ]
})

export default router;
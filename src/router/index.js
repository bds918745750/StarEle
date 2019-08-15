import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

//首页模块
import HomePage from '../views/HomePage.vue';
//我的模块
import Myis from '../views/Myis.vue';
//指南模块
import Guide from '../views/Guide.vue';
//订单模块
import Order from '../views/Order.vue';

let router = new VueRouter({
    routes:[
        {
            path:"/",
            component:HomePage
        },
        {
            path:"/Myis",
            component:Myis
        },
        {
            path:"/Guide",
            component:Guide
        },
        {
            path:"/Order",
            component:Order
        },
    ]
})

export default router;
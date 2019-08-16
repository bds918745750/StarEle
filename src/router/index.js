import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

//首页模块
import HomePage from '../views/HomePage.vue';
//指南模块
import Guide from '../views/Guide.vue';
//订单模块
import Order from '../views/Order.vue';
//我的模块
import Myis from '../views/Myis.vue';
// 我的子页面
import Options from '../views/MyisChild/Options.vue';
import UserControl from '../views/MyisChild/UserControl.vue';
import Collect from '../views/MyisChild/Collect.vue';
import Balance from '../views/MyisChild/Balance.vue';


//指南的子页面
import delicious from '../views/GuideChild/delicious.vue';

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
		{
			path:"/UserControl",
			component:UserControl,
		},
		{
			path:"/Options",
			component:Options,
		},
		{
			path:"/Collect",
			component:Collect,
		},
		{
			path:"/Balance",
			component:Balance,
		},	
		//指南二级
		{
			path:"/delicious",
			component:delicious,
		},
		
    ]
})

export default router;
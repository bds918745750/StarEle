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



// 我的 子页面
import Options from '../views/MyisChild/Options.vue';
import UserControl from '../views/MyisChild/UserControl.vue';
import Collect from '../views/MyisChild/Collect.vue';
import Balance from '../views/MyisChild/Balance.vue';
import Invite from '../views/MyisChild/Invite.vue';
import Gather from '../views/MyisChild/Gather.vue';
import Card from '../views/MyisChild/Card.vue';
import Location from '../views/MyisChild/Location.vue';
import Evaluate from '../views/MyisChild/Evaluate.vue';
import Service from '../views/MyisChild/Service.vue';
import Set from '../views/MyisChild/Set.vue';
// 我的 登录前页面(守卫)
import BeforeLogin from '../views/Myisbefore/BeforeLogin.vue';




//首页子页面
import Fitness from '../views/HomePageChild/Fitness.vue';
import MoneyOff from '../views/HomePageChild/MoneyOff.vue';
import Live from '../views/HomePageChild/Live.vue';
import Gsou from '../views/HomePageChild/Gsou.vue';
import Week from '../views/HomePageChild/Week.vue';
import Hot from '../views/HomePageChild/Hot.vue';
import Classify from '../views/HomePageChild/Classify.vue';
import Address from '../views/HomePageChild/Address.vue';

//指南的子页面
import delicious from '../views/GuideChild/delicious.vue';



//公共页面路由
//登录页面
import Login2 from "../views/GongGong/Login2.vue"
import Login from "../views/GongGong/Login.vue"
//菜单页面
import Menu from "../views/GongGong/Menu.vue"
//搜索页面
import Search from "../views/GongGong/Search.vue"
//评价页面
import GEvaluate from "../views/GongGong/Evaluate"
//商品故事
import ShopStory from "../views/GongGong/ShopStory"
//购物车
import Shopping from "../views/GongGong/Shopping"
//详情页
import ShopsingleDetailsping from "../views/GongGong/SingleDetails.vue"

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
		// 我的子页面
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
        //首页子页面注册
        {
			path:"/Fitness",
			component:Fitness,
        },
        {
			path:"/MoneyOff",
			component:MoneyOff,
        },
		{
			path:"/Address",
			component:Address,
		},
        //H------------------
		
		//指南二级
		{
			path:"/delicious",
			component:delicious,
		},
		{
			path:"/Invite",
			component:Invite,
		},
		{
			path:"/Gather",
			component:Gather,
		},
		{
			path:"/Card",
			component:Card,
		},
		{
			path:"/Evaluate",
			component:Evaluate,
		},
		{
			path:"/Location",
			component:Location,
		},
		{
			path:"/Service",
			component:Service,
		},
		{
			path:"/Set",
			component:Set,
		},
		// M----------------------
        //首页子页面注册
        {
			path:"/Fitness",
			component:Fitness,
        },
        {
			path:"/MoneyOff",
			component:MoneyOff,
        },
        {
			path:"/Live",
			component:Live,
        },
        {
			path:"/Gsou",
			component:Gsou,
        },
        

		{
			path:"/Week",
			component:Week,
		},
		{
			path:"/Hot",
			component:Hot,
		},
        {
			path:"/Classify",
			component:Classify,
        },
        //H------------------
		//指南二级
		{
			path:"/delicious",
			component:delicious,
		},

		// 我的登录前页面
		{
			path:"/BeforeLogin",
			component:BeforeLogin,
		},
		// 公共路由
		//登录页面
		{
			path:"/Login",
			component:Login,
		},
		{
			path:"/Login2",
			component:Login2,
		},
		// --------------
		//菜单页面
		{
			path:"/Menu",
			component:Menu,
		},
		//搜索页面
		{
			path:"/Search",
			component:Search,
		},
		//评价页面
		{
			path:"/GEvaluate",
			component:GEvaluate,
		},
		//商品故事
			{
			path:"/ShopStory",
			component:ShopStory,
		},
		//购物车
		{
			path:"/Shopping",
			component:Shopping,
		},
		//商品详情
		{
			path:"/ShopsingleDetailsping",
			component:ShopsingleDetailsping,
		},

		
    ]
})

export default router
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

//首页模块
import HomePage from '../views/HomePage.vue';
import Myis from '../views/Myis.vue';
// 我的子页面
import Options from '../views/MyisChild/Options.vue';
import UserControl from '../views/MyisChild/UserControl.vue';
import Collect from '../views/MyisChild/Collect.vue';
import Balance from '../views/MyisChild/Balance.vue';



let router = new VueRouter({
    routes:[
        {path:"/",component:HomePage},
        {path:"/Myis",component:Myis},
		{path:"/UserControl",component:UserControl},
		{path:"/Options",component:Options},
		{path:"/Collect",component:Collect},
		{path:"/Balance",component:Balance},
    ]
})

export default router;
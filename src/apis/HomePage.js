import Api from "../commons/Api";

// const bascUrl = "http://localhost:3000";

//后端借口
const CRATE = "http://39.100.63.237:8000";

const HOMEURL =`${CRATE}/api/index`;

//购物车
const SHOPCART =`http://39.100.63.237:8000/api/cart/cartlist/?userId=1`;




export default {


    /**
     * 获取首页数据信息
     */

    getHomePage(cb){
        Api.get(HOMEURL,cb)
    },

    shoppingCart(cb){
        Api.get(SHOPCART,cb)
    }

}
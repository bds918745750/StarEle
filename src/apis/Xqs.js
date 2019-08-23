import Api from "../commons/Api";

const bascUrl = "http://localhost:3000";

const ORDERXQ =`${bascUrl}/api/Xqs`;


export default {

    /**
     * 获取订单数据
     */
    getOrderXq(cb){
        Api.get(ORDERXQ,cb)
    }

}
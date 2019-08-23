import Api from "../commons/Api";

const bascUrl = "http://localhost:3000";

const ORDERXQ =`${bascUrl}/api/Xqs`;


export default {

    /**
     * 获取首页数据信息
     */
    getOrderXq(cb){
        Api.get(ORDERXQ,cb)
    }

}
import Api from "../commons/Api";

const bascUrl = "http://localhost:3000";

const HOMEURL =`${bascUrl}/api/index`;


export default {


    /**
     * 获取首页数据信息
     */

    getHomePage(cb){
        Api.get(HOMEURL,cb)
    }

}
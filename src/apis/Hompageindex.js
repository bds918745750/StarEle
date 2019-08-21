import Api from "../commons/Api"
const baseUrl = "http://localhost:3000"
const CARTURL=`${baseUrl}/api/index`
export default{
	getShopInfoByShopID(cb){
		Api.get(CARTURL,cb)
	}
}
import Api from "../commons/Api";

// 模拟
const bascmUrl = "http://localhost:3000";
// 后端
const bascUrl = "http://39.100.63.237:8000";



// 后端首页的地址
const HOMEURL = `${bascUrl}/api/index`;
// 后端获取shoplist的接口
const shopList = `${bascUrl}/api/shops/shop/?shopId=`;


//获取分类页面数据接口
const classFoods = `${bascmUrl}/api/classFoods`;

export default {
	/**
	 * 获取首页数据信息
	 */

	getHomePage(cb) {
		Api.get(HOMEURL, cb)
	},
	// //首页shopList信息
	getshopList(shopId, cb) {
		Api.get(`${shopList}${shopId}`, cb)
	},

	getclassFoods(cb) {
		Api.get(classFoods, cb)
	}

}
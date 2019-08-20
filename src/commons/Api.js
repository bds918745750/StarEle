<<<<<<< HEAD
export default  {
  /**
   * 获取数据
   */
  get(url,cb){
     fetch(url).then(response=>{
       response.json().then(cb)
     })
  }
}
=======
export default{
 get(url,cb){
	 fetch(url).then(res=>{
		 res.json().then(cb)
	 })
 }	
}
>>>>>>> bf0731ca79eb0b71acea1ef0669a73b70ea57d34

<template>
		<div>
			<div class="orderDishes">
						<div class="leftNav">
							<a href="#coldDishes" v-for="(item,id) in data.shopOrder " :key="id">{{item.shopFoodMenu}}</a>
						</div>
					
					<div class="rightDish">
						<div id="coldDishes" v-for="(item,id) in data.shopOrder " :key="id">
							<div class="dishTypeTitle">{{item.shopFoodMenu}}</div>
								<!-- 路由跳转 -->
									<div class="dishTypeFoods" v-for="(foods ,id) in item.shopFoodList" :key="id" @click="foodsDetails(data.shopOrder,foods.foodId)">
										<div class="dishTypeFoodsImg">
											<img :src=foods.foodImg.url>
										</div>
										<div class="dishTypeFoodsDetails">
											<div class="foodsName">
												{{foods.foodName}}
											</div>
											<div class="foodsIntrduces">
												<p>月售{{foods.foodSale}}份，好评率97%</p>
												<p> 主料：<span>{{foods.foodmaterialis}}</span></p>
											</div>
											<div class="foodsPrice">
												<h5>￥<span>{{foods.foodPrice}}</span></h5>
												<img src="../../../assets/imgs/Menu/addpic.jpg">
											</div>
										</div>
									</div>

							</div>

							
						</div>
					</div>
				</div>
</template>

<script>
	export default{
		name:"MenuBox",
		data(){
			return {
				shopLists:{},
				shopIds:""
			}
		},
		props:[
			"data"
		],
		
		methods:{
			foodsDetails(foods,key){
				const shopId=this.$route.query.shopid
				foods.forEach((foods)=>{
					foods.shopFoodList.forEach((shopFoodList)=>{
						if(shopFoodList.foodId==key){
							this.shopIds = shopId
							this.shopLists = shopFoodList
						}
					})
				});
				this.$router.push({
					path:"/SingleDetails",
					query:{
						foods:this.shopLists,
						shopId:this.shopIds
					}
				})
			}
		},		
	}
</script>

<style>
</style>

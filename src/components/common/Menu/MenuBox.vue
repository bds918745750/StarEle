<template>
	<div>
		<div>
			<div class="orderDishes">
						<div class="leftNav">
							<a href="#coldDishes">开胃凉菜</a>
							<a href="#hotDishes">风味热菜</a>
							<a href="#specialDishes">特色汤包</a>
							<a href="#mustDishes">必备饮品</a>
							<a href="#necessaryDishes">新鲜尝鲜</a>
						</div>
					
					<div class="rightDish">
						<div id="coldDishes">
							<div class="dishTypeTitle">开胃凉菜</div>
								<!-- 路由跳转 -->
								<router-link to="/ShopsingleDetailsping">
									<div class="dishTypeFoods">
										<div class="dishTypeFoodsImg">
											<img src="../../../assets/imgs/Menu/foods1.jpg">
										</div>
										<div class="dishTypeFoodsDetails">
											<div class="foodsName">
												双菇蒸饺
											</div>
											<div class="foodsIntrduces">
												<p>月售7份，好评率97%</p>
												<p> 主料：<span>面粉</span></p>
											</div>
											<div class="foodsPrice">
												<h5>￥<span>10</span></h5>
												<img src="../../../assets/imgs/Menu/addpic.jpg">
											</div>
										</div>
									</div>
								</router-link>

							</div>

							<div id="hotDishes">
								<div class="dishTypeTitle">风味热菜</div>
									<div class="dishTypeFoods">
										<div class="dishTypeFoodsImg">
											<img src="../../../assets/imgs/Menu/foods1.jpg">
										</div>
										<div class="dishTypeFoodsDetails">
											<div class="foodsName">
												双菇蒸饺
											</div>
											<div class="foodsIntrduces">
												<p>月售7份，好评率97%</p>
												<p> 主料：<span>面粉</span></p>
											</div>
											<div class="foodsPrice">
												<h5>￥<span>10</span></h5>
												<img src="../../../assets/imgs/Menu/addpic.jpg">
											</div>
										</div>
								</div>
							</div>
		
		
							<div id="#specialDishes">
									<div class="dishTypeTitle">特色汤包</div>
									<div class="dishTypeFoods">
										<div class="dishTypeFoodsImg">
											<img src="../../../assets/imgs/Menu/foods1.jpg">
										</div>
										<div class="dishTypeFoodsDetails">
											<div class="foodsName">
												双菇蒸饺
											</div>
											<div class="foodsIntrduces">
												<p>月售7份，好评率97%</p>
												<p> 主料：<span>面粉</span></p>
											</div>
											<div class="foodsPrice">
												<h5>￥<span>10</span></h5>
												<img src="../../../assets/imgs/Menu/addpic.jpg">
											</div>
										</div>
									</div>
							</div>
		
							<div id="#mustDishes">
									<div class="dishTypeTitle">必备特饮</div>
									<div class="dishTypeFoods">
										<div class="dishTypeFoodsImg">
											<img src="../../../assets/imgs/Menu/foods1.jpg">
										</div>
										<div class="dishTypeFoodsDetails">
											<div class="foodsName">
												双菇蒸饺
											</div>
											<div class="foodsIntrduces">
												<p>月售7份，好评率97%</p>
												<p> 主料：<span>面粉</span></p>
											</div>
											<div class="foodsPrice">
												<h5>￥<span>10</span></h5>
												<img src="../../../assets/imgs/Menu/addpic.jpg">
											</div>
										</div>
									</div>
							</div>
						
							<div id="#necessaryDishes">
									<div class="dishTypeTitle">新鲜尝鲜</div>
									<div class="dishTypeFoods">
										<div class="dishTypeFoodsImg">
											<img src="../../../assets/imgs/Menu/foods1.jpg">
										</div>
										<div class="dishTypeFoodsDetails">
											<div class="foodsName">
												双菇蒸饺
											</div>
											<div class="foodsIntrduces">
												<p>月售7份，好评率97%</p>
												<p> 主料：<span>面粉</span></p>
											</div>
											<div class="foodsPrice">
												<h5>￥<span>10</span></h5>
												<img src="../../../assets/imgs/Menu/addpic.jpg">
											</div>
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
		name:"MenuBox"
	}
</script>

<style>
</style>

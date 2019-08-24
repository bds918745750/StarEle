<template>
			<div class="menus">	
			<!-- 点餐信息部分 -->
				<div class="menusMes">
					<div class="nochecked">
						<img src="../../../assets/imgs/Shopping/icon_radio3.png">
						<!-- <img src="img/icon_radio4.png" > -->
					</div>
					<img src="../../../assets/imgs/Shopping/foodsImg1.jpg" class="foods">
				   <div class="menusDetails">
						<h3>孜然烤牛排</h3>
						<div class="num">
							<p>+</p>
							<span>2</span>
							<p>-</p>
						</div>
					</div>
					<div class="singlePrice">
						<P>￥<span>336</span></P>
					</div>
					<div class="trash">
						<img src="../../../assets/imgs/Shopping/waste-50.png">
					</div>
				</div>
			</div>
</template>
<script>
export default {
    name:"ShoppingMenus",
}
</script>

<style scoped>
.menus{
	width: 100%;
	height:.78rem;
	display: flex;
	align-items: center;
	margin-top: .19rem;
}

.menusMes{
	display: flex;
	align-items: center;
}
.nochecked img{
	width: .15rem;
	height: .15rem;
}
.foods {
	width: .56rem;
	height: .56rem;
	margin-left: .1rem;
}
.menusDetails{
	margin-left: .1rem;
}
.menusDetails h3{
	font-size: .15rem;
}
.num{
	display: flex;
	line-height: .17rem;
	font-size: .17rem;
	margin-top: .07rem ;
}
.num p{
	width: .17rem;
	height: .17rem;
	border: 1px solid red;
	font-size: .17rem;
	text-align: center;
	color: red;
	border-radius: 50%;
}
.num span{
	font-size: .15rem;
	margin:0 .1rem
}

.singlePrice{
	font-size:.15rem;
	line-height: .78rem;
	text-indent: 1rem;
}
.singlePrice span{
	font-size: .15rem;
}
.trash img{
	width:.2rem ;
	height: .2rem;
}
</style>
    

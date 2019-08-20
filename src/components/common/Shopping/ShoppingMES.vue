<template>
			<div class="shopMes">
				<div class="nochecked">
					<img src="../../../assets/imgs/Shopping/icon_radio3.png" >
					<!-- <img src="img/icon_radio4.png" > -->
				</div>
				<div class="shopName">
					<h5>坊上人餐厅</h5>
				</div>
				<div class="rightRow">
					<h6>></h6>
				</div>
			</div>
</template>
<script>
export default {
    name:"ShoppingMES",
}
</script>

<style scoped>
.shopMes{
	width: 100%;
	height: .33rem;
	display: flex;
	align-items: center;
}
.shopName h5{
	text-indent: .15rem;
	font-size: .2rem;
}
.rightRow h6{
	font-size: .25rem;
	color:#a1a1a1 ;
	font-weight: 100;
	text-indent: .15rem;
}
.nochecked img{
	width:.15rem ;
	height: .15rem;
}

</style>
    

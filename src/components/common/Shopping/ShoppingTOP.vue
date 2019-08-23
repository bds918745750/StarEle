<template>
		<div class="shoppingheader">
<<<<<<< HEAD
			<div class="row"> < </div>
=======
			<div class="row" @click="shoppinGoback"> < </div>
>>>>>>> 21abbade844fb51e1d16f241d58e732c85b70d30
			<h3 class="shopName">购物车</h3>
			<div class="blank">清空</div>
		</div>
</template>
<script>
export default {
    name:"ShoppingTOP",
	methods:{
		shoppinGoback(){
			history.back()
		}
	}
}
</script>

<style scoped>
.shoppingheader{
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: .37rem;
	padding: .15rem  0;
}
.row{
	font-size: .3rem;
}
.shopName{
	font-size: .18rem;
	color: #4d4d4d;	
	letter-spacing:5px;
}
.blank{
	font-size: .15rem;
	color: #4d4d4d;
}
.trash img{
	width:.15rem;
	height: .15rem;
	margin-left: .15rem;
}
</style>
    

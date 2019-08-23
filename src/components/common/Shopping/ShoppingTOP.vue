<template>
		<div class="shoppingheader">
			<div class="row">
				<router-link to="/">
					<img src="../../../../src/assets/imgs/MyisChild/SH/1-2.png" alt="">				
				</router-link>
			</div>
			<h3 class="shopName">购物车</h3>
			<div class="blank" @click="handleClickEmpty">清空</div>
		</div>
</template>
<script>
export default {
	name:"ShoppingTOP",
	methods: {
		handleClickEmpty(){
			this.$emit('empty')
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
.row img{
	width: 0.27rem;
	height:0.46rem ;
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
    

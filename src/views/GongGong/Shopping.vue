<template>
<div class="shopingBox">
	<ele-Shopping-ShoppingTOP></ele-Shopping-ShoppingTOP>
	<ele-Shopping-ShoppingCar></ele-Shopping-ShoppingCar>
	<ele-Shopping-ShoppingLIST></ele-Shopping-ShoppingLIST>
</div>
	
</template>

<script>
	import ShoppingTOP from "../../components/common/Shopping/ShoppingTOP"
	import ShoppingCar from "../../components/common/Shopping/ShoppingCar"
	import ShoppingLIST from "../../components/common/Shopping/ShoppingLIST"
	export default{
		name:"Shopping",
		components:{
			"ele-Shopping-ShoppingTOP":ShoppingTOP,
			"ele-Shopping-ShoppingCar":ShoppingCar,
			"ele-Shopping-ShoppingLIST":ShoppingLIST,

		}
	}
</script>

<style scoped>
.shopingBox{
	padding: 0.26rem 0.15rem .6rem;
	border-bottom:1px solid gray ;
}
</style>

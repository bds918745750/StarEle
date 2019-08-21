<template>
<div>
	<div class="menuheader">
		<div class="iconBox">
			<router-link to="/"><img src="../../../assets/imgs/Menu/left-50.png"></router-link>
			<input type="text" placeholder="搜索店内商品" class="shopSearchInput">
			<img src="../../../assets/imgs/Menu/hearts-50.png" class="heart">
		</div>
		<div class="starShop">
			<h3>星选好店</h3>
			<div class="firstServe">优先客服</div>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name:"MenuHead"
	}
</script>

<style scoped>
</style>

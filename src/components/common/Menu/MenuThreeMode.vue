<template>
		<div class="threeMode">
			<router-link to="/Menu">点菜</router-link>	
			<router-link to="/GEvaluate">评价</router-link>	
			<router-link to="/ShopStory">商家</router-link>	
		</div>
</template>

<script>
	export default{
		name:"MenuThreeMode"
	}
</script>

<style scoped>
	.threeMode{
		position: sticky;
		top:0;
		left: 0;
		background: #f9f9f9;
		width: 100%;
		height: 20px;
	}
</style>
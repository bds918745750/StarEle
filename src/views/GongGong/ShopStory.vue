<template>
<div>
	<ele-ShopStory-header></ele-ShopStory-header>
	<div class="shopStoryBox">
	<ele-ShopStory-EMenuDetails></ele-ShopStory-EMenuDetails>
	<ele-ShopStory-MenuThreeMode></ele-ShopStory-MenuThreeMode>
	<ele-ShopStory-Sbody></ele-ShopStory-Sbody>
	</div>
</div>
	
</template>

<script>
	import MenuHead from "../../components/common/Menu/MenuHead"
	import MenuThreeMode from "../../components/common/Menu/MenuThreeMode"
	import MenuDetails from "../../components/common/Menu/MenuDetails"
	import ShopStory from "../../components/common/ShopStory"
	export default{
		name:"Evaluate",
		components:{
			"ele-ShopStory-header":MenuHead,
			"ele-ShopStory-MenuThreeMode":MenuThreeMode,
			"ele-ShopStory-EMenuDetails":MenuDetails,
			"ele-ShopStory-Sbody":ShopStory,		
		}
	}
</script>

<style scoped>
		@import "../../assets/ShopStory.css";
		.shopStoryBox{
			padding: 0 0.15rem;
			display: flex;
			flex-direction: column;
			overflow-y: auto;
		}
</style>

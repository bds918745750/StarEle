<template>
	<div>
		<ele-Evaluate-header></ele-Evaluate-header>
		<div class="EvaluateBody">
			<ele-Evaluate-EMenuDetails></ele-Evaluate-EMenuDetails>
			<ele-Evaluate-MenuThreeMode></ele-Evaluate-MenuThreeMode>
			<ele-Evaluate-Ebody></ele-Evaluate-Ebody>
		</div>
	</div>
</template>

<script>
	import MenuHead from "../../components/common/Menu/MenuHead"
	import MenuThreeMode from "../../components/common/Menu/MenuThreeMode"
	import MenuDetails from "../../components/common/Menu/MenuDetails"
	import Evaluate from "../../components/common/Evaluate"
	export default{
		name:"Evaluate",
		components:{
			"ele-Evaluate-header":MenuHead,
			"ele-Evaluate-MenuThreeMode":MenuThreeMode,
			"ele-Evaluate-EMenuDetails":MenuDetails,
			"ele-Evaluate-Ebody":Evaluate,		
		}
	}
		
</script>

<style scoped>
	@import "../../assets/Evaluate.css";
	.EvaluateBody{
		padding: .26rem .15rem 0;
	}
</style>

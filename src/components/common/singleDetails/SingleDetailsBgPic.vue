<template>
	<div class="bgPic">
		<img :src="data.foodImg.url" class="bgPhoto" >
		<img src="../../../assets/imgs/SingleDetails/back-50.png" class="backtohome" @click="backback">
	</div>
</template>

<script>
	export default {
		name: "SingleDetailsBgPic",
		props:["data"],
		methods:{
			backback(){
				history.back()
			}
		}
	
	}
</script>

<style scoped="scoped">
	.bgPhoto {
		width: 100%;
		height: 3rem;
	}
	.backtohome{
		width: .3rem;
		height: .3rem;
		position: absolute;
		top:.3rem;
		left:.3rem
	}
</style>

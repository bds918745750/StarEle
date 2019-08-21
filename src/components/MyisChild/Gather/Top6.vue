<template>
	<div class="nav">
		<div class="nav-1">
			<router-link to="/Myis">
			<span><img src="../../../../src/assets/imgs/MyisChild/JZYL/1-2.png" alt=""></span>
			</router-link>
			<span class="nav-1-tit">集点有礼</span>
			<span>历史记录</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Top",
	}
</script>

<style scoped="scoped">
	.nav{
		width: 3.75rem;
		height:0.46rem ;
		line-height: 0.46rem;
	}
	.nav-1 img{
		width: 0.27rem;
		/* height: 0rem; */
		margin-top: 0.1rem;

	}
	.nav-1{
		font-size:0.16rem;
		display: flex;
		justify-content: space-between;
	    margin-right: 0.09rem;
	}
</style>

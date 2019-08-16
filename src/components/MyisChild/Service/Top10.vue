<template>
	<div class="nav">
		<div class="nav-1">
			<router-link to="/Myis">
			<span><img src="../../../assets/imgs/MyisChild/service/J1.png" alt=""></span>
			</router-link>
			<span>我的客服</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Top10"
	}
</script>

<style scoped="scoped">
	.nav{
		width: 3.75rem;
		height:0.46rem ;
		line-height: 0.46rem;
	}
	.nav-1 img{
	    width: 0.29rem;
	    /* height: 0.46rem; */
	    margin-top: 0.1rem;
	    line-height: 0.46rem;
	}
	.nav-1{
		width: 2.20rem;
		height:0.46rem;
		font-size:0.16rem;
		display: flex;
		justify-content: space-between;
	}
</style>

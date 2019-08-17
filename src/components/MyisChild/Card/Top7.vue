<template>
	<div class="nav">
		<div class="nav-1">
			<router-link to="/Myis">	
			<span><img src="../../../assets/imgs/MyisChild/HB/0.png" alt=""></span>
			</router-link>
			<span class="nav-1-tit">我的红包</span>
			<span><img src="../../../assets/imgs/MyisChild/HB/1.png" ></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Top7"
	}
</script>

<style scoped="scoped">
	.nav{
		width: 3.75rem;
		height:0.46rem ;
		line-height: 0.46rem;
		/* background: #ffffff; */
	}
	.nav-1 img{
	    height: 0.20rem;
		margin-top: 0.10rem;
	}
	.nav-1{
		font-size:0.16rem;
		display: flex;
		justify-content: space-between;
	    margin-right: 0.09rem;
	}
</style>

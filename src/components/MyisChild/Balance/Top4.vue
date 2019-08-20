<template>
	<div class="nav">
		<div class="nav-1">
			<router-link to="/Myis">
			<span><img src="../../../assets/imgs/MyisChild/SH/1-2.png" alt=""></span>
			</router-link>
			<span>外卖钱包</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Top4",
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
	height:0.46rem ;
    margin-bottom: 0.1rem;
}
.nav-1{
	width: 2.20rem;
	height:0.46rem;
	font-size:0.16rem;
	display: flex;
	justify-content: space-between;
}
</style>

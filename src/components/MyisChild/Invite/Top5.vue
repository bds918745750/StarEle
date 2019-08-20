<template>
	<div class="nav">
		<div class="nav-1">
			<router-link to="/Myis">
			<span><img src="../../../assets/imgs/MyisChild/invite/i-1.png" alt=""></span>
			</router-link>
			<span class="nav-1-tit">我要请客</span>
			<span><img src="../../../assets/imgs/MyisChild/invite/i-2.png" ></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Top5",
	}
</script>

<style scoped="scoped">
.nav{
	width: 3.75rem;
	height:0.46rem ;
	/* background: #ffffff; */
}
.nav-1 img{
    height: 0.30rem;
	margin-top: 0.10rem;
}
.nav-1{
	font-size:0.16rem;
	display: flex;
	justify-content: space-between;
	 padding: 0 0.1rem;
}	
</style>

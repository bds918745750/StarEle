<template>
	<div class="deliciousHead">
		<div class="backk">
			<RouterLink to="/Guide" href="#" class="back"></RouterLink>
		</div>
		
		<img src="../../../assets/imgs/Guide/img/3.jpg" >
		<h3>一顿拯救选择恐惧症的美食之旅爆款甜筒里藏着的居然是······</h3>
	</div>
</template>

<script>
	export default {
	  name: "deliciousHead"
	};
</script>

<style scoped="scoped">
	.deliciousHead{
		width: 100%;
		position: relative;
	}
	.deliciousHead img{
		width: 100%;
	}
	.deliciousHead h3{
		padding: .2rem .17rem;
		font-size: .22rem;
	}
	.backk{
		width: .4rem;
		height: 0.4rem;
		background: white;
		position: fixed;
		border-radius: 50%;
		opacity: .6;
	}
	.deliciousHead .back{
		display: inline-block;
		background: url(//img.alicdn.com/tps/i3/TB1Pl2iIFXXXXb2XXXX8Z5_HVXX-96-162.png_30x30.jpg) no-repeat;
		/* background-image: url(../img/header.png) no-repeat; */
		width: .5rem;
		height: .7rem;
		background-size: 11px 18px;	
		background-position: .13rem .12rem;	
		position: absolute;
	}	
</style>

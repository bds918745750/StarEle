<template>
	<div class="footer-service">
		<div class="footer-service-1">
			<img src="../../../assets/imgs/MyisChild/service/S4.png" >
			<p>在线客服</p>
		</div>
		<div  class="footer-service-2">
			<img src="../../../assets/imgs/MyisChild/service/S5.png" >
			<p>电话客服</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Footer"
	}
</script>

<style scoped="scoped">
	.footer-service{
		width: 3.75rem;
		/* height: 0.62rem; */
		font-size: 0.15rem;
		background: #FFFFFF;
		display: flex;
	    padding: 0.1rem;
		box-sizing: border-box;
	}
	.footer-service-1{
		width: 1.88rem;
		height: 0.4rem;	
		border-right:1px solid #AAAAAA;
		text-align: center;
	}
	.footer-service-1 img{
		width: 0.21rem;
		height: 0.21rem;
		margin: 0 auto;
	}
	
	.footer-service-2{
		width: 1.88rem;
		height: 0.4rem;	
		text-align: center;
	}
	.footer-service-2 img{
		width: 0.21rem;
		height: 0.21rem;
		margin: 0 auto;
	}
</style>

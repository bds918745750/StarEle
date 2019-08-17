<template>
	<div class="deliciousFooter">
		<a href="#">
			<img src="../../../assets/imgs/Guide/img/footer-1.png"> 
		</a>
		<a href="#">
			<img src="../../../assets/imgs/Guide/img/footer-2.png">
		</a>
		<a href="#" >
			<img src="../../../assets/imgs/Guide/img/footer-3.png">
			<span>50</span>
		</a>
	
	</div>
</template>

<script>
	export default {
	  name: "deliciousFooter"
	};
</script>

<style scoped="scoped">
		.deliciousFooter{
		background: #fff;
		display: flex;
	    padding: .1rem 0;
	}
	
	.deliciousFooter a{
		margin: 0 .2rem;
		position: relative;
	}
	.deliciousFooter span{
		font-size: .1rem;
		position: absolute;
		left: 0.27rem;
		top: 0;
	}
	
	.deliciousFooter a img{
		width: 0.26rem;
		height: 0.24rem;
		margin-bottom: 5px;
	}
</style>

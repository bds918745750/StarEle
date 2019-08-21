<template>
	<div class="deliciousAdressFoot">
		<img src="../../../assets/imgs/Guide/img/timg.jpg" >
		<div class="deliciousAdress">
			<div class="deliciousAdress-two">
				<span>感谢哈馆er的原创分享</span>
			</div>
			<div class="deliciousAdress-three">
				<span>ID:Christina1020</span>
			</div>
			<div class="deliciousAdress-four">
				<span>分享吃货志: 69篇</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: "deliciousAdressFoot"
	};
</script>

<style scoped="scoped">
	.deliciousAdress{
		font-size: .14rem;
		padding: 0 .15rem;
		padding-top: .2rem;
		display: flex;
		flex-direction: column;
		line-height: .3rem;
	}
	.deliciousAdressFoot{
		/* padding: 0 .15rem; */
	}
	.deliciousAdressFoot img{
		width: 100%;
		margin: .2rem 0;
	}
	.deliciousAdressFoot .deliciousAdress{
		padding: 0 .15rem .15rem;
	}
</style>

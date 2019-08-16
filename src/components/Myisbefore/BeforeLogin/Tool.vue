<template>
	<div class="tool">
		<div class="tool-1">
			<p class="card">常用工具</p>
		</div>
		<div class="module-1">
			<div class="module-line">
				<div class="module-1-1">
					<img src="../../../../public/assets/imgs/Myis/t1.png" alt="">
					<p class="collect">我的地址</p>
				</div>
				<div class="module-1-1">
					<img src="../../../../public/assets/imgs/Myis/t2.png" alt="">
					<p class="collect">我的评价</p>
				</div>
				<div class="module-1-1">
					<img src="../../../../public/assets/imgs/Myis/t3.png" alt="">
					<p class="collect">我的客服</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Tool",
	}
</script>

<style scoped="scoped">
.module-1{
	width:3.75rem;
	background: #FFFFFF;

}
.module-line{
	width:3.35rem;
	height:0.79rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;	
	margin-top: 0.18rem;
}
.module-1-1{
	width:0.66rem;
	height:0.68rem;
	text-align: center;
}
.module-1-1 img{
	width:0.3rem ;
	height: 0.26rem;
	margin: 0 auto;
}
.collect{
	font-size: 0.13rem;
}
.collect-num{
	font-size: 0.09rem;
	color: #aaaaaa;
}
.tool-1 .card{
	font-size:0.15rem ;
	font-weight: 900;
    margin-left: 0.2rem;
}
</style>

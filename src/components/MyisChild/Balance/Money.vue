<template>
	<div class="setup">
		<div class="data-1">
			<div class="data-font">
				<p>我的余额（元）</p>
				<p class="iPhone">0.00</p>
			</div>
			<div class="clear-1">
				<img src="img/SH/data-1.png" alt="">
			</div>
		</div>
		<div class="setup-1">
			<p>FUN卡</p>
			<div class="clear-1">
				<img src="img/SH/data-1.png" alt="">
			</div>
		</div>
		<div class="setup-1">
			<p>支付设置</p>
			<div class="clear-1">
				<span>免密支付</span>
				<img src="img/SH/data-1.png" alt="">
			</div>
		</div>
		<div class="setup-1">
			<p>查看退款</p>
			<div class="clear-1">
				<img src="img/SH/data-1.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Mony"
	}
</script>

<style scoped="scoped">
.setup{
	/* width: 3.75rem; */
	margin-left: 0.2rem;
}
.setup-1{
	width: 3.55rem;
	height: 0.55rem;
	border-bottom: 1px solid #e6e6e6;
	display: flex;
	justify-content: space-between;
}
.setup-1 p{
	font-size: 0.15rem;
	line-height: 0.55rem;
}
.setup-1 span{
	font-size: 0.15rem;
}
.clear-1{
	height: 0.55rem;
    display: flex;
}
.clear-1 img{
	width: 0.42rem;
	height: 0.55rem;
}
.clear-1 span{
	font-size: 0.10rem;
	line-height: 0.55rem;
	color:red ;
}
.data-img{
    width: 0.60rem;
	height: 0.55rem;
}

.data-1{
	width: 3.55rem;
	height: 0.65rem;
	border-bottom: 1px solid #e6e6e6;
	display: flex;
	justify-content: space-between;
}
.data-font{
	font-size: 0.15rem;
	margin-top: 0.1rem;
}
.iPhone{
	color: red;
	font-size: 0.30rem;
}
.clear-1-use{
	margin-right:0.4rem;
}
</style>

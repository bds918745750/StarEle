<template>
	<div class="list">
		<div class="list-price">
			<label class="list-price-1">￥</label><b class="list-price-2">3</b>
			<p class="list-price-3">满4元可用</p>
		</div>
		<div class="list-shop">
			<h5 class="list-shop-1">茉沏生活馆红包</h5>
			<p class="list-price-3">2019-08-25到期</p>
			<span class="list-shop-more">更多使用规则∧</span>
		</div>
		<div class="go">
			<a href="" class="go-use">去使用</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Cardlist"
	}
</script>


<style scoped="scoped">
.list{
	width:3.44rem ;
	height: 1.005rem;
	margin: 0 auto;
	background: #FFFFFF;
	border-radius: 0.1rem;
	margin-top: 0.2rem;
	font-size: 0.15rem;
	display: flex;
	justify-content: space-around;
}
.list-price{
	height: 0.43rem;
	text-align: center;
	margin-top: 0.2rem;
}
.list-price-1{
	font-size: 0.15rem;
	color: red;
}
.list-price-2{
	font-size: 0.29rem;
	color: red;	
}
.list-price-3{
	font-size: 0.1rem;
}
.list-shop{
	width:1.57rem ;
	height: 0.59rem;
	margin-top: 0.2rem;
}
.list-shop-1{
	font-size: 0.15rem;
}
.list-shop-more{
	font-size: 0.10rem;
	color: #D0D0D0;
}
.go{
	width:0.62rem ;
	height: 0.24rem;
	background: red;
	border-radius: 0.1rem;
	margin-top: 0.3rem;
}
.go-use{
	font-size:0.15rem;
	color: #FFFFFF;
	margin-left: 0.06rem;
}	
</style>

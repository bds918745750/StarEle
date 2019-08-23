<template>
	<div class="menu-details">
			<div class="shopMessage">
				<div class="shopMessageLeft">
					<h1 >{{data.nearbyShopName}}</h1>
					<div class="sendTime">
						<img src="../../../assets/imgs/Menu/watch-50.png" >
						<span>约{{data.nearbyShopTime}}送达</span>
					</div>
				</div>
				<div class="shopMessageRight">
					<img :src="data.nearbyShopPic">
				</div>	
			</div>
			<div class="fullradiusAndmore">
				<div class="fullReduse">
				<div class="fullRedusebox" v-for="(time,id) in data.nearbyShopMitig" :key="id">
					<span class="fullPrice">满{{time.full}}减{{time.minus}}</span>
					<!-- 减<span class="minus">15</span> -->
				</div>
			</div> 
				<div class="moreRows">	
				<img src="../../../assets/imgs/Menu/down4-50.png" >
			</div>
			</div>
		<!-- 隐藏不可见 -->
			<div class="noShow">
				<div class="shopDiscount">
					<h5>商家优惠</h5>
					<div class="new"><h6>新</h6><span>新用户立减17元</span></div>
					<div class=" new minus"><h6>减</h6><span>满30减15，满20减10元，满15减3元</span></div>
					<div class="new match"><h6>配</h6><span>配送费限时优惠</span></div>
					<div class="new discount"><h6>折</h6><span>单品折扣</span></div>
				</div>
				<div class="privilege">
					<h5>星选特权</h5>
					<div class="firstService">
						<img src="../../../assets/imgs/Menu/24.jpg">
						<span>优先客服：24小时专线</span>
					</div>
					<div class="  firstService timeout"><img src="../../../assets/imgs/Menu/timeout.jpg"><span>超时赔付：享余额赔付</span></div>
					<div class=" firstService car"><img src="../../../assets/imgs/Menu/car.jpg"><span>优质配送：敬请期待</span></div>
				</div>
				
				<div class="shopNotice">
					<h5>商家公告</h5>
					<p>饿了么星选向消费者郑重承诺：</p>
					<p>我平台已经对入网餐饮做了....</p>
				</div>
				<div class="back">
					<img src="../../../assets/imgs/Menu/backBtn.jpg" >
				</div>
			</div>		
	</div>
</template>

<script>
	export default{
		name:"MenuDetails",
		props:["data"],
		
	}
</script>

<style>
</style>

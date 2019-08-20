<template>
    <div class="red-packet">
		<router-link to="/Card">
			<div class="red-packet-line">
				<p class="card">红包卡券</p>
				<p class="card-all">查看全部券 ＞</p>
			</div>
		</router-link>
			<div class="red-packet-line">
				<div class="cash">
					<div class="cash-small">
						<div class="cash-small-1">
							<span class="price">￥5</span>
							<span class="shop-price"> 毛大碗红包</span>
						</div>
						<div class="cash-small-2">
							<span class="shop-time">满40元可用</span>
							<span class="shop-time">2019-08-19到期</span>
						</div>
					</div>
				</div>

				<div class="cash">
					<div class="cash-small">
						<div class="cash-small-1">
							<span class="price">￥5</span>
							<span class="shop-price"> 毛大碗红包</span>
						</div>
						<div class="cash-small-2">
							<span class="shop-time">满40元可用</span>
							<span class="shop-time">2019-08-19到期</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="/Card">
			<div class="more">
				<p class="card">更多好券，去领券中心看看 </p>
				<p class="card-all"> ＞</p>
			</div>
			</router-link>
		</div>
</template>
<script>
export default {
    name:"RedPacket",
}
</script>



<style scoped>

</style>
    

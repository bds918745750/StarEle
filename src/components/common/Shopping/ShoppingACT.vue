<template>
	<div class="shopAct">
			<div class="packPrice">
				<span>包装费</span>
				<P>￥<span>6</span></P>
			</div>
			<div class="packPrice rightAct">
				<span>立减优惠</span>
				<P>-￥<span>20</span></P>
			</div>
			<!-- 三条满减信息 -->
			<div class="fullReduse">
				<div class="fullRedusebox">
					满<span class="fullPrice">30</span>
					减<span class="minus">15</span>
				</div>
				<div class="fullRedusebox">
					满<span class="fullPrice">20</span>
					减<span class="minus">10</span>
				</div>
				<div class="fullRedusebox">
					满<span class="fullPrice">15</span>
					减<span class="minus">5</span>
				</div>
			</div>
		</div>
</template>
<script>
export default {
    name:"ShoppingACT",
}
</script>

<style scoped>
/* 商家活动 */
.packPrice{
	/* font-size: .22rem; */
	margin-top: .19rem;
	display: flex;
	justify-content: space-between;
}
.packPrice span{
font-size: .18rem;
}
.packPrice p{
	font-size: .18rem;
	margin-right: .5rem;
}

/* 满减活动 */
.fullReduse{
	display: flex;
	margin-top: .15rem;
}
.fullRedusebox{
	width: .6rem;
	height: .17rem;
	font-size: .1rem;
	border: 1px  solid red;
	color: red;
	text-align: center;
	line-height: .17rem;
	margin-right:.3rem;
}

</style>
    

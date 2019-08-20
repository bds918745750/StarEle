<template>
    <div class="shopTotalPrice">
        <div>总计<span>￥</span><span>440</span></div>
        <div class="accountBtn">去结算</div>
    </div>
</template>
<script>
export default {
    name:"shopTotalPrice",
}
</script>

<style scoped>
.shopTotalPrice{
	font-size: .14rem;
	line-height: .66rem;
	display: flex;
	align-items: center;
	float: right;
}
.shopTotalPrice div{
	font-size: .15rem;
}
.shopTotalPrice span{
	font-size: .15rem;
	color: red;
}
.accountBtn{
	width: .76rem;
	height: .25rem;
	border-radius: 8px;
	background: red;
	color: white;
	font-size: .14rem;
	line-height: .25rem;
	text-align: center;
	margin-left: .3rem;
}
</style>
    

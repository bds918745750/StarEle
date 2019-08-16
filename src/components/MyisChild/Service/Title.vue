<template>
<div class="problem">
	<h4 class="problem-H4">常见问题</h4>
	<div class="problem-1">
		<div class="problem-lef">
			<p>配送问题 ＞</p>
		</div>
		<div class="problem-rig">
			<div class="problem-2">
				<p class="problem-2-p1">我的订单超时了怎么办</p>
				<p class="problem-2-p2">订单完成未收到餐品怎么办</p>
			</div>
		</div>
	</div>
		<div class="problem-1">
		<div class="problem-lef">
			<p>退单问题 ＞</p>
		</div>
		<div class="problem-rig">
			<div class="problem-2">
				<p class="problem-2-p1">怎么退单</p>
				<p class="problem-2-p2">退单钱款在哪里查询</p>
			</div>
		</div>
	</div>
	<div class="problem-1">
		<div class="problem-lef">
			<p>活动问题 ＞</p>
		</div>
		<div class="problem-rig">
			<div class="problem-2">
				<p class="problem-2-p1">怎么使用新用户优惠</p>
				<p class="problem-2-p2">为什么我没有享受到满减优惠</p>
			</div>
		</div>
	</div>
	<div class="problem-1">
		<div class="problem-lef">
			<p>餐品问题 ＞</p>
		</div>
		<div class="problem-rig">
			<div class="problem-2">
				<p class="problem-2-p1">餐品有异物怎么办</p>
				<p class="problem-2-p2">商家漏送了餐品怎么办</p>
			</div>
		</div>
	</div>
	<div class="problem-1">
		<div class="problem-lef">
			<p>投诉建议 ＞</p>
		</div>
		<div class="problem-rig">
			<div class="problem-2">
				<p class="problem-2-p1">商家送错了怎么办</p>
				<p class="problem-2-p2">订单完成未收到餐品怎么办</p>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		name:"Title"
	}
</script>
<style scoped="scoped">
	.problem{
		width:3.6rem ;
		margin: 0 auto;
		/* position: relative; */
	    /* top: 0.9rem; */
		margin-top: -0.25rem;
		background: #FFFFFF;
	}
	.problem-H4{
		font-size: 0.14rem;
	    margin: 0.1rem 0.15rem;
	}
	.problem-1{
		width:3.59rem ;
		height: 0.91rem;	
		border-bottom: 1px solid #e6e4e4;
		display: flex;
	}
	.problem-lef{
		width:0.89rem ;
		height: 0.91rem;	
	}
	.problem-lef p{
	    width: 0.79rem;
	    height: 0.61rem;
	    font-size: 0.14rem;
	    line-height: 0.61rem;
	    margin: 0.1rem 0.1rem;
		border-right: 1px solid #e6e4e4;
	}
	.problem-rig{
		width:2.68rem ;
		height: 0.91rem;	
	}
	.problem-2{
		width:2.47rem ;
		height: 0.91rem;
		margin: 0 auto;
	}
	.problem-2-p1{
		width:2.47rem ;
		height: 0.45rem;
		font-size: 0.14rem;
		line-height: 0.45rem;
		border-bottom: 1px solid #e6e4e4;
		color: #737373;
	}
	.problem-2-p2{
		width:2.47rem ;
		height: 0.45rem;
		line-height: 0.45rem;
		font-size: 0.14rem;
		color: #737373;
	
	}
</style>

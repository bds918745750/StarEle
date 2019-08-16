<template>
	<div class="deliciousNav">
		<a href="#">
			<img src="../../../assets/imgs/Guide/img/5.jpg" class="showPicture">
			<div class="deliciousNav-title">
				<div class="deliciousNav-content">
					<span>哈官网</span><span class="deliciousNav-dr">达人</span>
					<p>发现分享哈尔滨新生活方式</p>
				</div>
				<a href="#" class="deliciousNav-gz">+ 关注</a>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
	  name: "deliciousNav"
	};
</script>

<style scoped="scoped">
	.deliciousNav{
		font-size: .13rem;
		float: left;
		padding: .21rem .15rem .35rem .15rem;
	
	}
	.deliciousNav a{
		/* padding: .0 .15rem; */
		font-size: .13rem;
		float: left;
		display: flex;
	}
	.showPicture{
		margin-right: .14rem;
	}
	.deliciousNav-content span{
		 font-size: .13rem;
	}
	.deliciousNav-content p{
		font-size: .11rem;
		line-height: .3rem;
		color: #999;
	}
	.deliciousNav-dr{
		color: #F8F8F8;
		background: red;
		padding: 0rem .1rem;
		border-radius: 10px;
		margin-left: .05rem;
	}
	.deliciousNav-title{
		display: flex;
		justify-content: space-between;
		float: left;
	}
	.deliciousNav-gz{
		padding: .06rem;
		margin-left: .6rem;
		height: .3rem;
		line-height: .3rem;
		color: red;
		border: 1px solid red;
	}
</style>

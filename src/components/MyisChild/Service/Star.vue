<template>
	<div class="star">
		<div class="start-box">
			<img src="../../../assets/imgs/MyisChild/service/S3.png" alt="">
			<div class="star-rim">
				<div class="star-1"></div>
				<span class="star-titlt">
					您好！客服小星很高兴为您服务
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Star"
	}
</script>

<style scoped="scoped">
	.star{
		width:3.75rem ;
		height: 1.79rem;
		background: #e0444c;
		/* position: absolute; */
	}
	.start-box{
		width:3.42rem ;
		height: 0.51rem;
		display: flex;
		justify-content: space-around;
		 margin: 0.39rem auto;
	}
	.star img{
		width:0.49rem ;
		height: 0.48rem;	
	}
	.star-rim{
		width:2.84rem ;
		height: 0.35rem;
		display: flex;
	    text-align: center;
	    line-height: 0.35rem;
	}
	.star-1{
		width:0 ;
		height:0 ;
		border:9px solid transparent;
		border-right-color: #c94850;
		margin-top: 0.1rem;
	}
	.star-titlt{
		width:2.75rem ;
		height: 0.44rem;	
		font-size: 0.15rem;
		color: #ffffff;
		background: #c94850;
		border-radius: 0.1rem;
	}
</style>

<template>
<div class="setup">
	<div class="setup-1">
		<p>账号管理</p>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
	</div>
	<div class="setup-1">
		<p>推送消息</p>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
	</div>
	<div class="setup-1">
		<p>清理缓存</p>
		<div class="clear">
		<span>0MB</span>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
		</div>
	</div>
	<div class="setup-1">
		<p>自动下载最新安装包</p>
		<div class="clear-1">
		<span>仅wifi网络</span>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
		</div>
	</div>
	<div class="setup-1">
		<p>意见反馈</p>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
	</div>
	<div class="setup-1">
		<p>隐私</p>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
	</div>
	<div class="setup-1">
		<p>检查更新</p>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
	</div>
	<div class="setup-1">
		<p>关于我们</p>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
	</div>
	<div class="setup-1">
		<p>退出当前账号</p>
		<img src="../../../assets/imgs/MyisChild/SH/setup.png" alt="">
	</div>
</div>	
</template>

<script>
	export default {
	name:"Administer",
	};
</script>

<style scoped="scoped">
.setup{
	padding-left: 0.2rem;
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
.setup-1 img{
	width: 0.42rem;
	height: 0.55rem;
}
.setup-1 span{
	font-size: 0.15rem;
}
.clear{
	height: 0.55rem;
    display: flex;
}
.clear-1{
	height: 0.55rem;
    display: flex;
}
.clear span{
	font-size: 0.10rem;
	line-height: 0.55rem;
	color:#e6e6e6 ;
}
.clear-1 span{
	font-size: 0.10rem;
	line-height: 0.55rem;
	color:#e6e6e6 ;
}
</style>
